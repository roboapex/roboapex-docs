"use strict";(self.webpackChunkroboapex_github_io=self.webpackChunkroboapex_github_io||[]).push([[514,75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,h=m["".concat(i,".").concat(p)]||m[p]||u[p]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3042:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(7294),o=n(3905),r=n(6291),l=n(7019),c=n(6010),i=n(3810),s=n(3783),d=n(5537),u=n(7462);const m=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var p=n(5999),h=n(9960),b=n(3919),y=n(541);const g="menuLinkText_OKON",f="hasHref_TwRn";var v=n(2389);const E=(0,a.memo)((e=>{let{items:t,...n}=e;return a.createElement(a.Fragment,null,t.map(((e,t)=>a.createElement(k,(0,u.Z)({key:t,item:e},n)))))}));function k(e){let{item:t,...n}=e;return"category"===t.type?0===t.items.length?null:a.createElement(N,(0,u.Z)({item:t},n)):a.createElement(T,(0,u.Z)({item:t},n))}function N(e){let{item:t,onItemClick:n,activePath:o,level:r,...l}=e;const{items:s,label:d,collapsible:m,className:b,href:y}=t,k=function(e){const t=(0,v.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),N=(0,i._F)(t,o),{collapsed:T,setCollapsed:_,toggleCollapsed:C}=(0,i.uR)({initialState:()=>!!m&&(!N&&t.collapsed)});return function(e){let{isActive:t,collapsed:n,setCollapsed:o}=e;const r=(0,i.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&o(!1)}),[t,r,n,o])}({isActive:N,collapsed:T,setCollapsed:_}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":T},b)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(h.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":m&&!y,"menu__link--active":N,[g]:!m,[f]:!!k}),onClick:m?e=>{null==n||n(t),y?_(!1):(e.preventDefault(),C())}:()=>{null==n||n(t)},href:m?null!=k?k:"#":k},l),d),y&&m&&a.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:d}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),C()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},a.createElement(E,{items:s,tabIndex:T?-1:0,onItemClick:n,activePath:o,level:r+1})))}function T(e){let{item:t,onItemClick:n,activePath:o,level:r,...l}=e;const{href:s,label:d,className:m}=t,p=(0,i._F)(t,o);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",m),key:d},a.createElement(h.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,b.Z)(s)&&{onClick:n?()=>n(t):void 0},l),(0,b.Z)(s)?d:a.createElement("span",null,d,a.createElement(y.Z,null))))}const _="sidebar_a3j0",C="sidebarWithHideableNavbar_VlPv",Z="sidebarHidden_OqfG",S="sidebarLogo_hmkv",O="menu_cyFh",P="menuWithAnnouncementBar_+O1J",I="collapseSidebarButton_eoK2",w="collapseSidebarButtonIcon_e+kA";function x(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(m,{className:w}))}function L(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const l=function(){const{isActive:e}=(0,i.nT)(),[t,n]=(0,a.useState)(e);return(0,i.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}(),{navbar:{hideOnScroll:s},hideableSidebar:u}=(0,i.LU)();return a.createElement("div",{className:(0,c.Z)(_,{[C]:s,[Z]:r})},s&&a.createElement(d.Z,{tabIndex:-1,className:S}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",O,{[P]:l})},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(E,{items:n,activePath:t,level:1}))),u&&a.createElement(x,{onClick:o}))}const A=e=>{let{toggleSidebar:t,sidebar:n,path:o}=e;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(E,{items:n,activePath:o,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function D(e){return a.createElement(i.Cv,{component:A,props:e})}const M=a.memo(L),j=a.memo(D);function B(e){const t=(0,s.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(M,e),o&&a.createElement(j,e))}var F=n(2859);const R={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var z={Prism:n(7410).default,theme:R};function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W.apply(this,arguments)}var V=/\r\n|\r|\n/,U=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},q=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Y=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=W({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=W({},n,{backgroundColor:null}),o};function J(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const K=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),H(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Y(e.theme,e.language):void 0;return t.themeDict=n})),H(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=W({},J(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?W({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),H(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),H(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=W({},J(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?W({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),H(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,c=[],i=[c];l>-1;){for(;(r=a[l]++)<o[l];){var s=void 0,d=t[l],u=n[l][r];if("string"==typeof u?(d=l>0?d:["plain"],s=u):(d=q(d,u.type),u.alias&&(d=q(d,u.alias)),s=u.content),"string"==typeof s){var m=s.split(V),p=m.length;c.push({types:d,content:m[0]});for(var h=1;h<p;h++)U(c),i.push(c=[]),c.push({types:d,content:m[h]})}else l++,t.push(d),n.push(s),a.push(0),o.push(s.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return U(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const Q={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var X=n(5350);const G=()=>{const{prism:e}=(0,i.LU)(),{isDarkTheme:t}=(0,X.Z)(),n=e.theme||Q,a=e.darkTheme||n;return t?a:n},$="codeBlockContainer_J+bg",ee="codeBlockContent_csEI",te="codeBlockTitle_oQzk",ne="codeBlock_rtdJ",ae="copyButton_M3SB",oe="codeBlockLines_1zSZ";function re(e){var t;let{children:n,className:o,metastring:r,title:l}=e;const{prism:s}=(0,i.LU)(),[d,m]=(0,a.useState)(!1),[h,b]=(0,a.useState)(!1);(0,a.useEffect)((()=>{b(!0)}),[]);const y=(0,i.bc)(r)||l,g=G(),f=Array.isArray(n)?n.join(""):n,v=null!=(t=(0,i.Vo)(o))?t:s.defaultLanguage,{highlightLines:E,code:k}=(0,i.nZ)(f,r,v),N=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),o&&o.focus()}(k),m(!0),setTimeout((()=>m(!1)),2e3)};return a.createElement(K,(0,u.Z)({},z,{key:String(h),theme:g,code:k,language:v}),(e=>{let{className:t,style:n,tokens:r,getLineProps:l,getTokenProps:i}=e;return a.createElement("div",{className:(0,c.Z)($,o)},y&&a.createElement("div",{style:n,className:te},y),a.createElement("div",{className:(0,c.Z)(ee,v)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,ne,"thin-scrollbar"),style:n},a.createElement("code",{className:oe},r.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=l({line:e,key:t});return E.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,u.Z)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,u.Z)({key:t},i({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(ae,"clean-btn"),onClick:N},d?a.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var le=n(9649);const ce="details_h+cY";function ie(e){let{...t}=e;return a.createElement(i.PO,(0,u.Z)({},t,{className:(0,c.Z)("alert alert--info",ce,t.className)}))}const se={head:e=>{const t=a.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...o}=e.props;return a.createElement(e.props.originalType,o)}return e}(e)));return a.createElement(F.Z,e,t)},code:e=>{const{children:t}=e;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(re,e):a.createElement("code",e)},a:e=>a.createElement(h.Z,e),pre:e=>{var t;const{children:n}=e;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(re,(0,a.isValidElement)(n)?null==n?void 0:n.props:{...e})},details:e=>{const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(ie,(0,u.Z)({},e,{summary:n}),o)},h1:(0,le.Z)("h1"),h2:(0,le.Z)("h2"),h3:(0,le.Z)("h3"),h4:(0,le.Z)("h4"),h5:(0,le.Z)("h5"),h6:(0,le.Z)("h6")};var de=n(4608);const ue="backToTopButton_i9tI",me="backToTopButtonShow_wCmF";function pe(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}const he=function(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(!1),{smoothScrollTop:o,cancelScrollToTop:r}=pe();return(0,i.RF)(((e,a)=>{let{scrollY:o}=e;const l=null==a?void 0:a.scrollY;if(!l)return;if(n.current)return void(n.current=!1);const c=o<l;if(c||r(),o<300)t(!1);else if(c){const e=document.documentElement.scrollHeight;o+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(n.current=!0,t(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,ue,{[me]:e}),type:"button",onClick:()=>o()})};var be=n(6775);const ye={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"};function ge(e){let{currentDocRoute:t,versionMetadata:n,children:r,sidebarName:s}=e;const d=(0,i.Vq)(),{pluginId:u,version:h}=n,[b,y]=(0,a.useState)(!1),[g,f]=(0,a.useState)(!1),v=(0,a.useCallback)((()=>{g&&f(!1),y((e=>!e))}),[g]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:h,tag:(0,i.os)(u,h)}},a.createElement("div",{className:ye.docPage},a.createElement(he,null),d&&a.createElement("aside",{className:(0,c.Z)(ye.docSidebarContainer,{[ye.docSidebarContainerHidden]:b}),onTransitionEnd:e=>{e.currentTarget.classList.contains(ye.docSidebarContainer)&&b&&f(!0)}},a.createElement(B,{key:s,sidebar:d,path:t.path,onCollapse:v,isHidden:g}),g&&a.createElement("div",{className:ye.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},a.createElement(m,{className:ye.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(ye.docMainContainer,{[ye.docMainContainerEnhanced]:b||!d})},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",ye.docItemWrapper,{[ye.docItemWrapperEnhanced]:b})},a.createElement(o.Zo,{components:se},r)))))}const fe=function(e){const{route:{routes:t},versionMetadata:n,location:o}=e,l=t.find((e=>(0,be.LX)(o.pathname,e)));if(!l)return a.createElement(de.default,null);const c=l.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(F.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement(ge,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,r.Z)(t,{versionMetadata:n})))))}},9649:(e,t,n)=>{n.d(t,{N:()=>d,Z:()=>u});var a=n(7462),o=n(7294),r=n(6010),l=n(5999),c=n(3810);const i="anchorWithStickyNavbar_y2LR",s="anchorWithHideOnScrollNavbar_3ly5",d=e=>{let{...t}=e;return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},u=e=>{return"h1"===e?d:(t=e,e=>{let{id:n,...d}=e;const{navbar:{hideOnScroll:u}}=(0,c.LU)();return n?o.createElement(t,(0,a.Z)({},d,{className:(0,r.Z)("anchor",{[s]:u,[i]:!u}),id:n}),d.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,d)});var t}},4608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(7294),o=n(7019),r=n(5999);const l=function(){return a.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);