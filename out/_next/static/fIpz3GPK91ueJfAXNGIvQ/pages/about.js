(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/h46":function(t,n,e){e("cHUd")("Map")},"8iia":function(t,n,e){var r=e("QMMT"),o=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},LX0d:function(t,n,e){t.exports=e("UDep")},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},STsu:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return e("vBwC")}])},UDep:function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("g33z"),e("XLbu"),e("/h46"),e("dVTT"),t.exports=e("WEpk").Map},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,o=e("oVml"),i=e("XJU/"),u=e("2GTP"),f=e("EXMj"),s=e("oioR"),a=e("MPFp"),c=e("UO39"),l=e("TJWN"),p=e("jmDH"),h=e("6/1s").fastKey,v=e("n3ko"),d=p?"_s":"size",_=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,a){var c=t((function(t,r){f(t,c,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&s(r,e,t[a],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=_(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!_(v(this,n),t)}}),p&&r(c.prototype,"size",{get:function(){return v(this,n)[d]}}),c},def:function(t,n,e){var r,o,i=_(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,n,e){a(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?c(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,c(1))}),e?"entries":"values",!e,!0),l(n)}}},XLbu:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Map",{toJSON:e("8iia")("Map")})},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var r=e("/HRN"),o=e("WaGi"),i=e("ZDA2"),u=e("/+P4"),f=e("N9n2"),s=e("LX0d"),a=e("KI45"),c=e("5Uuq");n.__esModule=!0,n.default=void 0;var l,p=e("CxY0"),h=c(e("q1tI")),v=a(e("nOHt")),d=e("g/15");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new s,g=window.IntersectionObserver,w={};function k(){return l||(g?l=new g((function(t){t.forEach((function(t){if(y.has(t.target)){var n=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),y.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var m=function(t){function n(t){var e;return r(this,n),(e=i(this,u(n).call(this,t))).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var n=null,e=null,r=null;return function(o,i){if(r&&o===n&&i===e)return r;var u=t(o,i);return n=o,e=i,r=u,u}}((function(t,n){return{href:_(t),as:n?_(n):n}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),u=i.href,f=i.as;if(function(t){var n=(0,p.parse)(t,!1,!0),e=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(u)){var s=window.location.pathname;u=(0,p.resolve)(s,u),f=f?(0,p.resolve)(s,f):u,t.preventDefault();var a=e.props.scroll;null==a&&(a=f.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](u,f,{shallow:e.props.shallow}).then((function(t){t&&a&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return f(n,t),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,n)}},{key:"handleRef",value:function(t){var n=this,e=w[this.getHref()];this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),e||(this.cleanUpListeners=function(t,n){var e=k();return e?(e.observe(t),y.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}y.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),w[t]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof n&&(n=h.default.createElement("a",null,n));var i=h.Children.only(n),u={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch()},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),h.default.cloneElement(i,u)}}]),n}(h.Component);n.default=m},dVTT:function(t,n,e){e("aPfg")("Map")},g33z:function(t,n,e){"use strict";var r=e("Wu5q"),o=e("n3ko");t.exports=e("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},vBwC:function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),i=(e("YFqc"),e("yM+p"),e("zfdX")),u=o.a.createElement;n.default=function(){return u("div",null,u(i.a,null,u("p",null,"About Page")))}},"yM+p":function(t,n,e){"use strict";var r=e("q1tI"),o=e.n(r),i=e("YFqc"),u=e.n(i),f=o.a.createElement,s={marginRight:15};n.a=function(){return f("div",null,f(u.a,{href:"/"},f("a",{style:s},"Home")),f(u.a,{href:"/about"},f("a",{style:s},"About")),f(u.a,{href:"/quotes"},f("a",{style:s},"Quote of Day")))}},zfdX:function(t,n,e){"use strict";var r=e("q1tI"),o=e.n(r),i=(e("YFqc"),e("yM+p")),u=o.a.createElement;n.a=function(t){return u("div",null,u(i.a,null),t.children)}}},[["STsu",1,2,0]]]);