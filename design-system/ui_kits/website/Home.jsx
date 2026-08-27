const { Button, Eyebrow, SectionHeading, TerrainFrame, ProcessStep, StatBlock, MediaTitleCard, SpecCard, Quote, Tag, CoordinateLabel } = window.EASYSCANDesignSystem_1b72cd;

function Home({onNavigate}){
  const {Section,ImagePlaceholder,HERO,G}=window;
  return(<main>
    {/* HERO MODE — terrain dominates, minimal content */}
    <div style={{position:'relative',minHeight:'78vh',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'0 '+G+' var(--space-9)'}}>
      <img src={HERO} alt="Aerial scan of a hillside on Koh Phangan" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <span aria-hidden="true" style={{position:'absolute',inset:0,background:'var(--scrim-bottom)'}}/>
      <span aria-hidden="true" style={{position:'absolute',inset:0,background:'var(--scrim-top)'}}/>
      <div style={{position:'relative',maxWidth:'var(--content-max)',margin:'0 auto',width:'100%',display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
        <span style={{fontFamily:'var(--font-identity)',fontSize:'clamp(2rem,3.6vw,3.25rem)',letterSpacing:'var(--tracking-identity)',lineHeight:1,textTransform:'uppercase',color:'var(--fg-primary)'}}>Landscape First.</span>
        <h1 style={{margin:0,fontFamily:'var(--font-structure)',fontWeight:'var(--weight-medium)',fontSize:'var(--type-h1)',letterSpacing:'.02em',lineHeight:1.06,textTransform:'uppercase',maxWidth:'20ch'}}>Understand the land before you build.</h1>
        <p style={{margin:0,maxWidth:'var(--measure-lead)',fontSize:'var(--type-body-l)',color:'var(--fg-primary)',borderTop:'1px solid var(--border-strong)',paddingTop:'var(--space-4)'}}>We scan real land with LiDAR and drone photogrammetry and turn it into accurate 3D terrain models — so you can see the site before design begins.</p>
        <div style={{display:'flex',gap:'var(--space-3)',alignItems:'center',flexWrap:'wrap'}}>
          <Button size="lg" onClick={()=>onNavigate('Contact')}>Request a scan</Button>
          <Button size="lg" variant="secondary" onClick={()=>onNavigate('Projects')}>See projects</Button>
        </div>
      </div>
      <div style={{position:'absolute',bottom:'var(--space-6)',right:G}}><CoordinateLabel lat={9.73824} lon={100.01362} elevation={38.2} system="WGS 84 / UTM 47N" overTerrain/></div>
    </div>

    {/* Problem — the brand is allowed to be blunt about risk */}
    <Section pad="var(--space-9)">
      <div style={{display:'grid',gridTemplateColumns:'7fr 5fr',gap:'var(--space-9)',alignItems:'start'}}>
        <div>
          <Eyebrow rule>The problem</Eyebrow>
          <h2 style={{marginTop:'var(--space-5)',fontSize:'var(--type-h1)',textTransform:'uppercase',letterSpacing:'.02em',maxWidth:'20ch'}}>Terrain is often misunderstood</h2>
          <p style={{fontSize:'var(--type-body-l)',color:'var(--fg-secondary)'}}>People lose money before construction even starts. A slope read wrong, drainage missed, a boundary assumed — each one becomes an expensive change on site.</p>
          <p style={{color:'var(--fg-secondary)'}}>We scan terrain with precision. You get measurable ground instead of assumptions.</p>
        </div>
        <div style={{display:'grid',gap:'var(--space-6)',paddingTop:'var(--space-7)'}}>
          <StatBlock value="±25" unit="mm" label="Typical vertical accuracy" note="Instrument specification"/>
          <StatBlock value="3" unit="islands" label="Operating area" note="Koh Phangan · Koh Samui · Phuket"/>
        </div>
      </div>
    </Section>

    {/* EXPLANATION MODE — the four-step process from the live site */}
    <Section bg="var(--bg-surface)" pad="var(--space-9)">
      <SectionHeading eyebrow="Process" title="Complete solution for land transformation" lead="Each service addresses a specific phase of your project. Together they form one path from ground to decision."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-6)',marginTop:'var(--space-8)'}}>
        <ProcessStep index={1} title="Environment scan" outcome="Every elevation recorded">LiDAR and drone systems record every elevation and contour with precision.</ProcessStep>
        <ProcessStep index={2} title="3D terrain model" outcome="Slopes, drainage and earthwork are measurable">Data becomes a digital terrain model of the real site.</ProcessStep>
        <ProcessStep index={3} title="Digital twin" outcome="The twin shows reality, not a sketch">Architects position buildings on the scanned land.</ProcessStep>
        <ProcessStep index={4} title="Monitoring progress" outcome="Volumes and levels verified as built">Construction phases tracked as 3D documentation.</ProcessStep>
      </div>
    </Section>

    {/* Land → scan transition */}
    <Section pad="var(--space-9)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-2)'}}>
        <TerrainFrame src={HERO} ratio="4 / 3" scrim="flat" caption="Reality — aerial capture"><span style={{fontFamily:'var(--font-structure)',fontWeight:500,fontSize:'var(--type-h4)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase'}}>Land</span></TerrainFrame>
        <TerrainFrame src={HERO} ratio="4 / 3" scrim="flat" grid caption="Measured reconstruction"><span style={{fontFamily:'var(--font-structure)',fontWeight:500,fontSize:'var(--type-h4)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--accent-scan)'}}>Scan</span></TerrainFrame>
      </div>
      <p style={{marginTop:'var(--space-5)',fontSize:'var(--type-data-sm)',color:'var(--fg-faint)'}}>Same site, two states. The scan grid marks actual coverage, not decoration.</p>
    </Section>

    {/* Packages — real content from the live site */}
    <Section bg="var(--bg-surface)" pad="var(--space-9)">
      <SectionHeading eyebrow="Packages" title="Choose your package" lead="Three levels of depth, from a first look at the site to construction-stage monitoring."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',marginTop:'var(--space-7)'}}>
        <SpecCard title="Basic" subtitle="Quick understanding of your site" items={[{label:'Scan',value:'3D land scan'},{label:'Imagery',value:'360° / HDRI panoramas'},{label:'Model',value:'Simplified terrain model'},{label:'Access',value:'Online 3D viewer'}]} footer={<Button variant="secondary" size="sm">Enquire</Button>}/>
        <SpecCard title="Smart" tone="instrument" subtitle="Basic, plus measurable planning data" items={[{label:'Contours',value:'DXF + PDF',note:'levels included'},{label:'Advice',value:'Land use recommendation'},{label:'Concept',value:'Placement on terrain'},{label:'Session',value:'1 live design session'}]} footer={<Button size="sm">Enquire</Button>}/>
        <SpecCard title="Developer" tone="brand" subtitle="Smart, plus strategy and monitoring" items={[{label:'Strategy',value:'Land strategy + layout ideas'},{label:'BIM data',value:'OBJ / FBX / DXF'},{label:'Monitoring',value:'3D construction tracking'},{label:'Analysis',value:'Earth volume and levels'}]} footer={<Button variant="secondary" size="sm">Enquire</Button>}/>
      </div>
    </Section>

    {/* Projects teaser */}
    <Section pad="var(--space-9)">
      <SectionHeading eyebrow="Projects" title="Sites we have measured" lead="Real terrain, real deliverables. Figures shown here are illustrative."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-5)',marginTop:'var(--space-7)'}}>
        <MediaTitleCard src={HERO} ratio="3 / 4" location="Koh Phangan" title="The Hill" tags={['LiDAR']} meta="8.1 ha · Demo data" onClick={()=>onNavigate('Projects')}/>
        <div><window.ImagePlaceholder ratio="3 / 4" label="The Bay"/><div style={{marginTop:'var(--space-3)',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>Koh Phangan · The Bay</div></div>
        <div><window.ImagePlaceholder ratio="3 / 4" label="Ameno"/><div style={{marginTop:'var(--space-3)',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>Koh Samui · Ameno</div></div>
        <div><window.ImagePlaceholder ratio="3 / 4" label="Akasha"/><div style={{marginTop:'var(--space-3)',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>Koh Phangan · Akasha</div></div>
      </div>
    </Section>

    <Section pad="var(--space-9)" bg="var(--bg-surface)">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-9)',alignItems:'center'}}>
        <Quote size="lg" attribution="Development consultant" role="Koh Samui — demo quote">We saw the drainage problem before we drew anything.</Quote>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)',alignItems:'flex-start'}}>
          <h2 style={{margin:0,fontSize:'var(--type-h2)',textTransform:'uppercase',letterSpacing:'.02em'}}>See your land — use it right</h2>
          <p style={{margin:0,color:'var(--fg-secondary)'}}>Tell us where the site is. We will tell you what we can measure and what you will receive.</p>
          <Button size="lg">Request a scan</Button>
        </div>
      </div>
    </Section>
  </main>);
}
Object.assign(window,{Home});
