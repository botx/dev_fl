"use strict";(self.webpackChunkfinancial_landscape=self.webpackChunkfinancial_landscape||[]).push([[2983],{39058:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(63366),n=a(67294),l=a(86010),i=a(53652),o=a(87524),s=a(39960),m=a(95999),c="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",p="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function v(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:h},e.title))})))))}var f=a(13102);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(f.Zo,{component:E,props:e})}function _(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(v,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,N),m=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},99703:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a(95999),l=a(32244);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},51860:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(67294),n=a(86010),l=a(95999),i=a(39960),o=a(44996),s=a(88824),m=a(18780),c=a(34228),u=a(66114),d=a(71526);function g(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function p(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(g,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(g,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var h="authorCol_sTYa",v="imageOnlyAuthorRow_vA2J",f="imageOnlyAuthorCol_kG3X";function E(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?v:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?f:h),key:t},r.createElement(p,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var b="blogPostTitle_Ikge",_="blogPostData_SAv4",N="blogPostDetailsFull_u0Nl";function Z(e){var t,a,g=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,o.C)().withBaseUrl,h=e.children,v=e.frontMatter,f=e.assets,Z=e.metadata,k=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,w=Z.date,I=Z.formattedDate,x=Z.permalink,y=Z.tags,L=Z.readingTime,A=Z.title,F=Z.editUrl,R=Z.authors,C=null!=(t=f.image)?t:v.image,M=!T&&k,B=y.length>0,U=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(U,{className:b,itemProp:"headline"},T?A:r.createElement(i.Z,{itemProp:"url",to:x},A)),r.createElement("div",{className:(0,n.Z)(_,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},I),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",g(L))),r.createElement(E,{authors:R,assets:f})),C&&r.createElement("meta",{itemProp:"image",content:p(C,{absolute:!0})}),r.createElement("div",{id:T?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,h)),(B||k)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",T&&N)},B&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":M})},r.createElement(d.Z,{tags:y})),T&&F&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:F})),M&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":B})},r.createElement(i.Z,{to:Z.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:A})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},66114:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(67294),n=a(95999),l=a(35281),i=a(87462),o=a(63366),s=a(86010),m="iconEdit_eYIM",c=["className"];function u(e){var t=e.className,a=(0,o.Z)(e,c);return r.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},r.createElement(u,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a(86010),l=a(39960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return r.createElement(l.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&r.createElement("div",{className:"pagination-nav__sublabel"},i),r.createElement("div",{className:"pagination-nav__label"},a))}},13008:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(39960),i="tag_zVej",o="tagRegular_sFm0",s="tagWithCount_h2kH";function m(e){var t=e.permalink,a=e.label,m=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(i,m?s:o)},a,m&&r.createElement("span",null,m))}},71526:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(95999),i=a(13008),o="tags_jXut",s="tag_QGVx";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:s},r.createElement(i.Z,{label:t,permalink:a}))}))))}},88824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(67294),n=a(52263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}}}]);