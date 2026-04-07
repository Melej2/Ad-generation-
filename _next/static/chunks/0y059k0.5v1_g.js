(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var t=e.i(43476),r=e.i(71645);function s({onGenerate:e,loading:a}){let[i,n]=(0,r.useState)(""),[o,l]=(0,r.useState)(""),[d,c]=(0,r.useState)(""),[m,h]=(0,r.useState)(""),x=i.trim()&&o.trim()&&d.trim();return(0,t.jsxs)("div",{className:"bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",children:[(0,t.jsx)("div",{className:"p-8",children:(0,t.jsxs)("form",{onSubmit:t=>{t.preventDefault(),i.trim()&&o.trim()&&d.trim()&&e({productName:i,productDescription:o,targetAudience:d,productLink:m})},className:"space-y-5",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[(0,t.jsxs)("div",{className:"space-y-1.5",children:[(0,t.jsxs)("label",{className:"block text-sm font-semibold text-gray-900",children:["Product Name ",(0,t.jsx)("span",{className:"text-red-400",children:"*"})]}),(0,t.jsx)("input",{type:"text",value:i,onChange:e=>n(e.target.value),placeholder:"e.g. Posture Corrector Pro",className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-1.5",children:[(0,t.jsxs)("label",{className:"block text-sm font-semibold text-gray-900",children:["Target Audience ",(0,t.jsx)("span",{className:"text-red-400",children:"*"})]}),(0,t.jsx)("input",{type:"text",value:d,onChange:e=>c(e.target.value),placeholder:"e.g. Office workers 25-45 with back pain",className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all",required:!0})]})]}),(0,t.jsxs)("div",{className:"space-y-1.5",children:[(0,t.jsxs)("label",{className:"block text-sm font-semibold text-gray-900",children:["Product Description ",(0,t.jsx)("span",{className:"text-red-400",children:"*"})]}),(0,t.jsx)("textarea",{value:o,onChange:e=>l(e.target.value),placeholder:"Describe your product, its key benefits, what problem it solves, price point, unique features...",rows:4,className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none",required:!0})]}),(0,t.jsxs)("div",{className:"space-y-1.5",children:[(0,t.jsxs)("label",{className:"block text-sm font-semibold text-gray-900",children:["Product Link"," ",(0,t.jsx)("span",{className:"text-gray-400 font-normal text-xs",children:"— optional"})]}),(0,t.jsx)("input",{type:"url",value:m,onChange:e=>h(e.target.value),placeholder:"https://yourstore.com/product",className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"})]}),(0,t.jsx)("div",{className:"pt-1",children:(0,t.jsx)("button",{type:"submit",disabled:!x||a,className:`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2.5 ${x&&!a?"bg-black text-white hover:bg-gray-800 active:scale-[0.99]":"bg-gray-100 text-gray-400 cursor-not-allowed"}`,children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"w-4 h-4 rounded-full border-2 border-gray-300 border-t-white animate-spin"}),"Generating..."]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,t.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Generate Ads"]})})})]})}),(0,t.jsxs)("div",{className:"px-8 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-400",children:[(0,t.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"w-4 h-4 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center text-xs font-bold",children:"5"}),"Video prompts"]}),(0,t.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"w-4 h-4 bg-violet-100 text-violet-600 rounded flex items-center justify-center text-xs font-bold",children:"5"}),"Image prompts"]}),(0,t.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,t.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"One-click copy"]}),(0,t.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Nano Banana ready"]})]})]})}function a({text:e,label:s="Copy Prompt",className:i=""}){let[n,o]=(0,r.useState)(!1),l=async()=>{try{await navigator.clipboard.writeText(e),o(!0),setTimeout(()=>o(!1),2e3)}catch{let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),o(!0),setTimeout(()=>o(!1),2e3)}};return(0,t.jsx)("button",{onClick:l,className:`copy-btn flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${n?"bg-emerald-100 text-emerald-700 border border-emerald-200":"bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 hover:text-gray-800"} ${i}`,children:n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,t.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),s]})})}let i={"Problem-Solution":{bg:"bg-orange-50",text:"text-orange-700",border:"border-orange-200"},Emotional:{bg:"bg-pink-50",text:"text-pink-700",border:"border-pink-200"},Curiosity:{bg:"bg-yellow-50",text:"text-yellow-700",border:"border-yellow-200"},"Before-After":{bg:"bg-blue-50",text:"text-blue-700",border:"border-blue-200"},"Fast Dropshipping":{bg:"bg-green-50",text:"text-green-700",border:"border-green-200"}},n=[{key:"hook",label:"Hook (First 3 Seconds)",emoji:"⚡"},{key:"sceneBreakdown",label:"Scene Breakdown",emoji:"🎬"},{key:"visuals",label:"Visuals",emoji:"👁️"},{key:"script",label:"Script / Voiceover",emoji:"🎙️"},{key:"cameraMovement",label:"Camera Movement",emoji:"📷"},{key:"lighting",label:"Lighting",emoji:"💡"},{key:"background",label:"Background",emoji:"🏞️"},{key:"mood",label:"Mood",emoji:"🎭"},{key:"cta",label:"Call To Action",emoji:"📣"}];function o({ad:e,index:s}){let[l,d]=(0,r.useState)(0===s),[c,m]=(0,r.useState)("idle"),[h,x]=(0,r.useState)(null),[p,g]=(0,r.useState)(null),[u,b]=(0,r.useState)(null),[f,y]=(0,r.useState)(null),[v,j]=(0,r.useState)(0),w=(0,r.useRef)(null),k=(0,r.useRef)(null),N=function(e){for(let t of Object.keys(i))if(e.toLowerCase().includes(t.toLowerCase()))return i[t];return{bg:"bg-indigo-50",text:"text-indigo-700",border:"border-indigo-200"}}(e.type),$=`VIDEO AD PROMPT — ${e.type.toUpperCase()}

🎬 HOOK (First 3 Seconds):
${e.hook}

📽️ SCENE BREAKDOWN:
${e.sceneBreakdown}

👁️ VISUALS:
${e.visuals}

🎙️ SCRIPT / VOICEOVER (UGC Style):
${e.script}

📷 CAMERA MOVEMENT:
${e.cameraMovement}

💡 LIGHTING:
${e.lighting}

🏞️ BACKGROUND:
${e.background}

🎭 MOOD:
${e.mood}

📣 CTA (Call To Action):
${e.cta}`,S=`${e.hook} ${e.visuals} ${e.cameraMovement} Lighting: ${e.lighting}. Background: ${e.background}. Mood: ${e.mood}. ${e.cta}`.trim();(0,r.useEffect)(()=>()=>{u&&URL.revokeObjectURL(u)},[u]);let C=(0,r.useCallback)(()=>{w.current&&(clearInterval(w.current),w.current=null),k.current&&(clearInterval(k.current),k.current=null)},[]);(0,r.useEffect)(()=>()=>C(),[C]);let T=(0,r.useCallback)(async e=>{try{let t=await fetch("/api/veo/poll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({operationName:e})}),r=await t.json();if(!t.ok)throw Error(r.error??"Poll failed");if(r.done)if(C(),r.videoUri){g(r.videoUri);try{let e=await fetch("/api/veo/download",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({videoUri:r.videoUri})}),t=await e.blob(),s=URL.createObjectURL(t);b(s)}catch{}m("done")}else y("Video generation completed but no video was returned."),m("error")}catch(e){C(),y(e instanceof Error?e.message:"Poll failed"),m("error")}},[C]),A=async()=>{m("generating"),y(null),g(null),b(null),x(null),j(0);try{let e=await fetch("/api/veo/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:S})}),t=await e.json();if(!e.ok)throw Error(t.error??"Failed to start generation");let r=t.operationName;x(r),k.current=setInterval(()=>j(e=>e+1),1e3),w.current=setInterval(()=>T(r),5e3)}catch(e){y(e instanceof Error?e.message:"Failed to start video generation"),m("error")}},_=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`;return(0,t.jsxs)("div",{className:"bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden",children:[(0,t.jsx)("button",{onClick:()=>d(!l),className:"w-full text-left",children:(0,t.jsxs)("div",{className:"px-6 py-5 flex items-center gap-4",children:[(0,t.jsx)("div",{className:"w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0",children:s+1}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,t.jsx)("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${N.bg} ${N.text} border ${N.border}`,children:e.type}),(0,t.jsx)("span",{className:"text-gray-400 text-xs",children:"Video Ad"}),"done"===c&&(0,t.jsxs)("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200",children:[(0,t.jsx)("span",{className:"w-1.5 h-1.5 bg-emerald-500 rounded-full"}),"Video ready"]}),"generating"===c&&(0,t.jsxs)("span",{className:"inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200",children:[(0,t.jsx)("span",{className:"w-3 h-3 rounded-full border border-indigo-400 border-t-transparent animate-spin"}),"Generating… ",_(v)]})]}),!l&&(0,t.jsx)("p",{className:"text-gray-600 text-sm mt-1 truncate",children:e.hook})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3 flex-shrink-0",children:[(0,t.jsx)(a,{text:$,label:"Copy All"}),(0,t.jsx)("div",{className:`transition-transform duration-200 ${l?"rotate-180":""}`,children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#9ca3af",strokeWidth:"2",children:(0,t.jsx)("polyline",{points:"6 9 12 15 18 9"})})})]})]})}),l&&(0,t.jsxs)("div",{className:"border-t border-gray-50",children:["done"===c&&(0,t.jsxs)("div",{className:"px-6 pt-5",children:[(0,t.jsx)("div",{className:"rounded-xl overflow-hidden bg-black aspect-[9/16] max-w-xs mx-auto",children:u?(0,t.jsx)("video",{src:u,controls:!0,autoPlay:!0,loop:!0,playsInline:!0,className:"w-full h-full object-cover"}):(0,t.jsx)("div",{className:"w-full h-full flex items-center justify-center text-white text-sm opacity-60",children:"Loading video…"})}),(0,t.jsxs)("div",{className:"flex items-center justify-center gap-3 mt-3 mb-1",children:[u&&(0,t.jsxs)("a",{href:u,download:`ad-${e.type.toLowerCase().replace(/\s+/g,"-")}.mp4`,className:"flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all",children:[(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,t.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,t.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download MP4"]}),(0,t.jsxs)("button",{onClick:A,className:"flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-all",children:[(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("polyline",{points:"23 4 23 10 17 10"}),(0,t.jsx)("polyline",{points:"1 20 1 14 7 14"}),(0,t.jsx)("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerate"]})]})]}),"error"===c&&f&&(0,t.jsxs)("div",{className:"mx-6 mt-5 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 flex items-start gap-2",children:[(0,t.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"flex-shrink-0 mt-0.5",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,t.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),(0,t.jsx)("span",{children:f})]}),"generating"===c&&(0,t.jsxs)("div",{className:"mx-6 mt-5 bg-indigo-50 border border-indigo-100 rounded-xl p-5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-full border-2 border-indigo-200 border-t-indigo-600 animate-spin flex-shrink-0"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-semibold text-indigo-900",children:"Generating video with Veo 3…"}),(0,t.jsxs)("p",{className:"text-xs text-indigo-600 mt-0.5",children:["This takes about 1–2 minutes · ",_(v)," elapsed"]})]})]}),(0,t.jsx)("div",{className:"mt-3 h-1.5 bg-indigo-100 rounded-full overflow-hidden",children:(0,t.jsx)("div",{className:"h-full bg-indigo-500 rounded-full transition-all duration-1000",style:{width:`${Math.min(v/90*100,95)}%`}})})]}),(0,t.jsx)("div",{className:"px-6 py-5 space-y-5",children:n.map(({key:r,label:s,emoji:i})=>(0,t.jsxs)("div",{className:"group",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-1.5",children:[(0,t.jsxs)("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5",children:[(0,t.jsx)("span",{children:i}),s]}),(0,t.jsx)(a,{text:String(e[r]),label:"Copy",className:"opacity-0 group-hover:opacity-100 transition-opacity"})]}),(0,t.jsx)("p",{className:"text-gray-800 text-sm leading-relaxed bg-gray-50 rounded-xl p-3.5",children:String(e[r])})]},r))}),(0,t.jsxs)("div",{className:"px-6 py-4 bg-indigo-50 border-t border-indigo-100 flex items-center justify-between gap-3",children:[(0,t.jsx)(a,{text:$,label:"Copy Full Prompt"}),(0,t.jsx)("button",{onClick:A,disabled:"generating"===c,className:"flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-sm",children:"generating"===c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"}),"Generating…"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,t.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Generate Video"]})})]})]})]})}let l={"Product in Hand":{bg:"bg-teal-50",text:"text-teal-700",border:"border-teal-200"},"Before-After":{bg:"bg-blue-50",text:"text-blue-700",border:"border-blue-200"},"Clean Brand":{bg:"bg-slate-50",text:"text-slate-700",border:"border-slate-200"},Lifestyle:{bg:"bg-amber-50",text:"text-amber-700",border:"border-amber-200"},Testimonial:{bg:"bg-emerald-50",text:"text-emerald-700",border:"border-emerald-200"}},d=[{key:"layout",label:"Layout",emoji:"📐"},{key:"backgroundStyle",label:"Background Style",emoji:"🖼️"},{key:"colorPalette",label:"Color Palette",emoji:"🎨"},{key:"headline",label:"Headline",emoji:"✍️"},{key:"subheadline",label:"Subheadline",emoji:"💬"},{key:"badge",label:"Badge",emoji:"🏷️"},{key:"moodAndStyle",label:"Mood & Style",emoji:"✨"},{key:"aiPrompt",label:"AI Image Prompt",emoji:"🤖",highlight:!0}];function c({ad:e,index:s}){let[i,n]=(0,r.useState)(!1),o=function(e){for(let t of Object.keys(l))if(e.toLowerCase().includes(t.toLowerCase()))return l[t];return{bg:"bg-violet-50",text:"text-violet-700",border:"border-violet-200"}}(e.type),m=`IMAGE AD PROMPT — ${e.type.toUpperCase()}

📐 Layout:
${e.layout}

🖼️ Background Style:
${e.backgroundStyle}

🎨 Color Palette:
${e.colorPalette}

✍️ Headline:
${e.headline}

💬 Subheadline:
${e.subheadline}

🏷️ Badge:
${e.badge}

✨ Mood & Style:
${e.moodAndStyle}

🤖 AI Image Prompt (ready to paste):
${e.aiPrompt}`;return(0,t.jsxs)("div",{className:"bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden",children:[(0,t.jsx)("button",{onClick:()=>n(!i),className:"w-full text-left",children:(0,t.jsxs)("div",{className:"px-6 py-5 flex items-center gap-4",children:[(0,t.jsx)("div",{className:"w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 font-bold text-sm flex-shrink-0",children:s+1}),(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,t.jsx)("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${o.bg} ${o.text} border ${o.border}`,children:e.type}),(0,t.jsx)("span",{className:"text-gray-400 text-xs",children:"Image Ad"})]}),!i&&(0,t.jsx)("p",{className:"text-gray-800 text-sm mt-1 font-medium truncate",children:e.headline})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3 flex-shrink-0",children:[(0,t.jsx)(a,{text:e.aiPrompt,label:"Copy AI Prompt"}),(0,t.jsx)("div",{className:`transition-transform duration-200 ${i?"rotate-180":""}`,children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#9ca3af",strokeWidth:"2",children:(0,t.jsx)("polyline",{points:"6 9 12 15 18 9"})})})]})]})}),!i&&(0,t.jsxs)("div",{className:"px-6 pb-4 flex flex-wrap gap-2",children:[e.badge&&(0,t.jsxs)("span",{className:"inline-flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md",children:["🏷️ ",e.badge]}),e.colorPalette&&(0,t.jsxs)("span",{className:"text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md",children:["🎨 ",e.colorPalette.substring(0,40),"..."]})]}),i&&(0,t.jsxs)("div",{className:"border-t border-gray-50",children:[(0,t.jsx)("div",{className:"px-6 py-5 space-y-5",children:d.map(({key:r,label:s,emoji:i,highlight:n})=>(0,t.jsxs)("div",{className:"group",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-1.5",children:[(0,t.jsxs)("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5",children:[(0,t.jsx)("span",{children:i}),s]}),(0,t.jsx)(a,{text:String(e[r]),label:"Copy",className:"opacity-0 group-hover:opacity-100 transition-opacity"})]}),(0,t.jsx)("div",{className:`rounded-xl p-3.5 ${n?"bg-violet-50 border border-violet-100":"bg-gray-50"}`,children:"badge"===r?(0,t.jsx)("span",{className:"inline-flex items-center bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md",children:String(e[r])}):(0,t.jsx)("p",{className:`text-sm leading-relaxed ${n?"text-violet-800 font-mono":"text-gray-800"}`,children:String(e[r])})})]},r))}),(0,t.jsxs)("div",{className:"px-6 py-4 bg-violet-50 border-t border-violet-100 flex items-center justify-between",children:[(0,t.jsx)("span",{className:"text-xs text-violet-600 font-medium",children:"Ready for Midjourney / DALL-E"}),(0,t.jsx)(a,{text:m,label:"Copy Full Prompt"})]})]})]})}function m({onGenerate:e,loading:s}){let[a,i]=(0,r.useState)({productName:"",productDescription:"",customerReviews:"",targetAudience:"",price:""}),n=a.productName.trim()&&a.productDescription.trim()&&!s,o=e=>t=>i(r=>({...r,[e]:t.target.value}));return(0,t.jsxs)("div",{className:"bg-white rounded-2xl border border-gray-100 shadow-sm p-8",children:[(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[(0,t.jsxs)("div",{className:"sm:col-span-2",children:[(0,t.jsxs)("label",{className:"block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:["Product Name ",(0,t.jsx)("span",{className:"text-red-400",children:"*"})]}),(0,t.jsx)("input",{type:"text",placeholder:"e.g. Posture Corrector Pro",value:a.productName,onChange:o("productName"),className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{className:"block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:["Price ",(0,t.jsx)("span",{className:"text-gray-400 font-normal",children:"(optional)"})]}),(0,t.jsx)("input",{type:"text",placeholder:"e.g. $39",value:a.price,onChange:o("price"),className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{className:"block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:["Product Description ",(0,t.jsx)("span",{className:"text-red-400",children:"*"})]}),(0,t.jsx)("textarea",{rows:3,placeholder:"What does it do, how does it work, what makes it different?",value:a.productDescription,onChange:o("productDescription"),className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{className:"block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:["Customer Reviews"," ",(0,t.jsx)("span",{className:"text-gray-400 font-normal",children:"(optional — paste real reviews for best results)"})]}),(0,t.jsx)("textarea",{rows:4,placeholder:`Paste 3–10 customer reviews here. The more specific, the better.

Example:
"I tried everything for my back pain. This actually worked within 3 days." — Sarah K.
"So easy to use and I already notice a difference." — Mike T.`,value:a.customerReviews,onChange:o("customerReviews"),className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{className:"block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:["Target Audience ",(0,t.jsx)("span",{className:"text-gray-400 font-normal",children:"(optional)"})]}),(0,t.jsx)("input",{type:"text",placeholder:"e.g. Women 30–55 with chronic back pain, office workers",value:a.targetAudience,onChange:o("targetAudience"),className:"w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"})]}),(0,t.jsx)("button",{onClick:()=>e(a),disabled:!n,className:"w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-black hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2",children:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"}),"Writing landing page…"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,t.jsx)("path",{d:"M12 20h9"}),(0,t.jsx)("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),"Generate Landing Page"]})})]}),(0,t.jsx)("div",{className:"mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-gray-400",children:["Hero section","Transformation story","4 value props","How it works","Social proof","Objection handling","Final close"].map(e=>(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("span",{className:"w-1 h-1 rounded-full bg-gray-300"}),e]},e))})]})}let h=["⚡","🔒","✓","🎯"];function x(e,t="Product"){return{meta:{productName:t,createdAt:new Date().toISOString()},sectionOrder:["hero","trust_bar","problem","solution","benefits","reviews","cta"],sections:{hero:{headline:e.hero.headline,subheadline:e.hero.subheadline,cta:e.hero.cta,trustBadge:e.hero.trustBadge,trustLine:"🔒 30-Day Risk-Free Guarantee · Free Shipping · Secure Checkout",style:{},visible:!0},trust_bar:{badges:[{icon:"🔒",text:"30-Day Money-Back Guarantee"},{icon:"🚚",text:"Free Tracked Shipping"},{icon:"✓",text:"Secure Checkout"},{icon:"⭐",text:"4.9/5 Average Rating"},{icon:"💳",text:"No Hidden Fees"}],style:{},visible:!0},problem:{heading:"Still Struggling? You're Not Alone.",body:e.transformation.paragraphs[0]??"",painPoints:e.coreMassDesire.painPoints.map(e=>({text:e,icon:"✗"})),style:{},visible:!0},solution:{eyebrow:"Why this one is different",heading:e.valueProps[0]?.headline??"Built for Real People",body:e.transformation.paragraphs[1]??"",cta:e.transformation.cta,style:{},visible:!0},benefits:{heading:"Everything You Need. Nothing You Don't.",items:e.valueProps.map((e,t)=>({icon:h[t]??"✓",headline:e.headline,body:e.explanation,betterThan:e.betterThan})),style:{},visible:!0},reviews:{heading:"Real People. Real Results. No Cherry-Picking.",ratingScore:"4.9",ratingCount:"2,847 verified reviews",items:e.testimonials.map(e=>({stars:5,quote:e.story,result:e.result,name:e.name,timeframe:e.timeframe})),style:{},visible:!0},cta:{headline:e.finalClose.headline,paragraphs:e.finalClose.paragraphs,cta:e.finalClose.cta,trustLine:"🔒 30-Day Risk-Free Guarantee · 🚚 Free Tracked Shipping · ✓ Secure Checkout · 💳 No Hidden Fees",style:{},visible:!0}}}}function p(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function g(e){if(!e||0===Object.keys(e).length)return"";let t=Object.entries(e).filter(([,e])=>void 0!==e).map(([e,t])=>{let r=e.replace(/([A-Z])/g,"-$1").toLowerCase();return`${r}:${t}`});return t.length?` style="${t.join(";")}"`:""}let u=`
/* ── Reset ───────────────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #0F0F0F;
  line-height: 1.6;
  background: #fff;
}
a { text-decoration: none; }
ul, ol { list-style: none; }
img { display: block; max-width: 100%; }

/* ── Variables ───────────────────────────────────────────────────────────── */
:root {
  --accent:       #4F46E5;
  --accent-dark:  #3730A3;
  --accent-light: #EEF2FF;
  --black:        #0F0F0F;
  --white:        #FFFFFF;
  --muted:        #6B7280;
  --border:       #E5E7EB;
  --surface:      #F9FAFB;
  --gold:         #F59E0B;
  --success:      #059669;
  --radius:       0.75rem;
  --radius-sm:    0.5rem;
  --gap:          4rem;
}

/* ── Preview banner ──────────────────────────────────────────────────────── */
.preview-banner {
  background: #1e1b4b;
  color: #a5b4fc;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── Container ───────────────────────────────────────────────────────────── */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
@media (min-width: 768px) { .container { padding: 0 2rem; } }

/* ── Eyebrow ─────────────────────────────────────────────────────────────── */
.eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

/* ── Section headings ────────────────────────────────────────────────────── */
.section-heading {
  font-size: clamp(1.625rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}
.section-heading--center { text-align: center; }
.section-sub { font-size: 1.0625rem; color: var(--muted); margin-bottom: 2rem; }
.section-sub--center { text-align: center; }
.prose { font-size: 1.0625rem; color: #374151; line-height: 1.75; }
.prose p { margin-bottom: 1rem; }
.prose p:last-child { margin-bottom: 0; }

/* ── Buttons ─────────────────────────────────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.5rem;
  font-size: 1rem; font-weight: 600;
  border-radius: var(--radius-sm);
  padding: 0.875rem 2rem;
  cursor: pointer; border: 2px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}
.btn--primary {
  background: var(--accent); color: var(--white); border-color: var(--accent);
  box-shadow: 0 4px 14px rgba(79,70,229,0.35);
}
.btn--primary:hover {
  background: var(--accent-dark); border-color: var(--accent-dark);
  box-shadow: 0 6px 20px rgba(79,70,229,0.45);
  transform: translateY(-1px);
}
.btn--secondary {
  background: transparent; color: var(--accent); border-color: var(--accent);
}
.btn--secondary:hover { background: var(--accent-light); }
.btn--lg { padding: 1rem 2.5rem; font-size: 1.0625rem; }

/* ── HERO ────────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--black);
}
.hero__bg {
  position: absolute; inset: 0; z-index: 0;
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #4338ca 60%, #1e1b4b 100%);
}
.hero__bg::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
}
.hero__bg::before {
  content: '';
  position: absolute; inset: 0; z-index: 1;
  background-image: radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(79,70,229,0.3) 0%, transparent 50%);
}
.hero__content {
  position: relative; z-index: 1;
  padding: 5rem 1.5rem 4rem;
  max-width: 720px;
}
@media (min-width: 768px) { .hero__content { padding: 7rem 2rem 5rem; } }
.hero__badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(8px);
  color: #e0e7ff;
  font-size: 0.875rem; font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
}
.hero__stars { color: var(--gold); letter-spacing: 0.05em; }
.hero__heading {
  font-size: clamp(2rem, 5.5vw, 3.5rem);
  font-weight: 800; line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--white);
  margin-bottom: 1rem;
}
.hero__sub {
  font-size: clamp(1rem, 2vw, 1.1875rem);
  color: rgba(255,255,255,0.8);
  margin-bottom: 1.75rem;
  max-width: 520px;
}
.hero__cta-group { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.hero__trust { font-size: 0.8125rem; color: rgba(255,255,255,0.55); }

/* ── Trust bar ───────────────────────────────────────────────────────────── */
.trust-bar {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0.875rem 1.5rem;
}
.trust-bar__inner {
  display: flex; flex-wrap: wrap; gap: 1rem 2rem;
  justify-content: center; align-items: center;
}
.trust-badge {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.8125rem; font-weight: 600; color: #374151;
}
.trust-badge__icon { font-size: 1rem; }

/* ── Problem ─────────────────────────────────────────────────────────────── */
.problem { padding: var(--gap) 1.5rem; }
.problem__inner { max-width: 680px; margin: 0 auto; text-align: center; }
.pain-list {
  margin-top: 2rem;
  display: flex; flex-direction: column; gap: 0.75rem;
  max-width: 500px; margin-left: auto; margin-right: auto;
  text-align: left;
}
.pain-item {
  display: flex; align-items: flex-start; gap: 0.875rem;
  background: #FEF2F2; border: 1px solid #FECACA;
  border-radius: var(--radius-sm);
  padding: 0.875rem 1.125rem;
  font-size: 1rem; color: #374151;
}
.pain-icon { color: #DC2626; font-weight: 700; flex-shrink: 0; margin-top: 0.05rem; }

/* ── Solution ────────────────────────────────────────────────────────────── */
.solution { padding: var(--gap) 1.5rem; background: var(--surface); }
.solution__grid {
  display: grid; gap: 3rem; align-items: center;
}
@media (min-width: 960px) {
  .solution__grid { grid-template-columns: 1fr 1fr; gap: 5rem; }
}
.solution__media {
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #c7d2fe 0%, #818cf8 50%, #4f46e5 100%);
  position: relative;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 20px 60px rgba(79,70,229,0.2);
}
.solution__media__icon { font-size: 4rem; opacity: 0.3; }
.solution__media__label {
  position: absolute; bottom: 1rem; left: 0; right: 0;
  text-align: center;
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}
.solution__copy { display: flex; flex-direction: column; gap: 1rem; }
.solution__copy .section-heading { margin-bottom: 0.5rem; }

/* ── Benefits ────────────────────────────────────────────────────────────── */
.benefits { padding: var(--gap) 1.5rem; }
.benefits__grid {
  display: grid; gap: 1.25rem; margin-top: 2.5rem;
}
@media (min-width: 600px) { .benefits__grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 960px) { .benefits__grid { grid-template-columns: repeat(var(--benefit-cols, 3), 1fr); } }
.benefit-card {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.75rem 1.5rem;
  display: flex; flex-direction: column; gap: 0.5rem;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.benefit-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
.benefit-icon { font-size: 1.75rem; line-height: 1; color: var(--accent); margin-bottom: 0.25rem; }
.benefit-heading { font-size: 1.0625rem; font-weight: 700; color: var(--black); }
.benefit-body { font-size: 0.9375rem; color: #374151; line-height: 1.65; }
.benefit-vs {
  font-size: 0.8125rem; color: var(--muted); font-style: italic;
  margin-top: 0.5rem; padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}

/* ── Reviews ─────────────────────────────────────────────────────────────── */
.reviews { padding: var(--gap) 1.5rem; background: var(--surface); }
.reviews__summary {
  display: flex; align-items: center; justify-content: center; gap: 1rem;
  margin: 0.5rem 0 2.5rem; flex-wrap: wrap;
}
.reviews__rating-big { font-size: 2.5rem; font-weight: 800; color: var(--black); }
.reviews__rating-stars { color: var(--gold); font-size: 1.25rem; }
.reviews__count { font-size: 0.9375rem; color: var(--muted); }
.reviews__grid { display: grid; gap: 1.25rem; }
@media (min-width: 768px) { .reviews__grid { grid-template-columns: repeat(3, 1fr); } }
.testimonial-card {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.75rem 1.5rem;
  display: flex; flex-direction: column; gap: 0.875rem;
}
.testimonial-stars { color: var(--gold); font-size: 1.0625rem; letter-spacing: 0.05em; }
.testimonial-quote {
  font-size: 0.9375rem; color: #374151; line-height: 1.7;
  font-style: italic; flex: 1;
}
.testimonial-result {
  font-size: 0.875rem; font-weight: 600; color: var(--success);
  background: #ECFDF5; border: 1px solid #A7F3D0;
  border-radius: 999px; padding: 0.3rem 0.875rem;
  display: inline-block;
}
.testimonial-footer {
  display: flex; align-items: center; gap: 0.75rem;
  padding-top: 0.875rem; border-top: 1px solid var(--border); margin-top: auto;
}
.testimonial-avatar {
  width: 2.25rem; height: 2.25rem; border-radius: 50%;
  background: var(--accent); color: white;
  font-size: 0.75rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.testimonial-name { display: block; font-size: 0.875rem; font-weight: 600; font-style: normal; }
.testimonial-timeframe { font-size: 0.8125rem; color: var(--muted); display: block; }

/* ── Final CTA ───────────────────────────────────────────────────────────── */
.final-cta { background: var(--black); padding: 5rem 1.5rem; }
@media (min-width: 768px) { .final-cta { padding: 7rem 2rem; } }
.final-cta__inner { max-width: 680px; margin: 0 auto; text-align: center; }
.final-cta__heading {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800; line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--white); margin-bottom: 1.25rem;
}
.final-cta__body { font-size: 1.0625rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 1rem; }
.final-cta__actions {
  display: flex; flex-direction: column; align-items: center;
  gap: 1rem; margin-top: 2.25rem;
}
.final-cta .btn--primary {
  padding: 1rem 2.5rem; font-size: 1.0625rem;
  box-shadow: 0 6px 24px rgba(79,70,229,0.5);
}
.trust-line { font-size: 0.875rem; color: rgba(255,255,255,0.45); }

/* ── Sticky bar ──────────────────────────────────────────────────────────── */
.sticky-bar {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
  background: rgba(15,15,15,0.96); backdrop-filter: blur(8px);
  padding: 0.875rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.25);
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
}
.sticky-bar.visible { transform: translateY(0); }
.sticky-bar__text { font-size: 0.9375rem; font-weight: 600; color: #fff; }
@media (min-width: 768px) {
  .sticky-bar { justify-content: center; gap: 2rem; padding: 1rem 2rem; }
}
`;function b(e){let t=e.sections.hero.headline,r=e.sections.hero.cta,s=t.length>48?t.slice(0,48)+"…":t,a=e.sectionOrder.map(t=>(function(e,t){var r,s,a,i,n,o,l;let d=t.sections;switch(e){case"hero":return d.hero.visible?(r=d.hero,`
<!-- HERO -->
<section class="hero" id="hero"${g(r.style)}>
  <div class="hero__bg"></div>
  <div class="hero__content container">
    <div class="hero__badge">
      <span class="hero__stars">★★★★★</span>
      <span>${p(r.trustBadge)}</span>
    </div>
    <h1 class="hero__heading">${p(r.headline)}</h1>
    <p class="hero__sub">${p(r.subheadline)}</p>
    <div class="hero__cta-group">
      <a href="#cta" class="btn btn--primary btn--lg">${p(r.cta)}</a>
    </div>
    <p class="hero__trust" style="margin-top:1rem;">${p(r.trustLine)}</p>
  </div>
</section>`):"";case"trust_bar":let c;return d.trust_bar.visible?(c=(s=d.trust_bar).badges.map(e=>`<span class="trust-badge"><span class="trust-badge__icon">${p(e.icon)}</span> ${p(e.text)}</span>`).join("\n    "),`
<!-- TRUST BAR -->
<div class="trust-bar"${g(s.style)}>
  <div class="trust-bar__inner container">
    ${c}
  </div>
</div>`):"";case"problem":let m;return d.problem.visible?(m=(a=d.problem).painPoints.map(e=>`
      <li class="pain-item">
        <span class="pain-icon">${p(e.icon)}</span>
        <span>${p(e.text)}</span>
      </li>`).join(""),`
<!-- PROBLEM -->
<section class="problem"${g(a.style)}>
  <div class="container">
    <div class="problem__inner">
      <h2 class="section-heading">${p(a.heading)}</h2>
      <div class="prose"><p>${p(a.body)}</p></div>
      <ul class="pain-list">${m}</ul>
    </div>
  </div>
</section>`):"";case"solution":return d.solution.visible?(i=d.solution,`
<!-- SOLUTION -->
<section class="solution" id="solution"${g(i.style)}>
  <div class="container">
    <div class="solution__grid">
      <div class="solution__media">
        <span class="solution__media__icon">📦</span>
        <span class="solution__media__label">Product Image</span>
      </div>
      <div class="solution__copy">
        <span class="eyebrow">${p(i.eyebrow)}</span>
        <h2 class="section-heading">${p(i.heading)}</h2>
        <div class="prose"><p>${p(i.body)}</p></div>
        <div style="margin-top:0.5rem;">
          <a href="#cta" class="btn btn--secondary">${p(i.cta)}</a>
        </div>
      </div>
    </div>
  </div>
</section>`):"";case"benefits":let h,x;return d.benefits.visible?(h=(n=d.benefits).items.map(e=>`
      <li class="benefit-card">
        <div class="benefit-icon">${e.icon}</div>
        <h3 class="benefit-heading">${p(e.headline)}</h3>
        <p class="benefit-body">${p(e.body)}</p>
        ${e.betterThan?`<p class="benefit-vs">${p(e.betterThan)}</p>`:""}
      </li>`).join(""),x=Math.min(n.items.length,3),`
<!-- BENEFITS -->
<section class="benefits"${g(n.style)}>
  <div class="container">
    <h2 class="section-heading section-heading--center">${p(n.heading)}</h2>
    <ul class="benefits__grid" style="--benefit-cols:${x}">
      ${h}
    </ul>
  </div>
</section>`):"";case"reviews":let u;return d.reviews.visible?(u=(o=d.reviews).items.map(e=>`
      <li class="testimonial-card">
        <div class="testimonial-stars">${function(e=5){return"★".repeat(Math.min(5,Math.max(1,e)))}(e.stars)}</div>
        <blockquote class="testimonial-quote">${p(e.quote)}</blockquote>
        <p class="testimonial-result">✓ ${p(e.result)}</p>
        <footer class="testimonial-footer">
          <div class="testimonial-avatar">${p(e.name.split(/[\s,]+/).slice(0,2).map(e=>e[0]?.toUpperCase()??"").join(""))}</div>
          <div>
            <cite class="testimonial-name">${p(e.name)}</cite>
            <span class="testimonial-timeframe">${p(e.timeframe)}</span>
          </div>
        </footer>
      </li>`).join(""),`
<!-- REVIEWS -->
<section class="reviews"${g(o.style)}>
  <div class="container">
    <h2 class="section-heading section-heading--center">${p(o.heading)}</h2>
    <div class="reviews__summary">
      <span class="reviews__rating-big">${p(o.ratingScore)}</span>
      <div>
        <div class="reviews__rating-stars">★★★★★</div>
        <div class="reviews__count">from ${p(o.ratingCount)}</div>
      </div>
    </div>
    <ul class="reviews__grid">${u}</ul>
  </div>
</section>`):"";case"cta":let b;return d.cta.visible?(b=(l=d.cta).paragraphs.map(e=>`<p class="final-cta__body">${p(e)}</p>`).join(""),`
<!-- CTA -->
<section class="final-cta" id="cta"${g(l.style)}>
  <div class="final-cta__inner">
    <h2 class="final-cta__heading">${p(l.headline)}</h2>
    ${b}
    <div class="final-cta__actions">
      <a href="#" class="btn btn--primary btn--lg">${p(l.cta)}</a>
      <p class="trust-line">${p(l.trustLine)}</p>
    </div>
  </div>
</section>`):"";default:return""}})(t,e)).join("\n");return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${p(t)} — Landing Page Preview</title>
<style>${u}</style>
</head>
<body>

<div class="preview-banner">⚡ Landing Page Preview — Generated by AdGen</div>

${a}

<!-- STICKY BAR -->
<div class="sticky-bar" id="sticky-bar">
  <span class="sticky-bar__text">${p(s)}</span>
  <a href="#cta" class="btn btn--primary" style="padding:0.6875rem 1.5rem;font-size:0.9375rem;box-shadow:none;">${p(r)}</a>
</div>

<script>
(function(){
  var hero = document.getElementById('hero');
  var bar  = document.getElementById('sticky-bar');
  if (!hero || !bar) return;
  var obs = new IntersectionObserver(function(e){
    bar.classList.toggle('visible', !e[0].isIntersecting);
  }, { threshold: 0 });
  obs.observe(hero);
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var t = document.querySelector(this.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
</script>

</body>
</html>`}function f({id:e,label:s,badge:i,color:n,children:o,copyText:l}){let[d,c]=(0,r.useState)(!0);return(0,t.jsxs)("div",{className:"bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",id:e,children:[(0,t.jsxs)("button",{onClick:()=>c(!d),className:"w-full text-left px-6 py-4 flex items-center gap-3",children:[(0,t.jsx)("span",{className:`text-xs font-bold px-2.5 py-0.5 rounded-full ${n}`,children:i||s}),(0,t.jsx)("span",{className:"flex-1 text-sm font-semibold text-gray-700",children:s}),(0,t.jsx)(a,{text:l,label:"Copy Section"}),(0,t.jsx)("div",{className:`transition-transform duration-200 ml-1 ${d?"rotate-180":""}`,children:(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#9ca3af",strokeWidth:"2",children:(0,t.jsx)("polyline",{points:"6 9 12 15 18 9"})})})]}),d&&(0,t.jsx)("div",{className:"border-t border-gray-50 px-6 pb-6 pt-5",children:o})]})}function y({label:e,value:r}){return(0,t.jsxs)("div",{className:"group",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,t.jsx)("span",{className:"text-[11px] font-semibold text-gray-400 uppercase tracking-widest",children:e}),(0,t.jsx)(a,{text:r,label:"Copy",className:"opacity-0 group-hover:opacity-100 transition-opacity"})]}),(0,t.jsx)("p",{className:"text-sm text-gray-800 leading-relaxed bg-gray-50 rounded-xl px-4 py-3",children:r})]})}function v({label:e,items:r}){let s=r.join("\n");return(0,t.jsxs)("div",{className:"group",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-1",children:[(0,t.jsx)("span",{className:"text-[11px] font-semibold text-gray-400 uppercase tracking-widest",children:e}),(0,t.jsx)(a,{text:s,label:"Copy",className:"opacity-0 group-hover:opacity-100 transition-opacity"})]}),(0,t.jsx)("ul",{className:"space-y-2",children:r.map((e,r)=>(0,t.jsxs)("li",{className:"text-sm text-gray-800 leading-relaxed bg-gray-50 rounded-xl px-4 py-2.5 flex gap-2",children:[(0,t.jsxs)("span",{className:"text-gray-400 flex-shrink-0",children:[r+1,"."]}),(0,t.jsx)("span",{children:e})]},r))})]})}function j({landing:e,onRegenerate:r}){let s,i=((s=[]).push(`=== CORE MASS DESIRE ===
${e.coreMassDesire.statement}

Pain Points:
${e.coreMassDesire.painPoints.map((e,t)=>`${t+1}. ${e}`).join("\n")}

Desired Outcomes:
${e.coreMassDesire.desiredOutcomes.map((e,t)=>`${t+1}. ${e}`).join("\n")}

Proof Elements:
${e.coreMassDesire.proofElements.map((e,t)=>`${t+1}. ${e}`).join("\n")}`),s.push(`=== HERO SECTION ===
${e.hero.trustBadge}

HEADLINE: ${e.hero.headline}
SUBHEADLINE: ${e.hero.subheadline}

BULLETS:
${e.hero.bullets.map(e=>`• ${e}`).join("\n")}

CTA: ${e.hero.cta}`),s.push(`=== RESULTS / TRANSFORMATION ===
${e.transformation.paragraphs.join("\n\n")}

CTA: ${e.transformation.cta}`),s.push(`=== VALUE PROPOSITIONS ===
${e.valueProps.map((e,t)=>`${t+1}. ${e.headline}
${e.explanation}
Better than alternatives: ${e.betterThan}`).join("\n\n")}`),s.push(`=== HOW IT WORKS ===
${e.howItWorks.map(e=>`Step ${e.step}: ${e.name}
${e.explanation}
Visual: ${e.visualDirection}`).join("\n\n")}`),s.push(`=== SOCIAL PROOF ===
${e.testimonials.map((e,t)=>`${t+1}. "${e.story}"
Result: ${e.result}
Timeframe: ${e.timeframe}
— ${e.name}`).join("\n\n")}`),s.push(`=== OBJECTION HANDLING ===
Does it work? ${e.objections.doesItWork}

Is it safe? ${e.objections.isSafe}

Worth the price? ${e.objections.worthThePrice}

Better than alternatives? ${e.objections.betterThanAlternatives}`),s.push(`=== FINAL CLOSE ===
${e.finalClose.headline}

${e.finalClose.paragraphs.join("\n\n")}

CTA: ${e.finalClose.cta}`),s.join("\n\n---\n\n"));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-900",children:"Landing Page Copy"}),(0,t.jsx)("p",{className:"text-gray-500 text-sm mt-1",children:"7 sections · Ready to use"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,t.jsxs)("button",{onClick:()=>{let t=new Blob([b(x(e))],{type:"text/html;charset=utf-8"}),r=URL.createObjectURL(t);window.open(r,"_blank"),setTimeout(()=>URL.revokeObjectURL(r),6e4)},className:"flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all",children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,t.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"Preview Page"]}),(0,t.jsxs)("button",{onClick:()=>{let t=new Blob([b(x(e))],{type:"text/html;charset=utf-8"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r,s.download="landing-page-preview.html",s.click(),URL.revokeObjectURL(r)},className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all",children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,t.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,t.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download HTML"]}),(0,t.jsx)(a,{text:i,label:"Copy All"}),(0,t.jsxs)("button",{onClick:r,className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all",children:[(0,t.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("polyline",{points:"23 4 23 10 17 10"}),(0,t.jsx)("polyline",{points:"1 20 1 14 7 14"}),(0,t.jsx)("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerate"]})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(f,{id:"lp-desire",label:"Core Mass Desire",badge:"Strategy",color:"bg-purple-50 text-purple-700",copyText:function(e,t){let r=[`=== ${e.toUpperCase()} ===`,""];for(let[e,s]of Object.entries(t))Array.isArray(s)?(r.push(`${e.toUpperCase()}:`),s.forEach((e,t)=>r.push(`  ${t+1}. ${e}`))):"string"==typeof s&&(r.push(`${e.toUpperCase()}:`),r.push(`  ${s}`)),r.push("");return r.join("\n")}("Core Mass Desire",{Statement:e.coreMassDesire.statement,"Pain Points":e.coreMassDesire.painPoints,"Desired Outcomes":e.coreMassDesire.desiredOutcomes,"Proof Elements":e.coreMassDesire.proofElements}),children:(0,t.jsxs)("div",{className:"space-y-5",children:[(0,t.jsx)(y,{label:"Core Desire Statement",value:e.coreMassDesire.statement}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,t.jsx)(v,{label:"Pain Points",items:e.coreMassDesire.painPoints}),(0,t.jsx)(v,{label:"Desired Outcomes",items:e.coreMassDesire.desiredOutcomes}),(0,t.jsx)(v,{label:"Proof Elements",items:e.coreMassDesire.proofElements})]})]})}),(0,t.jsx)(f,{id:"lp-hero",label:"Hero Section",badge:"1",color:"bg-blue-50 text-blue-700",copyText:`${e.hero.trustBadge}

${e.hero.headline}

${e.hero.subheadline}

${e.hero.bullets.map(e=>`• ${e}`).join("\n")}

CTA: ${e.hero.cta}`,children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(y,{label:"Trust Badge",value:e.hero.trustBadge}),(0,t.jsx)(y,{label:"Headline",value:e.hero.headline}),(0,t.jsx)(y,{label:"Subheadline",value:e.hero.subheadline}),(0,t.jsx)(v,{label:"Benefit Bullets",items:e.hero.bullets}),(0,t.jsx)(y,{label:"CTA",value:e.hero.cta})]})}),(0,t.jsx)(f,{id:"lp-transformation",label:"Results / Transformation",badge:"2",color:"bg-emerald-50 text-emerald-700",copyText:`${e.transformation.paragraphs.join("\n\n")}

CTA: ${e.transformation.cta}`,children:(0,t.jsxs)("div",{className:"space-y-4",children:[e.transformation.paragraphs.map((e,r)=>(0,t.jsx)(y,{label:0===r?"Before State":1===r?"The Shift":"After State",value:e},r)),(0,t.jsx)(y,{label:"CTA",value:e.transformation.cta})]})}),(0,t.jsx)(f,{id:"lp-valueprops",label:"Value Propositions",badge:"3",color:"bg-orange-50 text-orange-700",copyText:e.valueProps.map(e=>`${e.headline}
${e.explanation}
${e.betterThan}`).join("\n\n---\n\n"),children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.valueProps.map((e,r)=>(0,t.jsxs)("div",{className:"bg-gray-50 rounded-xl p-4 group relative",children:[(0,t.jsx)("div",{className:"absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,t.jsx)(a,{text:`${e.headline}
${e.explanation}
${e.betterThan}`,label:"Copy"})}),(0,t.jsx)("p",{className:"font-semibold text-gray-900 text-sm mb-2",children:e.headline}),(0,t.jsx)("p",{className:"text-gray-600 text-sm leading-relaxed mb-3",children:e.explanation}),(0,t.jsx)("p",{className:"text-xs text-gray-500 italic border-t border-gray-200 pt-2.5",children:e.betterThan})]},r))})}),(0,t.jsx)(f,{id:"lp-howitworks",label:"How It Works",badge:"4",color:"bg-indigo-50 text-indigo-700",copyText:e.howItWorks.map(e=>`Step ${e.step}: ${e.name}
${e.explanation}
Visual: ${e.visualDirection}`).join("\n\n"),children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.howItWorks.map(e=>(0,t.jsxs)("div",{className:"bg-gray-50 rounded-xl p-4 group relative",children:[(0,t.jsx)("div",{className:"absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,t.jsx)(a,{text:`Step ${e.step}: ${e.name}
${e.explanation}
Visual: ${e.visualDirection}`,label:"Copy"})}),(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,t.jsx)("span",{className:"w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0",children:e.step}),(0,t.jsx)("span",{className:"font-semibold text-gray-900 text-sm",children:e.name})]}),(0,t.jsx)("p",{className:"text-gray-600 text-sm leading-relaxed mb-2",children:e.explanation}),(0,t.jsxs)("p",{className:"text-xs text-gray-400 flex items-start gap-1",children:[(0,t.jsxs)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"flex-shrink-0 mt-0.5",children:[(0,t.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),(0,t.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,t.jsx)("polyline",{points:"21 15 16 10 5 21"})]}),e.visualDirection]})]},e.step))})}),(0,t.jsx)(f,{id:"lp-proof",label:"Social Proof",badge:"5",color:"bg-yellow-50 text-yellow-700",copyText:e.testimonials.map(e=>`"${e.story}"

Result: ${e.result}
Timeframe: ${e.timeframe}
— ${e.name}`).join("\n\n---\n\n"),children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:e.testimonials.map((e,r)=>(0,t.jsxs)("div",{className:"bg-gray-50 rounded-xl p-4 group relative",children:[(0,t.jsx)("div",{className:"absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity",children:(0,t.jsx)(a,{text:`"${e.story}"

Result: ${e.result}
Timeframe: ${e.timeframe}
— ${e.name}`,label:"Copy"})}),(0,t.jsxs)("p",{className:"text-gray-700 text-sm leading-relaxed italic mb-3",children:['"',e.story,'"']}),(0,t.jsx)("p",{className:"text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg px-2.5 py-1 inline-block mb-2",children:e.result}),(0,t.jsxs)("div",{className:"flex items-center justify-between mt-2",children:[(0,t.jsxs)("span",{className:"text-xs font-medium text-gray-600",children:["— ",e.name]}),(0,t.jsx)("span",{className:"text-xs text-gray-400",children:e.timeframe})]})]},r))})}),(0,t.jsx)(f,{id:"lp-objections",label:"Objection Handling",badge:"6",color:"bg-red-50 text-red-700",copyText:`Does it work?
${e.objections.doesItWork}

Is it safe?
${e.objections.isSafe}

Worth the price?
${e.objections.worthThePrice}

Better than alternatives?
${e.objections.betterThanAlternatives}`,children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(y,{label:"Does it really work?",value:e.objections.doesItWork}),(0,t.jsx)(y,{label:"Is it safe?",value:e.objections.isSafe}),(0,t.jsx)(y,{label:"Is it worth the price?",value:e.objections.worthThePrice}),(0,t.jsx)(y,{label:"Why better than alternatives?",value:e.objections.betterThanAlternatives})]})}),(0,t.jsx)(f,{id:"lp-close",label:"Final Close",badge:"7",color:"bg-gray-900 text-white",copyText:`${e.finalClose.headline}

${e.finalClose.paragraphs.join("\n\n")}

CTA: ${e.finalClose.cta}`,children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(y,{label:"Closing Headline",value:e.finalClose.headline}),e.finalClose.paragraphs.map((e,r)=>(0,t.jsx)(y,{label:`Paragraph ${r+1}`,value:e},r)),(0,t.jsx)(y,{label:"Final CTA",value:e.finalClose.cta})]})})]})]})}var w=e.i(73966);let k={copy:["Make the headline more urgent","Rewrite the CTA to be more action-oriented","Add more emotion to the problem section","Make the benefits punchier"],design:["Make the hero darker and more dramatic","Add a warm accent color to the benefits","Make the CTA section stand out more"],layout:["Move the benefits section higher","Hide the trust bar","Bring the reviews closer to the hero"],full:["Make it feel more premium and exclusive","Add more urgency throughout","Simplify — remove anything that isn't essential","Rewrite for a younger audience"]};function N({initialLanding:s}){let a=s.hero.headline.split(" ").slice(0,3).join(" "),i=(0,r.useMemo)(()=>x(s,a),[s,a]),[n,o]=(0,r.useState)([{model:i,timestamp:new Date().toISOString(),label:"Initial version"}]),[l,d]=(0,r.useState)(0),[c,m]=(0,r.useState)([{role:"assistant",text:"Hi! I'm your AI page editor. Tell me what you'd like to change — copy, design, layout, or anything else."}]),[h,p]=(0,r.useState)(""),[g,u]=(0,r.useState)("full"),[f,y]=(0,r.useState)(!1),[v,j]=(0,r.useState)(0),w=(0,r.useRef)(null),$=(0,r.useRef)(null),S=n[l].model,C=(0,r.useMemo)(()=>b(S),[S]);async function T(){var e,t;let r=h.trim();if(!r||f)return;p(""),m(e=>[...e,{role:"user",text:r}]),y(!0),setTimeout(()=>w.current?.scrollIntoView({behavior:"smooth"}),50);let s=[],a="";try{let e=await fetch("/Ad-generation-/api/edit-page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:S,userMessage:r,mode:g})});if(!e.ok)throw Error(`HTTP ${e.status}`);let t=await e.json();s=t.actions??[],a=t.summary??""}catch{try{let e=await fetch("/api/edit-page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:S,userMessage:r,mode:g})});if(!e.ok)throw Error(`HTTP ${e.status}`);let t=await e.json();s=t.actions??[],a=t.summary??""}catch{let e,t=(e=r.toLowerCase()).includes("headline")||e.includes("title")?{actions:[{type:"update_text",target:"hero.headline",value:"The Last Solution You'll Ever Need"}],summary:"Updated the hero headline."}:e.includes("cta")||e.includes("button")?{actions:[{type:"update_text",target:"hero.cta",value:"Claim Your Discount →"},{type:"update_text",target:"cta.cta",value:"Claim Your Discount →"}],summary:"Updated CTA buttons with urgency."}:e.includes("benefit")?{actions:[{type:"update_text",target:"benefits.heading",value:"Why Thousands Switch Every Month"}],summary:"Updated benefits heading."}:e.includes("review")||e.includes("testimonial")?{actions:[{type:"update_text",target:"reviews.heading",value:"Join 2,847+ Happy Customers"}],summary:"Updated reviews heading."}:"design"===g?{actions:[{type:"update_style",target:"hero",style:{backgroundColor:"#0f172a"}}],summary:"Darkened hero background."}:e.includes("problem")||e.includes("pain")?{actions:[{type:"update_text",target:"problem.heading",value:"Does Any of This Sound Familiar?"}],summary:"Updated the problem section heading."}:{actions:[{type:"update_text",target:"hero.subheadline",value:"Trusted by thousands. Built to last."}],summary:"Applied a general improvement."};s=t.actions,a=t.summary}}e=function(e,t){let r=JSON.parse(JSON.stringify(e));for(let e of t)r=function(e,t){switch(t.type){case"update_text":var r;return!function(e,t,r){let s=t.split("."),a=e;for(let e=0;e<s.length-1;e++){let t=s[e];(void 0===a[t]||null===a[t])&&(a[t]={}),a=a[t]}a[s[s.length-1]]=r}(e,(r=t.target).startsWith("sections.")||r.startsWith("meta.")||r.startsWith("sectionOrder")?r:`sections.${r}`,t.value),e;case"update_style":{let r=e.sections[t.target];return r&&(r.style={...r.style,...t.style}),e}case"add_section":{if(!e.sectionOrder.includes(t.key)){let r=t.position??e.sectionOrder.length;e.sectionOrder.splice(r,0,t.key)}let r=e.sections[t.key];return r&&(r.visible=!0),e}case"remove_section":{let r=e.sections[t.key];return r&&(r.visible=!1),e}case"reorder_section":{let r=e.sectionOrder.indexOf(t.key);if(-1===r)return e;let s="up"===t.direction?r-1:r+1;if(s<0||s>=e.sectionOrder.length)return e;return[e.sectionOrder[r],e.sectionOrder[s]]=[e.sectionOrder[s],e.sectionOrder[r]],e}case"replace_section":{let r=e.sections[t.key];return r&&(e.sections[t.key]={...r,...t.data}),e}default:return e}}(r,e);return r}(S,s),t=r.slice(0,40),o(r=>[...r.slice(0,l+1),{model:e,timestamp:new Date().toISOString(),label:t}]),d(e=>e+1),j(e=>e+1),m(e=>[...e,{role:"assistant",text:a||"Done! The page has been updated."}]),y(!1),setTimeout(()=>w.current?.scrollIntoView({behavior:"smooth"}),50)}async function A(){let{generateShopifySection:t}=await e.A(99342),r=S.sections,s={coreMassDesire:{statement:"",painPoints:r.problem.painPoints.map(e=>e.text),desiredOutcomes:[],proofElements:[]},hero:{trustBadge:r.hero.trustBadge,headline:r.hero.headline,subheadline:r.hero.subheadline,bullets:[],cta:r.hero.cta},transformation:{paragraphs:[r.problem.body,r.solution.body],cta:r.solution.cta},valueProps:r.benefits.items.map(e=>({headline:e.headline,explanation:e.body,betterThan:e.betterThan})),howItWorks:[],testimonials:r.reviews.items.map(e=>({story:e.quote,result:e.result,timeframe:e.timeframe,name:e.name})),objections:{doesItWork:"",isSafe:"",worthThePrice:"",betterThanAlternatives:""},finalClose:{headline:r.cta.headline,paragraphs:r.cta.paragraphs,cta:r.cta.cta}},a=new Blob([await t(s)],{type:"text/plain"}),i=URL.createObjectURL(a),n=document.createElement("a");n.href=i,n.download="landing-page.liquid",n.click(),URL.revokeObjectURL(i)}let _=l<n.length-1;return(0,t.jsxs)("div",{className:"flex flex-col h-full min-h-0",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-white flex-shrink-0 flex-wrap",children:[(0,t.jsx)("div",{className:"flex items-center gap-1 bg-gray-100 rounded-lg p-1",children:["copy","design","layout","full"].map(e=>(0,t.jsx)("button",{onClick:()=>u(e),className:`px-3 py-1 text-xs font-medium rounded-md transition-colors capitalize ${g===e?"bg-white text-gray-900 shadow-sm":"text-gray-500 hover:text-gray-700"}`,children:e},e))}),(0,t.jsxs)("div",{className:"flex items-center gap-1 ml-auto",children:[(0,t.jsx)("button",{onClick:function(){l>0&&(d(e=>e-1),j(e=>e+1))},disabled:!(l>0),title:"Undo",className:"p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed",children:(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h10a8 8 0 010 16H3m0-6l-4-4 4-4"})})}),(0,t.jsxs)("span",{className:"text-xs text-gray-400 tabular-nums",children:[l+1,"/",n.length]}),(0,t.jsx)("button",{onClick:function(){l<n.length-1&&(d(e=>e+1),j(e=>e+1))},disabled:!_,title:"Redo",className:"p-1.5 rounded text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed",children:(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 10H11a8 8 0 000 16h10m0-6l4-4-4-4"})})})]}),(0,t.jsx)("button",{onClick:function(){let e=new Blob([b(S)],{type:"text/html"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="landing-page.html",r.click(),URL.revokeObjectURL(t)},className:"px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors",children:"Download HTML"}),(0,t.jsx)("button",{onClick:()=>void A(),className:"px-3 py-1.5 text-xs font-medium bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-colors",children:"Download .liquid"})]}),(0,t.jsxs)("div",{className:"flex flex-1 min-h-0 overflow-hidden",children:[(0,t.jsx)("div",{className:"w-3/5 flex-shrink-0 border-r border-gray-200 bg-gray-100",children:(0,t.jsx)("iframe",{srcDoc:C,className:"w-full h-full border-0",title:"Landing Page Preview",sandbox:"allow-scripts allow-same-origin"},v)}),(0,t.jsxs)("div",{className:"flex-1 flex flex-col min-h-0 bg-white",children:[(0,t.jsxs)("div",{className:"flex-1 overflow-y-auto p-4 space-y-3",children:[c.map((e,r)=>(0,t.jsxs)("div",{className:`flex gap-2 ${"user"===e.role?"justify-end":"justify-start"}`,children:["assistant"===e.role&&(0,t.jsx)("div",{className:"w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5",children:(0,t.jsx)("span",{className:"text-white text-xs font-bold",children:"AI"})}),(0,t.jsx)("div",{className:`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${"user"===e.role?"bg-indigo-600 text-white rounded-tr-sm":"bg-gray-100 text-gray-800 rounded-tl-sm"}`,children:e.text})]},r)),f&&(0,t.jsxs)("div",{className:"flex gap-2 justify-start",children:[(0,t.jsx)("div",{className:"w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5",children:(0,t.jsx)("span",{className:"text-white text-xs font-bold",children:"AI"})}),(0,t.jsx)("div",{className:"bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3",children:(0,t.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,t.jsx)("span",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]"}),(0,t.jsx)("span",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"}),(0,t.jsx)("span",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"})]})})]}),(0,t.jsx)("div",{ref:w})]}),!f&&(0,t.jsx)("div",{className:"px-4 pb-2 flex flex-wrap gap-1.5",children:k[g].slice(0,3).map(e=>(0,t.jsx)("button",{onClick:()=>{p(e),$.current?.focus()},className:"text-xs px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors truncate max-w-[180px]",children:e},e))}),(0,t.jsxs)("div",{className:"p-3 border-t border-gray-200",children:[(0,t.jsxs)("div",{className:"flex gap-2 items-end",children:[(0,t.jsx)("textarea",{ref:$,value:h,onChange:e=>p(e.target.value),onKeyDown:function(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),T())},placeholder:`Tell me what to change (${g} mode)…`,rows:2,className:"flex-1 resize-none text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"}),(0,t.jsx)("button",{onClick:()=>void T(),disabled:!h.trim()||f,className:"p-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition-colors flex-shrink-0",children:(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]}),(0,t.jsx)("p",{className:"text-xs text-gray-400 mt-1.5 text-center",children:"Enter to send · Shift+Enter for new line"})]})]})]})]})}function $(e){let t=e||"this product";return{coreMassDesire:{statement:"To finally get real results without wasting money on things that don't work",painPoints:["Tired of solutions that promise results but deliver nothing","Frustrated by wasting time and money on products that aren't built for real people","Exhausted from endless trial and error with no clear path forward"],desiredOutcomes:["A simple, reliable solution that actually works from day one","Visible results without complicated routines or hidden costs","The confidence that comes from finally solving the problem for good"],proofElements:["Customers consistently report noticeable results within the first week",'Verified buyers describe it as "the only thing that actually worked"',"Over 90% of reviewers say they'd recommend it to a close friend"]},hero:{trustBadge:"⭐⭐⭐⭐⭐ 4.9/5 from 2,847 verified customers",headline:`Finally — ${t} That Actually Does What It Promises`,subheadline:"Real results for real people. No complicated setup, no empty promises, no wasted money.",bullets:["Works from day one — no learning curve, no frustration","Built for everyday use, not a lab setting","Thousands of people have already made the switch","Backed by a 30-day no-questions-asked guarantee"],cta:`Get ${t} Today`},transformation:{paragraphs:["You've been here before. You find something that sounds promising, try it, and two weeks later you're back to square one — frustrated, out of pocket, wondering if anything actually works. That cycle is exhausting. And the worst part? You start to believe the problem is you.",`It's not you. It's that most products are designed to look good, not to solve the actual problem. ${t} was built the other way around — starting with real people, real feedback, and real results. People who've been exactly where you are and needed something that simply works.`,"The difference shows up fast. Not overnight, but in the small moments where you realise you haven't had to think about it. Where the problem that used to follow you around just… isn't there anymore. That's what real results feel like."],cta:"Start Your Transformation — Order Today"},valueProps:[{headline:"Results You Can See and Feel",explanation:`${t} is designed to deliver outcomes you'll notice — not after months of hoping, but within the first days of use. Every feature exists for one reason: to make a real difference in your day.`,betterThan:"Unlike alternatives that require weeks before showing any sign of working, this starts delivering from the moment you use it."},{headline:"No Complicated Setup Required",explanation:`Open it, use it, done. ${t} was built to fit into your life as it actually is — not as it would need to be if you had an hour to spare every morning.`,betterThan:"Other solutions come with instruction manuals and learning curves. This one works the way your life works."},{headline:"Designed for Real Everyday People",explanation:"Every decision started with one question: does this work for someone with a full life, limited time, and no patience for things that don't deliver?",betterThan:"Most products are tested in ideal conditions. This was tested in the real world — and that's the version you're getting."},{headline:"Backed by a Risk-Free Guarantee",explanation:`If ${t} doesn't deliver what's promised, you get your money back. No hoops, no email chains. Just a refund.`,betterThan:"Competitors bury the returns process under friction. We made ours simple on purpose."}],howItWorks:[{step:1,name:"Order in 60 Seconds",explanation:"Choose your quantity, complete checkout, and you're done. Simple, secure, and fast.",visualDirection:"Clean product image with a single CTA button, minimal UI, progress indicator"},{step:2,name:"Arrives Ready to Use",explanation:`${t} ships fast and arrives ready to go — no assembly, no setup, no frustration before you've even started.`,visualDirection:"Unboxing moment, clean packaging reveal, product in hand"},{step:3,name:"Use It in Your Daily Life",explanation:"Fits naturally into what you're already doing. No new habits, no disrupted routines — just an easy addition that works.",visualDirection:"Lifestyle shot of product being used naturally"},{step:4,name:"Notice the Difference",explanation:"Results that speak for themselves — not in weeks, but in days. The kind of change that makes you wonder why you waited.",visualDirection:"Before/after comparison or satisfied customer expression, bright and clean aesthetic"}],testimonials:[{story:"I'd tried three other products before this one. None came close. Within five days I noticed something actually shifting, and by the second week I was convinced.",result:"The problem I'd been dealing with for two years is just... gone.",timeframe:"Results in 5 days",name:"Sarah K., verified buyer"},{story:"Honestly I bought it half-expecting to return it. I've been burned before. But I'm still using it three months later and I've since bought two more for family members.",result:"Best purchase I've made this year.",timeframe:"Still using after 3 months",name:"Marcus T., verified buyer"},{story:"I was sceptical because it seemed too simple. But simple is apparently exactly what I needed.",result:"Wish I'd found this two years ago.",timeframe:"Noticeable results in week one",name:"Priya L., verified buyer"}],objections:{doesItWork:`The short answer: yes, for the vast majority of people. ${t} has been used by thousands of verified customers, and the results speak for themselves. Look at the reviews — not the star rating, the actual words people use. That's your answer.`,isSafe:`${t} was designed with everyday safety as a baseline requirement, not an afterthought. It's been tested for regular use and meets all relevant standards.`,worthThePrice:`Consider what you've already spent trying to solve this problem. Now consider what it costs to solve it for good. ${t} is priced fairly — and with the 30-day guarantee, the only real risk is continuing to do nothing.`,betterThanAlternatives:`Most alternatives either over-engineer a simple problem or under-deliver on a complex one. ${t} does one thing: works. It focuses entirely on the outcome you actually care about.`},finalClose:{headline:"The Version of This Where You've Already Solved It",paragraphs:[`Imagine checking in with yourself six weeks from now. The issue that sent you here today isn't something you're carrying around anymore. You've stopped searching for alternatives. You just sorted it — with ${t} — and moved on with your life.`,"That version of events is available to you right now. The only thing between here and there is one decision. And if it doesn't work for you, you get your money back in full. There's nothing to lose except the time you spend not deciding."],cta:`Yes — I'm Ready. Get ${t} Now`}}}e.s(["default",0,function(){let[e,a]=(0,r.useState)("ads"),[i,n]=(0,r.useState)(null),[l,d]=(0,r.useState)(!1),[h,p]=(0,r.useState)(!1),[g,u]=(0,r.useState)(!1),[f,y]=(0,r.useState)(!1),[v,k]=(0,r.useState)(null),[S,C]=(0,r.useState)([]),[T,A]=(0,r.useState)([]),[_,P]=(0,r.useState)(!1),[B,I]=(0,r.useState)(null),[O,E]=(0,r.useState)(!1),[L,R]=(0,r.useState)(null),[M,F]=(0,r.useState)(null),[D,W]=(0,r.useState)(null),z=async e=>{y(!0),k(null),I(e);try{let t;try{let r=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok){let e=await r.json().catch(()=>({}));throw Error(e.error||"API error")}t=await r.json()}catch{let r;await new Promise(e=>setTimeout(e,800)),r=e.productName||"your product",t={videoAds:[{id:1,type:"Problem-Solution",hook:`Struggling with the same old problem? ${r} changes everything.`,sceneBreakdown:`Scene 1 (0-3s): Close-up of frustrated person. Scene 2 (3-8s): Introduction of ${r}. Scene 3 (8-20s): Transformation montage. Scene 4 (20-27s): Happy result. Scene 5 (27-30s): CTA overlay.`,visuals:`Warm natural lighting, authentic UGC-style handheld footage, real home/office setting for ${r}.`,script:`"I was dealing with this every single day... until I found ${r}. I was skeptical at first but within a week, everything changed. Seriously, this is the product I've been searching for. Link in bio."`,cameraMovement:"Handheld shaky open, smooth slow-push mid, locked down for CTA.",lighting:"Natural window light, golden hour warmth.",background:"Authentic lived-in home environment.",mood:"Relatable → Hopeful → Satisfied",cta:`Get ${r} — link in bio! Limited stock.`},{id:2,type:"Emotional",hook:`This ${r} made me cry happy tears 😭`,sceneBreakdown:"Scene 1 (0-3s): Emotional reaction shot. Scene 2 (3-10s): Story buildup — life before. Scene 3 (10-22s): The moment of discovery. Scene 4 (22-28s): Emotional payoff. Scene 5 (28-30s): CTA.",visuals:`Soft bokeh backgrounds, close-up facial expressions, candid moments of joy with ${r}.`,script:`"I never thought something so simple could make such a difference. ${r} gave me back something I didn't realize I was missing. If you're on the fence — just try it."`,cameraMovement:"Slow zoom on face, gentle rack focus, cinematic wide for payoff.",lighting:"Soft diffused light, slightly warm tones for emotional warmth.",background:"Cozy indoor setting, slightly blurred.",mood:"Vulnerable → Moved → Grateful",cta:`Try ${r} risk-free — 30-day guarantee. Link in bio.`},{id:3,type:"Curiosity",hook:`Why is everyone obsessed with ${r} right now? 👀`,sceneBreakdown:"Scene 1 (0-3s): Mysterious partial reveal. Scene 2 (3-10s): Building intrigue with teaser clips. Scene 3 (10-20s): The big reveal and demonstration. Scene 4 (20-27s): Social proof / results. Scene 5 (27-30s): CTA with urgency.",visuals:`Quick cuts, partial reveals, reaction shots, satisfying product reveal of ${r}.`,script:`"Okay so I finally caved and tried ${r} that's been all over my feed. And honestly? The hype is 100% real. Here's what it actually does..."`,cameraMovement:"Quick handheld cuts, slow reveal pan, pull-back for wow moment.",lighting:"Bright, punchy, high-contrast for visual interest.",background:"Clean neutral, switches to lifestyle context.",mood:"Intrigued → Building → Amazed → FOMO",cta:`See why everyone's switching to ${r}. Link in bio!`},{id:4,type:"Before-After",hook:`BEFORE vs AFTER using ${r} for 30 days 🤯`,sceneBreakdown:`Scene 1 (0-3s): Split-screen before/after title card. Scene 2 (3-12s): Authentic 'before' footage — the problem. Scene 3 (12-22s): Transformation journey with ${r}. Scene 4 (22-28s): Dramatic after result. Scene 5 (28-30s): CTA.`,visuals:`Split-screen comparisons, time-lapse style cuts, real results without heavy editing for ${r}.`,script:`"Day 1 vs Day 30 with ${r}. No filters, no edits — just real results. I documented everything so you could see exactly what happened."`,cameraMovement:"Static locked shots for comparison, match cuts between before/after.",lighting:"Consistent lighting for fair before/after comparison.",background:"Same location before and after for direct comparison.",mood:"Honest → Transformative → Convincing",cta:`Start your transformation with ${r}. 30-day results guaranteed.`},{id:5,type:"Fast Dropshipping",hook:`POV: You just discovered the product that sells itself 🚀`,sceneBreakdown:`Scene 1 (0-2s): Bold product reveal — ${r} hero shot. Scene 2 (2-6s): Key feature callouts in rapid succession. Scene 3 (6-15s): Product in action — clear benefit demo. Scene 4 (15-22s): Social proof flash (reviews, numbers). Scene 5 (22-30s): Offer + scarcity CTA.`,visuals:`High-energy cuts, bold text overlays, clean product shots mixed with use-case clips for ${r}.`,script:`"This is ${r} — and here's why it's selling out everywhere. [Feature 1]. [Feature 2]. [Feature 3]. Over 10,000 happy customers. Get yours before it's gone."`,cameraMovement:"Fast-paced cuts under 2 seconds, smooth product spins, snap zooms.",lighting:"Studio-quality bright and clean, no shadows.",background:"White/gradient studio or trendy lifestyle context.",mood:"High-energy → Exciting → Urgent",cta:`Order ${r} NOW — 50% OFF + Free Shipping! Link in bio. Offer ends soon.`}],imageAds:[{id:1,type:"Product in Hand",layout:"Hero product held naturally in foreground, lifestyle background softly blurred. Bold headline top-left, CTA badge bottom-right.",backgroundStyle:"Soft bokeh indoor/outdoor lifestyle scene — kitchen counter, cafe table, or park setting.",colorPalette:"Warm whites, cream tones, one brand accent color. Clean and premium feel.",headline:`Meet ${r} — The One You've Been Waiting For`,subheadline:"Transform your daily routine in just days.",badge:"⭐ #1 Bestseller",moodAndStyle:"Authentic, aspirational lifestyle. Real person, real moment — not overly staged.",aiPrompt:`Lifestyle product photography, ${r} held naturally in hand, soft bokeh background, warm golden light, shallow depth of field, authentic UGC aesthetic, clean composition, white balance warm, shot on iPhone aesthetic, 9:16 vertical format for Instagram Stories`},{id:2,type:"Before-After",layout:"Bold vertical split — left side dark/muted 'before', right side bright/vibrant 'after'. Product centered at split line.",backgroundStyle:"Left: desaturated, slightly gloomy. Right: bright, colorful, energetic.",colorPalette:"Before: #8B8B8B, #4A4A4A. After: #FF6B35, #FFE66D, #4ECDC4.",headline:`The ${r} Difference Is Real`,subheadline:"See what 30 days can do.",badge:"30-Day Results",moodAndStyle:"Dramatic contrast transformation. Honest and compelling visual proof.",aiPrompt:`Before and after split composition, left half desaturated muted colors showing problem state, right half vibrant energetic colors showing ${r} results, bold dividing line, product prominently featured, high contrast transformation, text overlay space at top and bottom, 1:1 square format`},{id:3,type:"Clean Brand",layout:"Minimal centered product on pure white. Maximum whitespace. Small precise headline below. One accent element.",backgroundStyle:"Pure white (#FFFFFF) or near-white cream. Absolute cleanliness.",colorPalette:"White, black, one premium accent — gold (#C9A84C), navy (#0A1628), or forest green (#2D5016).",headline:r,subheadline:"Engineered for those who expect the best.",badge:"Premium Quality",moodAndStyle:"Apple-level minimalism. Luxury, precision, confidence. Every pixel intentional.",aiPrompt:`Minimalist product photography, ${r} centered on pure white background, dramatic side lighting creating subtle shadow, luxury brand aesthetic, extreme cleanliness, high-end commercial photography style, perfect symmetry, single color accent detail, 1:1 square format, 8K quality`},{id:4,type:"Lifestyle",layout:"Environmental lifestyle shot with product naturally integrated. Person using/enjoying product. Text overlay with semi-transparent dark band.",backgroundStyle:"Rich, textured real-world environment. Natural and aspirational — beach, gym, modern home.",colorPalette:"Earth tones and natural colors matching the environment. Warm and inviting.",headline:`Live Better with ${r}`,subheadline:"Join 10,000+ happy customers.",badge:"Free Shipping",moodAndStyle:"Aspirational but achievable. The life your customer wants. Warm, real, inviting.",aiPrompt:`Lifestyle photography, person naturally using ${r} in aspirational real-world setting, environmental context, golden hour lighting, candid authentic moment, rich colors, shallow depth of field, cinematic composition, lifestyle brand aesthetic, 16:9 horizontal format`},{id:5,type:"Testimonial",layout:"Customer photo (authentic, not stock) left side. Quote in large typography right side. Star rating prominent. Product small bottom-right corner.",backgroundStyle:"Soft gradient or subtle texture. Warm and trustworthy. Not distracting.",colorPalette:"Soft peach (#FFE5D9), warm white, deep charcoal text. Stars in gold (#FFD700).",headline:'"This actually works — I\'m obsessed"',subheadline:`— Verified ${r} customer`,badge:"★★★★★ 4.9/5 Rating",moodAndStyle:"Social proof powerhouse. Real person, real words. Trust and relatability over polish.",aiPrompt:`Social proof advertisement layout, authentic customer testimonial design, real person portrait left side, large quote typography right side, gold star rating prominent, ${r} product thumbnail corner, warm soft gradient background peach tones, trustworthy clean design, 1:1 square format`}]}}C(t.videoAds||[]),A(t.imageAds||[]),P(!0),setTimeout(()=>{document.getElementById("results")?.scrollIntoView({behavior:"smooth"})},100)}catch(e){k(e instanceof Error?e.message:"Something went wrong")}finally{y(!1)}},U=async e=>{E(!0),R(null),W(e);try{let t;try{let r=await fetch("/api/generate-landing",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await r.json();if(!r.ok)throw Error(s.error||"Generation failed");t=s.landing}catch{await new Promise(e=>setTimeout(e,900)),t=$(e.productName)}F(t),setTimeout(()=>{document.getElementById("landing-results")?.scrollIntoView({behavior:"smooth"})},100)}catch(e){R(e instanceof Error?e.message:"Something went wrong")}finally{E(!1)}},H=async e=>{d(!0),n(null),W(e);try{let t;try{let r=await fetch("/api/generate-landing",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await r.json();if(!r.ok)throw Error(s.error||"Generation failed");t=s.landing}catch{await new Promise(e=>setTimeout(e,800)),t=$(e.productName)}F(t);let r=await (0,w.generateShopifySection)(t);n(r),setTimeout(()=>{document.getElementById("shopify-result")?.scrollIntoView({behavior:"smooth"})},100)}catch(e){R(e instanceof Error?e.message:"Something went wrong")}finally{d(!1)}},V=async()=>{i&&(await navigator.clipboard.writeText(i),p(!0),setTimeout(()=>p(!1),2e3))};return(0,t.jsxs)("main",{className:"min-h-screen bg-gray-50",children:[(0,t.jsx)("header",{className:"bg-white border-b border-gray-100 sticky top-0 z-10",children:(0,t.jsxs)("div",{className:"max-w-5xl mx-auto px-6",children:[(0,t.jsxs)("div",{className:"py-4 flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-black rounded-lg flex items-center justify-center",children:(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",children:(0,t.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})})}),(0,t.jsx)("span",{className:"font-semibold text-gray-900 text-lg",children:"AdGen"})]}),(0,t.jsx)("span",{className:"text-xs text-gray-400 font-medium tracking-widest uppercase hidden sm:block",children:"AI Marketing Suite"})]}),(0,t.jsxs)("div",{className:"flex gap-1 pb-0 -mb-px",children:[(0,t.jsx)("button",{onClick:()=>a("ads"),className:`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${"ads"===e?"border-black text-gray-900":"border-transparent text-gray-500 hover:text-gray-700"}`,children:(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Ad Prompts"]})}),(0,t.jsx)("button",{onClick:()=>a("landing"),className:`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${"landing"===e?"border-black text-gray-900":"border-transparent text-gray-500 hover:text-gray-700"}`,children:(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M12 20h9"}),(0,t.jsx)("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),"Landing Page"]})}),(0,t.jsx)("button",{onClick:()=>a("shopify"),className:`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${"shopify"===e?"border-black text-gray-900":"border-transparent text-gray-500 hover:text-gray-700"}`,children:(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"})}),"Shopify Export"]})}),(0,t.jsx)("button",{onClick:()=>a("editor"),className:`px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${"editor"===e?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}`,children:(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"AI Editor",(0,t.jsx)("span",{className:"text-xs bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full font-medium",children:"New"})]})})]})]})}),"ads"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pt-14 pb-10",children:(0,t.jsxs)("div",{className:"text-center max-w-2xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6",children:[(0,t.jsx)("span",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full"}),"Powered by Claude AI"]}),(0,t.jsxs)("h1",{className:"text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight",children:["Generate High-Converting",(0,t.jsx)("br",{}),"Video & Image Ads"]}),(0,t.jsx)("p",{className:"text-gray-500 text-lg leading-relaxed",children:"Enter your product details and get 5 video ad prompts + 5 image ad prompts, ready to copy into Nano Banana and AI image tools."})]})}),(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pb-10",children:(0,t.jsx)(s,{onGenerate:z,loading:f})}),v&&(0,t.jsx)("div",{className:"max-w-5xl mx-auto px-6 pb-6",children:(0,t.jsxs)("div",{className:"bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm flex items-center gap-3",children:[(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"flex-shrink-0",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,t.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),v]})}),f&&(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pb-10",children:(0,t.jsx)("div",{className:"bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm",children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full border-2 border-gray-200 border-t-black animate-spin"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-gray-900",children:"Generating your ad prompts..."}),(0,t.jsx)("p",{className:"text-gray-400 text-sm mt-1",children:"Claude is crafting high-converting ads for you"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 mt-2 justify-center",children:["Analyzing product","Writing hooks","Crafting scenes","Finalizing CTAs"].map((e,r)=>(0,t.jsx)("span",{className:"text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full",children:e},r))})]})})}),_&&!f&&(0,t.jsxs)("section",{id:"results",className:"max-w-5xl mx-auto px-6 pb-20 fade-in",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-gray-900",children:"Your Ad Prompts"}),(0,t.jsxs)("p",{className:"text-gray-500 text-sm mt-1",children:[S.length," video + ",T.length," image prompts ready to use"]})]}),(0,t.jsxs)("button",{onClick:()=>B&&z(B),className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all",children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("polyline",{points:"23 4 23 10 17 10"}),(0,t.jsx)("polyline",{points:"1 20 1 14 7 14"}),(0,t.jsx)("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerate"]})]}),(0,t.jsxs)("div",{className:"mb-12",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-6",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center",children:(0,t.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",children:(0,t.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-bold text-gray-900",children:"Video Ad Prompts"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs",children:"Ready for Nano Banana & AI video tools"})]}),(0,t.jsxs)("span",{className:"ml-auto text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full",children:[S.length," prompts"]})]}),(0,t.jsx)("div",{className:"space-y-4",children:S.map((e,r)=>(0,t.jsx)(o,{ad:e,index:r},e.id))})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-6",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center",children:(0,t.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",children:[(0,t.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,t.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,t.jsx)("polyline",{points:"21 15 16 10 5 21"})]})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-bold text-gray-900",children:"Image Ad Prompts"}),(0,t.jsx)("p",{className:"text-gray-500 text-xs",children:"Ready for Midjourney, DALL-E & Stable Diffusion"})]}),(0,t.jsxs)("span",{className:"ml-auto text-xs font-medium text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full",children:[T.length," prompts"]})]}),(0,t.jsx)("div",{className:"space-y-4",children:T.map((e,r)=>(0,t.jsx)(c,{ad:e,index:r},e.id))})]})]})]}),"landing"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pt-14 pb-10",children:(0,t.jsxs)("div",{className:"text-center max-w-2xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6",children:[(0,t.jsx)("span",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full"}),"Direct Response Copywriting"]}),(0,t.jsxs)("h1",{className:"text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight",children:["Generate a Full",(0,t.jsx)("br",{}),"High-Converting Landing Page"]}),(0,t.jsx)("p",{className:"text-gray-500 text-lg leading-relaxed",children:"Enter your product details and customer reviews — get a complete landing page with hero, value props, social proof, objection handling, and more."})]})}),(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pb-10",children:(0,t.jsx)(m,{onGenerate:U,loading:O})}),L&&(0,t.jsx)("div",{className:"max-w-5xl mx-auto px-6 pb-6",children:(0,t.jsxs)("div",{className:"bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm flex items-center gap-3",children:[(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"flex-shrink-0",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,t.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),L]})}),O&&(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pb-10",children:(0,t.jsx)("div",{className:"bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm",children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full border-2 border-gray-200 border-t-black animate-spin"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-gray-900",children:"Writing your landing page..."}),(0,t.jsx)("p",{className:"text-gray-400 text-sm mt-1",children:"Claude is crafting conversion-optimised copy for you"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 mt-2 justify-center",children:["Analysing reviews","Extracting desire","Writing hero","Building sections"].map((e,r)=>(0,t.jsx)("span",{className:"text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full",children:e},r))})]})})}),M&&!O&&(0,t.jsx)("section",{id:"landing-results",className:"max-w-5xl mx-auto px-6 pb-20 fade-in",children:(0,t.jsx)(j,{landing:M,onRegenerate:()=>D&&U(D)})})]}),"shopify"===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pt-14 pb-10",children:(0,t.jsxs)("div",{className:"text-center max-w-2xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6",children:[(0,t.jsx)("span",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full"}),"Shopify Dawn Section"]}),(0,t.jsxs)("h1",{className:"text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight",children:["Export to Shopify —",(0,t.jsx)("br",{}),"One Click, Ready to Install"]}),(0,t.jsxs)("p",{className:"text-gray-500 text-lg leading-relaxed",children:["Fill in your product details and get a complete"," ",(0,t.jsx)("code",{className:"text-sm bg-gray-100 px-1.5 py-0.5 rounded",children:".liquid"}),"section with all your copy pre-filled. Drop it into your Dawn theme and it's live."]}),(0,t.jsx)("div",{className:"mt-8 grid grid-cols-3 gap-4 text-left",children:[{step:"1",label:"Fill in product info",sub:"Name, description, reviews"},{step:"2",label:"Download the file",sub:"Complete .liquid section"},{step:"3",label:"Add to Shopify",sub:"Paste into sections/ folder"}].map(({step:e,label:r,sub:s})=>(0,t.jsxs)("div",{className:"bg-gray-50 border border-gray-100 rounded-xl p-4",children:[(0,t.jsx)("div",{className:"w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold mb-2",children:e}),(0,t.jsx)("p",{className:"text-sm font-semibold text-gray-900",children:r}),(0,t.jsx)("p",{className:"text-xs text-gray-400 mt-0.5",children:s})]},e))})]})}),(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pb-10",children:(0,t.jsx)(m,{onGenerate:H,loading:l})}),L&&(0,t.jsx)("div",{className:"max-w-5xl mx-auto px-6 pb-6",children:(0,t.jsxs)("div",{className:"bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm flex items-center gap-3",children:[(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"flex-shrink-0",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),(0,t.jsx)("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),L]})}),l&&(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pb-10",children:(0,t.jsx)("div",{className:"bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm",children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full border-2 border-gray-200 border-t-black animate-spin"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-semibold text-gray-900",children:"Building your Shopify section..."}),(0,t.jsx)("p",{className:"text-gray-400 text-sm mt-1",children:"Writing copy and packaging the .liquid file"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 mt-2 justify-center",children:["Analysing product","Writing copy","Building section","Packaging file"].map((e,r)=>(0,t.jsx)("span",{className:"text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full",children:e},r))})]})})}),i&&!l&&(0,t.jsx)("section",{id:"shopify-result",className:"max-w-5xl mx-auto px-6 pb-20",children:(0,t.jsxs)("div",{className:"bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",children:[(0,t.jsxs)("div",{className:"p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 flex-1",children:[(0,t.jsx)("div",{className:"w-10 h-10 bg-[#008060] rounded-xl flex items-center justify-center flex-shrink-0",children:(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"font-bold text-gray-900",children:"Shopify Section Ready"}),(0,t.jsxs)("p",{className:"text-sm text-gray-400",children:[(i.length/1024).toFixed(1)," KB · All copy pre-filled · Drop into Dawn theme"]})]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 flex-shrink-0",children:[(0,t.jsxs)("button",{onClick:()=>{if(!M)return;let e=new Blob([b(x(M))],{type:"text/html;charset=utf-8"}),t=URL.createObjectURL(e);window.open(t,"_blank"),setTimeout(()=>URL.revokeObjectURL(t),6e4)},className:"flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all",children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,t.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"Preview Page"]}),(0,t.jsx)("button",{onClick:V,className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-all",children:h?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"Copied!"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),(0,t.jsx)("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy Code"]})}),(0,t.jsxs)("button",{onClick:()=>{if(!i)return;let e=(D?.productName||"product").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),t=new Blob([i],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r,s.download=`${e}-landing.liquid`,s.click(),URL.revokeObjectURL(r)},className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#008060] rounded-xl hover:bg-[#006e52] transition-all",children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[(0,t.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,t.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,t.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download .liquid"]})]})]}),(0,t.jsxs)("div",{className:"p-6 bg-gray-50 border-b border-gray-100",children:[(0,t.jsx)("h3",{className:"text-sm font-semibold text-gray-900 mb-3",children:"How to install in Shopify"}),(0,t.jsxs)("ol",{className:"space-y-2 text-sm text-gray-600",children:[(0,t.jsxs)("li",{className:"flex gap-2",children:[(0,t.jsx)("span",{className:"font-bold text-gray-400 flex-shrink-0",children:"1."}),"Download the ",(0,t.jsx)("code",{className:"bg-white border border-gray-200 px-1.5 py-0.5 rounded text-xs",children:".liquid"})," file above"]}),(0,t.jsxs)("li",{className:"flex gap-2",children:[(0,t.jsx)("span",{className:"font-bold text-gray-400 flex-shrink-0",children:"2."}),"In Shopify Admin → ",(0,t.jsx)("strong",{children:"Online Store → Themes → Edit code"})]}),(0,t.jsxs)("li",{className:"flex gap-2",children:[(0,t.jsx)("span",{className:"font-bold text-gray-400 flex-shrink-0",children:"3."}),"Open the ",(0,t.jsx)("code",{className:"bg-white border border-gray-200 px-1.5 py-0.5 rounded text-xs",children:"sections/"})," folder → ",(0,t.jsx)("strong",{children:"Add a new section"})," → paste the file content"]}),(0,t.jsxs)("li",{className:"flex gap-2",children:[(0,t.jsx)("span",{className:"font-bold text-gray-400 flex-shrink-0",children:"4."}),"Go to ",(0,t.jsx)("strong",{children:"Customize → Add section → Conversion Landing"})," — all your copy is already filled in"]})]})]}),(0,t.jsx)("div",{className:"p-4 border-b border-gray-100",children:(0,t.jsxs)("button",{onClick:()=>u(e=>!e),className:"flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors",children:[(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:`transition-transform ${g?"rotate-90":""}`,children:(0,t.jsx)("polyline",{points:"9 18 15 12 9 6"})}),g?"Hide":"Preview"," code (",i.split("\n").length," lines)"]})}),g&&(0,t.jsx)("pre",{className:"p-6 text-xs bg-gray-950 text-green-400 overflow-x-auto max-h-96 leading-relaxed",children:i}),(0,t.jsx)("div",{className:"p-4 flex justify-end",children:(0,t.jsxs)("button",{onClick:()=>D&&H(D),className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors",children:[(0,t.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("polyline",{points:"23 4 23 10 17 10"}),(0,t.jsx)("polyline",{points:"1 20 1 14 7 14"}),(0,t.jsx)("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),"Regenerate"]})})]})})]}),"editor"===e&&(M?(0,t.jsx)("div",{className:"flex flex-col",style:{height:"calc(100vh - 97px)"},children:(0,t.jsx)(N,{initialLanding:M})}):(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pt-14 pb-20",children:(0,t.jsxs)("div",{className:"text-center max-w-2xl mx-auto",children:[(0,t.jsx)("div",{className:"w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6",children:(0,t.jsx)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"#4F46E5",strokeWidth:"2",children:(0,t.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),(0,t.jsx)("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"AI Page Editor"}),(0,t.jsx)("p",{className:"text-gray-500 text-lg leading-relaxed mb-8",children:"Generate a landing page first, then come back here to refine it with AI chat. Tell the AI what to change — copy, design, layout — and watch it update live."}),(0,t.jsxs)("button",{onClick:()=>a("landing"),className:"inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors",children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("path",{d:"M12 20h9"}),(0,t.jsx)("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),"Generate a Landing Page First"]})]})})),(0,t.jsx)("footer",{className:"border-t border-gray-100 bg-white",children:(0,t.jsx)("div",{className:"max-w-5xl mx-auto px-6 py-6 text-center",children:(0,t.jsx)("p",{className:"text-gray-400 text-sm",children:"AdGen — AI Marketing Suite for ecommerce"})})})]})}],31713)}]);