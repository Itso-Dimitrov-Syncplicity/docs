"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9426],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),u=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},s=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),g=u(r),h=n,c=g["".concat(i,".").concat(h)]||g[h]||m[h]||o;return r?a.createElement(c,p(p({ref:e},s),{},{components:r})):a.createElement(c,p({ref:e},s))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,p=new Array(o);p[0]=g;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var u=2;u<o;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},70888:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Supported Integrations"},p="Supported Integrations",l={unversionedId:"log-data-in-reportportal/test-framework-integration/SupportedIntegrations",id:"log-data-in-reportportal/test-framework-integration/SupportedIntegrations",title:"Supported Integrations",description:"If you need a sophisticated and full-featured integration with a test framework, you can configure it by your self.",source:"@site/docs/log-data-in-reportportal/test-framework-integration/SupportedIntegrations.md",sourceDirName:"log-data-in-reportportal/test-framework-integration",slug:"/log-data-in-reportportal/test-framework-integration/SupportedIntegrations",permalink:"/docs/log-data-in-reportportal/test-framework-integration/SupportedIntegrations",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/log-data-in-reportportal/test-framework-integration/SupportedIntegrations.md",tags:[],version:"current",frontMatter:{sidebar_label:"Supported Integrations"},sidebar:"defaultSidebar",previous:{title:"Test Framework Integration",permalink:"/docs/log-data-in-reportportal/test-framework-integration/"},next:{title:"Developers guides",permalink:"/docs/category/developers-guides"}},i={},u=[{value:"Java",id:"java",level:2},{value:"JavaScript",id:"javascript",level:2},{value:".Net",id:"net",level:2},{value:"Python",id:"python",level:2},{value:"PHP",id:"php",level:2}],s={toc:u};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"supported-integrations"},"Supported Integrations"),(0,n.kt)("p",null,"If you need a sophisticated and full-featured integration with a test framework, you can configure it by your self.\nChoose which combination of agent, client, and logger you need, and then follow the instructions provided for each agent."),(0,n.kt)("h2",{id:"java"},"Java"),(0,n.kt)("p",null,"All agents use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reportportal/client-java"},"client-java")," to communicate with ReportPortal API and as common code library. Also you can use any combination of agent and logger."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Test Framework Integration (agents):")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-junit5"},"JUnit5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-junit"},"JUnit4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-testNG"},"TestNG")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-cucumber"},"Cucumber (the first version)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-cucumber2"},"Cucumber 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-cucumber3"},"Cucumber 3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-cucumber4"},"Cucumber 4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-cucumber5"},"Cucumber 5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-cucumber6"},"Cucumber 6, 7")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-jbehave"},"JBehave")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-spock"},"Spock")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-java-soapui"},"SoapUI (outdated)"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Loggers:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-java-logback"},"Logback")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-java-log4j"},"Log4J")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-java-rest-assured"},"Rest Assured")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-java-selenide"},"Selenide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-java-okhttp3"},"OkHttp3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-java-httpcomponents"},"Apache HttpComponents"))),(0,n.kt)("h2",{id:"javascript"},"JavaScript"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Test Framework Integration (agents):")),(0,n.kt)("p",null,"All agents use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reportportal/client-javascript"},"client-javascript")," to communicate with ReportPortal API."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-playwright"},"Playwright")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-cucumber"},"CucumberJS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-codecept"},"Codecept")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-webdriverio"},"WebdriverIO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-postman"},"Postman")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-cypress"},"Cypress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-mocha"},"Mocha")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-jest"},"Jest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-testcafe"},"TestCafe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-jasmine"},"Jasmine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-js-nightwatch"},"Nightwatch"))),(0,n.kt)("p",null,"Each agent can be installed from ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/settings/reportportal/packages?page=1&perPage=10"},"npm")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/reportportal/packages?ecosystem=npm"},"GitHub packages")," registry."),(0,n.kt)("h2",{id:"net"},".Net"),(0,n.kt)("p",null,"User can use any combination of client/agent/logger."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Clients:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/client-net"},"Rest api client")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/commons-net"},"Multi-threaded client"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Test Framework Integration (agents):")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-net-nunit"},"NUnit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-net-vstest"},"VSTest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-net-specflow"},"SpecFlow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-net-xunit"},"xUnit"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Loggers:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-net-serilog"},"Serilog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-net-log4net"},"Log4Net")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-net-nlog"},"NLog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/logger-net-tracelistener"},"TraceListener"))),(0,n.kt)("h2",{id:"python"},"Python"),(0,n.kt)("p",null,"All agents use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reportportal/client-Python"},"client-python"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Test Framework Integration (agents):")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-python-pytest"},"pytest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-Python-RobotFramework"},"Robot Framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-python-behave"},"behave")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-python-nosetests"},"nosetests"))),(0,n.kt)("h2",{id:"php"},"PHP"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Test Framework Integration (agents):")),(0,n.kt)("p",null,"All agents use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reportportal/client-php"},"client-php"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-php-PHPUnit"},"PHPUnit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-php-Behat"},"Behat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/reportportal/agent-php-Codeception"},"Codeception"))),(0,n.kt)("p",null,"Please find the full list of available integrations with test frameworks in our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/reportportal"},"GitHub repositories"),"."),(0,n.kt)("p",null,"If you need further guidelines, you can explore our ",(0,n.kt)("a",{parentName:"p",href:"/category/developers-guides"},"Developers guides"),"."),(0,n.kt)("p",null,"What you can do if you can not find your Test Framework?\nYou can create custom integrations. To get started, please look at our ",(0,n.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/ImplementOwnIntegration"},"Implement own Integration")," page."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nWe offer paid support for new or existing integrations. If you need more details, please send an email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@reportportal.io"},"support@reportportal.io"),".")))}m.isMDXComponent=!0}}]);