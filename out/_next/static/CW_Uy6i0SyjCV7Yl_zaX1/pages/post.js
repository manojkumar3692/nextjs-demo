(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/6ze":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("nOHt"),f=n("zfdX"),u=o.a.createElement;e.default=function(t){var e=Object(i.useRouter)();return u(f.a,null,u("h1",null,e.query.title),u("p",null,"This is the blog post content"))}},"/h46":function(t,e,n){n("cHUd")("Map")},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},JbGh:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return n("/6ze")}])},LX0d:function(t,e,n){t.exports=n("UDep")},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),f=n("2GTP"),u=n("EXMj"),s=n("oioR"),a=n("MPFp"),c=n("UO39"),l=n("TJWN"),p=n("jmDH"),h=n("6/1s").fastKey,v=n("n3ko"),d=p?"_s":"size",_=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,a){var c=t((function(t,r){u(t,c,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&s(r,n,t[a],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=_(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=f(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(v(this,e),t)}}),p&&r(c.prototype,"size",{get:function(){return v(this,e)[d]}}),c},def:function(t,e,n){var r,o,i=_(t,e);return i?i.v=n:(t._l=i={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,e,n){a(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?c(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,c(1))}),n?"entries":"values",!n,!0),l(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),f=n("/+P4"),u=n("N9n2"),s=n("LX0d"),a=n("KI45"),c=n("5Uuq");e.__esModule=!0,e.default=void 0;var l,p=n("CxY0"),h=c(n("q1tI")),v=a(n("nOHt")),d=n("g/15");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var y=new s,g=window.IntersectionObserver,w={};function k(){return l||(g?l=new g((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var m=function(t){function e(t){var n;return r(this,e),(n=i(this,f(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var f=t(o,i);return e=o,n=i,r=f,f}}((function(t,e){return{href:_(t),as:e?_(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),f=i.href,u=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(f)){var s=window.location.pathname;f=(0,p.resolve)(s,f),u=u?(0,p.resolve)(s,u):f,t.preventDefault();var a=n.props.scroll;null==a&&(a=u.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](f,u,{shallow:n.props.shallow}).then((function(t){t&&a&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return u(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,n=w[this.getHref()];this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),w[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,i=r.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var f=h.Children.only(e),u={ref:function(e){t.handleRef(e),f&&"object"===typeof f&&f.ref&&("function"===typeof f.ref?f.ref(e):"object"===typeof f.ref&&(f.ref.current=e))},onMouseEnter:function(e){f.props&&"function"===typeof f.props.onMouseEnter&&f.props.onMouseEnter(e),t.prefetch()},onClick:function(e){f.props&&"function"===typeof f.props.onClick&&f.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};!this.props.passHref&&("a"!==f.type||"href"in f.props)||(u.href=i||o);var s=n("P5f7").rewriteUrlForNextExport;return u.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=s(u.href)),h.default.cloneElement(f,u)}}]),e}(h.Component);e.default=m},dVTT:function(t,e,n){n("aPfg")("Map")},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},"yM+p":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),f=n.n(i),u=o.a.createElement,s={marginRight:15};e.a=function(){return u("div",null,u(f.a,{href:"/"},u("a",{style:s},"Home")),u(f.a,{href:"/about"},u("a",{style:s},"About")),u(f.a,{href:"/quotes"},u("a",{style:s},"Quote of Day")))}},zfdX:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=(n("YFqc"),n("yM+p")),f=o.a.createElement;e.a=function(t){return f("div",null,f(i.a,null),t.children)}}},[["JbGh",1,2,0]]]);