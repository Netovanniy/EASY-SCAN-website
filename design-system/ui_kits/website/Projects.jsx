const { SectionHeading, MediaTitleCard, Eyebrow, Tag, Button, ProjectMetadata, TerrainFrame, DataTable, AnalysisCard, ElevationLegend, BoundaryLegend, ScaleBar, NorthIndicator, MeasurementLine, SpecCard, StatBlock, ConfidenceTag, StatusPill } = window.EASYSCANDesignSystem_1b72cd;

/* VALIDATION 02 — project page: LANDSCAPE → DATA → INSIGHT */
function Projects({onNavigate}){
  const {Section,ImagePlaceholder,HERO,G}=window;
  return(<main>
    <div style={{position:'relative',minHeight:'62vh',display:'flex',alignItems:'flex-end',padding:'0 '+G+' var(--space-8)'}}>
      <img src={HERO} alt="The Hill, Koh Phangan" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <span aria-hidden="true" style={{position:'absolute',inset:0,background:'var(--scrim-bottom)'}}/>
      <div style={{position:'relative',maxWidth:'var(--content-max)',margin:'0 auto',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:'var(--space-7)'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
          <Eyebrow tone="instrument">Koh Phangan, Thailand</Eyebrow>
          <h1 style={{margin:0,fontFamily:'var(--font-identity)',fontSize:'var(--type-identity-m)',letterSpacing:'var(--tracking-identity)',textTransform:'uppercase',lineHeight:1}}>The Hill</h1>
          <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap'}}><Tag tone="instrument">UAV LiDAR</Tag><Tag tone="instrument">Photogrammetry</Tag><Tag>Digital twin</Tag><Tag tone="demo">Demo data</Tag></div>
        </div>
        <div style={{display:'flex',gap:'var(--space-6)',alignItems:'flex-end'}}><ScaleBar length={50} unit="m" pixels={130}/><NorthIndicator rotation={-12}/></div>
      </div>
    </div>

    <Section pad="var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'7fr 5fr',gap:'var(--space-9)',alignItems:'start'}}>
        <div>
          <SectionHeading eyebrow="Landscape" index={1} title="A steep coastal shoulder above the bay" lead="The site rises from a coastal track to a granite ridge. Access, drainage and buildable area were all uncertain before capture."/>
          <p style={{color:'var(--fg-secondary)'}}>We flew the site in one session and produced a terrain model at 1 m contour interval, then derived slope, drainage and access analysis from it.</p>
        </div>
        <ProjectMetadata layout="list" status="ready" demo project="The Hill" location="Koh Phangan, Thailand" area="8.1 ha" captureDate="2025-03-12" technology={['UAV LiDAR','Photogrammetry']} accuracy="±25 mm vertical" deliverables={['DXF','PDF','OBJ','Web viewer']} coordinateSystem="WGS 84 / UTM 47N"/>
      </div>
    </Section>

    <Section bg="var(--bg-surface)" pad="var(--space-8)">
      <SectionHeading eyebrow="Data" index={2} title="What the scan measured"/>
      <div style={{display:'grid',gridTemplateColumns:'7fr 5fr',gap:'var(--space-6)',marginTop:'var(--space-7)',alignItems:'start'}}>
        <TerrainFrame src={HERO} ratio="16 / 10" scrim="flat" overlay={<React.Fragment>
          <MeasurementLine value="184.6" unit="m" length="46%" style={{position:'absolute',left:'10%',top:'74%'}}/>
          <MeasurementLine kind="height" value="38.2" unit="m" orientation="vertical" length="96px" style={{position:'absolute',right:'16%',top:'22%'}}/>
        </React.Fragment>}/>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
          <ElevationLegend min={0} max={112} interval={1}/>
          <BoundaryLegend types={['cadastral','surveyed','approximate']}/>
          <DataTable dense caption="Elevation summary — demo data" columns={[{key:'zone',label:'Zone'},{key:'min',label:'Min',unit:'m',align:'right'},{key:'max',label:'Max',unit:'m',align:'right'}]} rows={[{zone:'Coastal terrace',min:'2.4',max:'18.4'},{zone:'North shoulder',min:'18.4',max:'46.2'},{zone:'Ridge',min:'46.2',max:'112.0'}]}/>
        </div>
      </div>
    </Section>

    <Section pad="var(--space-8)">
      <SectionHeading eyebrow="Insight" index={3} title="What the terrain means for the project" lead="Analysis derived from the terrain model, not measured directly. Every figure states its derivation."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',marginTop:'var(--space-7)'}}>
        <AnalysisCard analysis="Slope distribution" result="41" unit="% above 25°" ramp="var(--slope-ramp)" rampLabels={['0°','15°','25°','35°','45°+']} interpretation="Buildable area concentrates on the north-west shoulder." level="calculated" source="Derived from DTM · demo data"/>
        <AnalysisCard analysis="Cut & fill balance" result="+2,140" unit="m³ net cut" interpretation="Platform at +42 m balances close to zero if the access road is re-routed." level="calculated" source="Volume from DTM · demo data"/>
        <AnalysisCard analysis="Drainage concentration" result="3" unit="primary channels" interpretation="Two channels cross the proposed platform and need diversion." level="estimated" source="Flow accumulation · demo data"/>
      </div>
    </Section>

    <Section bg="var(--bg-surface)" pad="var(--space-8)">
      <SectionHeading eyebrow="Deliverables" title="What the client received"/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',marginTop:'var(--space-6)'}}>
        <SpecCard title="Terrain" items={[{label:'Contours',value:'DXF + PDF',note:'1 m'},{label:'Terrain model',value:'OBJ'},{label:'Orthophoto',value:'GeoTIFF'}]}/>
        <SpecCard title="Analysis" tone="instrument" items={[{label:'Slope',value:'Raster + plan'},{label:'Drainage',value:'Channel plan'},{label:'Cut & fill',value:'Volume report'}]}/>
        <SpecCard title="Access" items={[{label:'Viewer',value:'Web link'},{label:'Sessions',value:'1 live review'},{label:'Support',value:'Email'}]} footer={<ConfidenceTag level="verified" source="Delivery record · demo"/>}/>
      </div>
    </Section>
  </main>);
}
Object.assign(window,{Projects});
