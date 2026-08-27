/* @ds-bundle: {"format":4,"namespace":"EASYSCANDesignSystem_1b72cd","components":[{"name":"ProcessStep","sourcePath":"components/content/ProcessStep.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"SpecList","sourcePath":"components/content/SpecList.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logotype","sourcePath":"components/core/Logotype.jsx"},{"name":"NavBar","sourcePath":"components/core/NavBar.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"AnalysisCard","sourcePath":"components/data/AnalysisCard.jsx"},{"name":"ConfidenceTag","sourcePath":"components/data/ConfidenceTag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"MeasurementLine","sourcePath":"components/data/MeasurementLine.jsx"},{"name":"SpecCard","sourcePath":"components/data/SpecCard.jsx"},{"name":"StatusPill","sourcePath":"components/data/StatusPill.jsx"},{"name":"BoundaryLegend","sourcePath":"components/geo/BoundaryLegend.jsx"},{"name":"CoordinateLabel","sourcePath":"components/geo/CoordinateLabel.jsx"},{"name":"ElevationLegend","sourcePath":"components/geo/ElevationLegend.jsx"},{"name":"LayerControl","sourcePath":"components/geo/LayerControl.jsx"},{"name":"NorthIndicator","sourcePath":"components/geo/NorthIndicator.jsx"},{"name":"ProjectMetadata","sourcePath":"components/geo/ProjectMetadata.jsx"},{"name":"ScaleBar","sourcePath":"components/geo/ScaleBar.jsx"},{"name":"TerrainLegend","sourcePath":"components/geo/TerrainLegend.jsx"},{"name":"BeforeAfter","sourcePath":"components/media/BeforeAfter.jsx"},{"name":"MediaTitleCard","sourcePath":"components/media/MediaTitleCard.jsx"},{"name":"TerrainFrame","sourcePath":"components/media/TerrainFrame.jsx"}],"sourceHashes":{"components/content/ProcessStep.jsx":"ce14552d9a18","components/content/Quote.jsx":"04fd1e0301dd","components/content/SectionHeading.jsx":"6cc15a706ef9","components/content/SpecList.jsx":"334cb51d1b00","components/content/StatBlock.jsx":"72316ee92e22","components/core/Button.jsx":"da21cbb3bd3f","components/core/Eyebrow.jsx":"8878bfd8c47c","components/core/Logotype.jsx":"12f30b8f847d","components/core/NavBar.jsx":"af9874584cb7","components/core/Tag.jsx":"8902457609f9","components/data/AnalysisCard.jsx":"19c9aebd088b","components/data/ConfidenceTag.jsx":"cc9f58f751ca","components/data/DataTable.jsx":"ce226b185c98","components/data/MeasurementLine.jsx":"6c037fdbe81b","components/data/SpecCard.jsx":"22c4ccab958f","components/data/StatusPill.jsx":"3c4f9feeb4b5","components/geo/BoundaryLegend.jsx":"8d03117e5501","components/geo/CoordinateLabel.jsx":"90d532802c96","components/geo/ElevationLegend.jsx":"79b499e76b85","components/geo/LayerControl.jsx":"25e503ff4f6c","components/geo/NorthIndicator.jsx":"814871359f08","components/geo/ProjectMetadata.jsx":"69f89e63bb54","components/geo/ScaleBar.jsx":"808c35d76dc0","components/geo/TerrainLegend.jsx":"b40ad0342020","components/media/BeforeAfter.jsx":"70331f3cd0db","components/media/MediaTitleCard.jsx":"813edabd5681","components/media/TerrainFrame.jsx":"7b86f583a83c","ui_kits/report/ReportPage.jsx":"29b81f5cd238","ui_kits/viewer/Viewer.jsx":"2b85a88a7f12","ui_kits/website/Gaussian.jsx":"25a4ab216709","ui_kits/website/Home.jsx":"9f9a78c8bb12","ui_kits/website/Projects.jsx":"6fcebefe3231","ui_kits/website/Shared.jsx":"296c5f3771a8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EASYSCANDesignSystem_1b72cd = window.EASYSCANDesignSystem_1b72cd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  attribution,
  role,
  size = 'md',
  style,
  ...rest
}) {
  const fs = size === 'lg' ? 'var(--type-h2)' : 'var(--type-h3)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-light)',
      fontSize: fs,
      lineHeight: 1.28,
      maxWidth: '30ch'
    }
  }, children), (attribution || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)',
      letterSpacing: 'var(--tracking-data)'
    }
  }, attribution, role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-faint)'
    }
  }, " \u2014 ", role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecList({
  items = [],
  columns = 1,
  dense = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      columnGap: 'var(--space-6)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(120px,38%) 1fr',
      gap: 'var(--space-4)',
      padding: (dense ? '7px' : '11px') + ' 0',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data)',
      color: 'var(--fg-primary)',
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, it.value), it.unit && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-muted)'
    }
  }, it.unit), it.note && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-faint)',
      fontSize: 'var(--type-data-sm)'
    }
  }, it.note)))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  unit,
  label,
  note,
  tone = 'default',
  align = 'left',
  style,
  ...rest
}) {
  const color = {
    default: 'var(--fg-primary)',
    instrument: 'var(--accent-scan)',
    brand: 'var(--accent-coral)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-xl)',
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      color,
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", null, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body)',
      color: 'var(--fg-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-faint)'
    }
  }, note));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: '0 14px',
  md: '0 20px',
  lg: '0 28px'
};
const H = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h)',
  lg: 'var(--control-h-lg)'
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  full,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const base = {
    appearance: 'none',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-control)',
    font: 'inherit',
    fontFamily: 'var(--font-structure)',
    fontWeight: 'var(--weight-medium)',
    fontSize: size === 'sm' ? 'var(--type-label-sm)' : 'var(--type-label)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    height: H[size],
    padding: PAD[size],
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    whiteSpace: 'nowrap',
    transform: down && !disabled ? 'scale(var(--press-scale))' : 'none',
    transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-instant) var(--ease-standard)'
  };
  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--n-white)' : 'var(--accent-coral)',
      color: 'var(--n-000)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--fg-primary)',
      borderColor: hover && !disabled ? 'var(--border-strong)' : 'var(--border-hairline)'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--fg-primary)' : 'var(--fg-secondary)'
    },
    instrument: {
      background: hover && !disabled ? 'var(--accent-scan)' : 'var(--accent-scan-tint)',
      color: hover && !disabled ? 'var(--n-000)' : 'var(--accent-scan)',
      borderColor: 'var(--accent-scan-dim)',
      fontFamily: 'var(--font-information)',
      textTransform: 'none',
      letterSpacing: 'var(--tracking-data)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...skins[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small tracked label above a heading. Carries an optional index (01, 02) —
   the numbered-process pattern from the EASY SCAN homepage. */
function Eyebrow({
  children,
  index,
  tone = 'default',
  rule = false,
  style,
  ...rest
}) {
  const color = {
    default: 'var(--fg-muted)',
    accent: 'var(--accent-coral)',
    instrument: 'var(--accent-scan)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-faint)'
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("span", null, children), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The homepage's four-step pattern: noun label — what happens. What that makes
   possible. */
function ProcessStep({
  index,
  title,
  children,
  outcome,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index
  }, 'Step'), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--type-h4)',
      textTransform: 'uppercase',
      letterSpacing: '0.03em'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--fg-secondary)',
      fontSize: 'var(--type-body-sm)'
    }
  }, children), outcome && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--accent-scan)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-data)'
    }
  }, '→ ' + outcome));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  index,
  title,
  lead,
  align = 'left',
  level = 2,
  size = 'h2',
  style,
  ...rest
}) {
  const Tag = 'h' + level;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontSize: 'var(--type-' + size + ')',
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      maxWidth: '22ch'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--fg-secondary)',
      fontSize: 'var(--type-body-l)',
      maxWidth: 'var(--measure-lead)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Logotype.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  wordmark: 'assets/logo-wordmark-white-alpha.png',
  monogram: 'assets/logo-es-white.png',
  'monogram-black': 'assets/logo-es-black.png'
};

/* Official EASY SCAN artwork only — never retype the logo in ABNES. */
function Logotype({
  variant = 'wordmark',
  width,
  height,
  assetBase = '',
  strapline = false,
  style,
  ...rest
}) {
  const src = assetBase + (SRC[variant] || SRC.wordmark);
  const isWord = variant === 'wordmark';
  const w = width || (isWord ? 220 : 96);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "EASY SCAN",
    width: w,
    height: height,
    style: {
      width: w,
      height: height || 'auto',
      display: 'block'
    }
  }), strapline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-secondary)'
    }
  }, "Your digital partner in land analysis and development insight"));
}
Object.assign(__ds_scope, { Logotype });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logotype.jsx", error: String((e && e.message) || e) }); }

// components/core/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  items = [],
  active,
  onSelect,
  languages = ['EN', 'ไทย'],
  language = 'EN',
  onLanguage,
  assetBase = '',
  transparent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      padding: '18px var(--gutter-desktop)',
      background: transparent ? 'transparent' : 'var(--bg-page)',
      borderBottom: transparent ? '1px solid transparent' : '1px solid var(--border-faint)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logotype, {
    variant: "wordmark",
    width: 186,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, items.map(it => {
    const label = typeof it === 'string' ? it : it.label;
    const on = active === label;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: typeof it === 'object' && it.href || '#',
      onClick: e => {
        if (onSelect) {
          e.preventDefault();
          onSelect(label);
        }
      },
      style: {
        fontFamily: 'var(--font-structure)',
        fontWeight: 'var(--weight-regular)',
        fontSize: 'var(--type-label)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: on ? 'var(--accent-coral)' : 'var(--fg-primary)'
      }
    }, label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      paddingLeft: 'var(--space-4)',
      borderLeft: '1px solid var(--border-hairline)'
    }
  }, languages.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    onClick: () => onLanguage && onLanguage(l),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: '2px 4px',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      color: l === language ? 'var(--fg-primary)' : 'var(--fg-faint)'
    }
  }, l)))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['var(--fg-secondary)', 'var(--border-hairline)', 'transparent'],
  brand: ['var(--accent-coral)', 'var(--accent-coral-dim)', 'var(--accent-coral-tint)'],
  instrument: ['var(--accent-scan)', 'var(--accent-scan-dim)', 'var(--accent-scan-tint)'],
  demo: ['var(--status-estimated)', 'var(--status-estimated)', 'transparent']
};
function Tag({
  children,
  tone = 'neutral',
  symbol,
  style,
  ...rest
}) {
  const [fg, bd, bg] = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 8px',
      border: '1px solid ' + bd,
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-1)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      lineHeight: 1.3,
      ...style
    }
  }, rest), symbol && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, symbol), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/ConfidenceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  measured: ['var(--status-measured)', '◆', 'Measured'],
  verified: ['var(--status-verified)', '✓', 'Verified'],
  calculated: ['var(--status-calculated)', 'ƒ', 'Calculated'],
  estimated: ['var(--status-estimated)', '≈', 'Estimated'],
  approximate: ['var(--status-approximate)', '~', 'Approximate'],
  conceptual: ['var(--status-conceptual)', '◇', 'Conceptual'],
  unknown: ['var(--status-unavailable)', '?', 'Unknown'],
  unavailable: ['var(--status-unavailable)', '—', 'Not available']
};

/* Confidence must be readable without colour: symbol + word always present. */
function ConfidenceTag({
  level = 'measured',
  source,
  style,
  ...rest
}) {
  const [color, symbol, word] = MAP[level] || MAP.measured;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6,
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-data)',
      color: 'var(--fg-muted)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color
    }
  }, symbol), /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, word), source && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-faint)'
    }
  }, "\xB7 ", source));
}
Object.assign(__ds_scope, { ConfidenceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ConfidenceTag.jsx", error: String((e && e.message) || e) }); }

// components/data/AnalysisCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AnalysisCard({
  analysis,
  result,
  unit,
  interpretation,
  ramp,
  rampLabels,
  level = 'calculated',
  source,
  visual,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      background: 'var(--bg-surface)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), visual && /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-faint)'
    }
  }, visual), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-secondary)'
    }
  }, analysis), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      fontFamily: 'var(--font-information)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-data-xl)',
      lineHeight: 1
    }
  }, result), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body)',
      color: 'var(--fg-muted)'
    }
  }, unit)), ramp && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 6,
      background: ramp,
      display: 'block'
    }
  }), rampLabels && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-faint)'
    }
  }, rampLabels.map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l)))), interpretation && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--type-body-sm)',
      color: 'var(--fg-secondary)'
    }
  }, interpretation), /*#__PURE__*/React.createElement(__ds_scope.ConfidenceTag, {
    level: level,
    source: source
  })));
}
Object.assign(__ds_scope, { AnalysisCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AnalysisCard.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Mono throughout, hairline rows, numeric columns right-aligned and
   tabular-figure aligned. Works identically in light mode. */
function DataTable({
  columns = [],
  rows = [],
  caption,
  dense = false,
  style,
  ...rest
}) {
  const pad = dense ? '7px 12px' : '11px 16px';
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data)',
      ...style
    }
  }, rest), caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: 'top',
      textAlign: 'left',
      paddingBottom: 'var(--space-3)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    style: {
      padding: pad,
      textAlign: c.align || 'left',
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)',
      borderBottom: '1px solid var(--border-hairline)',
      whiteSpace: 'nowrap'
    }
  }, c.label, c.unit && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-faint)'
    }
  }, " (", c.unit, ")"))))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: pad,
      textAlign: c.align || 'left',
      borderBottom: '1px solid var(--border-faint)',
      color: c.muted ? 'var(--fg-muted)' : 'var(--fg-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/MeasurementLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Instrument-like annotation: endpoint ticks, thin line, mono value with unit.
   Not a HUD graphic. */
function MeasurementLine({
  value,
  unit,
  kind = 'distance',
  orientation = 'horizontal',
  length = '100%',
  tone = 'instrument',
  style,
  ...rest
}) {
  const color = tone === 'instrument' ? 'var(--data-measure)' : 'var(--fg-primary)';
  const vertical = orientation === 'vertical';
  const prefix = {
    distance: '',
    height: 'Δ',
    elevation: '+',
    slope: '',
    area: '',
    volume: ''
  }[kind] || '';
  const tick = {
    background: color,
    position: 'absolute',
    ...(vertical ? {
      width: 11,
      height: 1,
      left: -5
    } : {
      width: 1,
      height: 11,
      top: -5
    })
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...(vertical ? {
        width: 1,
        height: length,
        flexDirection: 'column'
      } : {
        width: length,
        height: 1
      }),
      background: color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...tick,
      ...(vertical ? {
        top: 0
      } : {
        left: 0
      })
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...tick,
      ...(vertical ? {
        bottom: 0
      } : {
        right: 0
      })
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...(vertical ? {
        left: 10
      } : {
        bottom: 7
      }),
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-data)',
      color,
      background: 'rgba(0,0,0,.55)',
      padding: '1px 5px'
    }
  }, prefix, value, unit ? ' ' + unit : ''));
}
Object.assign(__ds_scope, { MeasurementLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MeasurementLine.jsx", error: String((e && e.message) || e) }); }

// components/data/SpecCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecCard({
  title,
  subtitle,
  items = [],
  footer,
  tone = 'default',
  dense = true,
  children,
  style,
  ...rest
}) {
  const accent = {
    default: 'transparent',
    brand: 'var(--accent-coral)',
    instrument: 'var(--accent-scan)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-card)',
      background: 'var(--bg-surface)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, tone !== 'default' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      background: accent,
      display: 'inline-block'
    }
  }), title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, subtitle)), items.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.SpecList, {
    items: items,
    dense: dense
  }), children, footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-faint)',
      paddingTop: 'var(--space-2)'
    }
  }, footer));
}
Object.assign(__ds_scope, { SpecCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SpecCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  scheduled: ['var(--scan-scheduled)', '○', 'Scheduled'],
  captured: ['var(--scan-captured)', '◐', 'Captured'],
  processing: ['var(--scan-processing)', '◑', 'Processing'],
  ready: ['var(--scan-ready)', '●', 'Ready'],
  updated: ['var(--scan-updated)', '◈', 'Updated']
};

/* Colour is never the only signal — every state carries a symbol and a word. */
function StatusPill({
  status = 'ready',
  label,
  style,
  ...rest
}) {
  const [color, symbol, fallback] = MAP[status] || MAP.ready;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '3px 9px 3px 7px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-1)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-secondary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color,
      fontSize: 11
    }
  }, symbol), label || fallback);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/geo/BoundaryLegend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TYPES = {
  cadastral: {
    color: 'var(--boundary-cadastral)',
    dash: null,
    label: 'Official / title deed',
    note: 'Legally registered'
  },
  surveyed: {
    color: 'var(--boundary-surveyed)',
    dash: null,
    label: 'Surveyed on site',
    note: 'Measured by instrument'
  },
  approximate: {
    color: 'var(--boundary-approximate)',
    dash: '8 6',
    label: 'Approximate',
    note: 'Not legally verified'
  },
  conceptual: {
    color: 'var(--boundary-conceptual)',
    dash: '2 5',
    label: 'Conceptual development',
    note: 'Proposal only'
  }
};

/* Boundary meaning is carried by colour AND dash pattern AND label AND note.
   An approximate boundary must never look legally verified. */
function BoundaryLegend({
  types = ['cadastral', 'surveyed', 'approximate', 'conceptual'],
  showNotes = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, "Boundaries"), types.map(t => {
    const d = TYPES[t];
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'grid',
        gridTemplateColumns: '44px 1fr',
        alignItems: 'center',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "44",
      height: "10",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: "5",
      x2: "44",
      y2: "5",
      stroke: d.color,
      strokeWidth: t === 'cadastral' ? 2 : 1.5,
      strokeDasharray: d.dash || undefined
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-information)',
        fontSize: 'var(--type-data-sm)',
        color: 'var(--fg-primary)'
      }
    }, d.label, showNotes && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-faint)'
      }
    }, " \xB7 ", d.note)));
  }));
}
Object.assign(__ds_scope, { BoundaryLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/geo/BoundaryLegend.jsx", error: String((e && e.message) || e) }); }

// components/geo/CoordinateLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dms = (v, pos, neg) => {
  const dir = v >= 0 ? pos : neg,
    a = Math.abs(v);
  const d = Math.floor(a),
    m = Math.floor((a - d) * 60),
    s = (((a - d) * 60 - m) * 60).toFixed(1);
  return d + '° ' + String(m).padStart(2, '0') + '′ ' + s + '″ ' + dir;
};
function CoordinateLabel({
  lat,
  lon,
  elevation,
  elevationUnit = 'm MSL',
  local,
  system,
  format = 'decimal',
  overTerrain = false,
  style,
  ...rest
}) {
  const text = format === 'dms' ? dms(lat, 'N', 'S') + '  ' + dms(lon, 'E', 'W') : lat.toFixed(5) + '° ' + (lat >= 0 ? 'N' : 'S') + ', ' + lon.toFixed(5) + '° ' + (lon >= 0 ? 'E' : 'W');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 2,
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-data)',
      color: 'var(--fg-primary)',
      padding: overTerrain ? '5px 8px' : 0,
      background: overTerrain ? 'rgba(0,0,0,.58)' : 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, text), (elevation != null || local) && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-secondary)'
    }
  }, elevation != null && '+' + elevation + ' ' + elevationUnit, elevation != null && local && '  ·  ', local), system && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-faint)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, system));
}
Object.assign(__ds_scope, { CoordinateLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/geo/CoordinateLabel.jsx", error: String((e && e.message) || e) }); }

// components/geo/ElevationLegend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ElevationLegend({
  min,
  max,
  interval,
  unit = 'm',
  datum = 'MSL',
  ramp = 'var(--elev-ramp)',
  orientation = 'horizontal',
  ticks,
  style,
  ...rest
}) {
  const vertical = orientation === 'vertical';
  const marks = ticks || [min, Math.round((min + max) / 2), max];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: vertical ? 0 : 200,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, "Elevation"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'row' : 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: vertical ? ramp.replace('90deg', '0deg') : ramp,
      ...(vertical ? {
        width: 8,
        height: 140
      } : {
        height: 8
      }),
      display: 'block',
      border: '1px solid var(--border-faint)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column-reverse' : 'row',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, marks.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-faint)'
    }
  }, unit, " ", datum, " \xB7 ", interval, " ", unit, " interval"));
}
Object.assign(__ds_scope, { ElevationLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/geo/ElevationLegend.jsx", error: String((e && e.message) || e) }); }

// components/geo/LayerControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Written for architects and landowners, not GIS specialists: plain names,
   optional one-line explanation, grouped by what the layer represents. */
function LayerControl({
  groups = [],
  active = {},
  onToggle,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), groups.map(g => /*#__PURE__*/React.createElement("section", {
    key: g.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 4px',
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, g.title), g.layers.map(l => {
    const on = !!active[l.key];
    return /*#__PURE__*/React.createElement("button", {
      key: l.key,
      type: "button",
      onClick: () => onToggle && onToggle(l.key),
      style: {
        appearance: 'none',
        textAlign: 'left',
        background: on ? 'rgba(255,255,255,.045)' : 'transparent',
        border: '1px solid ' + (on ? 'var(--border-hairline)' : 'transparent'),
        borderRadius: 'var(--radius-1)',
        padding: '8px 10px',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '14px 1fr auto',
        alignItems: 'center',
        gap: 'var(--space-3)',
        color: 'inherit',
        transition: 'background var(--dur-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 12,
        height: 12,
        border: '1px solid ' + (on ? l.color || 'var(--accent-scan)' : 'var(--border-strong)'),
        background: on ? l.color || 'var(--accent-scan)' : 'transparent'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-structure)',
        fontSize: 'var(--type-label)',
        color: on ? 'var(--fg-primary)' : 'var(--fg-secondary)'
      }
    }, l.label), l.hint && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-information)',
        fontSize: 'var(--type-data-sm)',
        color: 'var(--fg-faint)'
      }
    }, l.hint)), l.meta && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-information)',
        fontSize: 'var(--type-data-sm)',
        color: 'var(--fg-faint)'
      }
    }, l.meta));
  }))));
}
Object.assign(__ds_scope, { LayerControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/geo/LayerControl.jsx", error: String((e && e.message) || e) }); }

// components/geo/NorthIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NorthIndicator({
  rotation = 0,
  size = 34,
  tone = 'light',
  label = 'N',
  style,
  ...rest
}) {
  const color = tone === 'light' ? 'var(--fg-primary)' : 'var(--n-000)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      ...style
    }
  }, rest, {
    role: "img",
    "aria-label": 'North, rotated ' + rotation + ' degrees'
  }), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 34 34",
    style: {
      transform: 'rotate(' + rotation + 'deg)'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "16",
    fill: "none",
    stroke: color,
    strokeOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "3",
    x2: "17",
    y2: "31",
    stroke: color,
    strokeOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 4 L21 17 L17 14 L13 17 Z",
    fill: color
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      color
    }
  }, label));
}
Object.assign(__ds_scope, { NorthIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/geo/NorthIndicator.jsx", error: String((e && e.message) || e) }); }

// components/geo/ProjectMetadata.jsx
try { (() => {
const ORDER = ['project', 'location', 'area', 'captureDate', 'technology', 'accuracy', 'deliverables', 'coordinateSystem'];
const LABELS = {
  project: 'Project',
  location: 'Location',
  area: 'Area',
  captureDate: 'Capture date',
  technology: 'Technology',
  accuracy: 'Accuracy',
  deliverables: 'Deliverables',
  coordinateSystem: 'Coordinate system'
};

/* Only render the fields the context actually needs — do not pad. */
function ProjectMetadata({
  layout = 'list',
  status,
  confidence,
  confidenceSource,
  demo = false,
  style,
  ...rest
}) {
  const data = rest;
  const fields = ORDER.filter(k => data[k] != null);
  const grid = layout === 'grid';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, (status || demo) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, status && /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: status
  }), demo && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--status-estimated)',
      border: '1px solid var(--status-estimated)',
      padding: '3px 8px'
    }
  }, "Demo data")), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: grid ? 'repeat(auto-fit,minmax(180px,1fr))' : '1fr',
      gap: grid ? 'var(--space-5)' : 0
    }
  }, fields.map(k => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: grid ? {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    } : {
      display: 'grid',
      gridTemplateColumns: 'minmax(120px,34%) 1fr',
      gap: 'var(--space-4)',
      padding: '9px 0',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, LABELS[k]), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data)',
      color: 'var(--fg-primary)'
    }
  }, Array.isArray(data[k]) ? data[k].join(' · ') : data[k])))), confidence && /*#__PURE__*/React.createElement(__ds_scope.ConfidenceTag, {
    level: confidence,
    source: confidenceSource
  }));
}
Object.assign(__ds_scope, { ProjectMetadata });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/geo/ProjectMetadata.jsx", error: String((e && e.message) || e) }); }

// components/geo/ScaleBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ScaleBar({
  length = 100,
  unit = 'm',
  pixels = 160,
  segments = 4,
  tone = 'light',
  style,
  ...rest
}) {
  const color = tone === 'light' ? 'var(--fg-primary)' : 'var(--n-000)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: pixels,
      height: 6,
      border: '1px solid ' + color
    }
  }, Array.from({
    length: segments
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      background: i % 2 ? 'transparent' : color
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: pixels,
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color,
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, length, " ", unit)));
}
Object.assign(__ds_scope, { ScaleBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/geo/ScaleBar.jsx", error: String((e && e.message) || e) }); }

// components/geo/TerrainLegend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SWATCH = {
  contours: 'var(--contour-major)',
  elevation: 'var(--elev-4)',
  slope: 'var(--slope-2)',
  vegetation: 'var(--data-vegetation)',
  water: 'var(--data-water)',
  buildings: 'var(--data-existing-structure)',
  proposed: 'var(--data-proposed)',
  roads: 'var(--data-road)',
  pointcloud: 'var(--data-pointcloud)',
  coverage: 'var(--data-measure)',
  terrain: 'var(--data-terrain)'
};
function TerrainLegend({
  layers = [],
  columns = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, "Active layers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      gap: '10px var(--space-6)'
    }
  }, layers.map(l => {
    const key = typeof l === 'string' ? l : l.key;
    const label = typeof l === 'object' && l.label || key;
    return /*#__PURE__*/React.createElement("span", {
      key: key,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        fontFamily: 'var(--font-information)',
        fontSize: 'var(--type-data-sm)',
        color: 'var(--fg-primary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 12,
        height: 12,
        flex: '0 0 12px',
        background: typeof l === 'object' && l.color || SWATCH[key] || 'var(--fg-muted)',
        border: '1px solid var(--border-faint)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        textTransform: 'capitalize'
      }
    }, label), typeof l === 'object' && l.value && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-faint)'
      }
    }, l.value));
  })));
}
Object.assign(__ds_scope, { TerrainLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/geo/TerrainLegend.jsx", error: String((e && e.message) || e) }); }

// components/media/BeforeAfter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* EXISTING → PROPOSED, PHYSICAL → DIGITAL TWIN, RAW → ANALYSED.
   A draggable seam, because comparison is a spatial act. */
function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Existing',
  afterLabel = 'Proposed',
  ratio = '16 / 9',
  initial = 50,
  style,
  ...rest
}) {
  const [pos, setPos] = React.useState(initial);
  const ref = React.useRef(null);
  const move = clientX => {
    const r = ref.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, (clientX - r.left) / r.width * 100)));
  };
  const label = (text, side) => /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      [side]: 'var(--space-4)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      padding: '4px 8px',
      background: 'rgba(0,0,0,.6)',
      color: side === 'left' ? 'var(--fg-primary)' : 'var(--accent-coral)'
    }
  }, text);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onMouseMove: e => e.buttons === 1 && move(e.clientX),
    onMouseDown: e => move(e.clientX),
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      userSelect: 'none',
      cursor: 'ew-resize',
      background: 'var(--bg-inset)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: afterSrc,
    alt: afterLabel,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: 'inset(0 ' + (100 - pos) + '% 0 0)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: beforeSrc,
    alt: beforeLabel,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: pos + '%',
      width: 1,
      background: 'var(--accent-scan)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '50%',
      left: pos + '%',
      transform: 'translate(-50%,-50%)',
      width: 28,
      height: 28,
      border: '1px solid var(--accent-scan)',
      background: 'rgba(0,0,0,.5)'
    }
  }), label(beforeLabel, 'left'), label(afterLabel, 'right'), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    value: pos,
    onChange: e => setPos(+e.target.value),
    "aria-label": "Comparison position",
    style: {
      position: 'absolute',
      bottom: 8,
      left: '10%',
      width: '80%',
      opacity: 0.001,
      height: 24
    }
  }));
}
Object.assign(__ds_scope, { BeforeAfter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/BeforeAfter.jsx", error: String((e && e.message) || e) }); }

// components/media/TerrainFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Terrain is the hero. Hard rectangle, no radius, gradient scrim for
   protection — never a blurred capsule over the land. */
function TerrainFrame({
  src,
  alt = '',
  ratio = '16 / 9',
  scrim = 'bottom',
  overlay,
  caption,
  coordinates,
  grid = false,
  children,
  style,
  ...rest
}) {
  const scrims = {
    none: 'none',
    bottom: 'var(--scrim-bottom)',
    top: 'var(--scrim-top)',
    flat: 'var(--scrim-flat)'
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      borderRadius: 'var(--radius-frame)',
      background: 'var(--bg-inset)',
      ...style
    }
  }, rest), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), grid && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(rgba(61,227,166,.18) 1px,transparent 1px) 0 0/100% 40px,linear-gradient(90deg,rgba(61,227,166,.18) 1px,transparent 1px) 0 0/40px 100%'
    }
  }), scrim !== 'none' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: scrims[scrim]
    }
  }), overlay, coordinates && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      left: 'var(--space-4)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-data)',
      color: 'var(--fg-primary)',
      textShadow: '0 1px 3px rgba(0,0,0,.8)'
    }
  }, coordinates), children && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'var(--space-6)'
    }
  }, children), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      bottom: 'var(--space-3)',
      right: 'var(--space-4)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-secondary)',
      textShadow: '0 1px 3px rgba(0,0,0,.8)'
    }
  }, caption));
}
Object.assign(__ds_scope, { TerrainFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/TerrainFrame.jsx", error: String((e && e.message) || e) }); }

// components/media/MediaTitleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MediaTitleCard({
  src,
  title,
  location,
  ratio = '4 / 3',
  tags = [],
  meta,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      color: 'inherit',
      textDecoration: 'none',
      ...style
    },
    onFocus: () => setHover(true),
    onBlur: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.TerrainFrame, {
    src: src,
    alt: title,
    ratio: ratio,
    scrim: "bottom",
    style: {
      outline: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-faint)'),
      transition: 'outline-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: hover ? 'var(--accent-coral)' : 'var(--fg-secondary)'
    }
  }, location), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--type-h3)',
      textTransform: 'uppercase',
      letterSpacing: '0.03em'
    }
  }, title), tags.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))))), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, meta));
}
Object.assign(__ds_scope, { MediaTitleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MediaTitleCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/report/ReportPage.jsx
try { (() => {
const {
  Logotype,
  SpecList,
  DataTable,
  BoundaryLegend,
  ElevationLegend,
  TerrainLegend,
  ScaleBar,
  NorthIndicator,
  ConfidenceTag,
  StatusPill,
  ProjectMetadata,
  MeasurementLine,
  AnalysisCard,
  Tag
} = window.EASYSCANDesignSystem_1b72cd;
const Rule = () => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 1,
    background: 'var(--border-hairline)'
  }
});
const H = ({
  children,
  eyebrow
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 'var(--space-4)'
  }
}, eyebrow && /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-information)',
    fontSize: 'var(--type-data-sm)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--fg-muted)'
  }
}, eyebrow), /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: 0,
    fontFamily: 'var(--font-structure)',
    fontWeight: 'var(--weight-medium)',
    fontSize: 'var(--type-h3)',
    textTransform: 'uppercase',
    letterSpacing: '.03em'
  }
}, children));
function ReportPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "es-light",
    style: {
      background: 'var(--bg-surface)',
      color: 'var(--fg-primary)',
      width: 1000,
      margin: '0 auto',
      padding: '56px 64px 72px',
      boxShadow: '0 14px 40px -12px rgba(0,0,0,.35)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingBottom: 'var(--space-5)',
      borderBottom: '1.5px solid var(--fg-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    variant: "monogram-black",
    width: 120,
    assetBase: "../../"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, "Terrain analysis report \xB7 ES-2025-0312-HILL"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--type-h2)',
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, "The Hill \u2014 Koh Phangan"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "ready",
    label: "Ready \xB7 2025-03-19"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--status-estimated)',
      border: '1px solid var(--status-estimated)',
      padding: '3px 8px',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, "Demo data"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, "Page 1 of 12"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(H, {
    eyebrow: "Section 01"
  }, "Site map"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: '#F2F1EE',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden'
    }
  }, Array.from({
    length: 22
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: i * 4.5 + 3 + '%',
      height: i % 5 === 0 ? 1.5 : 0.75,
      background: i % 5 === 0 ? 'var(--contour-major-light)' : 'var(--contour-minor-light)'
    }
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 300",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    "aria-label": "Boundaries"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "52,58 322,42 340,214 96,254",
    fill: "none",
    stroke: "#0D1011",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "120,96 268,86 276,178 138,196",
    fill: "rgba(255,133,98,.18)",
    stroke: "#C9613F",
    strokeWidth: "1.5",
    strokeDasharray: "2 5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "52,58 322,42",
    fill: "none",
    stroke: "#C9A227",
    strokeWidth: "2.5"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: 14
    }
  }, /*#__PURE__*/React.createElement(ScaleBar, {
    length: 50,
    unit: "m",
    pixels: 120,
    tone: "dark"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: 14
    }
  }, /*#__PURE__*/React.createElement(NorthIndicator, {
    rotation: -12,
    tone: "dark"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: 14,
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-primary)'
    }
  }, "1 : 1 000 \xB7 1 m contour interval")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, "Fig. 01 \u2014 Contour plan with boundaries. Coral hatch marks the conceptual development area, not an approved footprint.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(BoundaryLegend, {
    types: ['cadastral', 'surveyed', 'conceptual']
  }), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(ElevationLegend, {
    min: 0,
    max: 112,
    interval: 1
  }), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement(TerrainLegend, {
    layers: [{
      key: 'contours',
      label: 'Contours',
      value: '1 m'
    }, {
      key: 'proposed',
      label: 'Conceptual footprint'
    }, {
      key: 'water',
      label: 'Drainage channels'
    }]
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(H, {
    eyebrow: "Section 02"
  }, "Project data"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ProjectMetadata, {
    layout: "list",
    project: "The Hill",
    location: "Koh Phangan, Surat Thani, Thailand",
    area: "8.1 ha",
    captureDate: "2025-03-12",
    technology: ['UAV LiDAR', 'Photogrammetry'],
    accuracy: "\xB125 mm vertical (instrument spec)",
    coordinateSystem: "WGS 84 / UTM 47N"
  }), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Flight height',
      value: '85',
      unit: 'm AGL'
    }, {
      label: 'Point density',
      value: '480',
      unit: 'pts/m²'
    }, {
      label: 'Ground control',
      value: '6 checked points'
    }, {
      label: 'Contour interval',
      value: '1',
      unit: 'm'
    }, {
      label: 'Vertical datum',
      value: 'MSL'
    }, {
      label: 'Deliverables',
      value: 'DXF · PDF · OBJ · Viewer'
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(H, {
    eyebrow: "Section 03"
  }, "Measurements"), /*#__PURE__*/React.createElement(DataTable, {
    caption: "Table 01 \u2014 Zone summary (demo data)",
    columns: [{
      key: 'zone',
      label: 'Zone'
    }, {
      key: 'area',
      label: 'Area',
      unit: 'm²',
      align: 'right'
    }, {
      key: 'min',
      label: 'Min elev.',
      unit: 'm',
      align: 'right'
    }, {
      key: 'max',
      label: 'Max elev.',
      unit: 'm',
      align: 'right'
    }, {
      key: 'slope',
      label: 'Mean slope',
      unit: '°',
      align: 'right'
    }, {
      key: 'conf',
      label: 'Source'
    }],
    rows: [{
      zone: 'Coastal terrace',
      area: '12 480',
      min: '2.4',
      max: '18.4',
      slope: '8.2',
      conf: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "measured"
      })
    }, {
      zone: 'North shoulder',
      area: '26 140',
      min: '18.4',
      max: '46.2',
      slope: '12.8',
      conf: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "measured"
      })
    }, {
      zone: 'Central ridge',
      area: '21 900',
      min: '46.2',
      max: '92.0',
      slope: '24.1',
      conf: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "measured"
      })
    }, {
      zone: 'South slope',
      area: '20 580',
      min: '8.1',
      max: '38.6',
      slope: '31.4',
      conf: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "calculated"
      })
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--type-body-sm)',
      color: 'var(--fg-secondary)'
    }
  }, "Areas are planimetric. Slope values are means derived from the digital terrain model and are not directly measured quantities.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(H, {
    eyebrow: "Section 04"
  }, "Analysis result"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(AnalysisCard, {
    analysis: "Buildable area",
    result: "4.8",
    unit: "ha below 25\xB0",
    ramp: "var(--slope-ramp)",
    rampLabels: ['0°', '15°', '25°', '35°', '45°+'],
    interpretation: "59% of the site sits below the 25\xB0 threshold, concentrated on the north shoulder and coastal terrace.",
    level: "calculated",
    source: "Derived from DTM \xB7 demo data"
  }), /*#__PURE__*/React.createElement(AnalysisCard, {
    analysis: "Cut & fill balance",
    result: "+2,140",
    unit: "m\xB3 net cut",
    interpretation: "A platform at +42 m balances close to zero if the access road is re-routed east of the ridge.",
    level: "calculated",
    source: "Volume from DTM \xB7 demo data"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(H, {
    eyebrow: "Section 05"
  }, "Accuracy and confidence"), /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: 'item',
      label: 'Item'
    }, {
      key: 'value',
      label: 'Value'
    }, {
      key: 'method',
      label: 'Method'
    }, {
      key: 'level',
      label: 'Confidence'
    }],
    rows: [{
      item: 'Vertical accuracy',
      value: '±25 mm',
      method: 'Instrument specification',
      level: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "verified",
        source: "Manufacturer"
      })
    }, {
      item: 'Horizontal accuracy',
      value: '±30 mm',
      method: 'GCP check, 6 points',
      level: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "measured"
      })
    }, {
      item: 'Cadastral boundary',
      value: 'Title deed line',
      method: 'Land office document',
      level: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "verified",
        source: "Chanote"
      })
    }, {
      item: 'Southern boundary',
      value: 'Approximate',
      method: 'Not re-surveyed on site',
      level: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "approximate"
      })
    }, {
      item: 'Conceptual footprint',
      value: 'Illustrative',
      method: 'Client sketch overlay',
      level: /*#__PURE__*/React.createElement(ConfidenceTag, {
        level: "conceptual"
      })
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      padding: 'var(--space-4)',
      border: '1px solid var(--status-estimated)',
      fontSize: 'var(--type-body-sm)',
      color: 'var(--fg-secondary)',
      maxWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg-primary)'
    }
  }, "Boundary notice."), " Only the line marked as official is registered. The approximate boundary is shown for orientation and must not be relied on for legal, transactional or construction purposes.")), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "EASY SCAN \xB7 Digital Land Intelligence \xB7 Thailand"), /*#__PURE__*/React.createElement("span", null, "ES-2025-0312-HILL \xB7 Issued 2025-03-19 \xB7 Demo data")));
}
Object.assign(window, {
  ReportPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/report/ReportPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/viewer/Viewer.jsx
try { (() => {
const {
  Logotype,
  Button,
  LayerControl,
  CoordinateLabel,
  ElevationLegend,
  BoundaryLegend,
  TerrainLegend,
  ScaleBar,
  NorthIndicator,
  ProjectMetadata,
  MeasurementLine,
  StatusPill,
  ConfidenceTag,
  Tag,
  SpecList,
  Eyebrow
} = window.EASYSCANDesignSystem_1b72cd;
const HERO = '../../assets/hero-terrain-scan.png';
const TOOLS = [['Select', 'pointer'], ['Distance', 'distance'], ['Height', 'height'], ['Area', 'area'], ['Section', 'section']];
function Viewer() {
  const [layers, setLayers] = React.useState({
    imagery: true,
    contours: true,
    boundaries: true,
    proposed: false,
    slope: false,
    pointcloud: false,
    drainage: false
  });
  const [tool, setTool] = React.useState('pointer');
  const [selected, setSelected] = React.useState(true);
  const [panel, setPanel] = React.useState('layers');
  const toggle = k => setLayers(l => ({
    ...l,
    [k]: !l[k]
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '296px 1fr 316px',
      gridTemplateRows: '56px 1fr 34px',
      height: '100vh',
      background: 'var(--bg-page)',
      color: 'var(--fg-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    variant: "wordmark",
    width: 150,
    assetBase: "../../"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontWeight: 500,
      fontSize: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, "The Hill"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, "Koh Phangan \xB7 8.1 ha"), /*#__PURE__*/React.createElement(StatusPill, {
    status: "ready"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'center'
    }
  }, TOOLS.map(([label, key]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    type: "button",
    onClick: () => setTool(key),
    style: {
      appearance: 'none',
      cursor: 'pointer',
      height: 'var(--control-h-sm)',
      padding: '0 12px',
      borderRadius: 'var(--radius-control)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-data)',
      border: '1px solid ' + (tool === key ? 'var(--accent-scan-dim)' : 'var(--border-faint)'),
      background: tool === key ? 'var(--accent-scan-tint)' : 'transparent',
      color: tool === key ? 'var(--accent-scan)' : 'var(--fg-secondary)'
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-hairline)',
      margin: '0 6px'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Share"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: '1px solid var(--border-hairline)',
      background: 'var(--bg-surface)',
      overflowY: 'auto',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      marginBottom: 'var(--space-5)',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, ['layers', 'legend'].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    onClick: () => setPanel(p),
    style: {
      appearance: 'none',
      background: 'none',
      border: 0,
      borderBottom: '1.5px solid ' + (panel === p ? 'var(--accent-coral)' : 'transparent'),
      cursor: 'pointer',
      padding: '0 0 10px',
      marginRight: 24,
      fontFamily: 'var(--font-structure)',
      fontWeight: 500,
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: panel === p ? 'var(--fg-primary)' : 'var(--fg-muted)'
    }
  }, p))), panel === 'layers' ? /*#__PURE__*/React.createElement(LayerControl, {
    active: layers,
    onToggle: toggle,
    groups: [{
      title: 'Reality',
      layers: [{
        key: 'imagery',
        label: 'Aerial imagery',
        hint: 'What the site looks like today'
      }, {
        key: 'pointcloud',
        label: 'Point cloud',
        hint: 'Raw scan points',
        color: 'var(--data-pointcloud)'
      }]
    }, {
      title: 'Measured',
      layers: [{
        key: 'contours',
        label: 'Contours',
        hint: 'Height lines every 1 m',
        meta: '1 m',
        color: 'var(--contour-major)'
      }, {
        key: 'boundaries',
        label: 'Boundaries',
        hint: 'Where the land ends',
        color: 'var(--boundary-surveyed)'
      }, {
        key: 'drainage',
        label: 'Drainage',
        hint: 'Where water runs',
        color: 'var(--data-water)'
      }]
    }, {
      title: 'Derived analysis',
      layers: [{
        key: 'slope',
        label: 'Slope',
        hint: 'How steep the ground is',
        color: 'var(--slope-2)'
      }]
    }, {
      title: 'Proposed',
      layers: [{
        key: 'proposed',
        label: 'Architecture',
        hint: 'Concept — not built',
        color: 'var(--data-proposed)'
      }]
    }]
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ElevationLegend, {
    min: 0,
    max: 112,
    interval: 1
  }), /*#__PURE__*/React.createElement(BoundaryLegend, {
    types: ['cadastral', 'surveyed', 'approximate']
  }), /*#__PURE__*/React.createElement(TerrainLegend, {
    layers: Object.keys(layers).filter(k => layers[k] && k !== 'imagery')
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-inset)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: HERO,
    alt: "Terrain model of The Hill",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: layers.imagery ? layers.contours ? 'brightness(.62) saturate(.85)' : 'none' : 'grayscale(1) brightness(.28)'
    }
  }), layers.contours && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 640",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    "aria-label": "Contours, 1 m interval"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "436.1,320.0 433.7,325.7 429.6,331.0 422.2,334.9 412.9,336.3 404.3,337.4 395.1,339.6 384.0,340.3 375.1,336.6 371.4,330.6 369.7,325.1 367.7,320.0 368.1,314.6 372.1,309.6 377.4,304.9 384.5,300.3 394.6,298.2 404.9,300.4 412.4,304.3 419.9,306.7 429.0,309.2 435.3,314.0",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "470.5,320.0 467.0,331.4 454.5,340.3 439.4,346.3 426.6,353.7 410.5,362.3 388.9,364.6 370.1,357.9 357.7,348.2 346.5,339.9 336.7,330.8 333.7,320.0 335.8,309.1 339.4,297.4 349.8,286.4 369.8,281.7 391.0,283.9 408.4,286.2 427.0,285.8 447.3,288.4 461.6,297.1 467.9,308.4",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "501.5,320.0 488.5,335.0 476.8,348.6 468.0,365.4 448.2,381.1 416.1,384.9 385.6,378.0 360.5,370.0 336.1,362.7 316.3,351.2 304.9,336.2 296.3,320.0 291.6,301.6 304.2,284.4 333.6,275.7 362.9,273.0 386.9,267.4 414.8,260.4 445.8,262.0 470.5,272.9 488.9,286.9 501.8,302.7",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "519.8,320.0 523.9,341.1 525.2,366.6 501.7,388.0 459.3,395.1 418.4,393.9 381.8,393.3 345.1,389.6 313.6,377.7 287.4,361.9 260.8,343.7 246.2,320.0 261.4,296.4 295.0,280.9 322.6,268.3 345.6,251.0 379.4,237.1 420.7,236.6 458.8,245.5 492.8,258.0 517.5,276.3 523.3,299.0",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "574.8,320.0 585.9,351.6 557.8,378.7 509.8,393.4 466.1,403.7 423.2,413.6 376.5,414.8 331.6,406.6 286.2,396.0 240.6,379.3 218.4,350.9 232.8,320.0 257.7,295.8 270.0,271.6 285.9,243.8 324.0,223.6 374.6,217.6 425.1,218.8 473.7,226.5 510.2,246.4 528.4,272.2 546.6,295.1",
    fill: "none",
    stroke: "var(--contour-major)",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "632.2,320.0 603.6,354.6 562.7,380.5 526.5,404.5 482.3,424.4 428.0,432.8 371.4,435.2 308.9,435.5 248.6,421.2 219.1,387.3 221.9,350.3 221.8,320.0 209.9,287.7 217.4,252.1 257.7,224.9 311.9,208.3 369.6,197.6 429.8,200.0 479.4,219.3 517.3,241.6 564.4,258.8 615.6,283.3",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "633.7,320.0 614.6,356.5 593.0,391.8 551.0,420.9 495.4,440.9 434.8,460.2 362.0,472.9 290.3,459.0 248.3,421.4 225.6,384.9 190.6,355.6 154.9,320.0 155.2,278.4 190.2,241.9 237.4,211.4 296.5,188.8 366.7,185.8 430.2,198.5 489.2,206.9 561.8,211.9 628.4,235.0 650.0,277.5",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "659.0,320.0 653.4,363.1 619.7,401.7 575.8,437.5 522.4,475.1 443.9,496.9 359.6,482.9 297.9,449.4 243.5,424.6 175.9,403.4 122.6,367.2 111.8,320.0 128.4,273.8 159.3,230.5 217.5,198.1 295.0,186.9 366.1,183.3 437.4,169.3 525.2,161.2 601.8,185.2 636.2,232.1 647.6,277.9",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "695.1,320.0 682.6,368.0 666.2,419.1 625.8,470.9 540.3,497.9 442.0,489.0 362.1,472.6 282.4,469.1 192.9,458.4 125.3,422.2 93.2,372.2 79.5,320.0 91.9,267.6 148.3,226.4 222.7,201.5 284.6,173.7 354.4,136.2 449.7,119.9 538.1,144.9 596.0,189.0 643.1,229.5 683.8,271.8",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "736.6,320.0 755.9,380.5 724.7,440.8 630.5,474.0 526.8,480.7 442.8,492.3 352.3,512.3 250.1,510.1 165.2,476.9 101.8,430.9 55.3,378.6 52.6,320.0 99.6,268.9 149.3,226.7 182.6,174.7 242.6,120.5 345.5,100.4 449.6,120.3 534.2,149.8 613.1,177.6 677.2,216.8 711.6,267.0",
    fill: "none",
    stroke: "var(--contour-major)",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "823.4,320.0 794.0,387.0 700.3,431.7 613.4,462.6 545.1,503.9 455.2,542.1 343.5,547.7 237.9,525.5 142.3,492.2 69.4,443.0 51.8,379.2 71.0,320.0 72.1,264.3 67.3,196.2 120.7,133.4 232.5,107.7 348.1,111.0 450.5,116.5 550.5,129.2 635.0,163.0 702.4,207.5 773.7,256.5",
    fill: "none",
    stroke: "var(--contour-minor)",
    strokeWidth: 0.75
  })), layers.slope && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--slope-ramp)',
      opacity: .34,
      mixBlendMode: 'multiply'
    }
  }), layers.boundaries && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 600",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    "aria-label": "Boundaries"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "120,120 660,86 690,440 190,510",
    fill: "none",
    stroke: "var(--boundary-surveyed)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "120,120 660,86",
    fill: "none",
    stroke: "var(--boundary-cadastral)",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "190,510 120,120",
    fill: "none",
    stroke: "var(--boundary-approximate)",
    strokeWidth: "1.5",
    strokeDasharray: "8 6",
    opacity: ".6"
  })), layers.proposed && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 600",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    "aria-label": "Proposed architecture"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "300,220 470,208 476,300 306,314",
    fill: "var(--data-proposed-fill)",
    stroke: "var(--data-proposed)",
    strokeWidth: "1.5",
    strokeDasharray: "2 5"
  })), layers.drainage && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 600",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    "aria-label": "Drainage"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M240 110 C 300 240, 260 360, 330 500",
    fill: "none",
    stroke: "var(--data-water)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M540 100 C 520 260, 590 340, 560 500",
    fill: "none",
    stroke: "var(--data-water)",
    strokeWidth: "2"
  })), (tool === 'distance' || tool === 'pointer') && /*#__PURE__*/React.createElement(MeasurementLine, {
    value: "184.6",
    unit: "m",
    length: "34%",
    style: {
      position: 'absolute',
      left: '22%',
      top: '62%'
    }
  }), tool === 'height' && /*#__PURE__*/React.createElement(MeasurementLine, {
    kind: "height",
    value: "38.2",
    unit: "m",
    orientation: "vertical",
    length: "150px",
    style: {
      position: 'absolute',
      left: '54%',
      top: '28%'
    }
  }), selected && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '37%',
      top: '34%',
      width: '22%',
      height: '18%',
      border: '1px solid var(--data-selected)',
      boxShadow: '0 0 0 4px var(--data-selected-halo)'
    }
  }), selected && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '37%',
      top: '31%',
      transform: 'translateY(-100%)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      background: 'rgba(0,0,0,.62)',
      padding: '3px 8px',
      color: 'var(--fg-primary)'
    }
  }, "Selected \xB7 Platform A \xB7 conceptual"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--space-5)',
      top: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(CoordinateLabel, {
    lat: 9.73824,
    lon: 100.01362,
    elevation: 38.2,
    local: "E 412.8  N 208.4",
    system: "WGS 84 / UTM 47N",
    overTerrain: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--space-5)',
      top: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(NorthIndicator, {
    rotation: -12
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--space-5)',
      bottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ScaleBar, {
    length: 100,
    unit: "m",
    pixels: 160
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: 'var(--space-5)',
      display: 'flex',
      gap: 8
    }
  }, ['Reality', 'Measured', 'Analysis', 'Proposed'].map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      padding: '4px 9px',
      background: 'rgba(0,0,0,.58)',
      border: '1px solid ' + (i === 1 ? 'var(--accent-scan-dim)' : 'var(--border-faint)'),
      color: i === 1 ? 'var(--accent-scan)' : 'var(--fg-muted)'
    }
  }, m)))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid var(--border-hairline)',
      background: 'var(--bg-surface)',
      overflowY: 'auto',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Selection"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SpecList, {
    dense: true,
    items: [{
      label: 'Object',
      value: 'Platform A'
    }, {
      label: 'State',
      value: 'Conceptual'
    }, {
      label: 'Footprint',
      value: '1 240',
      unit: 'm²'
    }, {
      label: 'Level',
      value: '+42.0',
      unit: 'm MSL'
    }, {
      label: 'Net cut',
      value: '+2 140',
      unit: 'm³'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(ConfidenceTag, {
    level: "conceptual",
    source: "Client sketch overlay"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-faint)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Project"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ProjectMetadata, {
    layout: "list",
    demo: true,
    project: "The Hill",
    location: "Koh Phangan",
    area: "8.1 ha",
    captureDate: "2025-03-12",
    technology: ['UAV LiDAR', 'Photogrammetry'],
    accuracy: "\xB125 mm vertical",
    coordinateSystem: "WGS 84 / UTM 47N"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-faint)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    full: true
  }, "Download contours (DXF)"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    full: true
  }, "Download terrain (OBJ)"), /*#__PURE__*/React.createElement(Button, {
    variant: "instrument",
    size: "sm",
    full: true
  }, "Open measurement report"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--space-5)',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--bg-inset)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tool: ", tool, " \xB7 Layers on: ", Object.keys(layers).filter(k => layers[k]).length, " \xB7 1 m contour interval"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-estimated)'
    }
  }, "Demo data \u2014 not a survey deliverable")));
}
Object.assign(window, {
  Viewer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/viewer/Viewer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gaussian.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  SectionHeading,
  TerrainFrame,
  SpecList,
  StatBlock,
  Tag,
  BeforeAfter,
  SpecCard
} = window.EASYSCANDesignSystem_1b72cd;
function Gaussian({
  onNavigate
}) {
  const {
    Section,
    ImagePlaceholder,
    HERO,
    G
  } = window;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '6fr 6fr',
      gap: 'var(--space-9)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Service"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--type-h1)',
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      maxWidth: '16ch'
    }
  }, "3D terrain modelling with Gaussian Splatting"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body-l)',
      color: 'var(--fg-secondary)'
    }
  }, "Gaussian Splatting creates a highly realistic digital representation of a place using thousands of photographs. Instead of a traditional 3D mesh, it reconstructs the scene with remarkable visual fidelity, preserving natural lighting, textures and fine details."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "instrument"
  }, "Photogrammetry"), /*#__PURE__*/React.createElement(Tag, {
    tone: "instrument"
  }, "Web viewer"), /*#__PURE__*/React.createElement(Tag, null, "No software install"))), /*#__PURE__*/React.createElement(TerrainFrame, {
    src: HERO,
    ratio: "4 / 3",
    caption: "Reference capture \xB7 Koh Phangan"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-surface)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Outcome",
    title: "Explore the site from anywhere"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-secondary)'
    }
  }, "The result is an interactive experience that can be explored directly in a web browser. Walk through the site from anywhere, review existing conditions with your team, and share the location with clients and partners without installing any additional software.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BeforeAfter, {
    beforeSrc: HERO,
    afterSrc: HERO,
    beforeLabel: "Photograph",
    afterLabel: "Splat reconstruction",
    ratio: "16 / 9"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-faint)'
    }
  }, "Drag the seam. Both frames use the same reference image \u2014 real paired captures required.")))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Method",
    title: "What happens, and what you receive"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SpecCard, {
    title: "Capture",
    subtitle: "On site",
    items: [{
      label: 'Input',
      value: 'Thousands of photographs'
    }, {
      label: 'Platform',
      value: 'UAV + ground'
    }, {
      label: 'Coverage',
      value: 'Full site walkthrough'
    }]
  }), /*#__PURE__*/React.createElement(SpecCard, {
    title: "Reconstruction",
    tone: "instrument",
    subtitle: "Processing",
    items: [{
      label: 'Method',
      value: 'Gaussian Splatting'
    }, {
      label: 'Preserves',
      value: 'Lighting, texture, detail'
    }, {
      label: 'Not',
      value: 'Traditional mesh'
    }]
  }), /*#__PURE__*/React.createElement(SpecCard, {
    title: "Delivery",
    subtitle: "Access",
    items: [{
      label: 'Format',
      value: 'Browser scene'
    }, {
      label: 'Sharing',
      value: 'Link, no install'
    }, {
      label: 'Use',
      value: 'Review with team and clients'
    }],
    footer: "Deliverable list per project"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-surface)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Examples",
    title: "Featured scans"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-6)'
    }
  }, [['The Bay', 'Koh Phangan'], ['The Hill', 'Koh Phangan'], ['Ameno', 'Koh Samui'], ['Akasha', 'Koh Phangan']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement(window.ImagePlaceholder, {
    ratio: "1 / 1",
    label: n + ' splat scene'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontWeight: 500,
      fontSize: 'var(--type-label)',
      letterSpacing: '.03em',
      textTransform: 'uppercase'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, l)))))));
}
Object.assign(window, {
  Gaussian
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gaussian.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  SectionHeading,
  TerrainFrame,
  ProcessStep,
  StatBlock,
  MediaTitleCard,
  SpecCard,
  Quote,
  Tag,
  CoordinateLabel
} = window.EASYSCANDesignSystem_1b72cd;
function Home({
  onNavigate
}) {
  const {
    Section,
    ImagePlaceholder,
    HERO,
    G
  } = window;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '78vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 ' + G + ' var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: HERO,
    alt: "Aerial scan of a hillside on Koh Phangan",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-top)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-identity)',
      fontSize: 'clamp(2rem,3.6vw,3.25rem)',
      letterSpacing: 'var(--tracking-identity)',
      lineHeight: 1,
      textTransform: 'uppercase',
      color: 'var(--fg-primary)'
    }
  }, "Landscape First."), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-structure)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--type-h1)',
      letterSpacing: '.02em',
      lineHeight: 1.06,
      textTransform: 'uppercase',
      maxWidth: '20ch'
    }
  }, "Understand the land before you build."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-lead)',
      fontSize: 'var(--type-body-l)',
      color: 'var(--fg-primary)',
      borderTop: '1px solid var(--border-strong)',
      paddingTop: 'var(--space-4)'
    }
  }, "We scan real land with LiDAR and drone photogrammetry and turn it into accurate 3D terrain models \u2014 so you can see the site before design begins."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('Contact')
  }, "Request a scan"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('Projects')
  }, "See projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 'var(--space-6)',
      right: G
    }
  }, /*#__PURE__*/React.createElement(CoordinateLabel, {
    lat: 9.73824,
    lon: 100.01362,
    elevation: 38.2,
    system: "WGS 84 / UTM 47N",
    overTerrain: true
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "The problem"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--type-h1)',
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      maxWidth: '20ch'
    }
  }, "Terrain is often misunderstood"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body-l)',
      color: 'var(--fg-secondary)'
    }
  }, "People lose money before construction even starts. A slope read wrong, drainage missed, a boundary assumed \u2014 each one becomes an expensive change on site."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-secondary)'
    }
  }, "We scan terrain with precision. You get measurable ground instead of assumptions.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      paddingTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "\xB125",
    unit: "mm",
    label: "Typical vertical accuracy",
    note: "Instrument specification"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3",
    unit: "islands",
    label: "Operating area",
    note: "Koh Phangan \xB7 Koh Samui \xB7 Phuket"
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-surface)",
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Process",
    title: "Complete solution for land transformation",
    lead: "Each service addresses a specific phase of your project. Together they form one path from ground to decision."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    index: 1,
    title: "Environment scan",
    outcome: "Every elevation recorded"
  }, "LiDAR and drone systems record every elevation and contour with precision."), /*#__PURE__*/React.createElement(ProcessStep, {
    index: 2,
    title: "3D terrain model",
    outcome: "Slopes, drainage and earthwork are measurable"
  }, "Data becomes a digital terrain model of the real site."), /*#__PURE__*/React.createElement(ProcessStep, {
    index: 3,
    title: "Digital twin",
    outcome: "The twin shows reality, not a sketch"
  }, "Architects position buildings on the scanned land."), /*#__PURE__*/React.createElement(ProcessStep, {
    index: 4,
    title: "Monitoring progress",
    outcome: "Volumes and levels verified as built"
  }, "Construction phases tracked as 3D documentation."))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(TerrainFrame, {
    src: HERO,
    ratio: "4 / 3",
    scrim: "flat",
    caption: "Reality \u2014 aerial capture"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontWeight: 500,
      fontSize: 'var(--type-h4)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, "Land")), /*#__PURE__*/React.createElement(TerrainFrame, {
    src: HERO,
    ratio: "4 / 3",
    scrim: "flat",
    grid: true,
    caption: "Measured reconstruction"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontWeight: 500,
      fontSize: 'var(--type-h4)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--accent-scan)'
    }
  }, "Scan"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-faint)'
    }
  }, "Same site, two states. The scan grid marks actual coverage, not decoration.")), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-surface)",
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Packages",
    title: "Choose your package",
    lead: "Three levels of depth, from a first look at the site to construction-stage monitoring."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SpecCard, {
    title: "Basic",
    subtitle: "Quick understanding of your site",
    items: [{
      label: 'Scan',
      value: '3D land scan'
    }, {
      label: 'Imagery',
      value: '360° / HDRI panoramas'
    }, {
      label: 'Model',
      value: 'Simplified terrain model'
    }, {
      label: 'Access',
      value: 'Online 3D viewer'
    }],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Enquire")
  }), /*#__PURE__*/React.createElement(SpecCard, {
    title: "Smart",
    tone: "instrument",
    subtitle: "Basic, plus measurable planning data",
    items: [{
      label: 'Contours',
      value: 'DXF + PDF',
      note: 'levels included'
    }, {
      label: 'Advice',
      value: 'Land use recommendation'
    }, {
      label: 'Concept',
      value: 'Placement on terrain'
    }, {
      label: 'Session',
      value: '1 live design session'
    }],
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "Enquire")
  }), /*#__PURE__*/React.createElement(SpecCard, {
    title: "Developer",
    tone: "brand",
    subtitle: "Smart, plus strategy and monitoring",
    items: [{
      label: 'Strategy',
      value: 'Land strategy + layout ideas'
    }, {
      label: 'BIM data',
      value: 'OBJ / FBX / DXF'
    }, {
      label: 'Monitoring',
      value: '3D construction tracking'
    }, {
      label: 'Analysis',
      value: 'Earth volume and levels'
    }],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Enquire")
  }))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Projects",
    title: "Sites we have measured",
    lead: "Real terrain, real deliverables. Figures shown here are illustrative."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(MediaTitleCard, {
    src: HERO,
    ratio: "3 / 4",
    location: "Koh Phangan",
    title: "The Hill",
    tags: ['LiDAR'],
    meta: "8.1 ha \xB7 Demo data",
    onClick: () => onNavigate('Projects')
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.ImagePlaceholder, {
    ratio: "3 / 4",
    label: "The Bay"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, "Koh Phangan \xB7 The Bay")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.ImagePlaceholder, {
    ratio: "3 / 4",
    label: "Ameno"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, "Koh Samui \xB7 Ameno")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.ImagePlaceholder, {
    ratio: "3 / 4",
    label: "Akasha"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-muted)'
    }
  }, "Koh Phangan \xB7 Akasha")))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-9)",
    bg: "var(--bg-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    size: "lg",
    attribution: "Development consultant",
    role: "Koh Samui \u2014 demo quote"
  }, "We saw the drainage problem before we drew anything."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--type-h2)',
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, "See your land \u2014 use it right"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--fg-secondary)'
    }
  }, "Tell us where the site is. We will tell you what we can measure and what you will receive."), /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Request a scan")))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Projects.jsx
try { (() => {
const {
  SectionHeading,
  MediaTitleCard,
  Eyebrow,
  Tag,
  Button,
  ProjectMetadata,
  TerrainFrame,
  DataTable,
  AnalysisCard,
  ElevationLegend,
  BoundaryLegend,
  ScaleBar,
  NorthIndicator,
  MeasurementLine,
  SpecCard,
  StatBlock,
  ConfidenceTag,
  StatusPill
} = window.EASYSCANDesignSystem_1b72cd;

/* VALIDATION 02 — project page: LANDSCAPE → DATA → INSIGHT */
function Projects({
  onNavigate
}) {
  const {
    Section,
    ImagePlaceholder,
    HERO,
    G
  } = window;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '62vh',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '0 ' + G + ' var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: HERO,
    alt: "The Hill, Koh Phangan",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "instrument"
  }, "Koh Phangan, Thailand"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-identity)',
      fontSize: 'var(--type-identity-m)',
      letterSpacing: 'var(--tracking-identity)',
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, "The Hill"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "instrument"
  }, "UAV LiDAR"), /*#__PURE__*/React.createElement(Tag, {
    tone: "instrument"
  }, "Photogrammetry"), /*#__PURE__*/React.createElement(Tag, null, "Digital twin"), /*#__PURE__*/React.createElement(Tag, {
    tone: "demo"
  }, "Demo data"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(ScaleBar, {
    length: 50,
    unit: "m",
    pixels: 130
  }), /*#__PURE__*/React.createElement(NorthIndicator, {
    rotation: -12
  })))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Landscape",
    index: 1,
    title: "A steep coastal shoulder above the bay",
    lead: "The site rises from a coastal track to a granite ridge. Access, drainage and buildable area were all uncertain before capture."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fg-secondary)'
    }
  }, "We flew the site in one session and produced a terrain model at 1 m contour interval, then derived slope, drainage and access analysis from it.")), /*#__PURE__*/React.createElement(ProjectMetadata, {
    layout: "list",
    status: "ready",
    demo: true,
    project: "The Hill",
    location: "Koh Phangan, Thailand",
    area: "8.1 ha",
    captureDate: "2025-03-12",
    technology: ['UAV LiDAR', 'Photogrammetry'],
    accuracy: "\xB125 mm vertical",
    deliverables: ['DXF', 'PDF', 'OBJ', 'Web viewer'],
    coordinateSystem: "WGS 84 / UTM 47N"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-surface)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Data",
    index: 2,
    title: "What the scan measured"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(TerrainFrame, {
    src: HERO,
    ratio: "16 / 10",
    scrim: "flat",
    overlay: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeasurementLine, {
      value: "184.6",
      unit: "m",
      length: "46%",
      style: {
        position: 'absolute',
        left: '10%',
        top: '74%'
      }
    }), /*#__PURE__*/React.createElement(MeasurementLine, {
      kind: "height",
      value: "38.2",
      unit: "m",
      orientation: "vertical",
      length: "96px",
      style: {
        position: 'absolute',
        right: '16%',
        top: '22%'
      }
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ElevationLegend, {
    min: 0,
    max: 112,
    interval: 1
  }), /*#__PURE__*/React.createElement(BoundaryLegend, {
    types: ['cadastral', 'surveyed', 'approximate']
  }), /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    caption: "Elevation summary \u2014 demo data",
    columns: [{
      key: 'zone',
      label: 'Zone'
    }, {
      key: 'min',
      label: 'Min',
      unit: 'm',
      align: 'right'
    }, {
      key: 'max',
      label: 'Max',
      unit: 'm',
      align: 'right'
    }],
    rows: [{
      zone: 'Coastal terrace',
      min: '2.4',
      max: '18.4'
    }, {
      zone: 'North shoulder',
      min: '18.4',
      max: '46.2'
    }, {
      zone: 'Ridge',
      min: '46.2',
      max: '112.0'
    }]
  })))), /*#__PURE__*/React.createElement(Section, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Insight",
    index: 3,
    title: "What the terrain means for the project",
    lead: "Analysis derived from the terrain model, not measured directly. Every figure states its derivation."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(AnalysisCard, {
    analysis: "Slope distribution",
    result: "41",
    unit: "% above 25\xB0",
    ramp: "var(--slope-ramp)",
    rampLabels: ['0°', '15°', '25°', '35°', '45°+'],
    interpretation: "Buildable area concentrates on the north-west shoulder.",
    level: "calculated",
    source: "Derived from DTM \xB7 demo data"
  }), /*#__PURE__*/React.createElement(AnalysisCard, {
    analysis: "Cut & fill balance",
    result: "+2,140",
    unit: "m\xB3 net cut",
    interpretation: "Platform at +42 m balances close to zero if the access road is re-routed.",
    level: "calculated",
    source: "Volume from DTM \xB7 demo data"
  }), /*#__PURE__*/React.createElement(AnalysisCard, {
    analysis: "Drainage concentration",
    result: "3",
    unit: "primary channels",
    interpretation: "Two channels cross the proposed platform and need diversion.",
    level: "estimated",
    source: "Flow accumulation \xB7 demo data"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--bg-surface)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Deliverables",
    title: "What the client received"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SpecCard, {
    title: "Terrain",
    items: [{
      label: 'Contours',
      value: 'DXF + PDF',
      note: '1 m'
    }, {
      label: 'Terrain model',
      value: 'OBJ'
    }, {
      label: 'Orthophoto',
      value: 'GeoTIFF'
    }]
  }), /*#__PURE__*/React.createElement(SpecCard, {
    title: "Analysis",
    tone: "instrument",
    items: [{
      label: 'Slope',
      value: 'Raster + plan'
    }, {
      label: 'Drainage',
      value: 'Channel plan'
    }, {
      label: 'Cut & fill',
      value: 'Volume report'
    }]
  }), /*#__PURE__*/React.createElement(SpecCard, {
    title: "Access",
    items: [{
      label: 'Viewer',
      value: 'Web link'
    }, {
      label: 'Sessions',
      value: '1 live review'
    }, {
      label: 'Support',
      value: 'Email'
    }],
    footer: /*#__PURE__*/React.createElement(ConfidenceTag, {
      level: "verified",
      source: "Delivery record \xB7 demo"
    })
  }))));
}
Object.assign(window, {
  Projects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const {
  Logotype,
  Button,
  Eyebrow,
  SectionHeading,
  Tag
} = window.EASYSCANDesignSystem_1b72cd;
const ASSET = '../../assets/';
const HERO = ASSET + 'hero-terrain-scan.png';
const G = 'var(--gutter-desktop)';

/* Honest stand-in for project imagery we were not supplied. */
function ImagePlaceholder({
  ratio = '16 / 9',
  label = 'Project imagery required',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: 'var(--bg-inset)',
      border: '1px solid var(--border-faint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-faint)'
    }
  }, "Placeholder \u2014 ", label));
}
function Section({
  children,
  pad = 'var(--section-explanation)',
  bg = 'transparent',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: pad + ' ' + G,
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, children));
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      padding: 'var(--space-8) ' + G + ' var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Logotype, {
    variant: "wordmark",
    width: 170,
    assetBase: '../../',
    strapline: true
  })), [['Services', ['Land scanning', 'Terrain models', 'Digital twins', 'Gaussian Splatting', 'Construction monitoring']], ['Projects', ['The Bay', 'The Hill', 'Ameno', 'Akasha']], ['Contact', ['Koh Phangan', 'Koh Samui', 'Phuket', 'hello@lidareasyscan.com']]].map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-structure)',
      fontWeight: 500,
      fontSize: 'var(--type-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)'
    }
  }, t), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-secondary)'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: 'var(--space-7) auto 0',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-information)',
      fontSize: 'var(--type-data-sm)',
      color: 'var(--fg-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Digital Land Intelligence \xB7 Thailand"), /*#__PURE__*/React.createElement("span", null, "Landscape First.")));
}
Object.assign(window, {
  ImagePlaceholder,
  Section,
  SiteFooter,
  ASSET,
  HERO,
  G
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logotype = __ds_scope.Logotype;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AnalysisCard = __ds_scope.AnalysisCard;

__ds_ns.ConfidenceTag = __ds_scope.ConfidenceTag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.MeasurementLine = __ds_scope.MeasurementLine;

__ds_ns.SpecCard = __ds_scope.SpecCard;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.BoundaryLegend = __ds_scope.BoundaryLegend;

__ds_ns.CoordinateLabel = __ds_scope.CoordinateLabel;

__ds_ns.ElevationLegend = __ds_scope.ElevationLegend;

__ds_ns.LayerControl = __ds_scope.LayerControl;

__ds_ns.NorthIndicator = __ds_scope.NorthIndicator;

__ds_ns.ProjectMetadata = __ds_scope.ProjectMetadata;

__ds_ns.ScaleBar = __ds_scope.ScaleBar;

__ds_ns.TerrainLegend = __ds_scope.TerrainLegend;

__ds_ns.BeforeAfter = __ds_scope.BeforeAfter;

__ds_ns.MediaTitleCard = __ds_scope.MediaTitleCard;

__ds_ns.TerrainFrame = __ds_scope.TerrainFrame;

})();
