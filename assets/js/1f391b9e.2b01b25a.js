"use strict";(self.webpackChunkfinancial_landscape=self.webpackChunkfinancial_landscape||[]).push([[3085],{14247:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(67294),l=t(86010),r=t(1944),i=t(35281),c=t(3206),o=t(34228),u=t(39407),s="mdxPageWrapper_j9I6";function m(e){var n=e.content,t=n.metadata,m=t.title,d=t.description,f=t.frontMatter,v=f.wrapperClassName,g=f.hide_table_of_contents;return a.createElement(r.FG,{className:(0,l.Z)(null!=v?v:i.k.wrapper.mdxPages,i.k.page.mdxPage)},a.createElement(r.d,{title:m,description:d}),a.createElement(c.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",s)},a.createElement("div",{className:(0,l.Z)("col",!g&&"col--8")},a.createElement(o.Z,null,a.createElement(n,null))),!g&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(u.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},39407:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(87462),l=t(63366),r=t(67294),i=t(86010),c=t(93743),o="tableOfContents_bqdL",u=["className"];function s(e){var n=e.className,t=(0,l.Z)(e,u);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},r.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),l=t(63366),r=t(67294),i=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,l.Z)(e,i);t>=0?n[t].children.push(r):a.push(r)})),a}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}var u=t(86668);function s(e){var n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function m(e,n){var t,a,l=n.anchorTopOffset,r=e.find((function(e){return s(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,r.useRef)(0),n=(0,u.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){var n=(0,r.useRef)(void 0),t=d();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],l=n;l<=t;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=m(c,{anchorTopOffset:t.current}),u=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function v(e){var n=e.toc,t=e.className,a=e.linkClassName,l=e.isChild;return n.length?r.createElement("ul",{className:l?void 0:t},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}var g=r.memo(v),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,s=e.linkClassName,m=void 0===s?"table-of-contents__link":s,d=e.linkActiveClassName,v=void 0===d?void 0:d,p=e.minHeadingLevel,L=e.maxHeadingLevel,E=(0,l.Z)(e,h),N=(0,u.L)(),H=null!=p?p:N.tableOfContents.minHeadingLevel,x=null!=L?L:N.tableOfContents.maxHeadingLevel,C=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return o({toc:c(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:H,maxHeadingLevel:x});return f((0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:H,maxHeadingLevel:x}}),[m,v,H,x])),r.createElement(g,(0,a.Z)({toc:C,className:i,linkClassName:m},E))}},61094:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(87462),l=t(34673),r=t(67294),i=t(91262);function c(e){var n=r.useRef();return r.useEffect((function(){window.location.href.replace(/^^[^#]*#/,"")===e.id&&setTimeout((function(){n.current.scrollIntoView()}),100)}),[]),r.createElement("div",{id:e.id,ref:n},r.createElement(i.Z,null,(function(){return r.createElement(l.Z,(0,a.Z)({},e,{open:e.open||window.location.href.replace(/^^[^#]*#/,"")===e.id}))})))}}}]);