"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[7259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,title:"Saisie d'un texte"},p=void 0,i={unversionedId:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputText",id:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputText",title:"Saisie d'un texte",description:"Le composant InputText permet de saisir un texte.",source:"@site/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputText.md",sourceDirName:"DevApps/NET/PACKAGES/CoreBlazorApp/Composants",slug:"/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputText",permalink:"/ApplicationsHelp/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputText",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Saisie d'un texte"},sidebar:"tutorialSidebar",previous:{title:"Saisie d'un entier",permalink:"/ApplicationsHelp/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputInteger"},next:{title:"S\xe9lection d'une heure",permalink:"/ApplicationsHelp/docs/DevApps/NET/PACKAGES/CoreBlazorApp/Composants/InputTime"}},l={},s=[{value:"Gestion des data annotations",id:"gestion-des-data-annotations",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Le composant InputText permet de saisir un texte."),(0,a.kt)("p",null,"Il se place dans une page razor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Test\n    {\n        [Required]\n        [MaxLength(10), MinLength(4)]\n        public string Name { get; set; } = default!;\n    }\n    Test Model = new Test();\n    <BeSwarm.CoreBlazorApp.Components.InputText @bind-Value="@model.Name" Label=@app.Name() ValidateProperty="@(()=>model.Name)" />\n\n')),(0,a.kt)("p",null,"Il accepte les attributs suivants:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MaxLength\t\t: Nombre max de caract\xe8res"),(0,a.kt)("li",{parentName:"ul"},"ReadOnly      : Indique si le composant est en lecture seule"),(0,a.kt)("li",{parentName:"ul"},"ValidateProperty : Indique la propri\xe9t\xe9 \xe0 valider"),(0,a.kt)("li",{parentName:"ul"},"ValidateStrict : D\xe9finit les bornes possibles de saisie"),(0,a.kt)("li",{parentName:"ul"},"Label         :Le label du composant")),(0,a.kt)("h2",{id:"gestion-des-data-annotations"},"Gestion des data annotations"),(0,a.kt)("p",null,"Si la propri\xe9t\xe9 poss\xe8de des data annotations elles peuvent \xeatre automatiquement prises en compte et contr\xf4l\xe9es par le composant.\nPour cela il faut utiliser l'attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateProperty")," qui prend en param\xe8tre une lambda qui retourne la propri\xe9t\xe9 \xe0 valider.\nLa propri\xe9t\xe9 ValidateStrict lorsqu'elle est d\xe9finie limite automatiquement la possibilit\xe9 de saisie aux bornes d\xe9finies par les data annotations.\nEx:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class Test\n    {\n        [Required]\n        [MaxLength(10), MinLength(4)]\n        public string Name { get; set; } = default!;\n    }\n    Test Model = new Test();\n    <BeSwarm.CoreBlazorApp.Components.InputText @bind-Value="@model.Name" Label=@app.Name() ValidateProperty="@(()=>model.Name)" ValidateStrict=true />\n\n')),(0,a.kt)("p",null,"Dans ce cas la saisie sera automatiquement limit\xe9e \xe0 10 caract\xe8res ."))}d.isMDXComponent=!0}}]);