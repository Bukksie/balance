(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[918],{70207:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var a=n(67294),r=n(1944),i=n(44700),s=a.createContext(null);function o(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(s.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(s);if(null===e)throw new i.i6("DocProvider");return e}function l(){var e,t=c(),n=t.metadata,i=t.frontMatter,s=t.assets;return a.createElement(r.d,{title:n.title,description:n.description,keywords:i.keywords,image:null!=(e=s.image)?e:i.image})}var p=n(34334),_=n(87524),u=n(83117),d=n(95999),j=n(32244);function m(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(j.Z,(0,u.Z)({},t,{subLabel:a.createElement(d.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(j.Z,(0,u.Z)({},n,{subLabel:a.createElement(d.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function S(){var e=c().metadata;return a.createElement(m,{previous:e.previous,next:e.next})}var E=n(52263),g=n(39960),h=n(94104),v=n(35281),y=n(60373),f=n(74477);var x={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(d.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(d.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=x[e.versionMetadata.banner];return a.createElement(t,e)}function C(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(d.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(g.default,{to:n,onClick:r},a.createElement(d.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function P(e){var t,n=e.className,r=e.versionMetadata,i=(0,E.default)().siteConfig.title,s=(0,h.gA)({failfast:!0}).pluginId,o=(0,y.J)(s).savePreferredVersionName,c=(0,h.Jo)(s),l=c.latestDocSuggestion,_=c.latestVersionSuggestion,u=null!=l?l:(t=_).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,p.Z)(n,v.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(b,{siteTitle:i,versionMetadata:r})),a.createElement("div",{className:"margin-top--md"},a.createElement(C,{versionLabel:_.label,to:u.path,onClick:function(){return o(_.name)}})))}function L(e){var t=e.className,n=(0,f.E)();return n.banner?a.createElement(P,{className:t,versionMetadata:n}):null}function k(e){var t=e.className,n=(0,f.E)();return n.badge?a.createElement("span",{className:(0,p.Z)(t,v.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(d.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function B(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(d.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return a.createElement(d.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function T(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:v.k.common.lastUpdated},a.createElement(d.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(B,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(N,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var M=n(86121),G=n.n(M),H=n(86233),O="lastUpdated_vwxv";function A(e){return a.createElement("div",{className:(0,p.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(H.Z,e)))}function w(e){var t=e.editUrl,n=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,p.Z)(v.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(G(),{editUrl:t})),a.createElement("div",{className:(0,p.Z)("col",O)},(n||r)&&a.createElement(T,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function U(){var e=c().metadata,t=e.editUrl,n=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,i=e.lastUpdatedBy,s=e.tags,o=s.length>0,l=!!(t||n||i);return o||l?a.createElement("footer",{className:(0,p.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(A,{tags:s}),l&&a.createElement(w,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,formattedLastUpdatedAt:r})):null}var I=n(86043),Z=n(93743),D=n(80102),V="tocCollapsibleButton_TO0P",K="tocCollapsibleButtonExpanded_MG3E",R=["collapsed"];function W(e){var t=e.collapsed,n=(0,D.Z)(e,R);return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,p.Z)("clean-btn",V,!t&&K,n.className)}),a.createElement(d.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var q="tocCollapsible_ETCw",F="tocCollapsibleContent_vkbj",z="tocCollapsibleExpanded_sAul";function J(e){var t=e.toc,n=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,I.u)({initialState:!0}),o=s.collapsed,c=s.toggleCollapsed;return a.createElement("div",{className:(0,p.Z)(q,!o&&z,n)},a.createElement(W,{collapsed:o,onClick:c}),a.createElement(I.z,{lazy:!0,className:F,collapsed:o},a.createElement(Z.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var Y="tocMobile_ITEo";function X(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(J,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,p.Z)(v.k.docs.docTocMobile,Y)})}var Q=n(39407);function $(){var e=c(),t=e.toc,n=e.frontMatter;return a.createElement(Q.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var ee=n(92503),te=n(51788),ne=n.n(te);function ae(e){var t,n,r,i,s=e.children,o=(t=c(),n=t.metadata,r=t.frontMatter,i=t.contentTitle,r.hide_title||void 0!==i?null:n.title);return a.createElement("div",{className:(0,p.Z)(v.k.docs.docMarkdown,"markdown")},o&&a.createElement("header",null,a.createElement(ee.Z,{as:"h1"},o)),a.createElement(ne(),null,s))}var re=n(19089),ie="docItemContainer_Djhp",se="docItemCol_VOVn";function oe(e){var t,n,r,i,s,o,l=e.children,u=(t=c(),n=t.frontMatter,r=t.toc,i=(0,_.i)(),s=n.hide_table_of_contents,o=!s&&r.length>0,{hidden:s,mobile:o?a.createElement(X,null):void 0,desktop:!o||"desktop"!==i&&"ssr"!==i?void 0:a.createElement($,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,p.Z)("col",!u.hidden&&se)},a.createElement(L,null),a.createElement("div",{className:ie},a.createElement("article",null,a.createElement(re.Z,null),a.createElement(k,null),u.mobile,a.createElement(ae,null,l),a.createElement(U,null)),a.createElement(S,null))),u.desktop&&a.createElement("div",{className:"col col--3"},u.desktop))}function ce(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(o,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(l,null),a.createElement(oe,null,a.createElement(n,null))))}},46215:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(67294),r=n(95999),i=n(35281),s=n(56262);function o(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},a.createElement(s.default,null),a.createElement(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},56262:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(83117),r=n(80102),i=n(67294),s=n(34334),o="iconEdit_Z9Sw",c=["className"];function l(e){var t=e.className,n=(0,r.Z)(e,c);return i.createElement("svg",(0,a.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},n),i.createElement("g",null,i.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},32244:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(67294),r=n(34334),i=n(39960);function s(e){var t=e.permalink,n=e.title,s=e.subLabel,o=e.isNext;return a.createElement(i.default,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&a.createElement("div",{className:"pagination-nav__sublabel"},s),a.createElement("div",{className:"pagination-nav__label"},n))}},39407:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(83117),r=n(80102),i=n(67294),s=n(34334),o=n(93743),c="tableOfContents_bqdL",l=["className"];function p(e){var t=e.className,n=(0,r.Z)(e,l);return i.createElement("div",{className:(0,s.Z)(c,"thin-scrollbar",t)},i.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var a=n(83117),r=n(80102),i=n(67294),s=n(86668),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,r.Z)(e,o);n>=0?t[n].children.push(i):a.push(i)})),a}function l(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function p(e){var t=e.getBoundingClientRect();return t.top===t.bottom?p(e.parentNode):t}function _(e,t){var n,a,r=t.anchorTopOffset,i=e.find((function(e){return p(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(p(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,i.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){var t=(0,i.useRef)(void 0),n=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,i=e.minHeadingLevel,s=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),c=_(o,{anchorTopOffset:n.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===l)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function j(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?i.createElement("ul",{className:r?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(j,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var m=i.memo(j),S=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function E(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,p=e.linkClassName,_=void 0===p?"table-of-contents__link":p,u=e.linkActiveClassName,j=void 0===u?void 0:u,E=e.minHeadingLevel,g=e.maxHeadingLevel,h=(0,r.Z)(e,S),v=(0,s.L)(),y=null!=E?E:v.tableOfContents.minHeadingLevel,f=null!=g?g:v.tableOfContents.maxHeadingLevel,x=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return l({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:y,maxHeadingLevel:f});return d((0,i.useMemo)((function(){if(_&&j)return{linkClassName:_,linkActiveClassName:j,minHeadingLevel:y,maxHeadingLevel:f}}),[_,j,y,f])),i.createElement(m,(0,a.Z)({toc:x,className:o,linkClassName:_},h))}},86233:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(67294),r=n(34334),i=n(95999),s=n(39960),o="tag_zVej",c="tagRegular_sFm0",l="tagWithCount_h2kH";function p(e){var t=e.permalink,n=e.label,i=e.count;return a.createElement(s.default,{href:t,className:(0,r.Z)(o,i?l:c)},n,i&&a.createElement("span",null,i))}var _="tags_jXut",u="tag_QGVx";function d(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(_,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:u},a.createElement(p,{label:t,permalink:n}))}))))}},74477:function(e,t,n){"use strict";n.d(t,{E:function(){return o},q:function(){return s}});var a=n(67294),r=n(44700),i=a.createContext(null);function s(e){var t=e.children,n=e.version;return a.createElement(i.Provider,{value:n},t)}function o(){var e=(0,a.useContext)(i);if(null===e)throw new r.i6("DocsVersionProvider");return e}},19089:function(e,t){"use strict";t.Z=function(){return null}},62466:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294)),i=a(n(70207)),s=n(32471);t.default=function(e){return r.default.createElement(s.DocMetaProvider,{value:{frontMatter:e.content.frontMatter,metadata:e.content.metadata}},r.default.createElement(i.default,Object.assign({},e)))}},86121:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294)),i=a(n(46215)),s=n(65094),o=a(n(56262)),c=n(86341),l=function(e){var t=e.url;return r.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:s.ThemeClassNames.common.editThisPage},r.default.createElement(o.default,null),"View in CodeHub")};t.default=function(e){return(0,c.isInternal)()?r.default.createElement(l,{url:e.editUrl}):r.default.createElement(i.default,Object.assign({},e))}},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748},50874:function(e,t,n){var a={"./Binary_Property/ASCII.js":38090,"./Binary_Property/ASCII_Hex_Digit.js":39666,"./Binary_Property/Alphabetic.js":81319,"./Binary_Property/Any.js":37402,"./Binary_Property/Assigned.js":93512,"./Binary_Property/Bidi_Control.js":82230,"./Binary_Property/Bidi_Mirrored.js":28794,"./Binary_Property/Case_Ignorable.js":86154,"./Binary_Property/Cased.js":10457,"./Binary_Property/Changes_When_Casefolded.js":16177,"./Binary_Property/Changes_When_Casemapped.js":16211,"./Binary_Property/Changes_When_Lowercased.js":74709,"./Binary_Property/Changes_When_NFKC_Casefolded.js":93332,"./Binary_Property/Changes_When_Titlecased.js":15979,"./Binary_Property/Changes_When_Uppercased.js":61638,"./Binary_Property/Dash.js":64152,"./Binary_Property/Default_Ignorable_Code_Point.js":24447,"./Binary_Property/Deprecated.js":71748,"./Binary_Property/Diacritic.js":28490,"./Binary_Property/Emoji.js":99782,"./Binary_Property/Emoji_Component.js":92514,"./Binary_Property/Emoji_Modifier.js":94210,"./Binary_Property/Emoji_Modifier_Base.js":27696,"./Binary_Property/Emoji_Presentation.js":13653,"./Binary_Property/Extended_Pictographic.js":51733,"./Binary_Property/Extender.js":73921,"./Binary_Property/Grapheme_Base.js":80164,"./Binary_Property/Grapheme_Extend.js":36218,"./Binary_Property/Hex_Digit.js":1903,"./Binary_Property/IDS_Binary_Operator.js":76639,"./Binary_Property/IDS_Trinary_Operator.js":56591,"./Binary_Property/ID_Continue.js":39363,"./Binary_Property/ID_Start.js":49367,"./Binary_Property/Ideographic.js":17949,"./Binary_Property/Join_Control.js":12087,"./Binary_Property/Logical_Order_Exception.js":22193,"./Binary_Property/Lowercase.js":56792,"./Binary_Property/Math.js":66975,"./Binary_Property/Noncharacter_Code_Point.js":44175,"./Binary_Property/Pattern_Syntax.js":95049,"./Binary_Property/Pattern_White_Space.js":55149,"./Binary_Property/Quotation_Mark.js":22306,"./Binary_Property/Radical.js":23349,"./Binary_Property/Regional_Indicator.js":80869,"./Binary_Property/Sentence_Terminal.js":92382,"./Binary_Property/Soft_Dotted.js":26847,"./Binary_Property/Terminal_Punctuation.js":96898,"./Binary_Property/Unified_Ideograph.js":44138,"./Binary_Property/Uppercase.js":36751,"./Binary_Property/Variation_Selector.js":60676,"./Binary_Property/White_Space.js":78778,"./Binary_Property/XID_Continue.js":73598,"./Binary_Property/XID_Start.js":85242,"./General_Category/Cased_Letter.js":92313,"./General_Category/Close_Punctuation.js":71119,"./General_Category/Connector_Punctuation.js":69777,"./General_Category/Control.js":63184,"./General_Category/Currency_Symbol.js":42990,"./General_Category/Dash_Punctuation.js":77186,"./General_Category/Decimal_Number.js":42071,"./General_Category/Enclosing_Mark.js":90091,"./General_Category/Final_Punctuation.js":15454,"./General_Category/Format.js":70307,"./General_Category/Initial_Punctuation.js":96204,"./General_Category/Letter.js":67940,"./General_Category/Letter_Number.js":3008,"./General_Category/Line_Separator.js":23708,"./General_Category/Lowercase_Letter.js":58103,"./General_Category/Mark.js":46146,"./General_Category/Math_Symbol.js":24682,"./General_Category/Modifier_Letter.js":80557,"./General_Category/Modifier_Symbol.js":23409,"./General_Category/Nonspacing_Mark.js":6018,"./General_Category/Number.js":27782,"./General_Category/Open_Punctuation.js":18815,"./General_Category/Other.js":77982,"./General_Category/Other_Letter.js":64621,"./General_Category/Other_Number.js":28467,"./General_Category/Other_Punctuation.js":84376,"./General_Category/Other_Symbol.js":45621,"./General_Category/Paragraph_Separator.js":74877,"./General_Category/Private_Use.js":16811,"./General_Category/Punctuation.js":61985,"./General_Category/Separator.js":10661,"./General_Category/Space_Separator.js":19599,"./General_Category/Spacing_Mark.js":27288,"./General_Category/Surrogate.js":22508,"./General_Category/Symbol.js":8884,"./General_Category/Titlecase_Letter.js":52991,"./General_Category/Unassigned.js":21173,"./General_Category/Uppercase_Letter.js":97113,"./Property_of_Strings/Basic_Emoji.js":31355,"./Property_of_Strings/Emoji_Keycap_Sequence.js":2215,"./Property_of_Strings/RGI_Emoji.js":16081,"./Property_of_Strings/RGI_Emoji_Flag_Sequence.js":35816,"./Property_of_Strings/RGI_Emoji_Modifier_Sequence.js":80926,"./Property_of_Strings/RGI_Emoji_Tag_Sequence.js":99712,"./Property_of_Strings/RGI_Emoji_ZWJ_Sequence.js":2485,"./Script/Adlam.js":46294,"./Script/Ahom.js":93733,"./Script/Anatolian_Hieroglyphs.js":23786,"./Script/Arabic.js":89139,"./Script/Armenian.js":19871,"./Script/Avestan.js":62033,"./Script/Balinese.js":8902,"./Script/Bamum.js":16701,"./Script/Bassa_Vah.js":46341,"./Script/Batak.js":88893,"./Script/Bengali.js":86571,"./Script/Bhaiksuki.js":12228,"./Script/Bopomofo.js":17220,"./Script/Brahmi.js":56236,"./Script/Braille.js":35863,"./Script/Buginese.js":84652,"./Script/Buhid.js":4392,"./Script/Canadian_Aboriginal.js":4411,"./Script/Carian.js":26764,"./Script/Caucasian_Albanian.js":35662,"./Script/Chakma.js":29379,"./Script/Cham.js":40696,"./Script/Cherokee.js":14562,"./Script/Chorasmian.js":88466,"./Script/Common.js":84941,"./Script/Coptic.js":11759,"./Script/Cuneiform.js":91947,"./Script/Cypriot.js":43571,"./Script/Cypro_Minoan.js":80084,"./Script/Cyrillic.js":92680,"./Script/Deseret.js":85161,"./Script/Devanagari.js":87106,"./Script/Dives_Akuru.js":29403,"./Script/Dogra.js":79035,"./Script/Duployan.js":22782,"./Script/Egyptian_Hieroglyphs.js":57722,"./Script/Elbasan.js":70076,"./Script/Elymaic.js":68624,"./Script/Ethiopic.js":21742,"./Script/Georgian.js":23036,"./Script/Glagolitic.js":71852,"./Script/Gothic.js":35522,"./Script/Grantha.js":82325,"./Script/Greek.js":90686,"./Script/Gujarati.js":25927,"./Script/Gunjala_Gondi.js":84153,"./Script/Gurmukhi.js":13264,"./Script/Han.js":68761,"./Script/Hangul.js":5756,"./Script/Hanifi_Rohingya.js":90251,"./Script/Hanunoo.js":95998,"./Script/Hatran.js":29916,"./Script/Hebrew.js":65115,"./Script/Hiragana.js":8267,"./Script/Imperial_Aramaic.js":59032,"./Script/Inherited.js":80710,"./Script/Inscriptional_Pahlavi.js":58843,"./Script/Inscriptional_Parthian.js":57339,"./Script/Javanese.js":8415,"./Script/Kaithi.js":44865,"./Script/Kannada.js":72388,"./Script/Katakana.js":65395,"./Script/Kayah_Li.js":97517,"./Script/Kharoshthi.js":51541,"./Script/Khitan_Small_Script.js":66437,"./Script/Khmer.js":38290,"./Script/Khojki.js":57011,"./Script/Khudawadi.js":12058,"./Script/Lao.js":61116,"./Script/Latin.js":89428,"./Script/Lepcha.js":66980,"./Script/Limbu.js":2954,"./Script/Linear_A.js":84059,"./Script/Linear_B.js":41106,"./Script/Lisu.js":21233,"./Script/Lycian.js":29868,"./Script/Lydian.js":92804,"./Script/Mahajani.js":44059,"./Script/Makasar.js":87449,"./Script/Malayalam.js":47224,"./Script/Mandaic.js":58807,"./Script/Manichaean.js":78897,"./Script/Marchen.js":27432,"./Script/Masaram_Gondi.js":80403,"./Script/Medefaidrin.js":85078,"./Script/Meetei_Mayek.js":38697,"./Script/Mende_Kikakui.js":94218,"./Script/Meroitic_Cursive.js":93869,"./Script/Meroitic_Hieroglyphs.js":49776,"./Script/Miao.js":49897,"./Script/Modi.js":65714,"./Script/Mongolian.js":21652,"./Script/Mro.js":7741,"./Script/Multani.js":52068,"./Script/Myanmar.js":74218,"./Script/Nabataean.js":31440,"./Script/Nandinagari.js":16036,"./Script/New_Tai_Lue.js":3274,"./Script/Newa.js":75150,"./Script/Nko.js":98453,"./Script/Nushu.js":76621,"./Script/Nyiakeng_Puachue_Hmong.js":35659,"./Script/Ogham.js":65613,"./Script/Ol_Chiki.js":48263,"./Script/Old_Hungarian.js":36347,"./Script/Old_Italic.js":93175,"./Script/Old_North_Arabian.js":7548,"./Script/Old_Permic.js":81592,"./Script/Old_Persian.js":58990,"./Script/Old_Sogdian.js":8513,"./Script/Old_South_Arabian.js":88438,"./Script/Old_Turkic.js":93991,"./Script/Old_Uyghur.js":11791,"./Script/Oriya.js":60241,"./Script/Osage.js":70358,"./Script/Osmanya.js":62432,"./Script/Pahawh_Hmong.js":45467,"./Script/Palmyrene.js":42922,"./Script/Pau_Cin_Hau.js":94381,"./Script/Phags_Pa.js":49134,"./Script/Phoenician.js":31430,"./Script/Psalter_Pahlavi.js":71180,"./Script/Rejang.js":33880,"./Script/Runic.js":978,"./Script/Samaritan.js":14612,"./Script/Saurashtra.js":47019,"./Script/Sharada.js":30179,"./Script/Shavian.js":85926,"./Script/Siddham.js":7507,"./Script/SignWriting.js":26026,"./Script/Sinhala.js":84167,"./Script/Sogdian.js":3389,"./Script/Sora_Sompeng.js":42352,"./Script/Soyombo.js":19808,"./Script/Sundanese.js":91237,"./Script/Syloti_Nagri.js":34583,"./Script/Syriac.js":53357,"./Script/Tagalog.js":13381,"./Script/Tagbanwa.js":76515,"./Script/Tai_Le.js":2335,"./Script/Tai_Tham.js":97986,"./Script/Tai_Viet.js":79274,"./Script/Takri.js":76569,"./Script/Tamil.js":54802,"./Script/Tangsa.js":77808,"./Script/Tangut.js":51667,"./Script/Telugu.js":33064,"./Script/Thaana.js":338,"./Script/Thai.js":72014,"./Script/Tibetan.js":60015,"./Script/Tifinagh.js":91825,"./Script/Tirhuta.js":64585,"./Script/Toto.js":68196,"./Script/Ugaritic.js":19794,"./Script/Vai.js":99940,"./Script/Vithkuqi.js":45785,"./Script/Wancho.js":47450,"./Script/Warang_Citi.js":6230,"./Script/Yezidi.js":63831,"./Script/Yi.js":65414,"./Script/Zanabazar_Square.js":75495,"./Script_Extensions/Adlam.js":92364,"./Script_Extensions/Ahom.js":38107,"./Script_Extensions/Anatolian_Hieroglyphs.js":1275,"./Script_Extensions/Arabic.js":50820,"./Script_Extensions/Armenian.js":30327,"./Script_Extensions/Avestan.js":14813,"./Script_Extensions/Balinese.js":842,"./Script_Extensions/Bamum.js":88552,"./Script_Extensions/Bassa_Vah.js":80519,"./Script_Extensions/Batak.js":3690,"./Script_Extensions/Bengali.js":15522,"./Script_Extensions/Bhaiksuki.js":36100,"./Script_Extensions/Bopomofo.js":58041,"./Script_Extensions/Brahmi.js":18571,"./Script_Extensions/Braille.js":29636,"./Script_Extensions/Buginese.js":44674,"./Script_Extensions/Buhid.js":44321,"./Script_Extensions/Canadian_Aboriginal.js":3586,"./Script_Extensions/Carian.js":16971,"./Script_Extensions/Caucasian_Albanian.js":40370,"./Script_Extensions/Chakma.js":36999,"./Script_Extensions/Cham.js":5090,"./Script_Extensions/Cherokee.js":22025,"./Script_Extensions/Chorasmian.js":28903,"./Script_Extensions/Common.js":40819,"./Script_Extensions/Coptic.js":62879,"./Script_Extensions/Cuneiform.js":79338,"./Script_Extensions/Cypriot.js":26748,"./Script_Extensions/Cypro_Minoan.js":82300,"./Script_Extensions/Cyrillic.js":50403,"./Script_Extensions/Deseret.js":52117,"./Script_Extensions/Devanagari.js":44603,"./Script_Extensions/Dives_Akuru.js":59153,"./Script_Extensions/Dogra.js":88569,"./Script_Extensions/Duployan.js":35137,"./Script_Extensions/Egyptian_Hieroglyphs.js":70423,"./Script_Extensions/Elbasan.js":6604,"./Script_Extensions/Elymaic.js":22593,"./Script_Extensions/Ethiopic.js":58757,"./Script_Extensions/Georgian.js":8967,"./Script_Extensions/Glagolitic.js":94941,"./Script_Extensions/Gothic.js":73775,"./Script_Extensions/Grantha.js":7716,"./Script_Extensions/Greek.js":17167,"./Script_Extensions/Gujarati.js":35653,"./Script_Extensions/Gunjala_Gondi.js":9920,"./Script_Extensions/Gurmukhi.js":12512,"./Script_Extensions/Han.js":66719,"./Script_Extensions/Hangul.js":57992,"./Script_Extensions/Hanifi_Rohingya.js":12282,"./Script_Extensions/Hanunoo.js":32154,"./Script_Extensions/Hatran.js":10593,"./Script_Extensions/Hebrew.js":12674,"./Script_Extensions/Hiragana.js":89815,"./Script_Extensions/Imperial_Aramaic.js":88427,"./Script_Extensions/Inherited.js":30846,"./Script_Extensions/Inscriptional_Pahlavi.js":71362,"./Script_Extensions/Inscriptional_Parthian.js":36558,"./Script_Extensions/Javanese.js":12010,"./Script_Extensions/Kaithi.js":44452,"./Script_Extensions/Kannada.js":33992,"./Script_Extensions/Katakana.js":32728,"./Script_Extensions/Kayah_Li.js":39797,"./Script_Extensions/Kharoshthi.js":21656,"./Script_Extensions/Khitan_Small_Script.js":5454,"./Script_Extensions/Khmer.js":31171,"./Script_Extensions/Khojki.js":35022,"./Script_Extensions/Khudawadi.js":32185,"./Script_Extensions/Lao.js":43762,"./Script_Extensions/Latin.js":10187,"./Script_Extensions/Lepcha.js":46259,"./Script_Extensions/Limbu.js":98553,"./Script_Extensions/Linear_A.js":29036,"./Script_Extensions/Linear_B.js":36831,"./Script_Extensions/Lisu.js":33554,"./Script_Extensions/Lycian.js":15074,"./Script_Extensions/Lydian.js":97130,"./Script_Extensions/Mahajani.js":13515,"./Script_Extensions/Makasar.js":87798,"./Script_Extensions/Malayalam.js":81475,"./Script_Extensions/Mandaic.js":75053,"./Script_Extensions/Manichaean.js":989,"./Script_Extensions/Marchen.js":18814,"./Script_Extensions/Masaram_Gondi.js":33286,"./Script_Extensions/Medefaidrin.js":74369,"./Script_Extensions/Meetei_Mayek.js":46454,"./Script_Extensions/Mende_Kikakui.js":56420,"./Script_Extensions/Meroitic_Cursive.js":75131,"./Script_Extensions/Meroitic_Hieroglyphs.js":81593,"./Script_Extensions/Miao.js":14780,"./Script_Extensions/Modi.js":80382,"./Script_Extensions/Mongolian.js":30388,"./Script_Extensions/Mro.js":86560,"./Script_Extensions/Multani.js":38214,"./Script_Extensions/Myanmar.js":54677,"./Script_Extensions/Nabataean.js":54860,"./Script_Extensions/Nandinagari.js":38563,"./Script_Extensions/New_Tai_Lue.js":96164,"./Script_Extensions/Newa.js":6225,"./Script_Extensions/Nko.js":44127,"./Script_Extensions/Nushu.js":40676,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":65280,"./Script_Extensions/Ogham.js":38227,"./Script_Extensions/Ol_Chiki.js":33642,"./Script_Extensions/Old_Hungarian.js":7997,"./Script_Extensions/Old_Italic.js":33496,"./Script_Extensions/Old_North_Arabian.js":13284,"./Script_Extensions/Old_Permic.js":72430,"./Script_Extensions/Old_Persian.js":36073,"./Script_Extensions/Old_Sogdian.js":65673,"./Script_Extensions/Old_South_Arabian.js":69136,"./Script_Extensions/Old_Turkic.js":50710,"./Script_Extensions/Old_Uyghur.js":2280,"./Script_Extensions/Oriya.js":38245,"./Script_Extensions/Osage.js":43797,"./Script_Extensions/Osmanya.js":40922,"./Script_Extensions/Pahawh_Hmong.js":21408,"./Script_Extensions/Palmyrene.js":61506,"./Script_Extensions/Pau_Cin_Hau.js":60461,"./Script_Extensions/Phags_Pa.js":49729,"./Script_Extensions/Phoenician.js":90759,"./Script_Extensions/Psalter_Pahlavi.js":28486,"./Script_Extensions/Rejang.js":25184,"./Script_Extensions/Runic.js":95225,"./Script_Extensions/Samaritan.js":15237,"./Script_Extensions/Saurashtra.js":74809,"./Script_Extensions/Sharada.js":24574,"./Script_Extensions/Shavian.js":32839,"./Script_Extensions/Siddham.js":71259,"./Script_Extensions/SignWriting.js":9128,"./Script_Extensions/Sinhala.js":99273,"./Script_Extensions/Sogdian.js":64176,"./Script_Extensions/Sora_Sompeng.js":10387,"./Script_Extensions/Soyombo.js":89861,"./Script_Extensions/Sundanese.js":65419,"./Script_Extensions/Syloti_Nagri.js":3755,"./Script_Extensions/Syriac.js":60926,"./Script_Extensions/Tagalog.js":53956,"./Script_Extensions/Tagbanwa.js":36040,"./Script_Extensions/Tai_Le.js":75031,"./Script_Extensions/Tai_Tham.js":95315,"./Script_Extensions/Tai_Viet.js":14989,"./Script_Extensions/Takri.js":2861,"./Script_Extensions/Tamil.js":90476,"./Script_Extensions/Tangsa.js":92138,"./Script_Extensions/Tangut.js":77787,"./Script_Extensions/Telugu.js":16910,"./Script_Extensions/Thaana.js":67282,"./Script_Extensions/Thai.js":15202,"./Script_Extensions/Tibetan.js":46225,"./Script_Extensions/Tifinagh.js":45821,"./Script_Extensions/Tirhuta.js":93573,"./Script_Extensions/Toto.js":6715,"./Script_Extensions/Ugaritic.js":88375,"./Script_Extensions/Vai.js":84505,"./Script_Extensions/Vithkuqi.js":97706,"./Script_Extensions/Wancho.js":57047,"./Script_Extensions/Warang_Citi.js":212,"./Script_Extensions/Yezidi.js":56479,"./Script_Extensions/Yi.js":55384,"./Script_Extensions/Zanabazar_Square.js":27041,"./index.js":81519,"./unicode-version.js":13554};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=50874}}]);