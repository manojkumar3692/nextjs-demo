(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/h46":function(t,e,n){n("cHUd")("Map")},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},LX0d:function(t,e,n){t.exports=n("UDep")},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),s=n("2GTP"),a=n("EXMj"),u=n("oioR"),f=n("MPFp"),c=n("UO39"),p=n("TJWN"),l=n("jmDH"),h=n("6/1s").fastKey,v=n("n3ko"),d=l?"_s":"size",_=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,f){var c=t((function(t,r){a(t,c,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&u(r,n,t[f],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=_(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=s(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(v(this,e),t)}}),l&&r(c.prototype,"size",{get:function(){return v(this,e)[d]}}),c},def:function(t,e,n){var r,o,i=_(t,e);return i?i.v=n:(t._l=i={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,e,n){f(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?c(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,c(1))}),n?"entries":"values",!n,!0),p(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),u=n("LX0d"),f=n("KI45"),c=n("5Uuq");e.__esModule=!0,e.default=void 0;var p,l=n("CxY0"),h=c(n("q1tI")),v=f(n("nOHt")),d=n("g/15");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new u,y=window.IntersectionObserver,w={};function m(){return p||(y?p=new y((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){function e(t){var n;return r(this,e),(n=i(this,s(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var s=t(o,i);return e=o,n=i,r=s,s}}((function(t,e){return{href:_(t),as:e?_(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(t){var e=(0,l.parse)(t,!1,!0),n=(0,l.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var u=window.location.pathname;s=(0,l.resolve)(u,s),a=a?(0,l.resolve)(u,a):s,t.preventDefault();var f=n.props.scroll;null==f&&(f=a.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return a(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,l.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,n=w[this.getHref()];this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=m();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),w[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,i=r.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var s=h.Children.only(e),a={ref:function(e){t.handleRef(e),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(e):"object"===typeof s.ref&&(s.ref.current=e))},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),t.prefetch()},onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};!this.props.passHref&&("a"!==s.type||"href"in s.props)||(a.href=i||o);var u=n("P5f7").rewriteUrlForNextExport;return a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=u(a.href)),h.default.cloneElement(s,a)}}]),e}(h.Component);e.default=k},d5Yn:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[id]",function(){return n("nOj+")}])},dVTT:function(t,e,n){n("aPfg")("Map")},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},"nOj+":function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),o=n.n(r),i=n("q1tI"),s=n.n(i),a=n("vcXL"),u=n.n(a),f=n("zfdX"),c=s.a.createElement,p=function(t){return c(f.a,null,c("h1",null,t.show.name),c("p",null,t.show.summary.replace(/<[/]?[pb]>/g,"")),t.show.image?c("img",{src:t.show.image.medium}):null)};p.getInitialProps=function(t){var e,n,r;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=t.query.id,i.next=3,o.a.awrap(u()("https://api.tvmaze.com/shows/".concat(e)));case 3:return n=i.sent,i.next=6,o.a.awrap(n.json());case 6:return r=i.sent,console.log("Fetched show: ".concat(r.name)),i.abrupt("return",{show:r});case 9:case"end":return i.stop()}}))},e.default=p},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports},"yM+p":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),a=o.a.createElement,u={marginRight:15};e.a=function(){return a("div",null,a(s.a,{href:"/"},a("a",{style:u},"Home")),a(s.a,{href:"/about"},a("a",{style:u},"About")),a(s.a,{href:"/quotes"},a("a",{style:u},"Quote of Day")))}},zfdX:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=(n("YFqc"),n("yM+p")),s=o.a.createElement;e.a=function(t){return s("div",null,s(i.a,null),t.children)}}},[["d5Yn",1,2,0]]]);