"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[9333],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"PHP - DateTime",description:"PHP DateTime Dev Snippets",extends:"_layouts.documentation",section:"content"},p="DateTime",s={unversionedId:"php/datetime",id:"php/datetime",title:"PHP - DateTime",description:"PHP DateTime Dev Snippets",source:"@site/docs/php/datetime.md",sourceDirName:"php",slug:"/php/datetime",permalink:"/my-docs/en/docs/php/datetime",editUrl:"https://github.com/easy-quest/my-docs/edit/master/website/docs/php/datetime.md",tags:[],version:"current",frontMatter:{title:"PHP - DateTime",description:"PHP DateTime Dev Snippets",extends:"_layouts.documentation",section:"content"},sidebar:"tutorialSidebar",previous:{title:"PHP - Connection",permalink:"/my-docs/en/docs/php/connection"},next:{title:"PHP - File System",permalink:"/my-docs/en/docs/php/filesystem"}},m=[{value:"sub",id:"sub",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"Here, we will be using PHP&#39;s strtotime()",id:"here-we-will-be-using-phps-strtotime",children:[],level:3}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datetime"},"DateTime"),(0,i.kt)("p",null,"Get current date time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// DateTime($time='now', DateTimeZone $timezone=null)\n\n// Usage\n$now = new DateTime();\n")),(0,i.kt)("h3",{id:"sub"},"sub"),(0,i.kt)("p",null,"Subtracts an amount of days, months, years, hours, minutes and seconds from a DateTime object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$date = new DateTime('2000-01-20');\n$date->sub(new DateInterval('P10D'));\necho $date->format('Y-m-d');\n")),(0,i.kt)("h3",{id:"add"},"add"),(0,i.kt)("p",null,"Adds an amount of days, months, years, hours, minutes and seconds to a DateTime object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$date = new DateTime('2000-01-01');\n$date->add(new DateInterval('P10D'));\necho $date->format('Y-m-d');\n")),(0,i.kt)("h1",{id:"dateinterval"},"DateInterval"),(0,i.kt)("p",null,"The format starts with the letter P, for period. Each duration period is represented by an integer value followed by a period designator. If the duration contains time elements, that portion of the specification is preceded by the letter T."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Period Designator"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"years")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"months")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"D"),(0,i.kt)("td",{parentName:"tr",align:null},"days")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"W"),(0,i.kt)("td",{parentName:"tr",align:null},"weeks. These get converted into days, so can not be combined with D.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"hours")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"minutes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"S"),(0,i.kt)("td",{parentName:"tr",align:null},"seconds")))),(0,i.kt)("p",null,"Here are some simple examples. Two days is P2D. Two seconds is PT2S. Six years and five minutes is P6YT5M."),(0,i.kt)("h1",{id:"loop-through-dateinterval"},"Loop through DateInterval"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$installments = 18;\n        \n//current date\n$now = new DateTime();\n//30 days interval between each installment\n$interval = new DateInterval('P30D');\n\n//period\n$period = new DatePeriod($now, $interval, $installments, DatePeriod::EXCLUDE_START_DATE);\n\nforeach ($period as $date)\n    echo $date->format(\"Y-m-d\"), '<br>';\n")),(0,i.kt)("h1",{id:"create-a-date-from-a-string"},"Create a Date From a String"),(0,i.kt)("h3",{id:"here-we-will-be-using-phps-strtotime"},"Here, we will be using PHP's strtotime()"),(0,i.kt)("p",null,"The PHP strtotime() function is used to convert a human readable string to a Unix time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"strtotime(time,now)\n")),(0,i.kt)("p",null,"The following example will give you a better idea of this function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n    $t = strtotime("11:45am October 16 2019");\n    echo "Created date is ".date("Y-m-d h:i:sa",$t);\n?>\n')),(0,i.kt)("p",null,"Using this function, you can parse about any English textual datetime description into a Unix timestamp. Here are some examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n    $t=strtotime("tomorrow");\n    echo date("Y-m-d h:i:sa", $t) . "<br>";\n\n    $t=strtotime("next Thursday");\n    echo date("Y-m-d h:i:sa", $t) . "<br>";\n\n    $t=strtotime("+2 Months");\n    echo date("Y-m-d h:i:sa", $t) . "<br>"; \n?>\n')),(0,i.kt)("h1",{id:"create-a-date-with-php-mktime"},"Create a Date with PHP mktime()"),(0,i.kt)("p",null,"The mktime() function returns the Unix timestamp for a date. The Unix timestamp contains the number of seconds between the Unix Epoch (January 1 1970 00:00:00 GMT) and the time specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n    mktime(hour,minute,second,month,day,year)\n?>\n")),(0,i.kt)("p",null,"Here is an example to create a date and time with some parameters in this function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n    $t = mktime(11, 14, 54, 8, 11, 2019);\n    echo "Created date is " . date("Y-m-d h:i:sa", $t);\n?>\n')))}u.isMDXComponent=!0}}]);