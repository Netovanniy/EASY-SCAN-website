/* EASY SCAN — interactive site viewer (three.js).
   One viewer = one <div data-viewer> with the markup used in portfolio/*.html.
   Config comes from data-attributes (lat, lng, tz, north, drone, lidar);
   UI strings come from the translated [data-i18n] block in the page. */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const rad = Math.PI / 180;
const dayMs = 864e5, J1970 = 2440588, J2000 = 2451545, OBLIQ = rad * 23.4397;
const smooth = (a, b, x) => { const k = Math.min(1, Math.max(0, (x - a) / (b - a))); return k * k * (3 - 2 * k); };
const coarse = window.matchMedia("(pointer: coarse)");

export async function createViewer(root) {
  const $ = n => root.querySelector('[data-el="' + n + '"]');
  const ds = root.dataset;
  const SITE = {
    lat: +ds.lat, lng: +ds.lng, tz: +ds.tz, north: +(ds.north || 0),
    files: { drone: ds.drone, lidar: ds.lidar }
  };
  const nParam = new URLSearchParams(location.search).get("n");
  if (nParam !== null && nParam !== "" && !isNaN(+nParam)) SITE.north = +nParam;

  /* ---------- strings / tokens ---------- */
  const t = (k, vars) => {
    const el = root.querySelector('[data-i18n] [data-k="' + k + '"]');
    let s = el ? el.textContent.trim() : k;
    for (const key in vars || {}) s = s.split("{" + key + "}").join(vars[key]);
    return s;
  };
  const lang = document.documentElement.lang || "en";
  const MONTHS = Array.from({ length: 12 }, (_, i) =>
    new Intl.DateTimeFormat(lang, { month: "short", timeZone: "UTC" }).format(new Date(Date.UTC(2000, i, 1))).replace(/\.$/, ""));
  const cs = getComputedStyle(root);
  const css = (n, d) => cs.getPropertyValue(n).trim() || d;
  const tok = (n, d) => new THREE.Color(css(n, d));
  const ELEV = ["#0B3A4A", "#125F6B", "#1B8069", "#3E9A5C", "#7FAF52", "#C3A853", "#D98A4A", "#E6D6C6"].map((d, i) => tok("--elev-" + i, d));
  const SLOPE = ["#3DE3A6", "#A9DE6A", "#FFD166", "#FF9A4D", "#FF4D3D"].map((d, i) => tok("--slope-" + i, d));
  const C_MEASURE = tok("--data-measure", "#3DE3A6");
  const C_BOUNDARY = tok("--boundary-approximate", "#FFFFFF");
  const C_CONTOUR_PHOTO = tok("--data-measure", "#3DE3A6");

  /* ---------- sun & moon (SunCalc algorithm) ---------- */
  const toDays = d => d.valueOf() / dayMs - 0.5 + J1970 - J2000;
  const decl = (l, b) => Math.asin(Math.sin(b) * Math.cos(OBLIQ) + Math.cos(b) * Math.sin(OBLIQ) * Math.sin(l));
  const rasc = (l, b) => Math.atan2(Math.sin(l) * Math.cos(OBLIQ) - Math.tan(b) * Math.sin(OBLIQ), Math.cos(l));
  function altAz(d, dec, ra) {
    const lw = rad * -SITE.lng, phi = rad * SITE.lat, H = rad * (280.16 + 360.9856235 * d) - lw - ra;
    return {
      alt: Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H)),
      az: Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi)) + Math.PI
    };
  }
  function sunPos(date) {
    const d = toDays(date), M = rad * (357.5291 + 0.98560028 * d);
    const C = rad * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M)), L = M + C + rad * 102.9372 + Math.PI;
    return altAz(d, decl(L, 0), rasc(L, 0));
  }
  function moonPos(date) {
    const d = toDays(date), L = rad * (218.316 + 13.176396 * d), M = rad * (134.963 + 13.064993 * d), F = rad * (93.272 + 13.229350 * d);
    const l = L + rad * 6.289 * Math.sin(M), b = rad * 5.128 * Math.sin(F);
    return altAz(d, decl(l, b), rasc(l, b));
  }
  const dirFromAzAlt = (az, alt) => new THREE.Vector3(Math.sin(az) * Math.cos(alt), Math.sin(alt), -Math.cos(az) * Math.cos(alt)); // -Z = north

  /* ---------- renderer / cameras ---------- */
  const canvas = $("canvas");
  let W = root.clientWidth || 800, H = root.clientHeight || 600;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const persp = new THREE.PerspectiveCamera(40, W / H, 0.1, 5000);
  const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, -2000, 4000);
  let camera = persp, orthoHalfH = 50;
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

  // wheel zoom only after the visitor clicks into the model (or when maximised),
  // so scrolling the page over the embed still works
  let engaged = false;
  canvas.addEventListener("pointerdown", () => { engaged = true; });
  root.addEventListener("pointerleave", () => { engaged = false; });
  canvas.addEventListener("wheel", () => {
    controls.enableZoom = engaged || coarse.matches || root.classList.contains("is-max");
  }, { capture: true, passive: true });

  const skyU = { top: { value: new THREE.Color() }, hor: { value: new THREE.Color() }, glow: { value: new THREE.Color() }, sunDir: { value: new THREE.Vector3(0, 1, 0) } };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), new THREE.ShaderMaterial({
    uniforms: skyU, side: THREE.BackSide, depthWrite: false,
    vertexShader: "varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position = p.xyww; }",
    fragmentShader: "uniform vec3 top, hor, glow, sunDir; varying vec3 vD;" +
      "void main(){ float h = clamp(vD.y*1.4+0.15, 0., 1.); vec3 c = mix(hor, top, pow(h, .7));" +
      "float g = pow(max(dot(normalize(vD), normalize(sunDir)), 0.), 6.) * (1.-h*.6); c += glow*g; gl_FragColor = vec4(c, 1.); }"
  }));
  sky.frustumCulled = false; sky.renderOrder = -1; scene.add(sky);

  const hemi = new THREE.HemisphereLight(0xcfe3ff, 0x5a5040, 0.6); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 3); sun.castShadow = true; scene.add(sun, sun.target);
  const moon = new THREE.DirectionalLight(0x9bb4ff, 0); scene.add(moon, moon.target);
  sun.shadow.mapSize.set(coarse.matches ? 2048 : 4096, coarse.matches ? 2048 : 4096);

  const world = new THREE.Group(); scene.add(world); // rotated so geographic north is -Z
  let center = new THREE.Vector3(), radius = 50, groundY = 0, plotBox = null;

  /* ---------- analysis shader (elevation / slope / contours) ---------- */
  const U = {
    uMode: { value: 0 }, uContours: { value: 0 }, uMinY: { value: 0 }, uMaxY: { value: 1 }, uStep: { value: 1 },
    uElev: { value: ELEV }, uSlope: { value: SLOPE }, uLineCol: { value: C_CONTOUR_PHOTO }
  };
  function patchMaterial(m) {
    m.onBeforeCompile = sh => {
      Object.assign(sh.uniforms, U);
      sh.vertexShader = "varying vec3 vWP; varying vec3 vWN;\n" + sh.vertexShader.replace("#include <begin_vertex>",
        "#include <begin_vertex>\n vWP = (modelMatrix*vec4(transformed,1.)).xyz; vWN = normalize(mat3(modelMatrix)*objectNormal);");
      sh.fragmentShader = "varying vec3 vWP; varying vec3 vWN;\n" +
        "uniform int uMode; uniform float uContours, uMinY, uMaxY, uStep; uniform vec3 uElev[8]; uniform vec3 uSlope[5]; uniform vec3 uLineCol;\n" +
        "vec3 elevRamp(float k){ k = clamp(k,0.,1.)*7.; int i = int(floor(k)); if (i >= 7) return uElev[7]; return mix(uElev[i], uElev[i+1], fract(k)); }\n" +
        sh.fragmentShader.replace("#include <map_fragment>", "#include <map_fragment>\n" +
        "{\n" +
        "  float lum = dot(diffuseColor.rgb, vec3(.299,.587,.114));\n" +
        "  if (uMode == 1) diffuseColor.rgb = elevRamp((vWP.y - uMinY) / max(uMaxY - uMinY, 1e-5)) * (0.55 + 1.1*lum);\n" +
        "  else if (uMode == 2){\n" +
        "    float s = degrees(acos(clamp(normalize(vWN).y, -1., 1.)));\n" +
        "    vec3 c = s < 5. ? uSlope[0] : s < 15. ? uSlope[1] : s < 25. ? uSlope[2] : s < 35. ? uSlope[3] : uSlope[4];\n" +
        "    diffuseColor.rgb = c * (0.55 + 1.1*lum);\n" +
        "  }\n" +
        "  if (uContours > .5){\n" +
        "    float k = (vWP.y - uMinY) / uStep, w = fwidth(k);\n" +
        "    float f = abs(fract(k - .5) - .5) / max(w, 1e-4);\n" +
        "    float major = 1. - step(.5, abs(mod(floor(k + .5), 5.)));\n" +
        "    float line = 1. - smoothstep(0., 1. + major*.5, f);\n" +
        "    bool photo = uMode == 0;\n" +
        "    vec3 lc = photo ? uLineCol : vec3(1.);\n" +
        "    float a = photo ? mix(.38, .85, major) : mix(.26, .62, major);\n" +
        "    diffuseColor.rgb = mix(diffuseColor.rgb, lc, line*a);\n" +
        "  }\n" +
        "}");
    };
    m.needsUpdate = true;
  }

  /* ---------- loading ---------- */
  const gltf = new GLTFLoader();
  const bar = $("bar");
  const loadGLTF = (url, onProg) => new Promise((ok, fail) => gltf.load(url, ok,
    e => onProg && onProg(e.lengthComputable ? e.loaded / e.total : null), fail));
  function prepSurface(obj) {
    obj.traverse(o => {
      if (!o.isMesh) return;
      o.castShadow = o.receiveShadow = true;
      const m = o.material; m.envMapIntensity = 0; m.metalness = 0; m.roughness = 1; patchMaterial(m);
    });
  }
  const surfaces = { drone: null, lidar: null };
  let active = "drone", boundary = null, lidarLoading = null;

  const g = await loadGLTF(SITE.files.drone, p => { bar.style.width = (p === null ? 50 : p * 100) + "%"; });
  world.add(g.scene);
  surfaces.drone = g.scene.getObjectByName("DRONE");
  boundary = g.scene.getObjectByName("BOUNDARY");
  prepSurface(surfaces.drone);
  const bm = [];
  boundary.traverse(o => { if (o.isMesh) bm.push(o); });
  for (const o of bm) {
    o.material = new THREE.MeshBasicMaterial({ color: C_BOUNDARY, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    o.renderOrder = 5; o.castShadow = false; o.receiveShadow = false;
    // ghost pass keeps the line readable where it dips under terrain or foliage
    const ghost = new THREE.Mesh(o.geometry, new THREE.MeshBasicMaterial({ color: C_BOUNDARY, transparent: true, opacity: 0.3, depthTest: false, depthWrite: false }));
    ghost.renderOrder = 6; o.add(ghost);
  }
  world.rotation.y = -SITE.north * rad;

  function loadLidar() {
    if (lidarLoading) return lidarLoading;
    const st = $("lidarState");
    lidarLoading = loadGLTF(SITE.files.lidar, p => { st.textContent = p === null ? "…" : Math.round(p * 100) + "%"; }).then(gl => {
      const b = gl.scene.getObjectByName("BOUNDARY"); if (b) b.removeFromParent();
      world.add(gl.scene); surfaces.lidar = gl.scene.getObjectByName("LIDAR") || gl.scene; prepSurface(surfaces.lidar);
      st.textContent = "";
    }).catch(e => { st.textContent = "!"; lidarLoading = null; console.error(e); });
    return lidarLoading;
  }
  async function setSurface(k) {
    root.querySelectorAll("[data-surface]").forEach(b => b.classList.toggle("is-on", b.dataset.surface === k));
    if (k === "lidar" && !surfaces.lidar) await loadLidar();
    if (!surfaces[k]) return;
    active = k;
    for (const n in surfaces) if (surfaces[n]) surfaces[n].visible = n === k;
    frame(false);
  }

  /* ---------- framing, height range ---------- */
  let contourStep = 1, modelBox = null, arcPts = [];
  function frame(reframe) {
    world.updateMatrixWorld(true);
    const surf = surfaces[active];
    const box = new THREE.Box3().setFromObject(surf);
    plotBox = new THREE.Box3().setFromObject(boundary);
    plotBox.getCenter(center);
    const size = box.getSize(new THREE.Vector3()); modelBox = box;
    radius = Math.max(size.x, size.z) * 0.6; groundY = box.min.y;

    // height percentiles inside the plot footprint
    const ys = [], v = new THREE.Vector3();
    surf.traverse(o => {
      if (!o.isMesh) return;
      const pos = o.geometry.attributes.position, mw = o.matrixWorld, step = Math.max(1, Math.floor(pos.count / 40000));
      for (let i = 0; i < pos.count; i += step) {
        v.fromBufferAttribute(pos, i).applyMatrix4(mw);
        if (v.x >= plotBox.min.x && v.x <= plotBox.max.x && v.z >= plotBox.min.z && v.z <= plotBox.max.z) ys.push(v.y);
      }
    });
    ys.sort((a, b) => a - b);
    if (ys.length > 20) { U.uMinY.value = ys[Math.floor(ys.length * 0.01)]; U.uMaxY.value = ys[Math.floor(ys.length * 0.99)]; }
    const rng = U.uMaxY.value - U.uMinY.value;
    contourStep = [0.25, 0.5, 1, 2, 5].find(s => rng / s <= 40) || 5; U.uStep.value = contourStep;

    const sc = sun.shadow.camera; sc.left = sc.bottom = -radius * 1.15; sc.right = sc.top = radius * 1.15;
    sc.near = 1; sc.far = radius * 8; sc.updateProjectionMatrix();
    sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.04;
    sun.target.position.copy(center); moon.target.position.copy(center);
    sky.scale.setScalar(radius * 60);
    buildSunPath();
    if (reframe) view3d();
    renderLegend(); update();
  }
  const VIEW_DIR = new THREE.Vector3(0, 0.62, -0.79); // looks south from the north side: north at the bottom of the frame
  function view3d() {
    controls.target.set(center.x, center.y - radius * 0.05, center.z);
    const dir = VIEW_DIR.clone().normalize(), tg = controls.target, base = tg.clone();
    const wide = root.clientWidth > 760, aspect = W / H;
    // keep the whole model and the full sun arc inside the part of the frame the panels leave free
    const xMax = wide ? 1 - 2 * 236 / W : 0.94, xMin = -0.94, yMax = 0.92, yMin = wide ? -0.84 : -0.5;
    const pts = arcPts.slice();
    if (modelBox) {
      const c = modelBox.getCenter(new THREE.Vector3()), sz = modelBox.getSize(new THREE.Vector3());
      for (const sx of [-1, 1]) for (const sy of [0, 1]) for (const sz2 of [-1, 1])
        pts.push(new THREE.Vector3(c.x + sx * sz.x * 0.46, modelBox.min.y + sy * sz.y, c.z + sz2 * sz.z * 0.46));
    }
    let dist = radius * 3, half = radius * 1.6, shift = 0, up = 0;
    const right = new THREE.Vector3(), upv = new THREE.Vector3(), v = new THREE.Vector3();
    for (let i = 0; i < 12; i++) {
      tg.copy(base);
      camera.position.copy(base).addScaledVector(dir, dist); camera.lookAt(base);
      camera.updateMatrixWorld(); right.setFromMatrixColumn(camera.matrixWorld, 0); upv.setFromMatrixColumn(camera.matrixWorld, 1);
      tg.addScaledVector(right, shift).addScaledVector(upv, up); camera.position.copy(tg).addScaledVector(dir, dist); camera.lookAt(tg);
      if (camera === ortho) { orthoHalfH = half; updateOrtho(); }
      camera.updateMatrixWorld(); camera.updateProjectionMatrix();
      let x0 = 9, x1 = -9, y0 = 9, y1 = -9;
      for (const p of pts) { v.copy(p).project(camera); x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y); }
      const grow = Math.max((x1 - x0) / (xMax - xMin), (y1 - y0) / (yMax - yMin));
      const unit = camera === persp ? dist * Math.tan(persp.fov / 2 * rad) : half; // world units per NDC y at the target
      shift += ((x0 + x1) / 2 - (xMin + xMax) / 2) * unit * aspect;
      up += ((y0 + y1) / 2 - (yMin + yMax) / 2) * unit;
      if (camera === persp) dist *= Math.pow(grow, 0.9); else half *= Math.pow(grow, 0.9);
    }
    if (camera === ortho) camera.position.copy(tg).addScaledVector(dir, radius * 3);
    controls.minDistance = radius * 0.1; controls.maxDistance = radius * 8; controls.update();
  }
  function viewTop() {
    const tg = controls.target.set(center.x, center.y, center.z);
    if (camera === persp) {
      const d = radius * 1.35 * (W < H ? 1.6 : 1) / Math.tan(persp.fov / 2 * rad);
      camera.position.set(tg.x, tg.y + d, tg.z + d * 1e-4);
    } else {
      orthoHalfH = radius * 0.85 * (W < H ? 1.6 : 1); camera.zoom = 1; updateOrtho();
      camera.position.set(tg.x, tg.y + radius * 4, tg.z + 1e-3);
    }
    controls.update();
  }

  /* ---------- projection + field of view ---------- */
  function updateOrtho() { const a = W / H; ortho.left = -orthoHalfH * a; ortho.right = orthoHalfH * a; ortho.top = orthoHalfH; ortho.bottom = -orthoHalfH; ortho.updateProjectionMatrix(); }
  function setProjection(kind) {
    if ((kind === "ortho") === (camera === ortho)) return;
    const dir = camera.position.clone().sub(controls.target);
    if (kind === "ortho") {
      orthoHalfH = dir.length() * Math.tan(persp.fov / 2 * rad); ortho.zoom = 1; updateOrtho();
      ortho.position.copy(controls.target).add(dir.clone().normalize().multiplyScalar(radius * 4));
      camera = ortho;
    } else {
      const h = orthoHalfH / ortho.zoom, d = h / Math.tan(persp.fov / 2 * rad);
      persp.position.copy(controls.target).add(dir.normalize().multiplyScalar(d));
      camera = persp;
    }
    camera.up.set(0, 1, 0); controls.object = camera; controls.update();
    root.querySelectorAll("[data-proj]").forEach(b => b.classList.toggle("is-on", b.dataset.proj === kind));
    $("fovBox").classList.toggle("is-off", kind === "ortho");
  }
  const fovEl = $("fov");
  fovEl.oninput = () => {
    // dolly-zoom: keep the framed area constant while the angle changes
    const nf = +fovEl.value, dir = persp.position.clone().sub(controls.target), h = dir.length() * Math.tan(persp.fov / 2 * rad);
    persp.fov = nf; persp.updateProjectionMatrix();
    persp.position.copy(controls.target).add(dir.normalize().multiplyScalar(h / Math.tan(nf / 2 * rad)));
    controls.maxDistance = Math.max(controls.maxDistance, persp.position.distanceTo(controls.target) * 1.5);
    $("fovVal").textContent = nf + "°";
  };
  root.querySelectorAll("[data-proj]").forEach(b => { b.onclick = () => setProjection(b.dataset.proj); });
  $("vTop").onclick = viewTop;
  $("v3d").onclick = view3d;

  /* ---------- legend ---------- */
  const state = { mode: 0, contours: false, path: true, measure: false, boundary: true };
  function renderLegend() {
    const L = $("legend"), rng = U.uMaxY.value - U.uMinY.value, m = t("unitM"); let h = "";
    if (state.boundary) h += '<div class="vlegend__line"><i class="vlegend__swatch" style="background:var(--boundary-approximate)"></i><span>' + t("legBoundary") + "</span></div>";
    const sep = () => (h ? '<div class="vlegend__sep"></div>' : "");
    if (state.mode === 1) {
      h += sep() + "<h4>" + t("legElev") + '</h4><div class="vlegend__ramp" style="background:var(--elev-ramp)"></div>' +
        '<div class="vlegend__row"><span>0 ' + m + "</span><span>+" + rng.toFixed(1) + " " + m + "</span></div>" +
        '<div class="vlegend__note">' + t("legElevNote", { x: rng.toFixed(1), u: m }) + (active === "drone" ? " " + t("legCanopy") : "") + "</div>";
    } else if (state.mode === 2) {
      h += sep() + "<h4>" + t("legSlope") + '</h4><div class="vlegend__cls">' +
        [0, 1, 2, 3, 4].map(i => '<i style="background:var(--slope-' + i + ')"></i><span>' + t("slope" + i) + "</span>").join("") + "</div>" +
        '<div class="vlegend__note">' + t("legSlopeNote") + (active === "drone" ? " " + t("legSlopeLidar") : "") + "</div>";
    }
    if (state.contours) {
      h += sep() + "<h4>" + t("legContours") + '</h4><div class="vlegend__note" style="margin-top:0">' +
        t("legContourStep", { s: contourStep, k: contourStep * 5, u: m }) + "</div>";
    }
    L.innerHTML = h; L.classList.toggle("is-show", !!h);
  }

  /* ---------- sun path ---------- */
  const pathGroup = new THREE.Group(); scene.add(pathGroup);
  const pathMat = new THREE.LineBasicMaterial({ color: 0xd2d6d8, transparent: true, opacity: 0.6, depthWrite: false });
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xeef0f1, transparent: true, opacity: 0.85 });
  const sunMarker = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), new THREE.MeshBasicMaterial({ color: 0xffe2b0 }));
  const sunHalo = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), new THREE.MeshBasicMaterial({ color: 0xffd08a, transparent: true, opacity: 0.25, depthWrite: false }));
  scene.add(sunMarker, sunHalo);
  const pathR = () => radius * 1.05;
  function buildSunPath() {
    pathGroup.clear();
    const R = pathR(), o = new THREE.Vector3(center.x, groundY, center.z), pts = []; arcPts = pts;
    for (let m = 0; m <= 1440; m += 4) { const s = sunPos(siteDate(m)); if (s.alt < -0.5 * rad) continue; pts.push(o.clone().addScaledVector(dirFromAzAlt(s.az, s.alt), R)); }
    if (pts.length > 1) pathGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), pathMat));
    const dg = new THREE.SphereGeometry(R * 0.008, 10, 6);
    for (let hr = 0; hr < 24; hr++) {
      const s = sunPos(siteDate(hr * 60)); if (s.alt < 0) continue;
      const d = new THREE.Mesh(dg, dotMat); d.position.copy(o).addScaledVector(dirFromAzAlt(s.az, s.alt), R); pathGroup.add(d);
    }
    const ring = []; for (let a = 0; a <= 360; a += 3) ring.push(new THREE.Vector3(o.x + Math.sin(a * rad) * R, o.y, o.z - Math.cos(a * rad) * R));
    pathGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(ring), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 })));
    sunMarker.scale.setScalar(R * 0.022); sunHalo.scale.setScalar(R * 0.045);
  }

  /* ---------- measurement ---------- */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const mGroup = new THREE.Group(); scene.add(mGroup);
  const mLineMat = new THREE.LineBasicMaterial({ color: C_MEASURE, depthTest: false, transparent: true });
  const mDotMat = new THREE.MeshBasicMaterial({ color: C_MEASURE, depthTest: false, transparent: true });
  let mPts = [], mSegs = [];
  const unit = t("unitM");
  function pick(ev) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    return ray.intersectObject(surfaces[active], true)[0];
  }
  function addMeasurePoint(p) {
    const d = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.006, 12, 8), mDotMat); d.position.copy(p); d.renderOrder = 10; mGroup.add(d);
    mPts.push(p.clone());
    if (mPts.length === 2) {
      const [a, b] = mPts, line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([a, b]), mLineMat); line.renderOrder = 10; mGroup.add(line);
      const len = a.distanceTo(b), dh = b.y - a.y, hz = Math.hypot(b.x - a.x, b.z - a.z);
      const el = document.createElement("div"); el.className = "vmlabel";
      el.innerHTML = len.toFixed(2) + " " + unit + " <small>HD " + hz.toFixed(2) + " · Δh " + (dh >= 0 ? "+" : "") + dh.toFixed(2) + "</small>";
      root.appendChild(el); mSegs.push({ a, b, el }); mPts = [];
    }
  }
  function clearMeasure() { mGroup.clear(); mSegs.forEach(s => s.el.remove()); mSegs = []; mPts = []; }
  let downXY = null;
  canvas.addEventListener("pointerdown", e => { downXY = [e.clientX, e.clientY]; });
  canvas.addEventListener("pointerup", e => {
    if (!downXY || !state.measure || !surfaces[active]) return;
    const moved = Math.hypot(e.clientX - downXY[0], e.clientY - downXY[1]); downXY = null;
    if (moved > 6) return;
    const h = pick(e); if (h) addMeasurePoint(h.point);
  });

  /* ---------- time / date ---------- */
  const today = new Date(Date.now() + SITE.tz * 3600e3);
  const T = { minutes: 9 * 60 + 30, month: today.getUTCMonth(), day: 15, year: today.getUTCFullYear(), playing: false };
  const siteDate = min => new Date(Date.UTC(T.year, T.month, T.day, 0, 0) + (min - SITE.tz * 60) * 60e3);
  const fmt = m => { m = ((Math.round(m) % 1440) + 1440) % 1440; return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"); };
  const timeEl = $("time"), monthsEl = $("months");
  MONTHS.forEach((m, i) => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = m;
    b.onclick = () => { T.month = i; T.day = 15; buildSunPath(); update(); }; monthsEl.appendChild(b);
  });
  timeEl.oninput = () => { T.minutes = +timeEl.value; update(); };
  $("now").onclick = () => {
    const n = new Date(Date.now() + SITE.tz * 3600e3);
    T.year = n.getUTCFullYear(); T.month = n.getUTCMonth(); T.day = n.getUTCDate(); T.minutes = n.getUTCHours() * 60 + n.getUTCMinutes();
    buildSunPath(); update();
  };
  const playBtn = $("play"), playIcon = $("playIcon");
  playBtn.onclick = () => {
    T.playing = !T.playing; playBtn.classList.toggle("is-on", T.playing);
    playIcon.setAttribute("d", T.playing ? "M4 2.5h3v11H4zM9 2.5h3v11H9z" : "M4 2.5v11l9-5.5z");
  };
  function riseSet() {
    let rise = null, set = null, prev = sunPos(siteDate(0)).alt; const h0 = -0.833 * rad;
    for (let m = 2; m <= 1440; m += 2) {
      const a = sunPos(siteDate(m)).alt;
      if (prev < h0 && a >= h0) rise = m - 2 + 2 * (h0 - prev) / (a - prev);
      if (prev >= h0 && a < h0) set = m - 2 + 2 * (prev - h0) / (prev - a);
      prev = a;
    }
    return { rise, set };
  }
  function paintGradient() {
    const stops = [];
    for (let m = 0; m <= 1440; m += 30) {
      const a = sunPos(siteDate(m)).alt / rad;
      stops.push((a < -10 ? "#12171f" : a < 0 ? "#2b3040" : a < 8 ? "#c25a24" : a < 25 ? "#d9a46a" : "#e6d6c6") + " " + (m / 1440 * 100).toFixed(1) + "%");
    }
    $("grad").style.background = "linear-gradient(90deg," + stops.join(",") + ")";
  }

  /* ---------- rail UI ---------- */
  root.querySelectorAll("[data-surface]").forEach(b => { b.onclick = () => setSurface(b.dataset.surface); });
  root.querySelectorAll("[data-mode]").forEach(b => {
    b.onclick = () => {
      state.mode = +b.dataset.mode; U.uMode.value = state.mode;
      root.querySelectorAll("[data-mode]").forEach(x => x.classList.toggle("is-on", x === b)); renderLegend();
    };
  });
  const tBoundary = $("tBoundary"), tContours = $("tContours"), tPath = $("tPath"), tMeasure = $("tMeasure");
  tBoundary.onclick = () => { state.boundary = !state.boundary; tBoundary.classList.toggle("is-on", state.boundary); if (boundary) boundary.visible = state.boundary; renderLegend(); };
  tContours.onclick = () => { state.contours = !state.contours; U.uContours.value = state.contours ? 1 : 0; tContours.classList.toggle("is-on", state.contours); renderLegend(); };
  tPath.onclick = () => { state.path = !state.path; tPath.classList.toggle("is-on", state.path); update(); };
  const setMeasure = on => { state.measure = on; tMeasure.classList.toggle("is-on", on); $("mhint").classList.toggle("is-show", on); canvas.classList.toggle("is-measuring", on); };
  tMeasure.onclick = () => setMeasure(!state.measure);
  $("mDone").onclick = () => setMeasure(false);
  $("mClear").onclick = clearMeasure;
  $("railToggle").onclick = () => $("rail").classList.toggle("is-open");

  /* ---------- lighting + readouts ---------- */
  const C_DAY_TOP = new THREE.Color(0x1d3550), C_DAY_HOR = new THREE.Color(0x6f8ba3), C_DUSK_HOR = new THREE.Color(0x9a6a55), C_GLOW = new THREE.Color(0xd9925a);
  let lastKey = "";
  function update() {
    timeEl.value = T.minutes;
    [...monthsEl.children].forEach((b, i) => b.classList.toggle("is-on", i === T.month));
    const key = T.year + "-" + T.month + "-" + T.day;
    if (key !== lastKey) {
      lastKey = key; paintGradient(); const rs = riseSet();
      $("riseSet").innerHTML = "↑ <b>" + (rs.rise != null ? fmt(rs.rise) : "—") + "</b> · ↓ <b>" + (rs.set != null ? fmt(rs.set) : "—") +
        "</b> · " + T.day + " " + MONTHS[T.month];
    }
    $("clock").textContent = fmt(T.minutes);
    const date = siteDate(T.minutes), s = sunPos(date), mo = moonPos(date);
    const altDeg = s.alt / rad, azDeg = (s.az / rad + 360) % 360;
    $("sunInfo").innerHTML = altDeg > -0.8
      ? t("sun") + " · " + t("altitude") + " <b>" + altDeg.toFixed(0) + "°</b> · " + t("azimuth") + " <b>" + azDeg.toFixed(0) + "°</b>"
      : t("sun") + " <b>" + t("belowHorizon") + "</b>";
    const sd = dirFromAzAlt(s.az, s.alt); skyU.sunDir.value.copy(sd);
    const day = smooth(-6, 6, altDeg), golden = 1 - smooth(4, 22, altDeg);
    sun.position.copy(center).addScaledVector(sd, radius * 3);
    sun.intensity = 4.2 * smooth(-0.5, 6, altDeg); sun.color.setRGB(1, 1 - 0.28 * golden, 1 - 0.55 * golden); sun.castShadow = altDeg > -0.5;
    moon.position.copy(center).addScaledVector(dirFromAzAlt(mo.az, Math.max(mo.alt, 12 * rad)), radius * 3); moon.intensity = 0.9 * (1 - day);
    const amb = smooth(-14, 3, altDeg);
    hemi.intensity = 0.42 + 0.18 * amb + 0.1 * day;
    hemi.color.setRGB(0.5 + 0.31 * amb, 0.58 + 0.31 * amb, 0.95 + 0.05 * amb);
    hemi.groundColor.setRGB(0.12 + 0.23 * amb, 0.12 + 0.19 * amb, 0.16 + 0.09 * amb);
    renderer.toneMappingExposure = 0.75 + 0.05 * day;
    const tw = smooth(-8, 2, altDeg) * (1 - smooth(4, 18, altDeg));
    skyU.top.value.set(0x070b16).lerp(C_DAY_TOP, day);
    skyU.hor.value.set(0x141c2e).lerp(C_DAY_HOR, day).lerp(C_DUSK_HOR, tw * 0.6);
    skyU.glow.value.copy(C_GLOW).multiplyScalar(0.1 + tw * 0.5);
    pathGroup.visible = state.path;
    const sunUp = altDeg > -0.5 && state.path;
    sunMarker.visible = sunHalo.visible = sunUp;
    if (sunUp) { const o = new THREE.Vector3(center.x, groundY, center.z).addScaledVector(sd, pathR()); sunMarker.position.copy(o); sunHalo.position.copy(o); }
  }

  /* ---------- size, visibility, loop ---------- */
  function resize() {
    W = root.clientWidth || W; H = root.clientHeight || H;
    renderer.setSize(W, H, false); persp.aspect = W / H; persp.updateProjectionMatrix(); updateOrtho();
  }
  new ResizeObserver(resize).observe(root); resize();
  let onScreen = true;
  new IntersectionObserver(es => { onScreen = es[0].isIntersecting; }).observe(root);

  const needle = $("needle"), tmp = new THREE.Vector3(), pv = new THREE.Vector3();
  let last = performance.now();
  function renderFrame() {
    controls.update();
    tmp.set(0, 1, 0).applyQuaternion(camera.quaternion); camera.getWorldDirection(pv); tmp.add(pv);
    needle.setAttribute("transform", "rotate(" + (-Math.atan2(tmp.x, -tmp.z) / rad).toFixed(1) + " 28 28)");
    for (const s of mSegs) {
      pv.copy(s.a).add(s.b).multiplyScalar(0.5).project(camera);
      s.el.style.display = pv.z < 1 ? "" : "none";
      s.el.style.left = ((pv.x + 1) / 2 * W) + "px"; s.el.style.top = ((1 - pv.y) / 2 * H) + "px";
    }
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(now => {
    const dt = (now - last) / 1000; last = now;
    if (!onScreen) return;
    if (T.playing) { T.minutes = (T.minutes + dt * 60) % 1440; update(); }
    renderFrame();
  });

  /* ---------- go ---------- */
  frame(true);
  root.querySelector(".viewer__ui").hidden = false;
  root.classList.add("is-ready");
  const hint = $("hint");
  if (hint) hint.textContent = t(coarse.matches ? "hintTouch" : "hintFine");

  const api = { THREE, scene, renderer, controls, world, state, T, setSurface, setProjection, viewTop, view3d, update, renderFrame, get camera() { return camera; } };
  root.__viewer = api;
  return api;
}
