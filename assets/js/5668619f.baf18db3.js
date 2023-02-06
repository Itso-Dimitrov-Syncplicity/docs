"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?o.createElement(h,i(i({ref:t},c),{},{components:a})):o.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));const r={sidebar_position:3,sidebar_label:"Project configuration"},i="Project configuration",l={unversionedId:"reportportal-configuration/ProjectConfiguration",id:"reportportal-configuration/ProjectConfiguration",title:"Project configuration",description:"To see the list of available projects and open a project, click the drop-down list in the top left corner of the page.",source:"@site/docs/reportportal-configuration/ProjectConfiguration.mdx",sourceDirName:"reportportal-configuration",slug:"/reportportal-configuration/ProjectConfiguration",permalink:"/docs/reportportal-configuration/ProjectConfiguration",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/ProjectConfiguration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Project configuration"},sidebar:"defaultSidebar",previous:{title:"Creation of project and adding users",permalink:"/docs/reportportal-configuration/CreationOfProjectAndAddingUsers"},next:{title:"ReportPortal jobs configuration",permalink:"/docs/reportportal-configuration/ReportPortalJobsConfiguration"}},s={},p=[{value:"Project settings",id:"project-settings",level:2},{value:"General settings\xa0",id:"general-settings",level:3},{value:"Integrations",id:"integrations",level:3},{value:"E-mail notifications",id:"e-mail-notifications",level:3},{value:"Custom defect types",id:"custom-defect-types",level:3},{value:"Auto-analysis and Pattern analysis",id:"auto-analysis-and-pattern-analysis",level:3},{value:"Demo data",id:"demo-data",level:3},{value:"Management of users on the project",id:"management-of-users-on-the-project",level:2},{value:"Invite user on a project",id:"invite-user-on-a-project",level:3},{value:"Project role",id:"project-role",level:3},{value:"Edit project role",id:"edit-project-role",level:3},{value:"Unassign user from the project",id:"unassign-user-from-the-project",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"project-configuration"},"Project configuration"),(0,n.kt)("p",null,"To see the list of available projects and open a project, click the drop-down list in the top left corner of the page."),(0,n.kt)("p",null,"ReportPortal supports customization of the default settings."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Permission:"),'\nUsers with the Administrator role can edit project settings on the project "Settings" page in Management Board and on the Project space.\nUsers with the PROJECT_MANAGER or LEAD roles can edit the settings on the project space only.\nMEMBER/ OPERATOR/ CUSTOMER can only view applied project settings.'),(0,n.kt)("h2",{id:"project-settings"},"Project settings"),(0,n.kt)("p",null,'To go to the project settings page, click the "Settings" icon in the header of the page.'),(0,n.kt)("p",null,"The project configuration page will be opened."),(0,n.kt)("p",null,'The project settings are divided into five tabs: "General", "Integrations", "Notifications", "Defect Types", "Auto-Analysis", "Pattern Analysis" and "Demo Data".'),(0,n.kt)("h3",{id:"general-settings"},"General settings\xa0"),(0,n.kt)("p",null,"ReportPortal allows you to control the amount of the stored data (launches, test items, logs and attachments) by removing outdated elements using Quartz jobs.\nFunctionality of data removing depends on two configurations. "),(0,n.kt)("p",null,"The first one is API service back-end environment variables that are described in ",(0,n.kt)("a",{parentName:"p",href:"./ReportPortalJobsConfiguration"},"ReportPortal jobs configuration")),(0,n.kt)("p",null,'The second one is the "General" tab you can configure parameter of data storage in ReportPortal for this project:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name \u2013 is a disabled field as the project name cannot be changed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Launch inactivity timeout")," - this parameter specifies the scheduled time for a job to interrupt inactive launches (launches which have the status 'in progress', but there is no any items during the chosen period). There are six options: "))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 hour, "),(0,n.kt)("li",{parentName:"ul"},"3 hours, "),(0,n.kt)("li",{parentName:"ul"},"6 hours, "),(0,n.kt)("li",{parentName:"ul"},"12 hours, "),(0,n.kt)("li",{parentName:"ul"},"1 day, "),(0,n.kt)("li",{parentName:"ul"},"1 week.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Keep launchess")," - this parameter specifies how long the system will keep old launches in the data base. There are 5 options: ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2 weeks, "),(0,n.kt)("li",{parentName:"ul"},"1 month, "),(0,n.kt)("li",{parentName:"ul"},"3 months, "),(0,n.kt)("li",{parentName:"ul"},"6 months,"),(0,n.kt)("li",{parentName:"ul"},"forever.\nAfter this period a launch will be deleted, and you can not see it in ReportPortal.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Keep logs")," - this parameter specifies how long the system will keep old logs in launches. Related launch structures will be saved, to keep statistics. There are 5 options:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2 weeks, "),(0,n.kt)("li",{parentName:"ul"},"1 month, "),(0,n.kt)("li",{parentName:"ul"},"3 months, "),(0,n.kt)("li",{parentName:"ul"},"6 months,"),(0,n.kt)("li",{parentName:"ul"},"forever.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Keep screenshots")," - this parameter specifies how long to keep binary data (screenshots, files, video, and others attachments)\nin the system. There are five options: ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2 weeks, "),(0,n.kt)("li",{parentName:"ul"},"1 month, "),(0,n.kt)("li",{parentName:"ul"},"3 months, "),(0,n.kt)("li",{parentName:"ul"},"6 months,"),(0,n.kt)("li",{parentName:"ul"},"forever.")),(0,n.kt)("media-view",{thumbnail:a(81466),src:"https://youtu.be/GsBGyhj-V6s",alt:"Manage project General Config",type:"video"}),(0,n.kt)("h3",{id:"integrations"},"Integrations"),(0,n.kt)("p",null,'The "Integration" tab can allow the project to connect ReportPortal with external systems or rewrite global configurations for third party systems.'),(0,n.kt)("p",null,"For more information on this topic, please refer to ",(0,n.kt)("a",{parentName:"p",href:"./IntegrationViaPlugin"},"Integration with external systems"),"."),(0,n.kt)("h3",{id:"e-mail-notifications"},"E-mail notifications"),(0,n.kt)("p",null,'The "Notifications" tab provides the administrator with the ability to activate e-mail notifications on the project.'),(0,n.kt)("p",null,"ReportPortal provides a way to add multiple rules with specific conditions. The Notification rule should be unique per project, have a unique parameter set, and specify recipients. For Example: In case, Launch names, tags)."),(0,n.kt)("p",null,'Permissions:\nUsers with Administrator a role can configure "Notifications" in the Management Board.\nUsers with PROJECT_MANAGER roles can edit the settings on the project space only.'),(0,n.kt)("p",null,"To do that, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login to the ReportPortal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the Project -",">",' Project "Settings" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Open the "Notifications" tab and click on a button "Create new notification rule" ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Enter your email into the "From" field. This email will be used as a notification sender.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select recipients. To do that, start typing any symbols into the "Recipients" field.\nYou can select an item from the auto-complete tool-tip using the\nkeyboard (use the "Up" and "Down" arrows and "Enter" button). You can also enter a custom email into the "Recipients" field. To add a custom\nemail, just enter the email address and press "Enter".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The "Launch owner" is selected by default. Uncheck "Launch owner" to exclude\nhim/her from the notification.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select the "In Case" setting. To do that, select one of the following options from the "In Case" drop-down.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select launches (optional). To do that, start typing any symbols into the "Launch names" field.\nYou can select an item from the auto-complete tool-tip using the "Up" and "Down" arrows and clicking "Enter" on the keyboard. This is an alternate way you can add a new launch name that does not exist on the project. Several launches names can be selected; the recipients will receive notifications when each of them finishes.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Then Select attributes (optional). To do that, start typing any symbols into the "Attribute key" and "Attribute value" fields. The system will suggest the results in the drop-down, after at least 1 symbol is provided. It is also possible to add a new attribute (that does not exist on the project). Several attributes can be selected at once; the corresponding recipients will receive notifications about the launches that have all the specified attributes.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Switch ON Notifications")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The system will activate the "Email notification" option. After the launch is finished, the recipients will receive a notification via email.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add more rules, if needed. Each Notification rule should be unique.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can edit/ copy/enable/disable notification rule by clicking on the appropriate controls on the notification rule.  "))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),(0,n.kt)("br",{parentName:"p"}),"\n","Users with a MEMBER/ OPERATOR/ CUSTOMER project role will not have the capability to edit the project settings, however, they do have the permissions to view them.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nFor using this functionality be sure that the E-mail server is configured.")),(0,n.kt)("h3",{id:"custom-defect-types"},"Custom defect types"),(0,n.kt)("p",null,'The "Defect Types" tab allows users with permissions to create custom defect types as subtypes of default defects on the project.'),(0,n.kt)("p",null,"After Installation the ReportPortal by default sets-up the following defect types groups:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"  ",(0,n.kt)("em",{parentName:"p"},"To investigate")," - means that no investigation was performed on this defect\nyet.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"  ",(0,n.kt)("em",{parentName:"p"},"Product Bug")," - defect was investigated and a production bug was found as a\ncause for this test failure.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"  ",(0,n.kt)("em",{parentName:"p"},"Automation Bug")," - defect was investigated and an automation test is not\ncorrect.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"  ",(0,n.kt)("em",{parentName:"p"},"System Issue")," - defect was investigated and it turns out that it is a system-level\nissue, like the app, crashed and caused the test to fail.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"  ",(0,n.kt)("em",{parentName:"p"},"No Defect")," - defect was investigated and defined as not a defect.")),(0,n.kt)("p",null,"ReportPortal allows the use of existing defect types (Product Bug, Automation Bug, System Issue, No Defect, To investigate) and or to create custom ones on the project settings page."),(0,n.kt)("p",null,"To create custom defect types, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into the ReportPortal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to Projects -",">",' Project "Settings" page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Open "Defect Types" tab ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Add Defect Type" button under any default defect type')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add new defect type form will appear ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Enter "Defect name" and "Abbreviation", select color for defect presentation on the launches grid and widgets.  ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Submit form. You will see an added defect type on the chart preview."))),(0,n.kt)("p",null,"Add more custom defects, if you need it. The system allows us to add up to ten subtypes of each default defect type."),(0,n.kt)("p",null,"Now you can investigate found defects as default Product Bug/Automation Bug/System Issue/No Defect/TO investigate or custom defects. All of them will be available to select on the Defect Type editor.\nFor more information refer to the ",(0,n.kt)("a",{parentName:"p",href:"/work-with-reports/InvestigationOfFailure"},"Investigation of failure")," topic."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nDefault defects cannot be modified and or deleted from the system. Custom defect types can be deleted at any time.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nYou can create up to 15 custom defect types for each group.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nIf you have deleted a custom type from the system, all test executions with this deleted defect type get the parent type of the group in which deleted defect has belonged. Statistics updates in all launches where a deleted defect was present.",(0,n.kt)("br",{parentName:"p"}),"\n",'For example, if you create a custom "Product Bug-1" as a subtype of "Product Bugs" group and investigate a few\ndefects as "Product Bug-1", then remove "Product Bug-1" from your project, all investigated "Product Bug-1" defects\nwill be shown as "Product Bug".')),(0,n.kt)("media-view",{thumbnail:a(76980),src:"https://youtu.be/z8iWXXk6A6Q",alt:"Defect Type Configuration",type:"video"}),(0,n.kt)("h3",{id:"auto-analysis-and-pattern-analysis"},"Auto-analysis and Pattern analysis"),(0,n.kt)("p",null,'The "Auto-Analysis" and "Pattern analysis" tabs can allow reducing analysis routine on the project.'),(0,n.kt)("p",null,"For more information on this topic, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/category/analysis"},"Analysis"),"."),(0,n.kt)("h3",{id:"demo-data"},"Demo data"),(0,n.kt)("p",null,'The "Demo Data" tab provides a way to generate demo data on the project.'),(0,n.kt)("p",null,"The generated data could demonstrate how the launches, filter, and dashboard will look. On the other hand, demo data could be\nmodified or removed without any effect of your real objects."),(0,n.kt)("media-view",{thumbnail:a(25286),src:"https://youtu.be/YGBZfCvfdVw",alt:"Demo Data",type:"video"}),(0,n.kt)("h2",{id:"management-of-users-on-the-project"},"Management of users on the project"),(0,n.kt)("p",null,"On the Members page of a particular project, users with the appropriate roles can invite new members."),(0,n.kt)("p",null,"Permissions: "),(0,n.kt)("p",null,"User with Administrator role and users with project role PROJECT_MANAGER."),(0,n.kt)("h3",{id:"invite-user-on-a-project"},"Invite user on a project"),(0,n.kt)("p",null,'To invite a user on the project "Members" page, perform the following steps:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into ReportPortal instance as with the PROJECT_MANAGER project role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Members" icon on the project page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Invite" tab. ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'"Invite a new member to the project" form will appear.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the email address of the user in case he/she is not present in the ReportPortal database or enter his/her login name.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In case the user is already available in the ReportPortal, his/her name will appear in the suggestion list.\nIf not, the Admin should enter the correct email address.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select an appropriate role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then click 'Invite'.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In case the user is already available in ReportPortal s/he will be assigned to the project\nIf not, the letter with an invitation link will be sent to the user email address.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user will receive an email with the link to the registration.\nWhen the user clicks the link, he/she will see a registration form.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user needs to fill in the registration form and click the "Register"\nbutton to complete the registration. ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user will be assigned to the project that the invitation was sent from, and to "Personal Project" with the PROJECT\nMANAGER project role. '))),(0,n.kt)("media-view",{thumbnail:a(26127),src:"https://youtu.be/BLI-IlTkSgI",alt:"Invite User From Project Members Page",type:"video"}),(0,n.kt)("h3",{id:"project-role"},"Project role"),(0,n.kt)("p",null,"Every user is given a specific Project role within a specific project."),(0,n.kt)("p",null,"Depends on the role, the user is able or not able to perform some actions. For more details, please see the Permissions map below"),(0,n.kt)("p",null,"There are 4 possible Project roles in ReportPortal:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PROJECT MANAGER"),(0,n.kt)("li",{parentName:"ul"},"MEMBER"),(0,n.kt)("li",{parentName:"ul"},"OPERATOR"),(0,n.kt)("li",{parentName:"ul"},"CUSTOMER")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nThe administrator has all privileges on the project.")),(0,n.kt)("h3",{id:"edit-project-role"},"Edit project role"),(0,n.kt)("p",null,"To edit the project role, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into the ReportPortal as a user with PROJECT_MANAGER or LEAD project role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Then click the "Members" icon on the project page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select a new value from the "Project Role" drop-down for the user')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The new project role will be automatically saved."))),(0,n.kt)("media-view",{thumbnail:a(27912),src:"https://youtu.be/aH1viL0FFlw",alt:"Edit Project Role From Project Members Page",type:"video"}),(0,n.kt)("h3",{id:"unassign-user-from-the-project"},"Unassign user from the project"),(0,n.kt)("p",null,"Depending on the project needs the assignment could be removed.\nTo unassign the assignment for the user on the project, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into the ReportPortal as a user with PROJECT_MANAGER or LEAD project role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the "Members" icon on the project page.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the required member")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the 'Unassign' button for the user.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm the action in the popup.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user will be unassigned from the current project but will stay in the system."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:"),"\nInvite user, Assign/Unassign internal user to/from the project, change user's role on a project action can be done for a user\nwith a similar and lower role only.")))}u.isMDXComponent=!0},27912:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const o=a.p+"assets/images/EditProjectRoleFromProjectMembersPage-1413263d89955bd4214d993983b44c05.png"},26127:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const o=a.p+"assets/images/InviteUserFromProjectMembersPage-e79fe1628762e26e26a23003030d23bd.png"},76980:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const o=a.p+"assets/images/DefectTypesConf-dc4a17aa7d8f62b16d22097debe9b7fe.png"},25286:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const o=a.p+"assets/images/DemoData-270fd7d337da96a1afcde95c6644b367.png"},81466:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const o=a.p+"assets/images/GeneralConf-601ae2f9cadcb02d9b7226dd1462ca79.png"}}]);