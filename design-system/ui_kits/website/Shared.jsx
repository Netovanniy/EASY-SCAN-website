const { Logotype, Button, Eyebrow, SectionHeading, Tag } = window.EASYSCANDesignSystem_1b72cd;
const ASSET='../../assets/';
const HERO=ASSET+'hero-terrain-scan.png';
const G='var(--gutter-desktop)';

/* Honest stand-in for project imagery we were not supplied. */
function ImagePlaceholder({ratio='16 / 9',label='Project imagery required',style}){
  return(<div style={{aspectRatio:ratio,background:'var(--bg-inset)',border:'1px solid var(--border-faint)',display:'flex',alignItems:'center',justifyContent:'center',...style}}>
    <span style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--fg-faint)'}}>Placeholder — {label}</span>
  </div>);
}

function Section({children,pad='var(--section-explanation)',bg='transparent',style}){
  return(<section style={{padding:pad+' '+G,background:bg,...style}}><div style={{maxWidth:'var(--content-max)',margin:'0 auto'}}>{children}</div></section>);
}

function SiteFooter({onNavigate}){
  return(<footer style={{borderTop:'1px solid var(--border-hairline)',padding:'var(--space-8) '+G+' var(--space-7)'}}>
    <div style={{maxWidth:'var(--content-max)',margin:'0 auto',display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr 1fr',gap:'var(--space-7)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
        <Logotype variant="wordmark" width={170} assetBase={'../../'} strapline/>
      </div>
      {[['Services',['Land scanning','Terrain models','Digital twins','Gaussian Splatting','Construction monitoring']],
        ['Projects',['The Bay','The Hill','Ameno','Akasha']],
        ['Contact',['Koh Phangan','Koh Samui','Phuket','hello@lidareasyscan.com']]].map(([t,items])=>(
        <div key={t} style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <span style={{fontFamily:'var(--font-structure)',fontWeight:500,fontSize:'var(--type-label-sm)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--fg-muted)'}}>{t}</span>
          {items.map(i=><span key={i} style={{fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-secondary)'}}>{i}</span>)}
        </div>))}
    </div>
    <div style={{maxWidth:'var(--content-max)',margin:'var(--space-7) auto 0',display:'flex',justifyContent:'space-between',fontFamily:'var(--font-information)',fontSize:'var(--type-data-sm)',color:'var(--fg-faint)'}}>
      <span>Digital Land Intelligence · Thailand</span><span>Landscape First.</span>
    </div>
  </footer>);
}
Object.assign(window,{ImagePlaceholder,Section,SiteFooter,ASSET,HERO,G});
