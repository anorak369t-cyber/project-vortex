import React, {useState} from 'react';
import {services,projects,estimator,addons,activity as activityData} from './data';
import type { LucideIcon } from 'lucide-react';
import {createRoot} from 'react-dom/client';
import {Activity,ArrowRight,BarChart3,Bot,BriefcaseBusiness,Check,ChevronRight,Cloud,Code2,Cpu,Globe2,Layers3,Menu,MessageSquare,Network,PanelLeft,Rocket,Send,ShieldCheck,Sparkles,Users,X,Zap} from 'lucide-react';

type NavItem=[id:string,label:string,icon:LucideIcon];
type StatItem=[label:string,value:string,change:string,icon:LucideIcon];

const serviceIcons: Record<string, LucideIcon>={ 'Custom Software':Code2,'AI & Intelligent Workflows':Bot,'Cloud & SaaS':Cloud,'Cybersecurity':ShieldCheck,'UI/UX & Product Design':Layers3,'Digital Transformation':Network };
const activity=activityData;

function Glass({children,className}:{children:React.ReactNode;className?:string}){return <div className={'glass '+(className||'')}>{children}</div>}
function Brand(){return <div className="brand"><span className="mark"><i/></span><span><b>VORTEX</b><em>DYNAMICS</em></span></div>}

function Marketing({openOS,openAI}:{openOS:()=>void;openAI:()=>void}){
 return <main>
  <section className="hero wrap">
   <div>
    <div className="eyebrow"><span className="dot"/> DIGITAL INFRASTRUCTURE • UGANDA → GLOBAL</div>
    <h1>We build the systems that make <span>ambition executable.</span></h1>
    <p className="lead">Vortex Dynamics is a technology company creating reliable software, AI-powered products, cloud platforms and digital experiences for businesses, institutions and communities.</p>
    <div className="actions"><button className="btn primary" onClick={openOS}>Enter Vortex OS <ArrowRight size={16}/></button><button className="btn ghost" onClick={openAI}><Bot size={16}/> Talk to Vortex AI</button></div>
    <div className="proof"><span><Check size={14}/> Secure by design</span><span><Check size={14}/> AI-ready architecture</span><span><Check size={14}/> Built for scale</span></div>
   </div>
   <div className="hero-visual"><div className="orbit a"/><div className="orbit b"/><Glass className="core-card">
    <div className="card-head"><div><small>VORTEX CORE</small><h3>Digital command layer</h3></div><span className="live">LIVE</span></div>
    <div className="core"><div className="ring"><div className="core-icon"><Cpu size={28}/><small>AI</small></div></div></div>
    <div className="mini"><div><small>PROJECTS</small><b>24</b><span>+18%</span></div><div><small>UPTIME</small><b>99.9%</b><span>stable</span></div><div><small>WORKFLOWS</small><b>128</b><span>active</span></div></div>
   </Glass></div>
  </section>

  <section className="section wrap" id="services"><div className="section-head"><div><span className="eyebrow">CAPABILITIES</span><h2>One technology partner. Multiple layers of impact.</h2></div><p>Design, engineering, AI and infrastructure brought into one coherent system.</p></div>
   <div className="service-grid">{services.map(({title,text})=>{const Icon=serviceIcons[title];return (
      <Glass className="service" key={title}><div className="icon"><Icon size={19}/></div><h3>{title}</h3><p>{text}</p><ChevronRight className="arrow" size={16}/></Glass>
    )})}</div>
  </section>

  <section className="section band" id="ecosystem"><div className="wrap"><div className="section-head"><div><span className="eyebrow">PRODUCT ECOSYSTEM</span><h2>Designed as a connected Vortex universe.</h2></div><button className="text-btn" onClick={openOS}>Explore the OS <ArrowRight size={15}/></button></div>
   <div className="project-grid">{projects.map(({name,type,status,description},i)=>(
    <Glass className="project" key={name}><div className="project-top"><span>0{i+1}</span><b>{status}</b></div><div className="project-icon">{i===0?<Bot size={21}/>:i===1?<Network size={21}/>:i===2?<Sparkles size={21}/>:<BarChart3 size={21}/>}</div><h3>{name}</h3><p>{type} • {description}</p><div className="line"><i/><i/></div></Glass>
  ))}</div>
  </div></section>

  <section className="section split wrap" id="about"><div><span className="eyebrow">WHY VORTEX</span><h2>Technology should feel clear, not complicated.</h2><p className="large">Our design language combines premium glass surfaces, data clarity and purposeful motion. The result is software that feels advanced while remaining usable.</p><button className="btn primary" onClick={openAI}>Meet the AI layer <Sparkles size={16}/></button></div><div className="principles">{['Innovation with purpose','Security as a foundation','Human-centered interfaces','Sustainable, scalable systems'].map((x,i)=><div className="principle" key={x}><span>0{i+1}</span><strong>{x}</strong><Check size={16}/></div>)}</div></section>

  <section className="cta section wrap"><span className="eyebrow">2026 → 2035</span><h2>From a Ugandan technology company to an African innovation platform.</h2><p>Proprietary SaaS. AI-powered business solutions. Research. Talent. Regional expansion. Global clients.</p><button className="btn primary" onClick={openOS}>Open the Vortex workspace <ArrowRight size={16}/></button></section>
 </main>
}

function Sidebar({view,setView}:{view:string;setView:(view:string)=>void}){
 const items:NavItem[]=[['overview','Overview',PanelLeft],['projects','Projects',BriefcaseBusiness],['analytics','Analytics',BarChart3],['ai','Vortex AI',Bot],['activity','Activity',Activity],['estimator','Estimator',BarChart3]];
 return <aside className="sidebar"><Brand/><nav>{items.map(([id,label,Icon])=><button key={id} className={view===id?'active':''} onClick={()=>setView(id)}><Icon size={17}/>{label}</button>)}</nav><div className="side-bottom"><div><span className="dot"/> <b>Core systems</b><small>Operational</small></div><small>VORTEX OS • 0.1</small></div></aside>
}

function Overview({setView}:{setView:(view:string)=>void}){
 const stats:StatItem[]=[['ACTIVE PROJECTS','24','+18%',BriefcaseBusiness],['SYSTEM HEALTH','99.9%','stable',Activity],['AI WORKFLOWS','128','+31%',Bot],['NETWORK NODES','42','online',Network]];
 return <div className="dash"><div className="dash-title"><div><span className="eyebrow">COMMAND CENTER</span><h1>Good to see you.</h1><p>Here is the current pulse of the Vortex ecosystem.</p></div><button className="btn primary" onClick={()=>setView('ai')}><Bot size={16}/> Open Copilot</button></div>
 <div className="stats">{stats.map(([a,b,c,I])=>(
    <Glass className="stat" key={a}><div className="icon"><I size={17}/></div><small>{a}</small><strong>{b}</strong><span>{c}</span></Glass>
  ))}</div>
 <div className="dash-grid"><Glass className="wide"><div className="card-head"><div><small>PLATFORM MOMENTUM</small><h3>Digital operations</h3></div><b className="tag">LIVE DATA</b></div><div className="chart">{[38,52,44,68,57,76,72,91,82,96,88,100].map((h,i)=><i key={i} style={{height:h+'%'}}/>)}</div><div className="chart-label"><span>JAN</span><span>APR</span><span>JUL</span><span>OCT</span></div></Glass>
 <Glass className="wide"><div className="card-head"><div><small>ROADMAP</small><h3>2035 trajectory</h3></div><Rocket size={17}/></div><div className="timeline">{['Product studio','AI business layer','East Africa expansion','Global solutions platform'].map((x,i)=><div key={x}><span>{i+1}</span><p><b>{x}</b><small>{i<2?'Building now':'Strategic horizon'}</small></p></div>)}</div></Glass></div>
 <Glass className="activity"><div className="card-head"><div><small>RECENT ACTIVITY</small><h3>System events</h3></div><button className="text-btn" onClick={()=>setView('activity')}>View all</button></div>{activity.map(([t,title,src,s],i)=><div className="activity-row" key={t+title}><time>{t}</time><i className={'activity-dot '+s}/><p><b>{title}</b><small>{src}</small></p><ChevronRight size={14}/></div>)}</Glass>
 </div>
}

function Projects(){return <div className="dash"><div className="dash-title"><div><span className="eyebrow">PRODUCT PORTFOLIO</span><h1>Projects</h1><p>Products and platforms moving through the Vortex pipeline.</p></div><button className="btn primary"><Zap size={16}/> New project</button></div><div className="project-grid os-projects">{projects.concat([{name:'Digital Records Hub',type:'Enterprise',status:'Discovery',description:'Institutional workflows'}]).map(({name,type,status,description},i)=><Glass className="project" key={name}><div className="project-top"><span>0{i+1}</span><b>{status}</b></div><div className="project-icon"><Layers3 size={21}/></div><h3>{name}</h3><p>{type} • {description}</p><div className="progress"><i style={{width:[78,64,51,37,22][i%5]+'%'}}/></div><small>Delivery progress</small></Glass>})}</div></div>}

function Analytics(){return <div className="dash"><div className="dash-title"><div><span className="eyebrow">INTELLIGENCE</span><h1>Analytics</h1><p>Signals across products, workflows and digital infrastructure.</p></div></div><div className="analytics"><Glass className="wide"><div className="card-head"><div><small>WORKFLOW THROUGHPUT</small><h3>128 automated flows</h3></div><BarChart3 size={17}/></div><div className="big-chart">{[25,38,31,56,48,63,58,78,69,91,82,96].map((h,i)=><i key={i} style={{height:h+'%'}}/>)}</div></Glass><Glass className="insight"><Sparkles size={20}/><span className="eyebrow">AI INSIGHT</span><h3>Operations are becoming more connected.</h3><p>The unified Vortex architecture creates a foundation for shared analytics, automation and product intelligence.</p></Glass></div></div>}

function ActivityPage(){return <div className="dash"><div className="dash-title"><div><span className="eyebrow">AUDIT STREAM</span><h1>Activity</h1><p>Recent events across the Vortex ecosystem.</p></div></div><Glass className="activity full">{activity.concat([['08:02','Project architecture updated','Platform','new'],['07:46','Security scan completed','Cybersecurity','ok']]).map(([t,title,src,s])=><div className="activity-row" key={t+title}><time>{t}</time><i className={'activity-dot '+s}/><p><b>{title}</b><small>{src}</small></p><b className="tag">{s.toUpperCase()}</b></div>)}</Glass></div>}

function Estimator(){const [type,setType]=useState('website'),[selected,setSelected]=useState<string[]>(['responsive','seo']),[urgency,setUrgency]=useState<'standard'|'fast'|'express'>('standard');const rates:Record<'standard'|'fast'|'express',number>={standard:1,fast:1.25,express:1.5};const total=Math.round((estimator[type].base+selected.reduce((s,id)=>s+(addons.find(a=>a.id===id)?.price||0),0))*rates[urgency]);const toggle=(id:string)=>setSelected(x=>x.includes(id)?x.filter(v=>v!==id):[...x,id]);return <div className="dash"><div className="dash-title"><div><span className="eyebrow">PROJECT PLANNER</span><h1>Cost Estimator</h1><p>Turn an initial idea into a transparent project starting point.</p></div><span className="tag">UGX / USD</span></div><div className="estimate-grid"><Glass className="estimate-form"><span className="eyebrow">01 • PRODUCT TYPE</span><div className="choice-grid">{Object.entries(estimator).map(([id,x])=><button className={type===id?'choice active':'choice'} onClick={()=>setType(id)} key={id}><b>{x.label}</b><small>From ${x.base}</small></button>)}</div><span className="eyebrow">02 • FEATURES</span><div className="checks">{addons.map(a=><button className={selected.includes(a.id)?'check active':'check'} onClick={()=>toggle(a.id)} key={a.id}><span>{selected.includes(a.id)?<Check size={13}/>:null}</span><b>{a.label}</b><small>+${a.price}</small></button>)}</div><span className="eyebrow">03 • DELIVERY</span><div className="choice-grid small">{[['standard','Standard'],['fast','Fast'],['express','Express']].map(([id,label])=><button className={urgency===id?'choice active':'choice'} onClick={()=>setUrgency(id)} key={id}><b>{label}</b><small>{id==='standard'?'Normal timeline':id==='fast'?'+25%':'+50%'}</small></button>)}</div></Glass><Glass className="estimate-total"><span className="eyebrow">ESTIMATED STARTING RANGE</span><strong>${total.toLocaleString()}</strong><b>UGX {(total*3700).toLocaleString()}</b><p>Final scope, integrations, infrastructure and delivery requirements are confirmed during discovery.</p><button className="btn primary">Request this build <ArrowRight size={16}/></button></Glass></div></div>}
function AI(){
 const [messages,setMessages]=useState<{role:'ai'|'user';text:string}[]>([{role:'ai',text:'I’m Vortex AI. I can help you explore products, shape a business idea into a project brief, or reason through a workflow.'}]);
 const [input,setInput]=useState('');
 function send(){const q=input.trim();if(!q)return;const l=q.toLowerCase();let r='Vortex OS connects projects, analytics, activity and system health into one operational layer.';if(l.includes('ai'))r='The AI layer is designed as a copilot: conversational now, with secure tool and workflow integrations ready to grow.';if(l.includes('business')||l.includes('service'))r='Vortex Dynamics focuses on software, AI, cloud, cybersecurity, UI/UX and digital transformation for businesses and institutions.';setMessages(m=>m.concat([{role:'user',text:q},{role:'ai',text:r}]));setInput('')}
 return <div className="dash ai-page"><div className="dash-title"><div><span className="eyebrow">INTELLIGENCE LAYER</span><h1>Vortex AI</h1><p>A conversational interface for the Vortex ecosystem.</p></div><span className="live">ONLINE</span></div><Glass className="copilot"><div className="copilot-top"><div className="ai-avatar"><Bot size={23}/></div><div><b>Vortex Copilot</b><small>Private workspace • Ready</small></div></div><div className="messages">{messages.map((m,i)=><div className={'message '+m.role} key={i}><span>{m.role==='ai'?<Sparkles size={13}/>:<Users size={13}/>}</span><p>{m.text}</p></div>)}</div><div className="prompt"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask Vortex AI about products, workflows or strategy…"/><button onClick={send}><Send size={16}/></button></div></Glass></div>
}

function App(){
 const [mode,setMode]=useState('site'),[view,setView]=useState('overview'),[menu,setMenu]=useState(false);
 const openOS=()=>{setMode('os');setView('overview');setMenu(false)},openAI=()=>{setMode('os');setView('ai');setMenu(false)};
 return <div className="app">
 {mode==='site'?<><header className="site-nav"><Brand/><nav><a href="#services">Solutions</a><a href="#ecosystem">Products</a><a href="#about">About</a><button onClick={openOS}>Vortex OS <ArrowRight size={14}/></button></nav><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>{menu&&<div className="mobile-nav"><a href="#services">Solutions</a><a href="#ecosystem">Products</a><button onClick={openOS}>Open Vortex OS</button></div>}<Marketing openOS={openOS} openAI={openAI}/><footer><Brand/><span>© 2026 Vortex Dynamics. Building from Uganda, for the world.</span><span><span className="dot"/> Systems ready</span></footer></>:<div className="os"><Sidebar view={view} setView={setView}/><div className="os-main"><header className="os-bar"><button onClick={()=>setMode('site')}><Globe2 size={16}/> Public site</button><span className="crumb">VORTEX OS / {view.toUpperCase()}</span><span className="network"><span className="dot"/> All systems operational</span></header>{view==='overview'?<Overview setView={setView}/>:view==='projects'?<Projects/>:view==='analytics'?<Analytics/>:view==='activity'?<ActivityPage/>:view==='estimator'?<Estimator/>:<AI/>}</div></div>}
 </div>
}
export default App;
