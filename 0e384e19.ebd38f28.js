(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(3),i=n(7),r=(n(0),n(86)),a={id:"intro",title:"Introduction"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base.",source:"@site/docs/intro.md",slug:"/intro",permalink:"/honeycomb/docs/intro",editUrl:"https://github.com/brown-ccv/honeycomb/edit/documentation/docs/intro.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/honeycomb/docs/"},next:{title:"Project Organization",permalink:"/honeycomb/docs/folders"}},s=[{value:"Flexible deployment online and in the lab",id:"flexible-deployment-online-and-in-the-lab",children:[]},{value:"Easy to install executables",id:"easy-to-install-executables",children:[]},{value:"Foundation in jsPsych",id:"foundation-in-jspsych",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h4",{id:"honeycomb-is-an-open-source-task-template-repository-that-combines-well-accepted-practices-and-technologies-from-the-cognitive-science-and-web-development-communities-to-build-psychophysiological-tasks-that-are-ready-for-deployment-to-different-settings-desktop-or-online-and-support-electrophysiological-recordings-without-significant-changes-to-the-code-base"},"Honeycomb is an open source task-template repository that combines well-accepted practices and technologies from the cognitive science and web development communities to build psychophysiological tasks that are ready for deployment to different settings (desktop, or online) and support electrophysiological recordings, without significant changes to the code base."),Object(r.b)("h3",{id:"flexible-deployment-online-and-in-the-lab"},"Flexible deployment online and in the lab"),Object(r.b)("p",null,"Honeycomb provides the ability to write one codebase and use it flexibly across settings (with guaranteed consistency in instructions, timing, etc.). The same code-base is used to maintain and deploy the identical task on Mechanical Turk, Prolific, and in research settings during concurrent electrophysiological recordings. "),Object(r.b)("h3",{id:"easy-to-install-executables"},"Easy to install executables"),Object(r.b)("p",null,"Deployment specifications are abstracted as parameters that are easy to configure, and application building is automated via GitHub actions providing continuous delivery of easy-to-download executables, easing setup burden across research sites. "),Object(r.b)("h3",{id:"foundation-in-jspsych"},"Foundation in jsPsych"),Object(r.b)("p",null,"jsPsych tasks can be converted to the Honeycomb structure to take advantage of the flexible deployment and automated GitHub Actions workflow that Honeycomb provides. "))}d.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,y=p["".concat(a,".").concat(b)]||p[b]||u[b]||r;return n?i.a.createElement(y,c(c({ref:t},l),{},{components:n})):i.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);