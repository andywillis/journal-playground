import{o as t,c as a,t as m,n,u as o,a as I,b as r,F as g,r as w,d as c,e as p,f as b,g as T}from"./vendor-bbdfe740.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))i(h);new MutationObserver(h=>{for(const l of h)if(l.type==="childList")for(const k of l.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&i(k)}).observe(document,{childList:!0,subtree:!0});function d(h){const l={};return h.integrity&&(l.integrity=h.integrity),h.referrerPolicy&&(l.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?l.credentials="include":h.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(h){if(h.ep)return;h.ep=!0;const l=d(h);fetch(h.href,l)}})();const P="_blockquote_uhtwo_1",C={blockquote:P},q={__name:"index",props:{html:{type:String,required:!0}},setup(e){return(s,d)=>(t(),a("p",{class:n(o(C).blockquote)},m(e.html),3))}},B="_heading_1tkpt_1",D="_h1_1tkpt_7 _heading_1tkpt_1",R="_h2_1tkpt_13 _heading_1tkpt_1",z="_h3_1tkpt_22 _heading_1tkpt_1",M="_date_1tkpt_29 _h3_1tkpt_22 _heading_1tkpt_1",y={heading:B,h1:D,h2:R,h3:z,date:M},f={__name:"index",props:{type:{type:String,required:!0},text:{type:String,required:!0}},setup(e){return(s,d)=>e.type==="h1"?(t(),a("h1",{key:0,class:n(o(y).h1)},m(e.text),3)):e.type==="h2"?(t(),a("h2",{key:1,class:n(o(y).h2)},m(e.text),3)):e.type==="h3"?(t(),a("h3",{key:2,class:n(o(y).h3)},m(e.text),3)):e.type==="h4"?(t(),a("h4",{key:3,class:n(o(y).h4)},m(e.text),3)):e.type==="date"?(t(),a("h4",{key:4,class:n(o(y).date)},m(e.text),3)):I("",!0)}},A="_imageContainer_4n2l8_1",j="_image_4n2l8_1",N="_fadeIn_4n2l8_1",v={imageContainer:A,image:j,fadeIn:N},O=["src","alt"],L={__name:"index",props:{src:{type:String,required:!0},alt:{type:String,required:!0}},setup(e){return(s,d)=>(t(),a("div",{class:n(o(v).imageContainer)},[r("img",{class:n(o(v).image),width:"800px",height:"500px",src:e.src,alt:e.alt},null,10,O)],2))}},$="_listitem_138vm_1",J={listitem:$},H=["innerHTML"],S={__name:"index",props:{item:{type:Object,required:!0}},setup(e){return console.log(e.item),(d,i)=>(t(),a("li",{class:n(o(J).listitem),innerHTML:e.item.html},null,10,H))}},G={key:0},F={key:1},V={__name:"index",props:{items:{type:Array,required:!0},variant:{type:String,required:!0}},setup(e){return(s,d)=>e.variant==="unordered"?(t(),a("ul",G,[(t(!0),a(g,null,w(e.items,i=>(t(),c(S,{key:i.id,item:i},null,8,["item"]))),128))])):e.variant==="ordered"?(t(),a("ol",F,[(t(!0),a(g,null,w(e.items,i=>(t(),c(S,{key:i.id,item:i},null,8,["item"]))),128))])):I("",!0)}},W="_paragraph_1axdu_1",E={paragraph:W},U=["innerHTML"],X={__name:"index",props:{html:{type:String,required:!0}},setup(e){return(s,d)=>(t(),a("p",{class:n(o(E).paragraph),innerHTML:e.html},null,10,U))}},K="_table_1woq6_1",Y={table:K},Q={__name:"index",props:{item:{type:String,required:!0}},setup(e){return(s,d)=>(t(),a("table",{class:n(o(Y).table)},m(s.html),3))}},Z={__name:"index",props:{section:{type:Object,required:!0}},setup(e){return(s,d)=>e.section.type==="h3"?(t(),c(f,{key:0,type:"h3",text:e.section.text},null,8,["text"])):e.section.type==="blockquote"?(t(),c(q,{key:1,html:e.section.html},null,8,["html"])):e.section.type==="image"?(t(),c(L,{key:2,src:e.section.src,alt:e.section.alt},null,8,["src","alt"])):e.section.type==="table"?(t(),c(Q,{key:3,html:e.section.html},null,8,["html"])):e.section.type==="list"?(t(),c(V,{key:4,variant:e.section.variant,items:e.section.items},null,8,["variant","items"])):(t(),c(X,{key:5,html:e.section.html},null,8,["html"]))}},ee="_content_101gy_1",te={content:ee},ae={__name:"index",props:{body:{type:Object,required:!0}},setup(e){return(s,d)=>(t(),a("div",{class:n(o(te).content)},[(t(!0),a(g,null,w(e.body,i=>(t(),c(Z,{key:i.id,section:i},null,8,["section"]))),128))],2))}},ne="_tag_rpct9_1",oe={tag:ne},se={__name:"index",props:{tag:{type:Object,required:!0},numberOfTags:{type:String,required:!0}},setup(e){return(s,d)=>(t(),a("li",{class:n(o(oe).tag)},m(e.tag.tag)+m(e.tag.id<e.numberOfTags-1?",":""),3))}},ie="_tagContainer_xanar_1",re="_tags_xanar_5",de="_tag_xanar_1",_={tagContainer:ie,tags:re,tag:de},he={__name:"index",props:{tags:{type:Array,required:!0}},setup(e){return(s,d)=>(t(),a("section",{class:n(o(_).tagContainer)},[p(f,{level:"h3",type:"h3",text:"Tags"}),r("ul",{class:n(o(_).tags)},[(t(!0),a(g,null,w(e.tags,i=>(t(),c(se,{key:i.id,tag:i,"number-of-tags":e.tags.length},null,8,["tag","number-of-tags"]))),128))],2)],2))}},le="_header_sufgh_1",ce="_entry_sufgh_7",x={header:le,entry:ce},me=["href"],pe={__name:"index",props:{entry:{type:Object,required:!0}},setup(e){return(s,d)=>(t(),a("section",{class:n(o(x).entry)},[r("header",{class:n(o(x).header)},[r("a",{href:"#"+e.entry.link},[p(f,{id:e.entry.link,type:"h2",text:e.entry.title},null,8,["id","text"])],8,me),p(f,{type:"date",text:e.entry.date},null,8,["text"])],2),p(ae,{body:e.entry.body},null,8,["body"]),p(he,{tags:e.entry.tags},null,8,["tags"])],2))}},ue="_entries_12ejq_1",ge="_header_12ejq_12",ye="_entry_12ejq_18",we={entries:ue,header:ge,entry:ye},fe={__name:"index",props:{entries:{type:Array,required:!0}},setup(e){return(s,d)=>(t(),a("main",{class:n(o(we).entries)},[(t(!0),a(g,null,w(e.entries,i=>(t(),c(pe,{key:i.id,entry:i},null,8,["entry"]))),128))],2))}},be="_footer_qr5sd_1",ke="_socialsList_qr5sd_12",ve="_icon_qr5sd_21",u={footer:be,socialsList:ke,icon:ve},Se={href:"https://github.com/andywillis"},_e=r("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},null,-1),xe=[_e],Ie={href:"https://stackoverflow.com/users/1377002/andy"},Te=r("path",{d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"},null,-1),Pe=[Te],Ce={rel:"me",href:"https://fosstodon.org/@woodsbythesea"},qe=r("path",{d:"M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"},null,-1),Be=[qe],De={href:"/assets/journal.rss"},Re=r("path",{d:"M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"},null,-1),ze=[Re],Me={__name:"index",setup(e){return(s,d)=>(t(),a("footer",{class:n(o(u).footer)},[r("section",{class:n(o(u).socialsList)},[r("ul",null,[r("li",null,[r("a",Se,[(t(),a("svg",{class:n(o(u).icon),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:"22",height:"22"},xe,2)),b(" Github ")])]),r("li",null,[r("a",Ie,[(t(),a("svg",{class:n(o(u).icon),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",width:"22",height:"22"},Pe,2)),b(" Stack overflow ")])]),r("li",null,[r("a",Ce,[(t(),a("svg",{class:n(o(u).icon),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"22",height:"22"},Be,2)),b(" Mastodon ")])]),r("li",null,[r("a",De,[(t(),a("svg",{class:n(o(u).icon),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"22",height:"22"},ze,2)),b(" RSS feed ")])])])],2)],2))}},Ae="_header_1dehs_1",je="_nav_1dehs_10",Ne={header:Ae,nav:je},Oe={__name:"index",setup(e){return(s,d)=>(t(),a("header",{class:n(o(Ne).header)},[p(f,{type:"h1",text:"Andy Willis Journal (Vue)"})],2))}},Le={__name:"index",props:{data:{type:Object,required:!0}},setup(e){return(s,d)=>(t(),a(g,null,[p(Oe),p(fe,{entries:e.data.entries},null,8,["entries"]),p(Me)],64))}},$e=0,Je="Journal",He=[{id:17,title:"DX vs UX: Part Deux",date:"Friday, 28 July 2023",summary:"Introducing Vue and Svelte",tags:[{id:0,tag:"DX"},{id:1,tag:"UX"},{id:2,tag:"Journal"},{id:3,tag:"Vue"},{id:4,tag:"Svelte"}],link:"dx-vs-ux-part-deux-17",body:[{id:0,type:"para",html:"So I decided to side-step the multi-page process on the journal for a moment and take a look at Vue and Svelte. Vue is slighter younger than React with Svelte - the baby - arriving in 2016. I'd wanted to work with them for a while but never really had a good plan or project in which to use them. But as a way to introduce myself to their component systems, and understand their basic feature-set, incorporating them into the journal was ideal."},{id:1,type:"para",html:"The groundwork for introducing them was simple. Similarly to the vanilla JS and Preact component systems they would take advantage of the global CSS so it's really just a matter of changing the syntax of either the Preact or vanilla systems to their syntax."},{id:2,type:"para",html:"Vue was done in three hours; Svelte a little longer - simply because I spent more time reading its documentation."},{id:3,type:"para",html:"A couple of interesting things that cropped up while I was testing the output:"},{id:4,type:"list",variant:"ordered",items:[{id:0,type:"listitem",html:`<p>In Vue you can have nested <code>&lt;template&gt;</code> elements which are very useful when using iteration to create a series of components with the proper semantic markup. Vue attaches directives to a containing element:</p>
<pre><code>&lt;section v-for="item in items" :key="item.id"&gt;
</code></pre>
<p>Usually, you want that element <em>as part of the component</em>. And you don't really want to create <em>another</em> containing component because that adds causes unnecessary markup. So by using a nested template which doesn't add any new markup:</p>
<pre><code>&lt;template v-for="item in items" :key="item.id"&gt;
</code></pre>
<p>you can move that <code>section</code> container within the component markup and have the components render properly. If you're a React developer it's the equivalent of a fragment.</p>`},{id:1,type:"listitem",html:"<p>One CSS issue that cropped up was some suspicious missing spacing on rendered tags which had to be corrected with an additional <code>0.25rem</code> on each tag's right margin. I've not narrowed down why but I think it has something to do with point 1). The problem happens with the Svelte system too so I figure if I can fix it for one I can easily fix it for the other.</p>"},{id:2,type:"listitem",html:"<p>Fortunately I didn't have to do any CSS module wrangling or make any changes to Vue/Svelte configuration to make them work. You just import them directly within the <code>&lt;script setup&gt;</code> (Vue) or <code>&lt;script&gt;</code> (Svelte) tags.</p>"},{id:3,type:"listitem",html:`<p>I do like Svelte but their method for props-sharing is a little counter-intuitive and there isn't a lot of documentation on <em>why</em> they've chosen this route (I'm not sure "you'll get used to it" counts). In short the component that has props being <em>passed to it</em> has to export those props <em>from it</em> (<code>export let prop;</code>).</p>`},{id:4,type:"listitem",html:"<p><code>markdown-it</code>, which I use to parse the markdown into HTML so I can parse that and get some nice JSON, has different output for an ordered list (<code>ol</code>) and an unordered list (<code>ul</code>). I would have expected them to be the same but MDIT pads the list items with paragraph elements. And that meant a little fiddling with my <code>parse-markdown</code> tool so it didn't pick up those nested paragraphs and render them.</p>"}]},{id:12,type:"para",html:`I'm going to add to my knowledge of both libraries soon with rewrites of my <a href="https://quiet-douhua-784278.netlify.app/pines-to-fan-bay">Walking Journal</a> as a baseline. And then maybe I'll take a look at some web component libraries like Stencil. It's turning into quite a fun project.`}],cdata:`<p>So I decided to side-step the multi-page process on the journal for a moment and take a look at Vue and Svelte. Vue is slighter younger than React with Svelte - the baby - arriving in 2016. I'd wanted to work with them for a while but never really had a good plan or project in which to use them. But as a way to introduce myself to their component systems, and understand their basic feature-set, incorporating them into the journal was ideal.</p>
<p>The groundwork for introducing them was simple. Similarly to the vanilla JS and Preact component systems they would take advantage of the global CSS so it's really just a matter of changing the syntax of either the Preact or vanilla systems to their syntax.</p>
<p>Vue was done in three hours; Svelte a little longer - simply because I spent more time reading its documentation.</p>
<p>A couple of interesting things that cropped up while I was testing the output:</p>
<ol>
<li>
<p>In Vue you can have nested <code>&lt;template&gt;</code> elements which are very useful when using iteration to create a series of components with the proper semantic markup. Vue attaches directives to a containing element:</p>
<pre><code>&lt;section v-for="item in items" :key="item.id"&gt;
</code></pre>
<p>Usually, you want that element <em>as part of the component</em>. And you don't really want to create <em>another</em> containing component because that adds causes unnecessary markup. So by using a nested template which doesn't add any new markup:</p>
<pre><code>&lt;template v-for="item in items" :key="item.id"&gt;
</code></pre>
<p>you can move that <code>section</code> container within the component markup and have the components render properly. If you're a React developer it's the equivalent of a fragment.</p>
</li>
<li>
<p>One CSS issue that cropped up was some suspicious missing spacing on rendered tags which had to be corrected with an additional <code>0.25rem</code> on each tag's right margin. I've not narrowed down why but I think it has something to do with point 1). The problem happens with the Svelte system too so I figure if I can fix it for one I can easily fix it for the other.</p>
</li>
<li>
<p>Fortunately I didn't have to do any CSS module wrangling or make any changes to Vue/Svelte configuration to make them work. You just import them directly within the <code>&lt;script setup&gt;</code> (Vue) or <code>&lt;script&gt;</code> (Svelte) tags.</p>
</li>
<li>
<p>I do like Svelte but their method for props-sharing is a little counter-intuitive and there isn't a lot of documentation on <em>why</em> they've chosen this route (I'm not sure "you'll get used to it" counts). In short the component that has props being <em>passed to it</em> has to export those props <em>from it</em> (<code>export let prop;</code>).</p>
</li>
<li>
<p><code>markdown-it</code>, which I use to parse the markdown into HTML so I can parse that and get some nice JSON, has different output for an ordered list (<code>ol</code>) and an unordered list (<code>ul</code>). I would have expected them to be the same but MDIT pads the list items with paragraph elements. And that meant a little fiddling with my <code>parse-markdown</code> tool so it didn't pick up those nested paragraphs and render them.</p>
</li>
</ol>
<p>I'm going to add to my knowledge of both libraries soon with rewrites of my <a href="https://quiet-douhua-784278.netlify.app/pines-to-fan-bay">Walking Journal</a> as a baseline. And then maybe I'll take a look at some web component libraries like Stencil. It's turning into quite a fun project.</p>`},{id:16,title:"DX vs UX",date:"Friday, 14 July 2023",summary:"An experiment in finding a personal balance between DX and UX",tags:[{id:0,tag:"DX"},{id:1,tag:"UX"},{id:2,tag:"Journal"},{id:3,tag:"React"},{id:4,tag:"Preact"},{id:5,tag:"RenderPipeline"}],link:"dx-vs-ux-16",body:[{id:0,type:"para",html:'Over the last few weeks I decided to revisit the code and markup for this site to try to address an issue that <a href="https://addyosmani.com/blog/software-value/">a lot of developers are having</a> this year - whether the last decade of prioritising front-end development tooling and developer experience (DX) has had an inverse effect on user experience (UX), and whether we now just pay lip-serice to accessibility and performance.'},{id:1,type:"para",html:"In my personal projects I'm generally very frugal when it comes to introducing new libraries into a tech stack. In order to do this I do a <em>lot</em> of experimentation. For example, this site in particular has undergone various iterations over the last few of years with markdown as the only consistent component."},{id:2,type:"h3",text:"Initial stage"},{id:3,type:"para",html:"React, Redux, and an Express server hooked up to Google Drive. The journal markdown was stored on GD which allowed me to access and update it easily from any device."},{id:4,type:"h3",text:"Second stage"},{id:5,type:"para",html:"Preact, Signals, Express, Google Drive. This was really a test of Preact's capabilities, to work out how Signals worked, and to see whether they were a decent alternative to other popular state management libraries. Preact's added value was a significantly reduced bundle size."},{id:6,type:"h3",text:"Current stage"},{id:7,type:"para",html:"Here I wanted to strip back all the technology to the bare minimum and achieve a good balance between DX and UX. I wanted to use the capabilities of component-based design but with a renewed focus on performance and accessibility. In short I wanted a way to design the front end with today's component-centric technology but then be able to export that into plain HTML/CSS to keep performance costs low, and retain good UX and performance."},{id:8,type:"para",html:"To keep things minimal:"},{id:9,type:"list",variant:"unordered",items:[{id:0,type:"listitem",html:"I created a JS script to convert the journal markdown to JSON."},{id:1,type:"listitem",html:"I wrote a component library using template strings. The parsed JSON is imported and passed into the <code>Journal</code> component, and the layers of components built from each entry in the data."},{id:2,type:"listitem",html:"I used CSS modules that I could extract out into a minified core CSS file."},{id:3,type:"listitem",html:"No client-side JS."},{id:4,type:"listitem",html:"Images are now hosted locally, and they are converted to <code>webp</code> format."},{id:5,type:"listitem",html:"A Rollup configuration builds and gzips the developed code and CSS, and a separate JS script minifies the HTML, and merges all the relevant files into one folder ready for deployment."}]},{id:10,type:"para",html:"Total minified HTML/CSS size: 33K."},{id:11,type:"para",html:"The next stage will be to use the component library and some templates to create separate entry pages."}],cdata:`<p>Over the last few weeks I decided to revisit the code and markup for this site to try to address an issue that <a href="https://addyosmani.com/blog/software-value/">a lot of developers are having</a> this year - whether the last decade of prioritising front-end development tooling and developer experience (DX) has had an inverse effect on user experience (UX), and whether we now just pay lip-serice to accessibility and performance.</p>
<p>In my personal projects I'm generally very frugal when it comes to introducing new libraries into a tech stack. In order to do this I do a <em>lot</em> of experimentation. For example, this site in particular has undergone various iterations over the last few of years with markdown as the only consistent component.</p>
<h3>Initial stage</h3>
<p>React, Redux, and an Express server hooked up to Google Drive. The journal markdown was stored on GD which allowed me to access and update it easily from any device.</p>
<h3>Second stage</h3>
<p>Preact, Signals, Express, Google Drive. This was really a test of Preact's capabilities, to work out how Signals worked, and to see whether they were a decent alternative to other popular state management libraries. Preact's added value was a significantly reduced bundle size.</p>
<h3>Current stage</h3>
<p>Here I wanted to strip back all the technology to the bare minimum and achieve a good balance between DX and UX. I wanted to use the capabilities of component-based design but with a renewed focus on performance and accessibility. In short I wanted a way to design the front end with today's component-centric technology but then be able to export that into plain HTML/CSS to keep performance costs low, and retain good UX and performance.</p>
<p>To keep things minimal:</p>
<ul>
<li>I created a JS script to convert the journal markdown to JSON.</li>
<li>I wrote a component library using template strings. The parsed JSON is imported and passed into the <code>Journal</code> component, and the layers of components built from each entry in the data.</li>
<li>I used CSS modules that I could extract out into a minified core CSS file.</li>
<li>No client-side JS.</li>
<li>Images are now hosted locally, and they are converted to <code>webp</code> format.</li>
<li>A Rollup configuration builds and gzips the developed code and CSS, and a separate JS script minifies the HTML, and merges all the relevant files into one folder ready for deployment.</li>
</ul>
<p>Total minified HTML/CSS size: 33K.</p>
<p>The next stage will be to use the component library and some templates to create separate entry pages.</p>`},{id:15,title:"Parkes Operation Center (Apollo 11)",date:"Tuesday, 26 July 2022",summary:"Unearthing the true faces of the Parkes Apollo 11 NASA crew",tags:[{id:0,tag:"TheDish"},{id:1,tag:"Parkes"},{id:2,tag:"Apollo11"}],link:"parkes-operation-center-apollo-11-15",body:[{id:0,type:"para",html:'Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.'},{id:1,type:"para",html:'But I managed to <a href="https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html">unearth this brilliant photo of the actual operations team</a>.'},{id:2,type:"para",html:"Back row left to right: Alfred Stella, George Kropp, William Reytar (back). Seated: Robert Taylor."},{id:4,type:"image",src:"/assets/images/parkes.webp",alt:"Parkes Operations Team 1969"}],cdata:`<p>Just finished watching <a href="https://en.wikipedia.org/wiki/The_Dish">The Dish</a> - the fictional account of the Parkes Observatory and the team that worked there during the Apollo mission. But because it was "based on" the actual events the film-makers used fictional characters.</p>
<p>But I managed to <a href="https://www.parkes.atnf.csiro.au/news_events/apollo11/parkes_operations.html">unearth this brilliant photo of the actual operations team</a>.</p>
<p>Back row left to right: Alfred Stella, George Kropp, William Reytar (back). Seated: Robert Taylor.</p>
<p><img src="/assets/images/parkes.webp" alt="Parkes Operations Team 1969"></p>`},{id:14,title:"Towards Sandwich Bay",date:"Tuesday, 18 December 2018",summary:"Photo archive",tags:[{id:0,tag:"SandwichBay"},{id:1,tag:"Ramsgate"},{id:2,tag:"Sunset"}],link:"towards-sandwich-bay-14",body:[{id:0,type:"para",html:"This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here."},{id:2,type:"image",src:"/assets/images/towardssandwichbay.webp",alt:"Ramsgate Sands"}],cdata:`<p>This is the view from the other side of Sandwich Bay where it hugs the Cliffsend coast to the south of Ramsgate Harbour. This looks back toward the Bay, and is the outer reach of the low tide. Here the North Sea drains away to leave vast stretches of sand for the thousands of sea birds that make their home here.</p>
<p><img src="/assets/images/towardssandwichbay.webp" alt="Ramsgate Sands"></p>`},{id:13,title:"Sandwich Bay, Kent",date:"Wednesday, 31 October 2018",summary:"Photo archive",tags:[{id:0,tag:"SandwichBay"},{id:1,tag:"Beach"},{id:2,tag:"Autumn"},{id:3,tag:"LowTide"}],link:"sandwich-bay-kent-13",body:[{id:0,type:"para",html:'Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."'},{id:2,type:"image",src:"/assets/images/sandwichbay1.webp",alt:"Sandwich Bay"},{id:3,type:"image",src:"/assets/images/sandwichbay2.webp",alt:"Sandwich Bay"}],cdata:`<p>Took a walk with my Dad along the coast at Sandwich Bay. The tide was rolling out as we arrived, and slowly merged with the horizon as we walked along towards Shellness Point where the seals basked in the low Autumn sun."</p>
<p><img src="/assets/images/sandwichbay1.webp" alt="Sandwich Bay">
<img src="/assets/images/sandwichbay2.webp" alt="Sandwich Bay"></p>`},{id:12,title:"Dungeness",date:"Saturday, 30 September 2017",summary:"Photo archive",tags:[{id:0,tag:"Dungeness"},{id:1,tag:"Beach"},{id:2,tag:"Windswept"}],link:"dungeness-12",body:[{id:1,type:"image",src:"/assets/images/dungeness1.webp",alt:"Dungeness beach"},{id:2,type:"image",src:"/assets/images/dungeness2.webp",alt:"Ship high on the beach"}],cdata:`<p><img src="/assets/images/dungeness1.webp" alt="Dungeness beach">
<img src="/assets/images/dungeness2.webp" alt="Ship high on the beach"></p>`},{id:11,title:"Flickr images for responsive sites",date:"Monday, 21 August 2017",summary:"Flickr responsive images investigation",tags:[{id:0,tag:"Images"},{id:1,tag:"Responsive"},{id:2,tag:"Flickr"}],link:"flickr-images-for-responsive-sites-11",body:[{id:0,type:"para",html:"Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr."},{id:1,type:"para",html:"When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>."},{id:2,type:"para",html:"For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site."},{id:3,type:"table",html:`<thead>
<tr>
<th>Type</th>
<th>Dimensions</th>
<th>ID</th>
</tr>
</thead>
<tbody>
<tr>
<td>Square</td>
<td>75x75</td>
<td>s</td>
</tr>
<tr>
<td>Thumbnail</td>
<td>100x56</td>
<td>t</td>
</tr>
<tr>
<td>Square</td>
<td>150x150</td>
<td>q</td>
</tr>
<tr>
<td>Small</td>
<td>240x135</td>
<td>m</td>
</tr>
<tr>
<td>Small*</td>
<td>320x180</td>
<td>n</td>
</tr>
<tr>
<td>Medium*</td>
<td>500x281</td>
<td>n/a</td>
</tr>
<tr>
<td>Medium</td>
<td>640x359</td>
<td>z</td>
</tr>
<tr>
<td>Medium*</td>
<td>800x449</td>
<td>c</td>
</tr>
<tr>
<td>Large</td>
<td>1024x575</td>
<td>b</td>
</tr>
<tr>
<td>Large</td>
<td>1600x899</td>
<td>h</td>
</tr>
<tr>
<td>Large</td>
<td>2048x1150</td>
<td>k</td>
</tr>
<tr>
<td>Original</td>
<td>2592x1456</td>
<td>o</td>
</tr>
</tbody>`}],cdata:`<p>Today I implemented basic responsive images for this site in order to improve the performance, and it took less than an hour thanks - mainly - to Flickr.</p>
<p>When you upload a new image to Flickr the service will automatically create and host new sizes of that image. Those copies can be requested through a simple http request (no need to use the API if you don't need to) according to a simple formula: <code>filename[_sizeId].jpg</code>.</p>
<p>For reference here's a list of the sizes along with their sizeIds based on an original image size of 2592x1456. Those marked with an asterisk are those sizes used for the devices that might visit this site.</p>
<table>
<thead>
<tr>
<th>Type</th>
<th>Dimensions</th>
<th>ID</th>
</tr>
</thead>
<tbody>
<tr>
<td>Square</td>
<td>75x75</td>
<td>s</td>
</tr>
<tr>
<td>Thumbnail</td>
<td>100x56</td>
<td>t</td>
</tr>
<tr>
<td>Square</td>
<td>150x150</td>
<td>q</td>
</tr>
<tr>
<td>Small</td>
<td>240x135</td>
<td>m</td>
</tr>
<tr>
<td>Small*</td>
<td>320x180</td>
<td>n</td>
</tr>
<tr>
<td>Medium*</td>
<td>500x281</td>
<td>n/a</td>
</tr>
<tr>
<td>Medium</td>
<td>640x359</td>
<td>z</td>
</tr>
<tr>
<td>Medium*</td>
<td>800x449</td>
<td>c</td>
</tr>
<tr>
<td>Large</td>
<td>1024x575</td>
<td>b</td>
</tr>
<tr>
<td>Large</td>
<td>1600x899</td>
<td>h</td>
</tr>
<tr>
<td>Large</td>
<td>2048x1150</td>
<td>k</td>
</tr>
<tr>
<td>Original</td>
<td>2592x1456</td>
<td>o</td>
</tr>
</tbody>
</table>`},{id:10,title:"Akule",date:"Tuesday, 15 August 2017",summary:"Photo archive",tags:[{id:0,tag:"Ocean"},{id:1,tag:"Photography"},{id:2,tag:"Underwater"},{id:3,tag:"Hawaii"}],link:"akule-10",body:[{id:3,type:"image",src:"/assets/images/akule.webp",alt:"Pretty school of fish"}],cdata:`<blockquote>
<p>"When I descend beneath the surface I am in a world with different rules, different truths. Things look different, light acts differently, gravity pulls differently. One can fly, or at least float over the landscape, or seascape. When I descend into this wonderland, <a href="http://lenscratch.com/2017/08/wayne-levin-the-states-project-hawaii">I want to make images, not to explain or clarify that world, but to deepen the mystery.</a>" - Wayne Levin</p>
</blockquote>
<p><img src="/assets/images/akule.webp" alt="Pretty school of fish"></p>`},{id:9,title:"Wimbledon Common",date:"Monday, 31 July 2017",summary:"Photo archive",tags:[{id:0,tag:"WimbledonCommon"},{id:1,tag:"Pond"},{id:2,tag:"SamShepard"}],link:"wimbledon-common-9",body:[{id:0,type:"para",html:"This is the pond I was lazing by when I heard the sad news that Sam Shepard had died."},{id:2,type:"image",src:"/assets/images/shepard.webp",alt:"Pond on the East side of Wimbledon Common"}],cdata:`<p>This is the pond I was lazing by when I heard the sad news that Sam Shepard had died.</p>
<p><img src="/assets/images/shepard.webp" alt="Pond on the East side of Wimbledon Common"></p>`},{id:8,title:"This site",date:"Saturday, 24 June 2017",summary:"Details of the changes to the journal",tags:[{id:0,tag:"Express"},{id:1,tag:"React"},{id:2,tag:"ReactRouter"},{id:3,tag:"Markdown"},{id:4,tag:"Journal"}],link:"this-site-8",body:[{id:0,type:"para",html:'This site is <a href="https://github.com/andywillis/uws">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.'},{id:1,type:"para",html:"In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about."},{id:2,type:"h3",text:"Process breakdown"},{id:3,type:"para",html:"All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account."},{id:4,type:"para",html:"I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data."},{id:5,type:"para",html:"Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface."},{id:6,type:"para",html:"This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site."}],cdata:`<p>This site is <a href="https://github.com/andywillis/uws">an on-going React/Redux project</a> to build and maintain an online static-site generated journal that looks good on both mobile and desktop. Initially this was going to be a one-shot experiment, but as I lean into different tech each month this has become a useful battle-tested area for me to test each tech out.</p>
<p>In the first release, for example, I decided to not implement Redux so I could concentrate on the React component workflow instead. I added Redux in the second release. And, while I'm a fan of CSS modules, it makes sense to start testing CSS-in-JS here too to see what all the fuss is about.</p>
<h3>Process breakdown</h3>
<p>All the text on this site was generated from a markdown file (currently only 4k in size) hosted on my Google Drive account.</p>
<p>I use Express to grab that file every 30 minutes, wrangle the data into an array of entries, and store it. There is a single API route <code>/entries</code> that React uses to get the data.</p>
<p>Once the site is loaded I use <code>redux-thunk</code> to grab the data from the server and store it in a Redux state for React to use. React-router 4 provides a stable routing interface.</p>
<p>This system means I can update the markdown file whenever I want from either my desktop or phone without the hassle of accessing a site admin panel to add a post knowing that within 30 minutes those words will be available on the site.</p>`},{id:7,title:"A Tuesday Wander",date:"Tuesday, 16 May 2017",summary:"Walk archive",tags:[{id:0,tag:"KensingtonChurch"},{id:1,tag:"GreenPark"},{id:2,tag:"London"},{id:3,tag:"HydePark"}],link:"a-tuesday-wander-7",body:[{id:0,type:"para",html:"A walk from Embankment, up The Mall to Buckingham Palace, along Green Park, up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and finally out on to the road and on to Earl's Court."},{id:2,type:"image",src:"/assets/images/wandermap.webp",alt:"Map of the walk from Embankment to Earl's Court"}],cdata:`<p>A walk from Embankment, up The Mall to Buckingham Palace, along Green Park, up to Hyde Park, through the park along the lake with the talkative geese, across to Kensington Palace Gardens, and finally out on to the road and on to Earl's Court.</p>
<p><img src="/assets/images/wandermap.webp" alt="Map of the walk from Embankment to Earl's Court"></p>`},{id:6,title:"Broadstairs",date:"Wednesday, 28 December 2016",summary:"Photo archive",tags:[{id:0,tag:"Broadstairs"},{id:1,tag:"NorthSea"},{id:2,tag:"Beach"},{id:3,tag:"Ocean"}],link:"broadstairs-6",body:[{id:0,type:"para",html:"It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea."},{id:2,type:"image",src:"/assets/images/broadstairs1.webp",alt:"Photo of the North Sea from the coast near Broadstairs"},{id:3,type:"para",html:"If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel."},{id:5,type:"image",src:"/assets/images/broadstairs2.webp",alt:"Photo of the North Sea from the coast near Broadstairs"}],cdata:`<p>It comes as a surprise to many people, even to those who have lived in the area, that the water that plays along the coast around Broadstairs, Ramsgate, Sandwich, and even Deal, is not the English Channel, but the North Sea.</p>
<p><img src="/assets/images/broadstairs1.webp" alt="Photo of the North Sea from the coast near Broadstairs"></p>
<p>If you were to imagine a line that crossed the sea in an ENE direction from Leathercoate Point, where the war memorial commemorating the Dover Patrol stands North of St. Margaret's Bay, to Walde Lighthouse just North of Calais, that line demarks where the Sea becomes the Channel.</p>
<p><img src="/assets/images/broadstairs2.webp" alt="Photo of the North Sea from the coast near Broadstairs"></p>`},{id:5,title:"Wimbledon Common",date:"Saturday, 31 December 2016",summary:"Photo archive",tags:[{id:0,tag:"WimbledonCommon"}],link:"wimbledon-common-5",body:[{id:1,type:"image",src:"/assets/images/wimbledontree.webp",alt:"The sun's rays shine through the foliage of a tree on the Common"}],cdata:`<p><img src="/assets/images/wimbledontree.webp" alt="The sun's rays shine through the foliage of a tree on the Common"></p>`},{id:4,title:"Montevideo, Uruguay",date:"Thursday, July 16 2015",summary:"Photo archive",tags:[{id:0,tag:"Uruguay"},{id:1,tag:"Beach"},{id:2,tag:"Ocean"}],link:"montevideo-uruguay-4",body:[{id:1,type:"image",src:"/assets/images/uruguay.webp",alt:"The beach North of Montevideo, Uruguay"}],cdata:'<p><img src="/assets/images/uruguay.webp" alt="The beach North of Montevideo, Uruguay"></p>'},{id:3,title:"Disney's The Black Hole",date:"Tuesday, 3 April 2012",summary:"Introduction to my Spotmaps project",tags:[{id:0,tag:"TheBlackHole"},{id:1,tag:"Spotmaps"}],link:"disneys-the-black-hole-3",body:[{id:0,type:"para",html:'This is one of the many images rendered by my <a href="https://github.com/andywillis/spotmaps">spotmaps</a> application.'},{id:1,type:"para",html:"From the original site:"},{id:11,type:"image",src:"/assets/images/blackhole.webp",alt:"Black Hole spotmap"},{id:12,type:"para",html:'More images can be found <a href="https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787">here on Flickr</a>.'},{id:13,type:"para",html:'There are also a couple of online articles about the spotmaps website on <a href="http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels">FastCoDesign</a>, and <a href="http://gizmodo.com/5972740/the-color-of-movies-visualized">Gizmodo</a>.'}],cdata:`<p>This is one of the many images rendered by my <a href="https://github.com/andywillis/spotmaps">spotmaps</a> application.</p>
<p>From the original site:</p>
<blockquote>
<p>Spotmaps, based on Brendan Dawes' <a href="http://brendandawes.com/projects/cinemaredux">Cinema Redux</a>, is an on-going project to map the colour narratives of different films.</p>
</blockquote>
<blockquote>
<p>Films are processed through a Python/OpenCV pipeline: each frame's colour is sampled, and  a spot of average colour is produced from the combination of one second's frames.</p>
</blockquote>
<blockquote>
<p>Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.</p>
</blockquote>
<blockquote>
<p>A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.</p>
</blockquote>
<p><img src="/assets/images/blackhole.webp" alt="Black Hole spotmap"></p>
<p>More images can be found <a href="https://www.flickr.com/photos/urbanwhaleshark/albums/72157649963155584/with/17126036787">here on Flickr</a>.</p>
<p>There are also a couple of online articles about the spotmaps website on <a href="http://www.fastcodesign.com/1671572/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels">FastCoDesign</a>, and <a href="http://gizmodo.com/5972740/the-color-of-movies-visualized">Gizmodo</a>.</p>`},{id:2,title:"Nan",date:"Sunday, 1 January 2006",summary:"Photo archive",tags:[{id:0,tag:"Nan"},{id:1,tag:"War"},{id:2,tag:"Hospital"}],link:"nan-2",body:[{id:0,type:"para",html:"Nan is on the right."},{id:2,type:"image",src:"/assets/images/nan.webp",alt:"Nan in an operating theatre (black and white)"}],cdata:`<p>Nan is on the right.</p>
<p><img src="/assets/images/nan.webp" alt="Nan in an operating theatre (black and white)"></p>`},{id:1,title:"My Great Grandad, George W. Smith.",date:"Sunday, 1 January 2006",summary:"Photo archive",tags:[{id:0,tag:"GreatGranddad"},{id:1,tag:"Miner"},{id:2,tag:"Kent"},{id:3,tag:"Dover"}],link:"my-great-grandad-george-w-smith-1",body:[{id:0,type:"para",html:"Organised the first Kent miner's strike."},{id:2,type:"image",src:"/assets/images/george.webp",alt:"My great-grandfather, George"}],cdata:`<p>Organised the first Kent miner's strike.</p>
<p><img src="/assets/images/george.webp" alt="My great-grandfather, George"></p>`},{id:0,title:"Dirty Cow",date:"Sunday, 1 January 2000",summary:"Photo archive",tags:[{id:0,tag:"Cow"},{id:1,tag:"Dirtycow"},{id:2,tag:"NewYear"}],link:"dirty-cow-0",body:[{id:1,type:"image",src:"/assets/images/dirtycow.webp",alt:"Massive papier-mache cow on the roof of Fortress Studios"}],cdata:'<p><img src="/assets/images/dirtycow.webp" alt="Massive papier-mache cow on the roof of Fortress Studios"></p>'}],Ge=["dx-vs-ux-part-deux-17","dx-vs-ux-16","parkes-operation-center-apollo-11-15","towards-sandwich-bay-14","sandwich-bay-kent-13","dungeness-12","flickr-images-for-responsive-sites-11","akule-10","wimbledon-common-9","this-site-8","a-tuesday-wander-7","broadstairs-6","wimbledon-common-5","montevideo-uruguay-4","disneys-the-black-hole-3","nan-2","my-great-grandad-george-w-smith-1","dirty-cow-0"],Fe={DX:2,UX:2,Journal:3,Vue:1,Svelte:1,React:2,Preact:1,RenderPipeline:1,TheDish:1,Parkes:1,Apollo11:1,SandwichBay:2,Ramsgate:1,Sunset:1,Beach:4,Autumn:1,LowTide:1,Dungeness:1,Windswept:1,Images:1,Responsive:1,Flickr:1,Ocean:3,Photography:1,Underwater:1,Hawaii:1,WimbledonCommon:2,Pond:1,SamShepard:1,Express:1,ReactRouter:1,Markdown:1,KensingtonChurch:1,GreenPark:1,London:1,HydePark:1,Broadstairs:1,NorthSea:1,Uruguay:1,TheBlackHole:1,Spotmaps:1,Nan:1,War:1,Hospital:1,GreatGranddad:1,Miner:1,Kent:1,Dover:1,Cow:1,Dirtycow:1,NewYear:1},Ve={id:$e,title:Je,entries:He,links:Ge,tags:Fe};T(Le,{data:Ve}).mount("body");
//# sourceMappingURL=index-ba37d86a.js.map