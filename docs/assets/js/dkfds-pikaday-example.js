!function(t){function e(e){for(var s,i,u=e[0],o=e[1],l=e[2],d=0,j=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&j.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);for(p&&p(e);j.length;)j.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={4:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/assets/";var u=window.webpackJsonp=window.webpackJsonp||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=o;r.push([455,0]),n()}({455:function(t,e,n){t.exports=n(456)},456:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s);function r(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}window.$=window.jQuery=a.a;var i=n(457),u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pikadayInstance=null,this.datepickerElement=a()(e).find(".js-calendar-datepicker"),this.dateGroup=e,this.dayInputElement=null,this.monthInputElement=null,this.yearInputElement=null,this.initDateInputs(),0!==this.datepickerElement.length&&this.initDatepicker(this.datepickerElement[0])}var e,n,s;return e=t,(n=[{key:"initDateInputs",value:function(){this.dayInputElement=a()(this.dateGroup).find(".js-calendar-day-input")[0],this.monthInputElement=a()(this.dateGroup).find(".js-calendar-month-input")[0],this.yearInputElement=a()(this.dateGroup).find(".js-calendar-year-input")[0];var t=this;this.dayInputElement.addEventListener("blur",(function(){t.formatInputs(),t.validateInputs()})),this.dayInputElement.addEventListener("paste",(function(){t.formatInputs(),t.validateInputs()})),this.monthInputElement.addEventListener("blur",(function(){t.formatInputs(),t.validateInputs()})),this.monthInputElement.addEventListener("paste",(function(){t.formatInputs(),t.validateInputs()})),this.yearInputElement.addEventListener("blur",(function(){t.formatInputs(),t.validateInputs()})),this.yearInputElement.addEventListener("paste",(function(){t.formatInputs(),t.validateInputs()}))}},{key:"initDatepicker",value:function(t){if(t){this.initDone=!1;var e=this;this.pikadayInstance=new i({field:t,format:"DD/MM/YYYY",firstDay:1,i18n:{previousMonth:"Forrige måned",nextMonth:"Næste måned",months:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],weekdays:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],weekdaysShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"]},onSelect:function(t){e.initDone&&(e.updateDateInputs(t),e.validateInputs())},onOpen:function(){var t=parseInt(e.dayInputElement.value),n=parseInt(e.monthInputElement.value)-1,s=parseInt(e.yearInputElement.value),a=new Date(s,n,t);e.validateInputs()&&e.updateDatepickerDate(a)}});var n=new Date;this.pikadayInstance.setDate(n),this.initDone=!0}}},{key:"validateInputs",value:function(){var t=this.dayInputElement.value,e=this.monthInputElement.value,n=this.yearInputElement.value,s=new Date(n,e,0).getDate(),a=this.dayInputElement.getAttribute("data-input-regex"),r=this.monthInputElement.getAttribute("data-input-regex"),i=this.yearInputElement.getAttribute("data-input-regex"),u=new RegExp(a),o=new RegExp(r),l=new RegExp(i),p="",d=!0;return""===t&&""===e&&""===n||(null!==u.exec(t)&&null!==o.exec(e)&&null!==l.exec(n)||(d=!1),t>s&&(d=!1),e>12&&(d=!1),""===t||parseInt(t)>=this.dayInputElement.getAttribute("data-min")&&parseInt(t)<=this.dayInputElement.getAttribute("data-max")||(d=!1),""===e||parseInt(e)>=this.monthInputElement.getAttribute("data-min")&&parseInt(e)<=this.monthInputElement.getAttribute("data-max")||(d=!1),""===n||parseInt(n)>=this.yearInputElement.getAttribute("data-min")&&parseInt(n)<=this.yearInputElement.getAttribute("data-max")||(d=!1)),!1===d&&(p="Ugyldig dato. Vælg en anden.",this.showError(p)),d&&this.removeError(),d}},{key:"showError",value:function(t){this.dateGroup.classList.add("form-error");var e=a()(this.dateGroup).siblings(".form-error-message");0!==e.length&&(e[0].textContent=t,e.removeClass("d-none"))}},{key:"removeError",value:function(){this.dateGroup.classList.remove("form-error");var t=a()(this.dateGroup).siblings(".form-error-message");0!==t.length&&(t[0].textContent="",t.addClass("d-none"))}},{key:"updateDateInputs",value:function(t){var e=t.getDate(),n=t.getMonth()+1,s=t.getFullYear();this.dayInputElement.value=this.dayFormat(e),this.monthInputElement.value=this.monthFormat(n),this.yearInputElement.value=s}},{key:"dayFormat",value:function(t){return("0"+t).slice(-2)}},{key:"monthFormat",value:function(t){return("0"+t).slice(-2)}},{key:"formatInputs",value:function(){var t=parseInt(this.dayInputElement.value),e=parseInt(this.monthInputElement.value);isNaN(t)||(this.dayInputElement.value=this.dayFormat(t)),isNaN(e)||(this.monthInputElement.value=this.monthFormat(e))}},{key:"updateDatepickerDate",value:function(t){this.pikadayInstance.setDate(t)}}])&&r(e.prototype,n),s&&r(e,s),t}();a()(document).ready((function(){for(var t=a()(".js-calendar-group"),e=0;e<t.length;e++)new u(t[e])}))},458:function(t,e,n){var s={"./af":129,"./af.js":129,"./ar":130,"./ar-dz":131,"./ar-dz.js":131,"./ar-kw":132,"./ar-kw.js":132,"./ar-ly":133,"./ar-ly.js":133,"./ar-ma":134,"./ar-ma.js":134,"./ar-sa":135,"./ar-sa.js":135,"./ar-tn":136,"./ar-tn.js":136,"./ar.js":130,"./az":137,"./az.js":137,"./be":138,"./be.js":138,"./bg":139,"./bg.js":139,"./bm":140,"./bm.js":140,"./bn":141,"./bn.js":141,"./bo":142,"./bo.js":142,"./br":143,"./br.js":143,"./bs":144,"./bs.js":144,"./ca":145,"./ca.js":145,"./cs":146,"./cs.js":146,"./cv":147,"./cv.js":147,"./cy":148,"./cy.js":148,"./da":149,"./da.js":149,"./de":150,"./de-at":151,"./de-at.js":151,"./de-ch":152,"./de-ch.js":152,"./de.js":150,"./dv":153,"./dv.js":153,"./el":154,"./el.js":154,"./en-SG":155,"./en-SG.js":155,"./en-au":156,"./en-au.js":156,"./en-ca":157,"./en-ca.js":157,"./en-gb":158,"./en-gb.js":158,"./en-ie":159,"./en-ie.js":159,"./en-il":160,"./en-il.js":160,"./en-nz":161,"./en-nz.js":161,"./eo":162,"./eo.js":162,"./es":163,"./es-do":164,"./es-do.js":164,"./es-us":165,"./es-us.js":165,"./es.js":163,"./et":166,"./et.js":166,"./eu":167,"./eu.js":167,"./fa":168,"./fa.js":168,"./fi":169,"./fi.js":169,"./fo":170,"./fo.js":170,"./fr":171,"./fr-ca":172,"./fr-ca.js":172,"./fr-ch":173,"./fr-ch.js":173,"./fr.js":171,"./fy":174,"./fy.js":174,"./ga":175,"./ga.js":175,"./gd":176,"./gd.js":176,"./gl":177,"./gl.js":177,"./gom-latn":178,"./gom-latn.js":178,"./gu":179,"./gu.js":179,"./he":180,"./he.js":180,"./hi":181,"./hi.js":181,"./hr":182,"./hr.js":182,"./hu":183,"./hu.js":183,"./hy-am":184,"./hy-am.js":184,"./id":185,"./id.js":185,"./is":186,"./is.js":186,"./it":187,"./it-ch":188,"./it-ch.js":188,"./it.js":187,"./ja":189,"./ja.js":189,"./jv":190,"./jv.js":190,"./ka":191,"./ka.js":191,"./kk":192,"./kk.js":192,"./km":193,"./km.js":193,"./kn":194,"./kn.js":194,"./ko":195,"./ko.js":195,"./ku":196,"./ku.js":196,"./ky":197,"./ky.js":197,"./lb":198,"./lb.js":198,"./lo":199,"./lo.js":199,"./lt":200,"./lt.js":200,"./lv":201,"./lv.js":201,"./me":202,"./me.js":202,"./mi":203,"./mi.js":203,"./mk":204,"./mk.js":204,"./ml":205,"./ml.js":205,"./mn":206,"./mn.js":206,"./mr":207,"./mr.js":207,"./ms":208,"./ms-my":209,"./ms-my.js":209,"./ms.js":208,"./mt":210,"./mt.js":210,"./my":211,"./my.js":211,"./nb":212,"./nb.js":212,"./ne":213,"./ne.js":213,"./nl":214,"./nl-be":215,"./nl-be.js":215,"./nl.js":214,"./nn":216,"./nn.js":216,"./pa-in":217,"./pa-in.js":217,"./pl":218,"./pl.js":218,"./pt":219,"./pt-br":220,"./pt-br.js":220,"./pt.js":219,"./ro":221,"./ro.js":221,"./ru":222,"./ru.js":222,"./sd":223,"./sd.js":223,"./se":224,"./se.js":224,"./si":225,"./si.js":225,"./sk":226,"./sk.js":226,"./sl":227,"./sl.js":227,"./sq":228,"./sq.js":228,"./sr":229,"./sr-cyrl":230,"./sr-cyrl.js":230,"./sr.js":229,"./ss":231,"./ss.js":231,"./sv":232,"./sv.js":232,"./sw":233,"./sw.js":233,"./ta":234,"./ta.js":234,"./te":235,"./te.js":235,"./tet":236,"./tet.js":236,"./tg":237,"./tg.js":237,"./th":238,"./th.js":238,"./tl-ph":239,"./tl-ph.js":239,"./tlh":240,"./tlh.js":240,"./tr":241,"./tr.js":241,"./tzl":242,"./tzl.js":242,"./tzm":243,"./tzm-latn":244,"./tzm-latn.js":244,"./tzm.js":243,"./ug-cn":245,"./ug-cn.js":245,"./uk":246,"./uk.js":246,"./ur":247,"./ur.js":247,"./uz":248,"./uz-latn":249,"./uz-latn.js":249,"./uz.js":248,"./vi":250,"./vi.js":250,"./x-pseudo":251,"./x-pseudo.js":251,"./yo":252,"./yo.js":252,"./zh-cn":253,"./zh-cn.js":253,"./zh-hk":254,"./zh-hk.js":254,"./zh-tw":255,"./zh-tw.js":255};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id=458},459:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=459}});