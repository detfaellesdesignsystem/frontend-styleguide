!function(e){function t(t){for(var o,s,l=t[0],a=t[1],c=t[2],u=0,m=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(d&&d(t);m.length;)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={11:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=a;i.push([278,0]),n()}({278:function(e,t,n){e.exports=n(79)},79:function(e,t,n){"use strict";n.r(t);n(1);var o=["virk","borgerdk"],r=["styleguide_virkdk","styleguide_borgerdk"];document.addEventListener("DOMContentLoaded",(function(){L("cookie",y()),a(),c(),s(),l(),m(),x(),B(),I(),i()}));var i=function(){var e=document.getElementById("designsystem-illustration");null!==e&&("virk"===y()?e.setAttribute("src","/assets/img/descriptionimages/Forside_illu_virk.svg"):"borgerdk"===y()?e.setAttribute("src","/assets/img/descriptionimages/Forside_illu_borger.svg"):e.parentNode.removeChild(e))},s=function(){var e=window.location.search.substr(1);if(""!==e){e=e.split("&");for(var t=0;t<e.length;t++){var n=e[t].split("="),r=n[0],i=n[1];if("theme"===r&&o.indexOf(i)>=0)return void p(i)}}},l=function(){v()||(L("Cookie was not set",y()),h())},a=function(){if(v()){var e=y();o.indexOf(e)<0&&(k("theme"),L("cookie was deleted:",e))}},c=function(){var e=document.getElementById("themeAlert");if(!v()&&null!==e){f();for(var t=e.getElementsByClassName("alert-close"),n=0;n<t.length;n++)t[n].addEventListener("click",(function(){g()}));document.getElementById("borgerdkThemeBtn").addEventListener("click",u),document.getElementById("virkThemeBtn").addEventListener("click",d)}},d=function(){p(o[0]),g(),location.reload()},u=function(){p(o[1]),g(),location.reload()},m=function(){var e=y();L("stylesheet:",e);var t=o.indexOf(e),n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href="/assets/style/"+r[t]+".css",document.getElementsByTagName("head")[0].appendChild(n)},g=function(){null!==document.getElementById("themeAlert")&&document.getElementById("themeAlert").classList.add("d-none")},f=function(){null!==document.getElementById("themeAlert")&&document.getElementById("themeAlert").classList.remove("d-none")},h=function(){var e=o[Math.floor(Math.random()*o.length)];p(e)},p=function(e){return o.indexOf(e)>=0&&(L("setting cookie",e),b("theme",e,365),!0)},v=function(){return null!==E("theme")},y=function(){return E("theme")},b=function(e,t,n){var o=e+"="+encodeURIComponent(t);if("number"==typeof n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),o+=";expires="+r.toUTCString(),L("Setting cookie",o+=";path=/"),document.cookie=o}},k=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"},E=function(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var o=t[n].split("=");if(e===o[0].trim())return decodeURIComponent(o[1])}return null},B=function(){var e=document.getElementById("themeSelector");null!=e&&(T(),e.addEventListener("change",(function(e){var t=document.getElementById("themeSelector").value;o.indexOf(t)>=0?(p(t),window.themeChangeProcess=!0,location.reload()):alert("The selected theme does not exist")})))},T=function(){for(var e=document.getElementById("themeSelector"),t=e.getElementsByTagName("option"),n=y(),o=0;o<t.length;o++)n===t[o].value&&(e.selectedIndex=o)},x=function(){if(null!==document.getElementById("changeTheme")){var e="";switch(y()){case"virk":e="Borger.dk";break;case"borgerdk":e="Virk"}var t="Skift til "+e+" tema";document.getElementById("changeThemeText").innerText=t,document.getElementById("changeTheme").addEventListener("click",w)}},w=function(){var e=y();"virk"===e?u():"borgerdk"===e&&d()},L=function(e,t){0},I=function(){if(document.getElementsByTagName("body")[0].classList.contains("page-selvbetjeningsløsninger")||document.getElementsByTagName("body")[0].classList.contains("page-opsummeringsside")||document.getElementsByTagName("body")[0].classList.contains("page-kvittering")){for(var e=document.getElementsByClassName("screenshot"),t=0;t<e.length;t++){var n=e[t].getAttribute("href").split("/"),o=y()+"-"+n[n.length-2]+".PNG",r='<img src="/assets/img/examples_pages/'+n[n.length-3]+"/"+o+'" alt="Skærmbillede af '+e[t].getAttribute("title")+'" class="w-percent-100 d-block" />';e[t].innerHTML=r}var i=document.getElementsByClassName("screenshot-gallery");if(0!==i.length)for(var s=0;s<i.length;s++)i[s].classList.remove("d-none")}if(document.getElementsByTagName("body")[0].classList.contains("page-footers")||document.getElementsByTagName("body")[0].classList.contains("page-headers")||document.getElementsByTagName("body")[0].classList.contains("page-cookiemeddelelse"))for(var l=document.querySelectorAll(".component-example .screenshot"),a=0;a<l.length;a++){var c=l[a].getAttribute("href").split("/"),d=c[c.length-2],u='<img src="/assets/img/examples/'+(y()+"-"+d+".png")+'" alt="Skærmbillede af '+l[a].getAttribute("title")+'" class="d-block" />';l[a].innerHTML=u}}}});