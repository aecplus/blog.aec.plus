"use strict";(self.webpackChunkblog_aec_plus=self.webpackChunkblog_aec_plus||[]).push([[249],{665:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var i=t(4164),a=t(7289),s=t(204),r=t(2362),l=t(4848);function o(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(a.Rc,{}),className:(0,i.A)(n,s.G.common.unlistedBanner),children:(0,l.jsx)(a.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.AE,{}),(0,l.jsx)(o,{...e})]})}},2866:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var i=t(6540),a=t(4164),s=t(1082),r=t(204),l=t(3750),o=t(569),c=t(8771),d=t(539),u=t(1865),m=t(4848);function h(e){const{nextItem:n,prevItem:t}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,m.jsx)(u.A,{...t,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),n&&(0,m.jsx)(u.A,{...n,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function f(){const{assets:e,metadata:n}=(0,l.e7)(),{title:t,description:i,date:a,tags:r,authors:o,frontMatter:c}=n,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:c.title_meta??t,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:a}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var g=t(7143);function p(){const e=(0,l.J_)();return(0,m.jsx)(g.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=t(3115);function v(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function b(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=b({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function j(e){const n=e.getBoundingClientRect();return n.top===n.bottom?j(e.parentNode):n}function L(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>j(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(j(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function A(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,x.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function N(e){const n=(0,i.useRef)(void 0),t=A();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),o=L(l,{anchorTopOffset:t.current}),c=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var _=t(6289);function H(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(_.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(H,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const C=i.memo(H);function y(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:l,...o}=e;const c=(0,x.p)(),d=r??c.tableOfContents.minHeadingLevel,u=l??c.tableOfContents.maxHeadingLevel,h=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>b({toc:v(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:d,maxHeadingLevel:u});return N((0,i.useMemo)((()=>{if(a&&s)return{linkClassName:a,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u}}),[a,s,d,u])),(0,m.jsx)(C,{toc:h,className:t,linkClassName:a,...o})}const k={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},T="table-of-contents__link toc-highlight",I="table-of-contents__link--active";function w(e){let{className:n,...t}=e;return(0,m.jsx)("div",{className:(0,a.A)(k.tableOfContents,"thin-scrollbar",n),children:(0,m.jsx)(y,{...t,linkClassName:T,linkActiveClassName:I})})}var E=t(7289),O=t(2362);function B(e){let{className:n}=e;return(0,m.jsx)(O.A,{type:"caution",title:(0,m.jsx)(E.Yh,{}),className:(0,a.A)(n,r.G.common.draftBanner),children:(0,m.jsx)(E.TT,{})})}var M=t(665);function P(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,m.jsxs)(m.Fragment,{children:[(t||i.unlisted)&&(0,m.jsx)(M.A,{}),i.draft&&(0,m.jsx)(B,{})]})}function R(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:a}=(0,l.e7)(),{nextItem:s,prevItem:r,frontMatter:d}=i,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:g}=d;return(0,m.jsxs)(o.A,{sidebar:n,toc:!u&&a.length>0?(0,m.jsx)(w,{toc:a,minHeadingLevel:f,maxHeadingLevel:g}):void 0,children:[(0,m.jsx)(P,{metadata:i}),(0,m.jsx)(c.A,{children:t}),(s||r)&&(0,m.jsx)(h,{nextItem:s,prevItem:r})]})}function S(e){const n=e.content;return(0,m.jsx)(l.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,m.jsx)(f,{}),(0,m.jsx)(p,{}),(0,m.jsx)(R,{sidebar:e.sidebar,children:(0,m.jsx)(n,{})})]})})}},7289:(e,n,t)=>{t.d(n,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});t(6540);var i=t(539),a=t(7143),s=t(4848);function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);