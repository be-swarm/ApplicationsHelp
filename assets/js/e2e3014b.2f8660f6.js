"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[3615],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>v});var r=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(s),m=n,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return s?r.createElement(v,a(a({ref:t},p),{},{components:s})):r.createElement(v,a({ref:t},p))}));function v(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,a=new Array(i);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,a[1]=o;for(var u=2;u<i;u++)a[u]=s[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},1796:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=s(7462),n=(s(7294),s(3905));const i={sidebar_position:2},a=void 0,o={unversionedId:"DevApps/NotionsDeBase/Logique BeSwarm",id:"DevApps/NotionsDeBase/Logique BeSwarm",title:"Logique BeSwarm",description:"Be Swarm est une plateforme d\xe9centralis\xe9e, \xe9volutive et dynamique.",source:"@site/docs/DevApps/NotionsDeBase/Logique BeSwarm.md",sourceDirName:"DevApps/NotionsDeBase",slug:"/DevApps/NotionsDeBase/Logique BeSwarm",permalink:"/ApplicationsHelp/docs/DevApps/NotionsDeBase/Logique BeSwarm",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ApplicationsHelp/docs/DevApps/NotionsDeBase/Introduction"},next:{title:"Inscrire son application",permalink:"/ApplicationsHelp/docs/DevApps/NotionsDeBase/Inscrire son application"}},l={},u=[{value:"Les services",id:"les-services",level:2},{value:"Les essaims",id:"les-essaims",level:2},{value:"Les utilisateurs",id:"les-utilisateurs",level:2},{value:"Les applications",id:"les-applications",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Be Swarm est une plateforme d\xe9centralis\xe9e, \xe9volutive et dynamique."),(0,n.kt)("p",null,"Elle s'articule autour de 4 composants principaux :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les services"),(0,n.kt)("li",{parentName:"ul"},"Les essaims"),(0,n.kt)("li",{parentName:"ul"},"Les utilisateurs"),(0,n.kt)("li",{parentName:"ul"},"Les applications")),(0,n.kt)("h2",{id:"les-services"},"Les services"),(0,n.kt)("p",null,"Se sont les web api qui permettent d'acc\xe9der aux donn\xe9es de l'utilisateur.\nLes services sont dynamiques et plusieurs services diff\xe9rents peuvent servir les m\xeames essaims.\nChaque service dispose d'un point d'entr\xe9e public."),(0,n.kt)("h2",{id:"les-essaims"},"Les essaims"),(0,n.kt)("p",null,"Les essaims peuvent \xeatre assimil\xe9s \xe0 des bases de donn\xe9es et/ou a des espaces de stockage.\nCe sont dans un essaim que les donn\xe9es d'un utilisateur sont stock\xe9es.\nUn essaim peut \xeatre servi par plusieurs services diff\xe9rents.\nLe but d'avoir plusieurs essaims permet d'assurer une forte disponibilit\xe9 des donn\xe9es de l'utilisateur.\nSi un essaim venait \xe0 \xeatre indisponible, seuls les utilisateurs qui y ont acc\xe8s seraient impact\xe9s.\nCela permet \xe9galement d'avoir des essaims au plus proche des utilisateurs afin de garantir une bonne performance."),(0,n.kt)("h2",{id:"les-utilisateurs"},"Les utilisateurs"),(0,n.kt)("p",null,"Ce sont les utilisateurs de la plateforme.\nUn utilisateur a l'ensemble de ses donn\xe9es dans un seul et unique essaim.\nEssaim qu'il a choisi au moment de la cr\xe9ation de son compte."),(0,n.kt)("h2",{id:"les-applications"},"Les applications"),(0,n.kt)("p",null,"Ce sont toutes les applications d\xe9velopp\xe9es autour de la plateforme BeSwarm que l'utilisateur peut utiliser."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Schema",src:s(3334).Z,width:"535",height:"229"})),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/9orPNlLjHcM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},3334:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/schema-a5019b4612ad67cbe001ddbc8a1d1475.png"}}]);