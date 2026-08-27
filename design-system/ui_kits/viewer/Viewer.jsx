const { Logotype, Button, LayerControl, CoordinateLabel, ElevationLegend, BoundaryLegend, TerrainLegend, ScaleBar, NorthIndicator, ProjectMetadata, MeasurementLine, StatusPill, ConfidenceTag, Tag, SpecList, Eyebrow } = window.EASYSCANDesignSystem_1b72cd;
const HERO='../../assets/hero-terrain-scan.png';

const TOOLS=[['Select','pointer'],['Distance','distance'],['Height','height'],['Area','area'],['Section','section']];

function Viewer(){
  const [layers,setLayers]=React.useState({imagery:true,contours:true,boundaries:true,proposed:false,slope:false,pointcloud:false,drainage:false});
  const [tool,setTool]=React.useState('pointer');
  const [selected,setSelected]=React.useState(true);
  const [panel,setPanel]=React.useState('layers');
  const toggle=k=>setLayers(l=>({...l,[k]:!l[k]}));

  return(<div style={{display:'grid',gridTemplateColumns:'296px 1fr 316px',gridTemplateRows:'56px 1fr 34px',height:'100vh',background:'var(--bg-page)',color:'var(--fg-primary)'}}>
    {/* top bar */}
    <div style={{gridColumn:'1 / -1',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 var(--space-5)',borderBottom:'1px solid var(--border-hairline)',background:'var(--bg-surface)'}}>
      <div style={{display:'flex',alignItems:'center',gap:'var(--space-6)'}}>
        <Logotype variant="wordmark" width={150} assetBase="../../"/>
        <span style={{width:1,height:22,background:'var(--border-hairline)'}}/>
        <span style={{fontFamily:'var(--font-structure)',fontWeight:500,fontSize:'var(--type-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase'}}>The Hill</span>
        <span style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>Koh Phangan · 8.1 ha</span>
        <StatusPill status="ready"/>
      </div>
      <div style={{display:'flex',gap:'var(--space-2)',alignItems:'center'}}>
        {TOOLS.map(([label,key])=>(
          <button key={key} type="button" onClick={()=>setTool(key)} style={{appearance:'none',cursor:'pointer',height:'var(--control-h-sm)',padding:'0 12px',borderRadius:'var(--radius-control)',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',letterSpacing:'var(--tracking-data)',border:'1px solid '+(tool===key?'var(--accent-scan-dim)':'var(--border-faint)'),background:tool===key?'var(--accent-scan-tint)':'transparent',color:tool===key?'var(--accent-scan)':'var(--fg-secondary)'}}>{label}</button>))}
        <span style={{width:1,height:22,background:'var(--border-hairline)',margin:'0 6px'}}/>
        <Button variant="secondary" size="sm">Share</Button>
      </div>
    </div>

    {/* left rail — layers, written for non-GIS users */}
    <aside style={{borderRight:'1px solid var(--border-hairline)',background:'var(--bg-surface)',overflowY:'auto',padding:'var(--space-5)'}}>
      <div style={{display:'flex',gap:0,marginBottom:'var(--space-5)',borderBottom:'1px solid var(--border-faint)'}}>
        {['layers','legend'].map(p=>(
          <button key={p} type="button" onClick={()=>setPanel(p)} style={{appearance:'none',background:'none',border:0,borderBottom:'1.5px solid '+(panel===p?'var(--accent-coral)':'transparent'),cursor:'pointer',padding:'0 0 10px',marginRight:24,fontFamily:'var(--font-structure)',fontWeight:500,fontSize:'var(--type-label-sm)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:panel===p?'var(--fg-primary)':'var(--fg-muted)'}}>{p}</button>))}
      </div>
      {panel==='layers'
        ? <LayerControl active={layers} onToggle={toggle} groups={[
            {title:'Reality',layers:[
              {key:'imagery',label:'Aerial imagery',hint:'What the site looks like today'},
              {key:'pointcloud',label:'Point cloud',hint:'Raw scan points',color:'var(--data-pointcloud)'}]},
            {title:'Measured',layers:[
              {key:'contours',label:'Contours',hint:'Height lines every 1 m',meta:'1 m',color:'var(--contour-major)'},
              {key:'boundaries',label:'Boundaries',hint:'Where the land ends',color:'var(--boundary-surveyed)'},
              {key:'drainage',label:'Drainage',hint:'Where water runs',color:'var(--data-water)'}]},
            {title:'Derived analysis',layers:[
              {key:'slope',label:'Slope',hint:'How steep the ground is',color:'var(--slope-2)'}]},
            {title:'Proposed',layers:[
              {key:'proposed',label:'Architecture',hint:'Concept — not built',color:'var(--data-proposed)'}]}]}/>
        : <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
            <ElevationLegend min={0} max={112} interval={1}/>
            <BoundaryLegend types={['cadastral','surveyed','approximate']}/>
            <TerrainLegend layers={Object.keys(layers).filter(k=>layers[k]&&k!=='imagery')}/>
          </div>}
    </aside>

    {/* viewport — terrain is the hero */}
    <main style={{position:'relative',overflow:'hidden',background:'var(--bg-inset)'}}>
      <img src={HERO} alt="Terrain model of The Hill" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',filter:layers.imagery?(layers.contours?'brightness(.62) saturate(.85)':'none'):'grayscale(1) brightness(.28)'}}/>
      {layers.contours&&<svg viewBox="0 0 800 640" preserveAspectRatio="none" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} aria-label="Contours, 1 m interval">
<polygon points="436.1,320.0 433.7,325.7 429.6,331.0 422.2,334.9 412.9,336.3 404.3,337.4 395.1,339.6 384.0,340.3 375.1,336.6 371.4,330.6 369.7,325.1 367.7,320.0 368.1,314.6 372.1,309.6 377.4,304.9 384.5,300.3 394.6,298.2 404.9,300.4 412.4,304.3 419.9,306.7 429.0,309.2 435.3,314.0" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
<polygon points="470.5,320.0 467.0,331.4 454.5,340.3 439.4,346.3 426.6,353.7 410.5,362.3 388.9,364.6 370.1,357.9 357.7,348.2 346.5,339.9 336.7,330.8 333.7,320.0 335.8,309.1 339.4,297.4 349.8,286.4 369.8,281.7 391.0,283.9 408.4,286.2 427.0,285.8 447.3,288.4 461.6,297.1 467.9,308.4" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
<polygon points="501.5,320.0 488.5,335.0 476.8,348.6 468.0,365.4 448.2,381.1 416.1,384.9 385.6,378.0 360.5,370.0 336.1,362.7 316.3,351.2 304.9,336.2 296.3,320.0 291.6,301.6 304.2,284.4 333.6,275.7 362.9,273.0 386.9,267.4 414.8,260.4 445.8,262.0 470.5,272.9 488.9,286.9 501.8,302.7" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
<polygon points="519.8,320.0 523.9,341.1 525.2,366.6 501.7,388.0 459.3,395.1 418.4,393.9 381.8,393.3 345.1,389.6 313.6,377.7 287.4,361.9 260.8,343.7 246.2,320.0 261.4,296.4 295.0,280.9 322.6,268.3 345.6,251.0 379.4,237.1 420.7,236.6 458.8,245.5 492.8,258.0 517.5,276.3 523.3,299.0" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
<polygon points="574.8,320.0 585.9,351.6 557.8,378.7 509.8,393.4 466.1,403.7 423.2,413.6 376.5,414.8 331.6,406.6 286.2,396.0 240.6,379.3 218.4,350.9 232.8,320.0 257.7,295.8 270.0,271.6 285.9,243.8 324.0,223.6 374.6,217.6 425.1,218.8 473.7,226.5 510.2,246.4 528.4,272.2 546.6,295.1" fill="none" stroke="var(--contour-major)" strokeWidth={1.5}/>
<polygon points="632.2,320.0 603.6,354.6 562.7,380.5 526.5,404.5 482.3,424.4 428.0,432.8 371.4,435.2 308.9,435.5 248.6,421.2 219.1,387.3 221.9,350.3 221.8,320.0 209.9,287.7 217.4,252.1 257.7,224.9 311.9,208.3 369.6,197.6 429.8,200.0 479.4,219.3 517.3,241.6 564.4,258.8 615.6,283.3" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
<polygon points="633.7,320.0 614.6,356.5 593.0,391.8 551.0,420.9 495.4,440.9 434.8,460.2 362.0,472.9 290.3,459.0 248.3,421.4 225.6,384.9 190.6,355.6 154.9,320.0 155.2,278.4 190.2,241.9 237.4,211.4 296.5,188.8 366.7,185.8 430.2,198.5 489.2,206.9 561.8,211.9 628.4,235.0 650.0,277.5" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
<polygon points="659.0,320.0 653.4,363.1 619.7,401.7 575.8,437.5 522.4,475.1 443.9,496.9 359.6,482.9 297.9,449.4 243.5,424.6 175.9,403.4 122.6,367.2 111.8,320.0 128.4,273.8 159.3,230.5 217.5,198.1 295.0,186.9 366.1,183.3 437.4,169.3 525.2,161.2 601.8,185.2 636.2,232.1 647.6,277.9" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
<polygon points="695.1,320.0 682.6,368.0 666.2,419.1 625.8,470.9 540.3,497.9 442.0,489.0 362.1,472.6 282.4,469.1 192.9,458.4 125.3,422.2 93.2,372.2 79.5,320.0 91.9,267.6 148.3,226.4 222.7,201.5 284.6,173.7 354.4,136.2 449.7,119.9 538.1,144.9 596.0,189.0 643.1,229.5 683.8,271.8" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
<polygon points="736.6,320.0 755.9,380.5 724.7,440.8 630.5,474.0 526.8,480.7 442.8,492.3 352.3,512.3 250.1,510.1 165.2,476.9 101.8,430.9 55.3,378.6 52.6,320.0 99.6,268.9 149.3,226.7 182.6,174.7 242.6,120.5 345.5,100.4 449.6,120.3 534.2,149.8 613.1,177.6 677.2,216.8 711.6,267.0" fill="none" stroke="var(--contour-major)" strokeWidth={1.5}/>
<polygon points="823.4,320.0 794.0,387.0 700.3,431.7 613.4,462.6 545.1,503.9 455.2,542.1 343.5,547.7 237.9,525.5 142.3,492.2 69.4,443.0 51.8,379.2 71.0,320.0 72.1,264.3 67.3,196.2 120.7,133.4 232.5,107.7 348.1,111.0 450.5,116.5 550.5,129.2 635.0,163.0 702.4,207.5 773.7,256.5" fill="none" stroke="var(--contour-minor)" strokeWidth={0.75}/>
      </svg>}
      {layers.slope&&<span aria-hidden="true" style={{position:'absolute',inset:0,background:'var(--slope-ramp)',opacity:.34,mixBlendMode:'multiply'}}/>}
      {layers.boundaries&&<svg viewBox="0 0 800 600" preserveAspectRatio="none" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} aria-label="Boundaries">
        <polygon points="120,120 660,86 690,440 190,510" fill="none" stroke="var(--boundary-surveyed)" strokeWidth="1.5"/>
        <polyline points="120,120 660,86" fill="none" stroke="var(--boundary-cadastral)" strokeWidth="2.5"/>
        <polyline points="190,510 120,120" fill="none" stroke="var(--boundary-approximate)" strokeWidth="1.5" strokeDasharray="8 6" opacity=".6"/>
      </svg>}
      {layers.proposed&&<svg viewBox="0 0 800 600" preserveAspectRatio="none" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} aria-label="Proposed architecture">
        <polygon points="300,220 470,208 476,300 306,314" fill="var(--data-proposed-fill)" stroke="var(--data-proposed)" strokeWidth="1.5" strokeDasharray="2 5"/>
      </svg>}
      {layers.drainage&&<svg viewBox="0 0 800 600" preserveAspectRatio="none" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} aria-label="Drainage"><path d="M240 110 C 300 240, 260 360, 330 500" fill="none" stroke="var(--data-water)" strokeWidth="2"/><path d="M540 100 C 520 260, 590 340, 560 500" fill="none" stroke="var(--data-water)" strokeWidth="2"/></svg>}

      {/* active measurement */}
      {(tool==='distance'||tool==='pointer')&&<MeasurementLine value="184.6" unit="m" length="34%" style={{position:'absolute',left:'22%',top:'62%'}}/>}
      {tool==='height'&&<MeasurementLine kind="height" value="38.2" unit="m" orientation="vertical" length="150px" style={{position:'absolute',left:'54%',top:'28%'}}/>}

      {/* selection */}
      {selected&&<span aria-hidden="true" style={{position:'absolute',left:'37%',top:'34%',width:'22%',height:'18%',border:'1px solid var(--data-selected)',boxShadow:'0 0 0 4px var(--data-selected-halo)'}}/>}
      {selected&&<span style={{position:'absolute',left:'37%',top:'31%',transform:'translateY(-100%)',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',background:'rgba(0,0,0,.62)',padding:'3px 8px',color:'var(--fg-primary)'}}>Selected · Platform A · conceptual</span>}

      {/* corner instruments */}
      <span style={{position:'absolute',left:'var(--space-5)',top:'var(--space-5)'}}><CoordinateLabel lat={9.73824} lon={100.01362} elevation={38.2} local="E 412.8  N 208.4" system="WGS 84 / UTM 47N" overTerrain/></span>
      <span style={{position:'absolute',right:'var(--space-5)',top:'var(--space-5)'}}><NorthIndicator rotation={-12}/></span>
      <span style={{position:'absolute',left:'var(--space-5)',bottom:'var(--space-5)'}}><ScaleBar length={100} unit="m" pixels={160}/></span>
      <span style={{position:'absolute',left:'50%',transform:'translateX(-50%)',top:'var(--space-5)',display:'flex',gap:8}}>
        {['Reality','Measured','Analysis','Proposed'].map((m,i)=>(
          <span key={m} style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',padding:'4px 9px',background:'rgba(0,0,0,.58)',border:'1px solid '+(i===1?'var(--accent-scan-dim)':'var(--border-faint)'),color:i===1?'var(--accent-scan)':'var(--fg-muted)'}}>{m}</span>))}
      </span>
    </main>

    {/* right rail — project information */}
    <aside style={{borderLeft:'1px solid var(--border-hairline)',background:'var(--bg-surface)',overflowY:'auto',padding:'var(--space-5)',display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
      <div>
        <Eyebrow>Selection</Eyebrow>
        <div style={{marginTop:'var(--space-4)'}}>
          <SpecList dense items={[{label:'Object',value:'Platform A'},{label:'State',value:'Conceptual'},{label:'Footprint',value:'1 240',unit:'m²'},{label:'Level',value:'+42.0',unit:'m MSL'},{label:'Net cut',value:'+2 140',unit:'m³'}]}/>
        </div>
        <div style={{marginTop:'var(--space-3)'}}><ConfidenceTag level="conceptual" source="Client sketch overlay"/></div>
      </div>
      <div style={{height:1,background:'var(--border-faint)'}}/>
      <div>
        <Eyebrow>Project</Eyebrow>
        <div style={{marginTop:'var(--space-4)'}}>
          <ProjectMetadata layout="list" demo project="The Hill" location="Koh Phangan" area="8.1 ha" captureDate="2025-03-12" technology={['UAV LiDAR','Photogrammetry']} accuracy="±25 mm vertical" coordinateSystem="WGS 84 / UTM 47N"/>
        </div>
      </div>
      <div style={{height:1,background:'var(--border-faint)'}}/>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
        <Eyebrow>Export</Eyebrow>
        <Button variant="secondary" size="sm" full>Download contours (DXF)</Button>
        <Button variant="secondary" size="sm" full>Download terrain (OBJ)</Button>
        <Button variant="instrument" size="sm" full>Open measurement report</Button>
      </div>
    </aside>

    {/* status bar */}
    <div style={{gridColumn:'1 / -1',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 var(--space-5)',borderTop:'1px solid var(--border-hairline)',background:'var(--bg-inset)',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>
      <span>Tool: {tool} · Layers on: {Object.keys(layers).filter(k=>layers[k]).length} · 1 m contour interval</span>
      <span style={{color:'var(--status-estimated)'}}>Demo data — not a survey deliverable</span>
    </div>
  </div>);
}
Object.assign(window,{Viewer});
