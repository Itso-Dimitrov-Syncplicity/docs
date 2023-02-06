"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?l.createElement(k,a(a({ref:t},c),{},{components:n})):l.createElement(k,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<r;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const r={},a="API differences between v4 and v5",o={unversionedId:"dev-guides/APIDifferencesBetweenV4AndV5",id:"dev-guides/APIDifferencesBetweenV4AndV5",title:"API differences between v4 and v5",description:"New endpoints",source:"@site/docs/dev-guides/APIDifferencesBetweenV4AndV5.md",sourceDirName:"dev-guides",slug:"/dev-guides/APIDifferencesBetweenV4AndV5",permalink:"/docs/dev-guides/APIDifferencesBetweenV4AndV5",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dev-guides/APIDifferencesBetweenV4AndV5.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Developers guides",permalink:"/docs/category/developers-guides"},next:{title:"Asynchronous reporting",permalink:"/docs/dev-guides/AsynchronousReporting"}},p={},s=[{value:"New endpoints",id:"new-endpoints",level:2},{value:"Activity controller",id:"activity-controller",level:3},{value:"Dashboard controller",id:"dashboard-controller",level:3},{value:"Launch controller",id:"launch-controller",level:3},{value:"Log controller",id:"log-controller",level:3},{value:"Plugin controller",id:"plugin-controller",level:3},{value:"Project controller",id:"project-controller",level:3},{value:"Project setting controller",id:"project-setting-controller",level:3},{value:"Test item controller",id:"test-item-controller",level:3},{value:"User controller",id:"user-controller",level:3},{value:"Widget controller",id:"widget-controller",level:3},{value:"New controllers",id:"new-controllers",level:2},{value:"Bug tracking system controller - replacement of  external system controller.",id:"bug-tracking-system-controller---replacement-of--external-system-controller",level:4},{value:"Integration controller",id:"integration-controller",level:4},{value:"Launch asynchronous controller",id:"launch-asynchronous-controller",level:4},{value:"Test item asynchronous controller",id:"test-item-asynchronous-controller",level:4},{value:"Log asynchronous controller",id:"log-asynchronous-controller",level:4},{value:"Differences in reporting",id:"differences-in-reporting",level:2},{value:"Launch rerun",id:"launch-rerun",level:3},{value:"Nested steps",id:"nested-steps",level:3},{value:"Launch logs",id:"launch-logs",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-differences-between-v4-and-v5"},"API differences between v4 and v5"),(0,i.kt)("h2",{id:"new-endpoints"},"New endpoints"),(0,i.kt)("h3",{id:"activity-controller"},"Activity controller"),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/activity/{activityId}")," - Get activity by id."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dashboard-controller"},"Dashboard controller"),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/dashboard/{dashboardId}/{widgetId}}")," - Add specified widget to dashboard."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/dashboard/{dashboardId}/{widgetId}")," - Delete specified widget from dashboard."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"launch-controller"},"Launch controller"),(0,i.kt)("p",null,"Note: Tags from v4 was replaced by attributes in v5.\nAttribute contains key and value. It may have null key, but non-null value.\nAttribute with null value is analog for v4 tag."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/launch/attribute/keys")," - Retrieve all unique attribute keys of project launches."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/launch/attribute/values")," - Retrieve all unique attribute values of project launches."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/launch/status")," - Get launches statuses."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/launch/uuid/{launchUuid}")," - Get launch by uuid."),(0,i.kt)("p",null,"Note: Response from start(create) launch request contains object with key ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and string value (example: ",(0,i.kt)("inlineCode",{parentName:"p"},'id="33fa80b9-8ec9-4d52-8cb7-68b7bb4070f1"'),").\nIt is not physical ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in database. It is UUID (virtual id of launch, part of asynchronous reporting implementation).\nUsing request above you can retrieve physical ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," from database of just reported launch and use it in next queries for items, filters etc."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/launch/info")," - Bulk update launches attributes and descriptions."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"log-controller"},"Log controller"),(0,i.kt)("p",null,"New functionality in v5 - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reportportal/client-java/wiki/Nested-steps"},"nested steps"),"."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/log/nested/{parentId}")," - Get nested steps with logs for the parent test item."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/log/uuid/{logUuid}")," - Get log by uuid."),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/log/search/{itemId}")," - Search test items with similar error logs."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"plugin-controller"},"Plugin controller"),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/plugin")," - Get all available plugins."),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/plugin")," - Upload new plugin."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/plugin/{pluginId}")," - update specified plugin."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/plugin/{pluginId}")," - delete specified plugin."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"project-controller"},"Project controller"),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/analyzer/status")," - Get indexing logs status for project."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/export")," - Export information about all projects."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/list")," - Retrieve info about all projects by filer."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/names")," - Get all project names."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/names/search")," - Search project names."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/{projectName}/widget/{widgetCode}")," - Get project widget by code."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/{projectName}/notification")," - Update project notifications configuration."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/{projectName}/preference/{login}/{filterId}")," - Add specified filter to user preference."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/project/{projectName}/preference/{login}/{filerId}")," - Remove specified filter from user preference."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"project-setting-controller"},"Project setting controller"),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/settings/pattern")," - Create pattern template for item's log messages pattern analysis."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/settings/pattern/{id}")," - Update specified pattern template for item's log messages pattern analysis."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/settings/pattern/{id}")," - Delete specified pattern template for item's log messages pattern analysis."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"test-item-controller"},"Test item controller"),(0,i.kt)("p",null,"Note: Tags from v4 was replaced by attributes in v5.\nAttribute contains key and value. It may have null key, but non-null value.\nAttribute with null value is analog for v4 tag."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/item/attribute/keys")," - Retrieve all unique attributes keys of specified launch."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/item/attribute/keys/all")," - Retrieve all unique attributes keys of specified launch."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/item/attribute/values")," - Retrieve all unique attributes values of specified launch."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/item/ticket/ids")," - Get tickets that contains a term as a part inside for specified launch."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/item/uuid/{itemId}")," - Get test item by uuid."),(0,i.kt)("p",null,"Note: Response from start(create) test item request contains object with key ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and string value (example: ",(0,i.kt)("inlineCode",{parentName:"p"},'id="1f8233b0-6a2d-4a82-989b-a33463287130"'),").\nIt is not physical ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in database. It is UUID (virtual id of test item, part of asynchronous reporting implementation).\nUsing request above you can retrieve physical ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," from database of just reported test item and use it in next queries for items, logs etc."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/item/info")," - Bulk update items attributes and descriptions."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/item/issue/link")," - Link external issue for specified test items."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/item/issue/unlink")," - Unlink external issue for specified test items."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"user-controller"},"User controller"),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/user/export")," - Export information about all users."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/user/registration")," - Get user bid info."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/user/registration/info")," - Validate user login and/or email."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/user/search")," - Search users by term."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/user/{userName}/projects")," - Retrieve all user projects."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/user")," - Delete specified users by ids."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"widget-controller"},"Widget controller"),(0,i.kt)("p",null,"New group of widgets that may have few levels"),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/{projectName}/widget/multilevel/{widgetId}")," - Get multilevel widget by id."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"new-controllers"},"New controllers"),(0,i.kt)("h4",{id:"bug-tracking-system-controller---replacement-of--external-system-controller"},"Bug tracking system controller - replacement of  external system controller."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/bts/{integrationId}/fields-set")," - Get list of fields required for posting ticket."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/bts/{integrationId}/issue_types")," - Get list of allowable issue types for bug tracking system."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/bts/{projectName}/ticket/{ticketId}")," - Get ticket from the bts integration."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/bts/{projectName}/{integrationId}/fields-set")," - Get list of fields required for posting ticket (project integration)."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/bts/{projectName}/{integrationId}/issue_types")," - Get list of allowable issue types for bug tracking system (project integration)."),(0,i.kt)("p",null,"POST - ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/bts/{projectName}/{integrationId}/ticket")," - Post ticket to the bts integration."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"integration-controller"},"Integration controller"),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/global/all")," - Get available global integrations."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/global/all/{pluginName}")," - Get available global integrations for plugin."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/project/{projectName}/all")," - Get available project integrations."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/project/{projectName}/all/{pluginName}")," - Get available project integrations for plugin."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{integrationId}")," - Get specified global integration by id."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{integrationId}/connection/test")," - Test connection to the global integration."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{projectName}/{integrationId}/connection/test")," - Test connection to the integration through the project config."),(0,i.kt)("p",null,"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{projectName}/{integrationId}")," - Get specified project integration by id."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{projectName}/{integrationId}")," - Update specified project integration by id."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{integrationId}")," - Update specified global integration by id."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{projectName}/{integrationId}/{command}")," - Execute command to the integration instance."),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{pluginName}")," - Create global integration."),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{projectName}/{pluginName}")," - Create project integration instance."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/all/{type}")," - Delete all global integrations by type."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{projectName}/all/{type}")," - Delete all project integrations by type."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{integrationId}")," - Delete specified global integration by id."),(0,i.kt)("p",null,"DELETE ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/integration/{projectName}/{integrationId}")," - Delete specified project integration by id."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"launch-asynchronous-controller"},"Launch asynchronous controller"),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/{projectName}/launch")," - Start launch for specified project."),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/{projectName}/launch/merge")," - Merge set of specified launches in common one."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/{projectName}/launch/{launchId}/finish")," - Finish launch for specified project."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"test-item-asynchronous-controller"},"Test item asynchronous controller"),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/{projectName}/item")," - Start root test item."),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/{projectName}/item/{parentItem}")," - Start child test item."),(0,i.kt)("p",null,"PUT ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/{projectName}/item/{testItemId}")," - Finish test item."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"log-asynchronous-controller"},"Log asynchronous controller"),(0,i.kt)("p",null,"POST ",(0,i.kt)("inlineCode",{parentName:"p"},"/v2/{projectName}/log")," - Create log."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"differences-in-reporting"},"Differences in reporting"),(0,i.kt)("h3",{id:"launch-rerun"},"Launch rerun"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./RerunDevelopersGuide"},"Rerun developers guide")),(0,i.kt)("h3",{id:"nested-steps"},"Nested steps"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/reportportal/client-java/wiki/Nested-steps"},"Nested steps wiki")),(0,i.kt)("h3",{id:"launch-logs"},"Launch logs"),(0,i.kt)("p",null,"Create log request contains fields ",(0,i.kt)("inlineCode",{parentName:"p"},"launchUuid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"itemUuid"),". At least one of them should not be null."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "itemUuid": "7f32fb6a-fcc2-4ecb-a4f7-780c559a37ca",\n  "launchUuid": "6fd4638d-90e2-4f52-a9bd-bf433ebfb0f3"\n}\n')),(0,i.kt)("p",null,"If they both are present - log will be saved as test item log.\nIf only ",(0,i.kt)("inlineCode",{parentName:"p"},"itemUuid")," is present - log will be saved as test item log.\nIf only ",(0,i.kt)("inlineCode",{parentName:"p"},"launchUuid")," is present - log will be saved as launch log."),(0,i.kt)("p",null,"Java client has static methods for launch log reporting:"),(0,i.kt)("p",null,"//TODO fix links after java client final version release"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reportportal/client-java/blob/20b1dda7681301acd86d2d9c9dbcbd7991890cdc/src/main/java/com/epam/reportportal/service/ReportPortal.java#L160"},"emitLaunchLog(Function<String, SaveLogRQ> logSupplier)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reportportal/client-java/blob/20b1dda7681301acd86d2d9c9dbcbd7991890cdc/src/main/java/com/epam/reportportal/service/ReportPortal.java#L192"},"emitLaunchLog(final String message, final String level, final Date time)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reportportal/client-java/blob/20b1dda7681301acd86d2d9c9dbcbd7991890cdc/src/main/java/com/epam/reportportal/service/ReportPortal.java#L233"},"emitLaunchLog(final String message, final String level, final Date time, final File file)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reportportal/client-java/blob/20b1dda7681301acd86d2d9c9dbcbd7991890cdc/src/main/java/com/epam/reportportal/service/ReportPortal.java#L288"},"emitLaunchLog(final ReportPortalMessage message, final String level, final Date time)"))))}u.isMDXComponent=!0}}]);