!function(a){function e(e){for(var i,t,l=e[0],s=e[1],u=e[2],c=0,p=[];c<l.length;c++)t=l[c],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&p.push(r[t][0]),r[t]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(a[i]=s[i]);for(d&&d(e);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var a,e=0;e<o.length;e++){for(var n=o[e],i=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),a=t(t.s=n[0]))}return a}var i={},r={4:0},o=[];function t(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return a[e].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=a,t.c=i,t.d=function(a,e,n){t.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:n})},t.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,e){if(1&e&&(a=t(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var i in a)t.d(n,i,function(e){return a[e]}.bind(null,i));return n},t.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(e,"a",e),e},t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},t.p="/assets/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=s;o.push([343,0]),n()}({343:function(a,e,n){a.exports=n(344)},344:function(a,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);window.$=window.jQuery=r.a;n(345);var o=function a(e){!function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);r()("#js-selectwoo-example1").selectWoo({multiple:!0,placeholder:"Vælg et element på listen",data:["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"],width:"100%",language:"da"}),r()("#js-selectwoo-example1").removeClass("d-none"),r()("#js-selectwoo-example2").selectWoo({multiple:!0,placeholder:"Vælg et element på listen",width:"100%",language:{noResults:function(){return"Ingen resultater fundet"}},ajax:{url:"https://jsonplaceholder.typicode.com/users",dataType:"json",processResults:function(a){return{results:r.a.map(a,(function(a){return{text:a.name,id:a.id}}))}}}}),r()("#js-selectwoo-example2").removeClass("d-none"),r()("#js-selectwoo-example3").selectWoo({multiple:!0,placeholder:"Vælg et element på listen",width:"100%",language:"da"}),r()("#js-selectwoo-example3").removeClass("d-none")};r()(document).ready((function(){new o}))}});