const { Button, Eyebrow, SectionHeading, TerrainFrame, SpecList, StatBlock, Tag, BeforeAfter, SpecCard } = window.EASYSCANDesignSystem_1b72cd;

function Gaussian({onNavigate}){
  const {Section,ImagePlaceholder,HERO,G}=window;
  return(<main>
    <Section pad="var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'6fr 6fr',gap:'var(--space-9)',alignItems:'end'}}>
        <div>
          <Eyebrow rule>Service</Eyebrow>
          <h1 style={{marginTop:'var(--space-5)',fontSize:'var(--type-h1)',textTransform:'uppercase',letterSpacing:'.02em',maxWidth:'16ch'}}>3D terrain modelling with Gaussian Splatting</h1>
          <p style={{fontSize:'var(--type-body-l)',color:'var(--fg-secondary)'}}>Gaussian Splatting creates a highly realistic digital representation of a place using thousands of photographs. Instead of a traditional 3D mesh, it reconstructs the scene with remarkable visual fidelity, preserving natural lighting, textures and fine details.</p>
          <div style={{display:'flex',gap:'var(--space-2)',flexWrap:'wrap'}}><Tag tone="instrument">Photogrammetry</Tag><Tag tone="instrument">Web viewer</Tag><Tag>No software install</Tag></div>
        </div>
        <TerrainFrame src={HERO} ratio="4 / 3" caption="Reference capture · Koh Phangan"/>
      </div>
    </Section>

    <Section bg="var(--bg-surface)" pad="var(--space-8)">
      <div style={{display:'grid',gridTemplateColumns:'5fr 7fr',gap:'var(--space-9)'}}>
        <div>
          <SectionHeading eyebrow="Outcome" title="Explore the site from anywhere"/>
          <p style={{color:'var(--fg-secondary)'}}>The result is an interactive experience that can be explored directly in a web browser. Walk through the site from anywhere, review existing conditions with your team, and share the location with clients and partners without installing any additional software.</p>
        </div>
        <div>
          <BeforeAfter beforeSrc={HERO} afterSrc={HERO} beforeLabel="Photograph" afterLabel="Splat reconstruction" ratio="16 / 9"/>
          <p style={{marginTop:'var(--space-3)',fontSize:'var(--type-data-sm)',color:'var(--fg-faint)'}}>Drag the seam. Both frames use the same reference image — real paired captures required.</p>
        </div>
      </div>
    </Section>

    <Section pad="var(--space-8)">
      <SectionHeading eyebrow="Method" title="What happens, and what you receive"/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)',marginTop:'var(--space-7)'}}>
        <SpecCard title="Capture" subtitle="On site" items={[{label:'Input',value:'Thousands of photographs'},{label:'Platform',value:'UAV + ground'},{label:'Coverage',value:'Full site walkthrough'}]}/>
        <SpecCard title="Reconstruction" tone="instrument" subtitle="Processing" items={[{label:'Method',value:'Gaussian Splatting'},{label:'Preserves',value:'Lighting, texture, detail'},{label:'Not',value:'Traditional mesh'}]}/>
        <SpecCard title="Delivery" subtitle="Access" items={[{label:'Format',value:'Browser scene'},{label:'Sharing',value:'Link, no install'},{label:'Use',value:'Review with team and clients'}]} footer="Deliverable list per project"/>
      </div>
    </Section>

    <Section bg="var(--bg-surface)" pad="var(--space-8)">
      <SectionHeading eyebrow="Examples" title="Featured scans"/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-4)',marginTop:'var(--space-6)'}}>
        {[['The Bay','Koh Phangan'],['The Hill','Koh Phangan'],['Ameno','Koh Samui'],['Akasha','Koh Phangan']].map(([n,l])=>(
          <div key={n}><window.ImagePlaceholder ratio="1 / 1" label={n+' splat scene'}/>
          <div style={{marginTop:'var(--space-3)',display:'flex',flexDirection:'column',gap:2}}>
            <span style={{fontFamily:'var(--font-structure)',fontWeight:500,fontSize:'var(--type-label)',letterSpacing:'.03em',textTransform:'uppercase'}}>{n}</span>
            <span style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-muted)'}}>{l}</span>
          </div></div>))}
      </div>
    </Section>
  </main>);
}
Object.assign(window,{Gaussian});
