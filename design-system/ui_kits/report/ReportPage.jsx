const { Logotype, SpecList, DataTable, BoundaryLegend, ElevationLegend, TerrainLegend, ScaleBar, NorthIndicator, ConfidenceTag, StatusPill, ProjectMetadata, MeasurementLine, AnalysisCard, Tag } = window.EASYSCANDesignSystem_1b72cd;

const Rule=()=> <div style={{height:1,background:'var(--border-hairline)'}}/>;
const H=({children,eyebrow})=>(<div style={{display:'flex',flexDirection:'column',gap:6,marginBottom:'var(--space-4)'}}>
  {eyebrow&&<span style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--fg-muted)'}}>{eyebrow}</span>}
  <h2 style={{margin:0,fontFamily:'var(--font-structure)',fontWeight:'var(--weight-medium)',fontSize:'var(--type-h3)',textTransform:'uppercase',letterSpacing:'.03em'}}>{children}</h2>
</div>);

function ReportPage(){
  return(<div className="es-light" style={{background:'var(--bg-surface)',color:'var(--fg-primary)',width:1000,margin:'0 auto',padding:'56px 64px 72px',boxShadow:'0 14px 40px -12px rgba(0,0,0,.35)'}}>
    {/* Report header */}
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',paddingBottom:'var(--space-5)',borderBottom:'1.5px solid var(--fg-primary)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
        <Logotype variant="monogram-black" width={120} assetBase="../../"/>
        <div>
          <div style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--fg-muted)'}}>Terrain analysis report · ES-2025-0312-HILL</div>
          <h1 style={{margin:'6px 0 0',fontFamily:'var(--font-structure)',fontWeight:'var(--weight-medium)',fontSize:'var(--type-h2)',textTransform:'uppercase',letterSpacing:'.02em'}}>The Hill — Koh Phangan</h1>
        </div>
      </div>
      <div style={{textAlign:'right',display:'flex',flexDirection:'column',gap:8,alignItems:'flex-end'}}>
        <StatusPill status="ready" label="Ready · 2025-03-19"/>
        <span style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--status-estimated)',border:'1px solid var(--status-estimated)',padding:'3px 8px',letterSpacing:'var(--tracking-label)',textTransform:'uppercase'}}>Demo data</span>
        <span style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>Page 1 of 12</span>
      </div>
    </header>

    {/* 1 — Site map */}
    <section style={{marginTop:'var(--space-7)'}}>
      <H eyebrow="Section 01">Site map</H>
      <div style={{display:'grid',gridTemplateColumns:'7fr 5fr',gap:'var(--space-6)',alignItems:'start'}}>
        <figure style={{margin:0}}>
          <div style={{position:'relative',aspectRatio:'4 / 3',background:'#F2F1EE',border:'1px solid var(--border-hairline)',overflow:'hidden'}}>
            {/* contour plan, light mode */}
            {Array.from({length:22},(_,i)=><span key={i} aria-hidden="true" style={{position:'absolute',left:0,right:0,top:(i*4.5+3)+'%',height:i%5===0?1.5:0.75,background:i%5===0?'var(--contour-major-light)':'var(--contour-minor-light)'}}/>)}
            {/* surveyed boundary */}
            <svg viewBox="0 0 400 300" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} aria-label="Boundaries">
              <polygon points="52,58 322,42 340,214 96,254" fill="none" stroke="#0D1011" strokeWidth="1.5"/>
              <polygon points="120,96 268,86 276,178 138,196" fill="rgba(255,133,98,.18)" stroke="#C9613F" strokeWidth="1.5" strokeDasharray="2 5"/>
              <polyline points="52,58 322,42" fill="none" stroke="#C9A227" strokeWidth="2.5"/>
            </svg>
            <span style={{position:'absolute',left:14,bottom:14}}><ScaleBar length={50} unit="m" pixels={120} tone="dark"/></span>
            <span style={{position:'absolute',right:14,top:14}}><NorthIndicator rotation={-12} tone="dark"/></span>
            <span style={{position:'absolute',left:14,top:14,fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-primary)'}}>1 : 1 000 · 1 m contour interval</span>
          </div>
          <figcaption style={{marginTop:'var(--space-3)',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>Fig. 01 — Contour plan with boundaries. Coral hatch marks the conceptual development area, not an approved footprint.</figcaption>
        </figure>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
          <BoundaryLegend types={['cadastral','surveyed','conceptual']}/>
          <Rule/>
          <ElevationLegend min={0} max={112} interval={1}/>
          <Rule/>
          <TerrainLegend layers={[{key:'contours',label:'Contours',value:'1 m'},{key:'proposed',label:'Conceptual footprint'},{key:'water',label:'Drainage channels'}]}/>
        </div>
      </div>
    </section>

    {/* 2 — Project data */}
    <section style={{marginTop:'var(--space-8)'}}>
      <H eyebrow="Section 02">Project data</H>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-7)'}}>
        <ProjectMetadata layout="list" project="The Hill" location="Koh Phangan, Surat Thani, Thailand" area="8.1 ha" captureDate="2025-03-12" technology={['UAV LiDAR','Photogrammetry']} accuracy="±25 mm vertical (instrument spec)" coordinateSystem="WGS 84 / UTM 47N"/>
        <SpecList items={[{label:'Flight height',value:'85',unit:'m AGL'},{label:'Point density',value:'480',unit:'pts/m²'},{label:'Ground control',value:'6 checked points'},{label:'Contour interval',value:'1',unit:'m'},{label:'Vertical datum',value:'MSL'},{label:'Deliverables',value:'DXF · PDF · OBJ · Viewer'}]}/>
      </div>
    </section>

    {/* 3 — Measurements */}
    <section style={{marginTop:'var(--space-8)'}}>
      <H eyebrow="Section 03">Measurements</H>
      <DataTable caption="Table 01 — Zone summary (demo data)" columns={[
        {key:'zone',label:'Zone'},{key:'area',label:'Area',unit:'m²',align:'right'},
        {key:'min',label:'Min elev.',unit:'m',align:'right'},{key:'max',label:'Max elev.',unit:'m',align:'right'},
        {key:'slope',label:'Mean slope',unit:'°',align:'right'},{key:'conf',label:'Source'}]}
        rows={[
        {zone:'Coastal terrace',area:'12 480',min:'2.4',max:'18.4',slope:'8.2',conf:<ConfidenceTag level="measured"/>},
        {zone:'North shoulder',area:'26 140',min:'18.4',max:'46.2',slope:'12.8',conf:<ConfidenceTag level="measured"/>},
        {zone:'Central ridge',area:'21 900',min:'46.2',max:'92.0',slope:'24.1',conf:<ConfidenceTag level="measured"/>},
        {zone:'South slope',area:'20 580',min:'8.1',max:'38.6',slope:'31.4',conf:<ConfidenceTag level="calculated"/>}]}/>
      <p style={{marginTop:'var(--space-4)',fontSize:'var(--type-body-sm)',color:'var(--fg-secondary)'}}>Areas are planimetric. Slope values are means derived from the digital terrain model and are not directly measured quantities.</p>
    </section>

    {/* 4 — Analysis */}
    <section style={{marginTop:'var(--space-8)'}}>
      <H eyebrow="Section 04">Analysis result</H>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'var(--space-5)'}}>
        <AnalysisCard analysis="Buildable area" result="4.8" unit="ha below 25°" ramp="var(--slope-ramp)" rampLabels={['0°','15°','25°','35°','45°+']} interpretation="59% of the site sits below the 25° threshold, concentrated on the north shoulder and coastal terrace." level="calculated" source="Derived from DTM · demo data"/>
        <AnalysisCard analysis="Cut & fill balance" result="+2,140" unit="m³ net cut" interpretation="A platform at +42 m balances close to zero if the access road is re-routed east of the ridge." level="calculated" source="Volume from DTM · demo data"/>
      </div>
    </section>

    {/* 5 — Accuracy & confidence */}
    <section style={{marginTop:'var(--space-8)'}}>
      <H eyebrow="Section 05">Accuracy and confidence</H>
      <DataTable dense columns={[{key:'item',label:'Item'},{key:'value',label:'Value'},{key:'method',label:'Method'},{key:'level',label:'Confidence'}]}
        rows={[
        {item:'Vertical accuracy',value:'±25 mm',method:'Instrument specification',level:<ConfidenceTag level="verified" source="Manufacturer"/>},
        {item:'Horizontal accuracy',value:'±30 mm',method:'GCP check, 6 points',level:<ConfidenceTag level="measured"/>},
        {item:'Cadastral boundary',value:'Title deed line',method:'Land office document',level:<ConfidenceTag level="verified" source="Chanote"/>},
        {item:'Southern boundary',value:'Approximate',method:'Not re-surveyed on site',level:<ConfidenceTag level="approximate"/>},
        {item:'Conceptual footprint',value:'Illustrative',method:'Client sketch overlay',level:<ConfidenceTag level="conceptual"/>}]}/>
      <p style={{marginTop:'var(--space-5)',padding:'var(--space-4)',border:'1px solid var(--status-estimated)',fontSize:'var(--type-body-sm)',color:'var(--fg-secondary)',maxWidth:'none'}}>
        <strong style={{color:'var(--fg-primary)'}}>Boundary notice.</strong> Only the line marked as official is registered. The approximate boundary is shown for orientation and must not be relied on for legal, transactional or construction purposes.
      </p>
    </section>

    <footer style={{marginTop:'var(--space-8)',paddingTop:'var(--space-4)',borderTop:'1px solid var(--border-hairline)',display:'flex',justifyContent:'space-between',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>
      <span>EASY SCAN · Digital Land Intelligence · Thailand</span>
      <span>ES-2025-0312-HILL · Issued 2025-03-19 · Demo data</span>
    </footer>
  </div>);
}
Object.assign(window,{ReportPage});
