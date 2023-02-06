"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3653],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(h,i(i({ref:e},c),{},{components:n})):r.createElement(h,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37833:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_label:"GitHub"},i="GitHub",l={unversionedId:"reportportal-configuration/authorization/GitHub",id:"reportportal-configuration/authorization/GitHub",title:"GitHub",description:"ReportPortal allows logging in via GitHub OAuth Web Application Flow.",source:"@site/docs/reportportal-configuration/authorization/GitHub.md",sourceDirName:"reportportal-configuration/authorization",slug:"/reportportal-configuration/authorization/GitHub",permalink:"/docs/reportportal-configuration/authorization/GitHub",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/GitHub.md",tags:[],version:"current",frontMatter:{sidebar_label:"GitHub"},sidebar:"defaultSidebar",previous:{title:"Active Directory",permalink:"/docs/reportportal-configuration/authorization/ActiveDirectory"},next:{title:"LDAP",permalink:"/docs/reportportal-configuration/authorization/LDAP"}},p={},u=[{value:"Presequences",id:"presequences",level:3},{value:"ReportPortal configuration",id:"reportportal-configuration",level:3}],c={toc:u};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github"},"GitHub"),(0,a.kt)("p",null,"ReportPortal allows logging in via GitHub OAuth Web Application Flow."),(0,a.kt)("h3",{id:"presequences"},"Presequences"),(0,a.kt)("p",null,"To enable this feature you need to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/settings/applications/new"},"register new application in Github")),(0,a.kt)("p",null,"Fill the following fields:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application name"),(0,a.kt)("td",{parentName:"tr",align:null},"Report Portal"),(0,a.kt)("td",{parentName:"tr",align:null},"Just something which allow you recognize what's this.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Homepage URL"),(0,a.kt)("td",{parentName:"tr",align:null},"https://{HOST}:{PORT}/uat/sso/user"),(0,a.kt)("td",{parentName:"tr",align:null},"Replace with ",(0,a.kt)("inlineCode",{parentName:"td"},"{HOST}")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"{PORT}")," with appropriate values of your instance. Naturally you can omit ",(0,a.kt)("inlineCode",{parentName:"td"},":{PORT}")," if it's default port for HTTPS protocol.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authorization callback URL"),(0,a.kt)("td",{parentName:"tr",align:null},"https://{HOST}:{PORT}/uat/sso/login/github"),(0,a.kt)("td",{parentName:"tr",align:null},"As in the previous field replace with ",(0,a.kt)("inlineCode",{parentName:"td"},"{HOST}")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"{PORT}")," with your appropriate values.")))),(0,a.kt)("p",null,'Once new application is created, you will have Client ID. Click on "Generate a new client secret" to get Client Secret, but do not close the window until you configure the Authorization on RP, since it will never show you the Secret again.'),(0,a.kt)("h3",{id:"reportportal-configuration"},"ReportPortal configuration"),(0,a.kt)("p",null,"To setup access with GitHub auth on ReportPortal:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to the ReportPortal as an ADMIN user"),(0,a.kt)("li",{parentName:"ol"},"Open the list on the right of the user's image."),(0,a.kt)("li",{parentName:"ol"},"Click the 'Administrative' link"),(0,a.kt)("li",{parentName:"ol"},"Click the 'Server Settings' from the left-hand sidebar"),(0,a.kt)("li",{parentName:"ol"},"Go to the 'Authorization Configuration' tab"),(0,a.kt)("li",{parentName:"ol"},"Then change the switcher position of 'Activate GitHub Authorization' to ON"),(0,a.kt)("li",{parentName:"ol"},"The Next fields should appear:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"'Client ID': <value_of_clientId>\n'Client Secret': <value_of_clientSecret>\n'Add GitHub Organization' button-link: (optional)\n")),(0,a.kt)("p",null,"Note, in case the 'Organization Name' is not added, all GitHub users will have access to the ReportPortal instance.\nIf the 'Organization Name' is specified, only users of this organization will have an access to ReportPortal instance."),(0,a.kt)("p",null,"If the Name of GitHub organization is not validated, verify that the name is correct."),(0,a.kt)("p",null,"Example of GitHub auth configuration:\nFill in the form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"'Client Id': 8767988c424a0e7a2640\n'Client Secret': ef22c9f804257afaf399a2dada7c8f22dee5fd1b\n'Organization Name': reportportal\n")),(0,a.kt)("p",null,"Click on 'Submit' button.\nA confirmation message in status bar should be shown.\nA 'Login with GitHub' button will appear on login form."))}s.isMDXComponent=!0}}]);