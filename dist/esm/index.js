import e,{useEffect as n}from"react";
/*! js-cookie v3.0.1 | MIT */function t(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)e[r]=t[r]}return e}var r=function e(n,r){function o(e,o,i){if("undefined"!=typeof document){"number"==typeof(i=t({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in i)i[c]&&(a+="; "+c,!0!==i[c]&&(a+="="+i[c].split(";")[0]));return document.cookie=e+"="+n.write(o,e)+a}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},o=0;o<t.length;o++){var i=t[o].split("="),a=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(r[c]=n.read(a,c),e===c)break}catch(e){}}return e?r[e]:r}},remove:function(e,n){o(e,"",t({},n,{expires:-1}))},withAttributes:function(n){return e(this.converter,t({},this.attributes,n))},withConverter:function(n){return e(t({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".cookie_widget_container{\r\n    position: fixed;\r\n    bottom: 20px;\r\n    min-width: 300px;\r\n    width: 350px;\r\n    max-width: 400px;\r\n    background-color: #fff;\r\n    z-index: 9999;\r\n    border: 1px solid #f5f5f5;\r\n    box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 24px;\r\n    border-radius: 8px;\r\n    font-family: Helvetica;\r\n}\r\n\r\n.cookie_widget_container.is-right{\r\n    right: 20px !important;\r\n    -webkit-animation-name: fadeInRight;\r\n    animation-name: fadeInRight;\r\n    -webkit-animation-duration: 0.2s;\r\n    animation-duration: 0.2s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.cookie_widget_container.is-left{\r\n    left: 20px;\r\n    -webkit-animation-name: fadeInLeft;\r\n    animation-name: fadeInLeft;\r\n    -webkit-animation-duration: 0.2s;\r\n    animation-duration: 0.2s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.cookie_widget_shape_1{\r\n    height: 50px;\r\n    width: 150px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    border-bottom-left-radius: 8px;\r\n    border-top-right-radius: 8px;\r\n    background: #bb2030;\r\n    z-index: 2;\r\n    opacity: 0.8;\r\n}\r\n\r\n.cookie_widget_shape_2{\r\n    height: 50px;\r\n    width: 170px;\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 0;\r\n    border-bottom-left-radius: 8px;\r\n    border-top-left-radius: 8px;\r\n    z-index: 1;\r\n    background: rgba(213, 213, 213, 0.28);\r\n}\r\n\r\n.cookie_widget_heading{\r\n    padding: 20px 20px 0 20px;\r\n}\r\n\r\n.cookie_widget_content{\r\n    padding: 10px 20px;\r\n}\r\n\r\n.cookie_widget_title{\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #000;\r\n    margin: 0;\r\n}\r\n\r\n.cookie_widget_subtitle{\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    color: #000;\r\n    margin: 0 !important;\r\n}\r\n\r\n.cookie_widget_text{\r\n    color: #999ca2;\r\n    font-size: 14px;\r\n}\r\n\r\n.cookie_widget_privacy_policy{\r\n    color: #bb2030;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    font-size: 13px;\r\n}\r\n\r\n.cookie_widget_footer{\r\n    width: 100%;\r\n    border-top: 1px solid #f5f5f5;\r\n    height: 40px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.cookie_widget_footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.cookie_widget_button_reject, .cookie_widget_button_accept{\r\n    background: transparent;\r\n    width: 50%;\r\n    height: 40px;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: all 0.1s ease;\r\n    margin: 0;\r\n}\r\n\r\n.cookie_widget_button_reject{\r\n    border-right: 1px solid #f5f5f5;\r\n    border-bottom-left-radius: 8px;\r\n}\r\n\r\n.cookie_widget_button_accept {\r\n    color: #bb2030;\r\n    font-weight: bold;\r\n    border-bottom-right-radius: 8px;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .cookie_widget_container{\r\n        width: 100%;\r\n        max-width: 100%;\r\n        left: 0 !important;\r\n        right: 0 !important;\r\n        bottom: 0 !important;\r\n        border-radius: 0;\r\n    }\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(-20px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0);\r\n    }\r\n}\r\n\r\n\r\n@keyframes fadeInRight {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(20px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(0);\r\n    }\r\n}\r\n");var o=function(t){var o,i,a,c,d,l,s,p,m=e.useState(!1),u=m[0],f=m[1],g=function(e){console.log(window.scrollY),u&&window.scrollY>150&&b()};n((function(){return void 0===h()&&(f(!0),t.hideOnScrollDown&&(console.log(window.scrollY),window.addEventListener("scroll",g,{passive:!0}))),function(){window.removeEventListener("scroll",g)}}),[]);var _=function(e){var n=t.cookieSecurity;void 0===n&&(n=!location||"https:"===location.protocol),r.set("cookie_gpdr_consent",e,{expires:365,sameSite:"lax",secure:n})},h=function(){return void 0===(e=r.get("cookie_gpdr_consent"))?r.get("cookie_gpdr_consent"):e;var e},b=function(){_("accepted"),t.onAccept(),f(!1)};return u?e.createElement("div",{className:"cookie_widget_container "+("right"===t.location?"is-right":"is-left")},e.createElement("div",{className:"cookie_widget_shape_1",style:{background:t.color}}),e.createElement("div",{className:"cookie_widget_shape_2"}),e.createElement("div",{className:"cookie_widget_heading"},e.createElement("p",{className:"cookie_widget_title"},null!==(o=t.title)&&void 0!==o?o:"This website"),e.createElement("p",{className:"cookie_widget_subtitle"},null!==(i=t.subtitle)&&void 0!==i?i:"use Cookies")),e.createElement("div",{className:"cookie_widget_content"},e.createElement("p",{className:"cookie_widget_text"},null!==(a=t.text)&&void 0!==a?a:"We use cookies and similar methods to recognize visitors and remember their preferences. We also use them to measure ad campaign effectiveness, target ads and analyze site traffic. To learn more about these methods, including how to disable them, view our Cookie Policy."),t.policyLink&&e.createElement("a",{className:"cookie_widget_privacy_policy",href:t.policyLink,target:"_blank",style:{color:t.color}},null!==(c=t.policyLinkText)&&void 0!==c?c:"Read the30 privacy policy")),e.createElement("div",{className:"cookie_widget_footer"},e.createElement("button",{className:"cookie_widget_button_reject","aria-label":null!==(d=t.rejectButtonText)&&void 0!==d?d:"Reject All",onClick:function(){_("declined"),t.onReject(),f(!1)}},null!==(l=t.rejectButtonText)&&void 0!==l?l:"Reject All"),e.createElement("button",{className:"cookie_widget_button_accept","aria-label":null!==(s=t.acceptButtonText)&&void 0!==s?s:"Accept All",style:{color:t.color},onClick:b},null!==(p=t.acceptButtonText)&&void 0!==p?p:"Accept All"))):null};export{o as CookieWidget};
//# sourceMappingURL=index.js.map
