(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{306:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},307:function(t,e,r){var n=r(22),i="["+r(306)+"]",a=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},309:function(t,e,r){var n=r(4),i=r(93);t.exports=function(t,e,r){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==r&&n(o=a.prototype)&&o!==r.prototype&&i(t,o),t}},327:function(t,e,r){},360:function(t,e,r){"use strict";var n=r(6),i=r(3),a=r(92),o=r(10),u=r(7),s=r(25),f=r(309),c=r(44),h=r(1),p=r(28),l=r(67).f,N=r(24).f,m=r(8).f,g=r(307).trim,I=i.Number,d=I.prototype,E="Number"==s(p(d)),b=function(t){var e,r,n,i,a,o,u,s,f=c(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=g(f)).charCodeAt(0))||45===e){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+f}for(o=(a=f.slice(2)).length,u=0;u<o;u++)if((s=a.charCodeAt(u))<48||s>i)return NaN;return parseInt(a,n)}return+f};if(a("Number",!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var v,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(E?h((function(){d.valueOf.call(r)})):"Number"!=s(r))?f(new I(b(e)),r,w):b(e)},A=n?l(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),_=0;A.length>_;_++)u(I,v=A[_])&&!u(w,v)&&m(w,v,N(I,v));w.prototype=d,d.constructor=w,o(i,"Number",w)}},361:function(t,e,r){"use strict";r(327)},367:function(t,e,r){"use strict";r.r(e);r(45),r(360),r(43),r(66);var n={props:{href:{type:String},width:{type:String|Number,default:"100%"},height:{type:Number,default:600}},data:function(){return{iframeLink:""}},computed:{iframeHeight:function(){return this.height,600}},mounted:function(){var t=this.$router.options.base;this.href?this.iframeLink=""+t.slice(0,-1)+this.href:this.iframeLink=""+location.pathname.replace("guide","examples/#").replace(".html","")}},i=(r(361),r(42)),a=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{attrs:{width:this.width,height:this.height,src:this.iframeLink}})}),[],!1,null,"e8c9530e",null);e.default=a.exports}}]);