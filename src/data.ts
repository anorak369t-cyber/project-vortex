export interface Service { title:string; tag:string; text:string }
export interface ProductProject { name:string; type:string; status:string; description:string }
export interface EstimatorOption { label:string; base:number }
export interface Addon { id:string; label:string; price:number; default?:boolean }
export type ActivityStatus='live'|'new'|'ok';
export type ActivityItem=[time:string,title:string,source:string,status:ActivityStatus];

export const services:Service[]=[
 {title:'Custom Software',tag:'ENGINEERING',text:'Secure, scalable web platforms and business systems built around real workflows.'},
 {title:'AI & Intelligent Workflows',tag:'AI SYSTEMS',text:'Copilots, automation, analytics and AI-ready products designed for practical use.'},
 {title:'Cloud & SaaS',tag:'INFRASTRUCTURE',text:'Modern cloud applications, integrations, digital records and subscription products.'},
 {title:'Cybersecurity',tag:'SECURITY',text:'Security-minded architecture, awareness and resilient digital infrastructure.'},
 {title:'UI/UX & Product Design',tag:'DESIGN',text:'Premium interfaces that turn complex technology into clear user experiences.'},
 {title:'Digital Transformation',tag:'TRANSFORMATION',text:'Technology strategy and workflow modernization for organizations and SMEs.'}
];
export const packages=[
 {name:'Launch',from:180,description:'A focused digital presence for a new product, service or organization.',items:['Responsive premium UI','Performance foundation','SEO-ready structure','Contact / inquiry flow']},
 {name:'Scale',from:450,description:'A connected web application for teams that need workflows and data.',items:['Custom application UI','Authentication foundation','Admin workspace','Workflow-ready architecture']},
 {name:'Intelligence',from:650,description:'An AI-enabled product foundation for automation and decision support.',items:['AI copilot interface','Data/analytics layer','Secure integration points','Scalable product architecture']}
];
export const projects:ProductProject[]=[
 {name:'Vortex AI Copilot',type:'AI Platform',status:'Prototype',description:'Conversational intelligence for product, workflow and knowledge tasks.'},
 {name:'Vortex OS',type:'Operations',status:'Active concept',description:'A unified command center for projects, analytics, activity and system health.'},
 {name:'AI Study Assistant',type:'EdTech',status:'Product concept',description:'AI-assisted learning experiences designed around accessible education.'},
 {name:'Vortex Commerce',type:'SME SaaS',status:'Roadmap',description:'Digital business tools for commerce, customer workflows and growth.'}
];
export const estimator:Record<string,EstimatorOption>={
 website:{label:'Business Website',base:180},webapp:{label:'Custom Web Application',base:450},
 mobile:{label:'Mobile App',base:650},ecom:{label:'E-Commerce Store',base:350}
};
export const addons:Addon[]=[
 {id:'responsive',label:'Ultra-responsive glass UI',price:40,default:true},
 {id:'seo',label:'Performance & SEO',price:50,default:true},
 {id:'momo',label:'MTN / Airtel MoMo integration',price:80},
 {id:'payments',label:'Card payments',price:60},
 {id:'admin',label:'Admin dashboard / CMS',price:120},
 {id:'auth',label:'User authentication + database',price:70},
 {id:'realtime',label:'Real-time notifications',price:90}
];
export const activity:ActivityItem[]=[
 ['09:42','AI workspace synced','Vortex AI','live'],['09:18','New product brief created','Vortex OS','new'],
 ['08:56','Analytics pipeline checked','Data layer','ok'],['08:31','Security baseline reviewed','Cybersecurity','ok']
];
