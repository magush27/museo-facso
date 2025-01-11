(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8553:function(e,t,r){Promise.resolve().then(r.bind(r,4658))},4658:function(e,t,r){"use strict";r.r(t),r.d(t,{TimelineViewer:function(){return C}});var s=r(7437),a=r(2265),n=r(6691),l=r.n(n),i=r(7042),d=r(3986);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,d.m)((0,i.W)(t))}let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:o("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});c.displayName="Card";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:o("flex flex-col space-y-1.5 p-6",r),...a})});u.displayName="CardHeader";let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("h3",{ref:t,className:o("text-2xl font-semibold leading-none tracking-tight",r),...a})});f.displayName="CardTitle";let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("p",{ref:t,className:o("text-sm text-muted-foreground",r),...a})});m.displayName="CardDescription";let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:o("p-6 pt-0",r),...a})});x.displayName="CardContent";let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{ref:t,className:o("flex items-center p-6 pt-0",r),...a})});h.displayName="CardFooter";var g=r(6546),p=r(4213),b=r(4949),v=r(6061);let N=(0,v.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"bg-accent text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),w=a.forwardRef((e,t)=>{let{className:r,variant:a,size:n,asChild:l=!1,...i}=e,d=l?b.g7:"button";return(0,s.jsx)(d,{className:o(N({variant:a,size:n,className:r})),ref:t,...i})});function j(e){let{onPrevious:t,onNext:r,className:a=""}=e;return(0,s.jsxs)("div",{className:"flex items-center justify-between ".concat(a),children:[(0,s.jsx)(w,{variant:"secondary",size:"sm",onClick:t,className:"rounded-full shadow-lg hover:shadow-xl transition-shadow","aria-label":"Ver imagen anterior",children:(0,s.jsx)(g.Z,{className:"h-6 w-6"})}),(0,s.jsx)(w,{variant:"secondary",size:"sm",onClick:r,className:"rounded-full shadow-lg hover:shadow-xl transition-shadow","aria-label":"Ver siguiente imagen",children:(0,s.jsx)(p.Z,{className:"h-6 w-6"})})]})}function y(e){let{section:t}=e;return t?(0,s.jsx)(c,{className:"bg-white/95 backdrop-blur-sm text-center",children:(0,s.jsxs)(x,{className:"p-4",children:[(0,s.jsxs)("h2",{className:"text-base font-bold",children:[t.title," (",t.period,")"]}),(0,s.jsx)("p",{className:"text-muted-foreground italic",children:t.question})]})}):null}function k(e){let{sections:t,onSectionSelect:r,currentSectionId:a}=e;return(0,s.jsx)("nav",{className:"w-full bg-white dark:bg-gray-800 shadow-md rounded-md",children:(0,s.jsx)("ul",{className:"flex flex-wrap justify-center",children:t.map(e=>(0,s.jsx)("li",{className:"m-1",children:(0,s.jsx)(w,{variant:e.id===a?"default":"ghost",className:"py-2 px-3 text-sm md:text-base whitespace-normal text-center h-auto",onClick:()=>r(e.id),children:e.title})},e.id))})})}function C(e){let{images:t,sections:r}=e,[n,i]=(0,a.useState)(0),[d,o]=(0,a.useState)(1),u=(0,a.useCallback)(()=>{i(e=>0===e?t.length-1:e-1)},[t.length]),f=(0,a.useCallback)(()=>{i(e=>e===t.length-1?0:e+1)},[t.length]),m=(0,a.useCallback)(()=>r.find(e=>n>=e.startIndex&&n<=e.endIndex),[n,r]),h=(0,a.useCallback)(e=>{"ArrowLeft"===e.key?u():"ArrowRight"===e.key&&f()},[u,f]),g=(0,a.useCallback)(e=>{let t=r.find(t=>t.id===e);if(t){i(t.startIndex),o(e);let r=document.getElementById("timeline-viewer");r&&r.scrollIntoView({behavior:"smooth"})}},[r]);(0,a.useEffect)(()=>{let e=r.find(e=>n>=e.startIndex&&n<=e.endIndex);e&&e.id!==d&&o(e.id)},[n,r,d]);let p=t[n],b=m();return p?(0,s.jsxs)("div",{id:"timeline-viewer",className:"flex flex-col gap-6",onKeyDown:h,tabIndex:0,role:"region","aria-label":"Visor de l\xednea de tiempo",children:[(0,s.jsx)(k,{sections:r,onSectionSelect:g,currentSectionId:d}),(0,s.jsxs)("div",{className:"relative px-2",children:[(0,s.jsx)(y,{section:b}),(0,s.jsx)(c,{className:"overflow-hidden bg-blue-900",children:(0,s.jsx)(x,{className:"p-2",children:(0,s.jsx)("div",{className:"relative aspect-[9/16] md:aspect-[5/4] w-full",children:(0,s.jsx)(l(),{src:p.src,alt:p.alt,fill:!0,className:"object-contain",priority:0===n,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"})})})}),(0,s.jsx)(j,{onPrevious:u,onNext:f,className:"absolute inset-y-0 left-4 right-4 md:left-8 md:right-8"})]})]}):(0,s.jsx)("div",{children:"No hay im\xe1genes disponibles."})}w.displayName="Button"}},function(e){e.O(0,[802,971,596,744],function(){return e(e.s=8553)}),_N_E=e.O()}]);