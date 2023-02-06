"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return r?o.createElement(k,l(l({ref:t},p),{},{components:r})):o.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},49538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={sidebar_position:3,sidebar_label:"Deploy with Docker on Linux/Mac"},l="Deploy with Docker on Linux/Mac",i={unversionedId:"installation-steps/DeployWithDockerOnLinuxMac",id:"installation-steps/DeployWithDockerOnLinuxMac",title:"Deploy with Docker on Linux/Mac",description:"ReportPortal can be easily deployed using Docker Compose.",source:"@site/docs/installation-steps/DeployWithDockerOnLinuxMac.md",sourceDirName:"installation-steps",slug:"/installation-steps/DeployWithDockerOnLinuxMac",permalink:"/docs/installation-steps/DeployWithDockerOnLinuxMac",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/installation-steps/DeployWithDockerOnLinuxMac.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Deploy with Docker on Linux/Mac"},sidebar:"defaultSidebar",previous:{title:"Basic monitoring configuration",permalink:"/docs/installation-steps/BasicMonitoringConfiguration"},next:{title:"Deploy with Docker on Windows",permalink:"/docs/installation-steps/DeployWithDockerOnWindows"}},s={},c=[{value:"Install Docker",id:"install-docker",level:2},{value:"Deploy ReportPortal with Docker",id:"deploy-reportportal-with-docker",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-with-docker-on-linuxmac"},"Deploy with Docker on Linux/Mac"),(0,a.kt)("p",null,"ReportPortal can be easily deployed using Docker Compose."),(0,a.kt)("h2",{id:"install-docker"},"Install Docker"),(0,a.kt)("p",null,"Docker is supported by all major Linux distributions, MacOS and Windows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Download")," Docker"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Download")," Docker Compose")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Recomended change resources limits at least ",(0,a.kt)("strong",{parentName:"p"},"2")," CPU ",(0,a.kt)("strong",{parentName:"p"},"5")," GB RAM for Docker Desktop: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/settings/mac/#advanced"},"MAC")," | ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/settings/windows/#advanced"},"Windows")," | ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/settings/linux/#advanced"},"Linux"))),(0,a.kt)("h2",{id:"deploy-reportportal-with-docker"},"Deploy ReportPortal with Docker"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest ReportPortal Docker Compose file from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/blob/master/docker-compose.yml"},"here"),". You can make it by run the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make the ElasticSearch configuration prerequisites for the analyzer service"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set {vm.max_map_count} kernel setting before ReportPortal deploying with the following ",(0,a.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html#docker-cli-run-prod-mode"},"Commands")),(0,a.kt)("li",{parentName:"ul"},"Give right permissions to ElasticSearch data folder using the following commands:")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p data/elasticsearch\nchmod 777 data/elasticsearch\nchgrp 1000 data/elasticsearch\n")),(0,a.kt)("p",null,"For more details about ElasticSearch visit ElasticSearch ",(0,a.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html#_notes_for_production_use_and_defaults"},"guide")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"OPTIONAL"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"PostgreSQL Performance Tuning")),(0,a.kt)("p",{parentName:"blockquote"},'Depends on your hardware configuration and parameters of your system, you can additionally optimize your PostgreSQL performance by adding the following parameters to "command" option in the Docker compose file:'),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," -c effective_io_concurrency=\n -c shared_buffers=\n -c max_connections=\n -c effective_cache_size=\n -c maintenance_work_mem=\n -c random_page_cost=\n -c seq_page_cost= \n -c min_wal_size= \n -c max_wal_size=\n -c max_worker_processes=\n -c max_parallel_workers_per_gather=\n")),(0,a.kt)("p",{parentName:"blockquote"},"Please choose set the values of these variables that are right for your system."),(0,a.kt)("p",{parentName:"blockquote"},"You can also change PostgreSQL host by passing a new value to POSTGRES_SERVER environment ",(0,a.kt)("a",{parentName:"p",href:"./AdditionalConfigurationParameters"},"variable"),".")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start the application using the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -p reportportal up -d --force-recreate\n")),(0,a.kt)("p",null,"Where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-p reportportal")," adds project prefix 'reportportal' to all containers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"up")," creates and starts containers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-d")," daemon mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"--force-recreate")," Re-creates containers if there any")),(0,a.kt)("p",null,"Useful commands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"docker-compose logs")," shows logs from all containers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"docker logs ","<","container_name",">")," shows logs from selected container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"docker ps -a | grep \"reportportal_\" | awk '{print $1}' | xargs docker rm -f")," Deletes all ReportPortal containers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"docker-compose dowm"))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Open your web-browser with an IP address of the deployed environment at port ",(0,a.kt)("strong",{parentName:"li"},"8080"))),(0,a.kt)("p",null,"Use the following ",(0,a.kt)("strong",{parentName:"p"},"login\\pass")," to access:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default User: ",(0,a.kt)("inlineCode",{parentName:"li"},"default\\1q2w3e")),(0,a.kt)("li",{parentName:"ul"},"Administrator: ",(0,a.kt)("inlineCode",{parentName:"li"},"superadmin\\erebus"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please change the admin password for better security")))}m.isMDXComponent=!0}}]);