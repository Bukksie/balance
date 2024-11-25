"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[714,774],{50010:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ye});var a=n(96540),r=n(40870),l=n(1003),o=n(17559),i=n(2967),c=n(92618),s=n(32252),d=n(26588),m=n(96196),u=n(21312),b=n(23104),p=n(75062);const v="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function f(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],o=(0,a.useRef)(!1),i=(0,b.gk)(),c=i.startScroll,s=i.cancelScroll;return(0,b.Mq)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(s(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.$)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.A)("clean-btn",o.G.common.backToTopButton,v,t&&h),type:"button",onClick:n})}var E=n(72681),g=n(24581),_=n(6342),C=n(23465),k=n(9668);function A(e){return a.createElement("svg",(0,k.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function I(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.A)("button button--secondary button--outline",N),onClick:t},a.createElement(A,{className:S}))}var x=n(65041),y=n(21367),T=n(12021),w=Symbol("EmptyContext"),M=a.createContext(w);function L(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(M.Provider,{value:o},t)}var B=n(41422),P=n(99169),G=n(75489),F=n(92303),H=["item","onItemClick","activePath","level","index"];function W(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,s=e.index,d=(0,y.A)(e,H),m=t.items,u=t.label,b=t.collapsible,p=t.className,v=t.href,h=(0,_.p)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,F.default)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c._o)(e):void 0}),[e,t])}(t),E=(0,c.w8)(t,l),g=(0,P.ys)(v,l),C=(0,B.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),A=C.collapsed,N=C.setCollapsed,S=function(){var e=(0,a.useContext)(M);if(e===w)throw new T.dV("DocSidebarItemsExpandedStateProvider");return e}(),I=S.expandedItem,x=S.setExpandedItem,L=function(e){void 0===e&&(e=!A),x(e?null:s),N(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,T.ZC)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:E,collapsed:A,updateCollapsed:L}),(0,a.useEffect)((function(){b&&null!=I&&I!==s&&h&&N(!0)}),[b,I,s,N,h]),a.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemCategory,o.G.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":A},p)},a.createElement("div",{className:(0,r.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(G.default,(0,k.A)({className:(0,r.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":E}),onClick:b?function(e){null==n||n(t),v?L(!1):(e.preventDefault(),L())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!A:void 0,href:b?null!=f?f:"#":f},d),u),v&&b&&a.createElement(W,{categoryLabel:u,onClick:function(e){e.preventDefault(),L()}})),a.createElement(B.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:A},a.createElement($,{items:m,tabIndex:A?-1:0,onItemClick:n,activePath:l,level:i+1})))}var z=n(16654),U=n(43186);const R="menuExternalLink_NmtK";var V=["item","onItemClick","activePath","level","index"];function j(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,s=(e.index,(0,y.A)(e,V)),d=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c.w8)(t,l),v=(0,z.A)(d);return a.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemLink,o.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},a.createElement(G.default,(0,k.A)({className:(0,r.A)("menu__link",!v&&R,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d},v&&{onClick:n?function(){return n(t)}:void 0},s),m,!v&&a.createElement(U.A,null)))}const K="menuHtmlItem_M9Kj";function q(e){var t=e.item,n=e.level,l=e.index,i=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,r.A)(o.G.docs.docSidebarItemLink,o.G.docs.docSidebarItemLinkLevel(n),c&&[K,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:i}})}var Y=["item"];function O(e){var t=e.item,n=(0,y.A)(e,Y);switch(t.type){case"category":return a.createElement(D,(0,k.A)({item:t},n));case"html":return a.createElement(q,(0,k.A)({item:t},n));default:return a.createElement(j,(0,k.A)({item:t},n))}}var X=["items"];function Z(e){var t=e.items,n=(0,y.A)(e,X);return a.createElement(L,null,t.map((function(e,t){return a.createElement(O,(0,k.A)({key:t,item:e,index:t},n))})))}const $=(0,a.memo)(Z),J="menu_SIkG",Q="menuWithAnnouncementBar_GW3s";function ee(e){var t=e.path,n=e.sidebar,l=e.className,i=function(){var e=(0,x.Mj)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.Mq)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.A)("menu thin-scrollbar",J,i&&Q,l)},a.createElement("ul",{className:(0,r.A)(o.G.docs.docSidebarMenu,"menu__list")},a.createElement($,{items:n,activePath:t,level:1})))}const te="sidebar_njMd",ne="sidebarWithHideableNavbar_wUlq",ae="sidebarHidden_VK0M",re="sidebarLogo_isFc";function le(e){var t=e.path,n=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,_.p)(),c=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.A)(te,c&&ne,o&&ae)},c&&a.createElement(C.A,{tabIndex:-1,className:re}),a.createElement(ee,{path:t,sidebar:n}),s&&a.createElement(I,{onClick:l}))}const oe=a.memo(le);var ie=n(75600),ce=n(89876),se=function(e){var t=e.sidebar,n=e.path,l=(0,ce.M)();return a.createElement("ul",{className:(0,r.A)(o.G.docs.docSidebarMenu,"menu__list")},a.createElement($,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function de(e){return a.createElement(ie.GX,{component:se,props:e})}const me=a.memo(de);function ue(e){var t=(0,g.l)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(oe,e),r&&a.createElement(me,e))}const be="expandButton_m80_",pe="expandButtonIcon_BlDH";function ve(e){var t=e.toggleSidebar;return a.createElement("div",{className:be,title:(0,u.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(A,{className:pe}))}const he="docSidebarContainer_b6E3",fe="docSidebarContainerHidden_b3ry";function Ee(e){var t,n=e.children,r=(0,d.t)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function ge(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,E.zy)().pathname,c=(0,a.useState)(!1),s=c[0],d=c[1],m=(0,a.useCallback)((function(){s&&d(!1),l((function(e){return!e}))}),[l,s]);return a.createElement("aside",{className:(0,r.A)(o.G.docs.docSidebarContainer,he,n&&fe),onTransitionEnd:function(e){e.currentTarget.classList.contains(he)&&n&&d(!0)}},a.createElement(Ee,null,a.createElement(ue,{sidebar:t,path:i,onCollapse:m,isHidden:s})),s&&a.createElement(ve,{toggleSidebar:m}))}const _e={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ce(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,d.t)();return a.createElement("main",{className:(0,r.A)(_e.docMainContainer,(t||!l)&&_e.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.A)("container padding-top--md padding-bottom--lg",_e.docItemWrapper,t&&_e.docItemWrapperEnhanced)},n))}const ke="docPage__5DB",Ae="docsWrapper_BCFX";function Ne(e){var t=e.children,n=(0,d.t)(),r=(0,a.useState)(!1),l=r[0],o=r[1];return a.createElement(m.A,{wrapperClassName:Ae},a.createElement(f,null),a.createElement("div",{className:ke},n&&a.createElement(ge,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(Ce,{hiddenSidebarContainer:l},t)))}var Se=n(81774),Ie=n(41463);function xe(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Ie.A,{version:t.version,tag:(0,i.tU)(t.pluginId,t.version)}),a.createElement(l.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ye(e){var t=e.versionMetadata,n=(0,c.mz)(e);if(!n)return a.createElement(Se.default,null);var i=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(xe,e),a.createElement(l.e3,{className:(0,r.A)(o.G.wrapper.docsPages,o.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.n,{version:t},a.createElement(d.V,{name:m,items:u},a.createElement(Ne,null,i)))))}},81774:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(96540),r=n(21312),l=n(1003),o=n(96196);function i(){return a.createElement(a.Fragment,null,a.createElement(l.be,{title:(0,r.translate)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},32252:(e,t,n)=>{n.d(t,{n:()=>o,r:()=>i});var a=n(96540),r=n(12021),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(l);if(null===e)throw new r.dV("DocsVersionProvider");return e}}}]);