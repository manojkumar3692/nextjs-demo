(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/h46":function(e,t,r){r("cHUd")("Map")},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var n,i=r("q1tI");var o=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return o.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=s},"4MWS":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quotes",function(){return r("pk7W")}])},"8iia":function(e,t,r){var n=r("QMMT"),i=r("RRc/");e.exports=function(e){return function(){if(n(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},"8oxB":function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var a,c=[],l=!1,f=-1;function h(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=u(h);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},LX0d:function(e,t,r){e.exports=r("UDep")},MX0m:function(e,t,r){e.exports=r("3niX")},"RRc/":function(e,t,r){var n=r("oioR");e.exports=function(e,t){var r=[];return n(e,!1,r.push,r,t),r}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=o(r("9kyW")),i=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),o=t+i;return e[o]||(e[o]="jsx-"+(0,n.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var o=this.computeId(i,n);return{styleId:o,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},UDep:function(e,t,r){r("wgeU"),r("FlQf"),r("bBy9"),r("g33z"),r("XLbu"),r("/h46"),r("dVTT"),e.exports=r("WEpk").Map},Wu5q:function(e,t,r){"use strict";var n=r("2faE").f,i=r("oVml"),o=r("XJU/"),s=r("2GTP"),u=r("EXMj"),a=r("oioR"),c=r("MPFp"),l=r("UO39"),f=r("TJWN"),h=r("jmDH"),d=r("6/1s").fastKey,p=r("n3ko"),v=h?"_s":"size",m=function(e,t){var r,n=d(t);if("F"!==n)return e._i[n];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,c){var l=e((function(e,n){u(e,l,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[v]=0,void 0!=n&&a(n,r,e[c],e)}));return o(l.prototype,{clear:function(){for(var e=p(this,t),r=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete r[n.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var r=p(this,t),n=m(r,e);if(n){var i=n.n,o=n.p;delete r._i[n.i],n.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==n&&(r._f=i),r._l==n&&(r._l=o),r[v]--}return!!n},forEach:function(e){p(this,t);for(var r,n=s(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!m(p(this,t),e)}}),h&&n(l.prototype,"size",{get:function(){return p(this,t)[v]}}),l},def:function(e,t,r){var n,i,o=m(e,t);return o?o.v=r:(e._l=o={i:i=d(t,!0),k:t,v:r,p:n=e._l,n:void 0,r:!1},e._f||(e._f=o),n&&(n.n=o),e[v]++,"F"!==i&&(e._i[i]=o)),e},getEntry:m,setStrong:function(e,t,r){c(e,t,(function(e,r){this._t=p(e,t),this._k=r,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),r?"entries":"values",!r,!0),f(t)}}},XLbu:function(e,t,r){var n=r("Y7ZC");n(n.P+n.R,"Map",{toJSON:r("8iia")("Map")})},YFqc:function(e,t,r){e.exports=r("cTJO")},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,r=t.name,o=void 0===r?"stylesheet":r,u=t.optimizeForSpeed,a=void 0===u?n:u,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,u,a=e.prototype;return a.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(u){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,o),u&&r(t,u),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,r("8oxB"))},cTJO:function(e,t,r){"use strict";var n=r("/HRN"),i=r("WaGi"),o=r("ZDA2"),s=r("/+P4"),u=r("N9n2"),a=r("LX0d"),c=r("KI45"),l=r("5Uuq");t.__esModule=!0,t.default=void 0;var f,h=r("CxY0"),d=l(r("q1tI")),p=c(r("nOHt")),v=r("g/15");function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var _=new a,y=window.IntersectionObserver,g={};function S(){return f||(y?f=new y((function(e){e.forEach((function(e){if(_.has(e.target)){var t=_.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),_.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){function t(e){var r;return n(this,t),(r=o(this,s(t).call(this,e))).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,r=null,n=null;return function(i,o){if(n&&i===t&&o===r)return n;var s=e(i,o);return t=i,r=o,n=s,s}}((function(e,t){return{href:m(e),as:t?m(t):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,i=t.target;if("A"!==n||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),s=o.href,u=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(s)){var a=window.location.pathname;s=(0,h.resolve)(a,s),u=u?(0,h.resolve)(a,u):s,e.preventDefault();var c=r.props.scroll;null==c&&(c=u.indexOf("#")<0),p.default[r.props.replace?"replace":"push"](s,u,{shallow:r.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return u(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,h.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,r=g[this.getHref()];this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),r||(this.cleanUpListeners=function(e,t){var r=S();return r?(r.observe(e),_.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}_.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();p.default.prefetch(e),g[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),i=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var s=d.Children.only(t),u={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch()},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==s.type||"href"in s.props)||(u.href=o||i);var a=r("P5f7").rewriteUrlForNextExport;return u.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=a(u.href)),d.default.cloneElement(s,u)}}]),t}(d.Component);t.default=w},dVTT:function(e,t,r){r("aPfg")("Map")},g33z:function(e,t,r){"use strict";var n=r("Wu5q"),i=r("n3ko");e.exports=r("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=n.getEntry(i(this,"Map"),e);return t&&t.v},set:function(e,t){return n.def(i(this,"Map"),0===e?0:e,t)}},n,!0)},miPH:function(e,t,r){"use strict";var n=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,u,a,c=n(t),l=n(r);if(c&&l){if((u=t.length)!=r.length)return!1;for(s=u;0!==s--;)if(!e(t[s],r[s]))return!1;return!0}if(c!=l)return!1;var f=t instanceof Date,h=r instanceof Date;if(f!=h)return!1;if(f&&h)return t.getTime()==r.getTime();var d=t instanceof RegExp,p=r instanceof RegExp;if(d!=p)return!1;if(d&&p)return t.toString()==r.toString();var v=i(t);if((u=v.length)!==i(r).length)return!1;for(s=u;0!==s--;)if(!o.call(r,v[s]))return!1;for(s=u;0!==s--;)if(!e(t[a=v[s]],r[a]))return!1;return!0}return t!==t&&r!==r}},pk7W:function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),i=r.n(n),o=r("q1tI"),s=r.n(o),u=r("zfdX"),a=r("miPH"),c=r.n(a);function l(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function f(){return"undefined"===typeof navigator.onLine||navigator.onLine}const h=new Map;function d(e){return h.get(e)}function p(e,t){return h.set(e,t)}const v={},m={},_={},y={},g={};const S={onLoadingSlow:()=>{},onSuccess:()=>{},onError:()=>{},onErrorRetry:function(e,t,r,n,i){if(!l())return;const o=Math.min(i.retryCount||0,8),s=~~((Math.random()+.5)*(1<<o))*r.errorRetryInterval;setTimeout(n,s,i)},errorRetryInterval:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:3e3,refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1};"undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType)&&(S.errorRetryInterval=1e4,S.loadingTimeout=5e3);let w=!1;if("undefined"!==typeof window&&window.addEventListener&&!w){const e=()=>{if(l()&&f())for(let e in _)_[e][0]&&_[e][0]()};window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),w=!0}var b=S;const R=new WeakMap;let T=0;const x=Object(o.createContext)({});x.displayName="SWRConfigContext";var j=x;const C="undefined"===typeof window,O=C?o.useEffect:o.useLayoutEffect,E=e=>e?"err@"+e:"",k=e=>{let t=null;if("function"===typeof e)try{e=e()}catch(r){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";let t="arg";for(let r=0;r<e.length;++r){let n;"object"!==typeof e[r]?n="string"===typeof e[r]?'"'+e[r]+'"':String(e[r]):R.has(e[r])?n=R.get(e[r]):(n=T,R.set(e[r],T++)),t+="@"+n}return t}(e)):e=String(e||""),[e,t]},F=(e,t,r)=>{const n=y[e];if(e&&n)for(let i=0;i<n.length;++i)n[i](!1,t,r)};j.Provider;var I=function(...e){let t,r,n={};e.length>=1&&(t=e[0]),e.length>2?(r=e[1],n=e[2]):"function"===typeof e[1]?r=e[1]:"object"===typeof e[1]&&(n=e[1]);const[i,s]=k(t),u=E(i);n=Object.assign({},b,Object(o.useContext)(j),n),"undefined"===typeof r&&(r=n.fetcher);const a=d(i)||n.initialData,h=d(u),S=Object(o.useRef)({data:!1,error:!1,isValidating:!1}),w=Object(o.useRef)({data:a,error:h,isValidating:!1}),R=Object(o.useState)(null)[1];let T=Object(o.useCallback)(e=>{let t=!1;for(let r in e)w.current[r]=e[r],S.current[r]&&(t=!0);(t||n.suspense)&&R({})},[]);const x=Object(o.useRef)(!1),I=Object(o.useRef)(i),z=Object(o.useCallback)(async(e={})=>{if(!i||!r)return!1;if(x.current)return!1;e=Object.assign({dedupe:!1},e);let t=!0,o="undefined"!==typeof v[i]&&e.dedupe;try{let e,a;if(T({isValidating:!0}),o?(a=m[i],e=await v[i]):(v[i]&&(g[i]=Date.now()-1),n.loadingTimeout&&!d(i)&&setTimeout(()=>{t&&n.onLoadingSlow(i,n)},n.loadingTimeout),v[i]=null!==s?r(...s):r(i),m[i]=a=Date.now(),setTimeout(()=>{delete v[i],delete m[i]},n.dedupingInterval),e=await v[i],n.onSuccess(e,i,n)),g[i]&&a<=g[i])return T({isValidating:!1}),!1;p(i,e),p(u,void 0),I.current=i;const l={isValidating:!1};"undefined"!==typeof w.current.error&&(l.error=void 0),c()(w.current.data,e)||(l.data=e),T(l),o||F(i,e,void 0)}catch(a){if(delete v[i],delete m[i],p(u,a),I.current=i,w.current.error!==a&&(T({isValidating:!1,error:a}),o||F(i,void 0,a)),n.onError(a,i,n),n.shouldRetryOnError){const t=(e.retryCount||0)+1;n.onErrorRetry(a,i,n,z,Object.assign({dedupe:!0},e,{retryCount:t}))}}return t=!1,!0},[i]);if(O(()=>{if(!i)return;x.current=!1;const e=w.current.data,t=d(i)||n.initialData;I.current===i&&c()(e,t)||(T({data:t}),I.current=i);const r=()=>z({dedupe:!0});let o;n.initialData||("undefined"!==typeof t&&!C&&window.requestIdleCallback?window.requestIdleCallback(r):r()),n.revalidateOnFocus&&(o=function(e,t){let r=!1;return(...n)=>{r||(r=!0,e(...n),setTimeout(()=>r=!1,t))}}(r,n.focusThrottleInterval),_[i]?_[i].push(o):_[i]=[o]);const s=(e=!0,t,n,o=!0)=>{const s={};let u=!1;return"undefined"===typeof t||c()(w.current.data,t)||(s.data=t,u=!0),w.current.error!==n&&(s.error=n,u=!0),u&&T(s),I.current=i,!!e&&(o?r():z())};y[i]?y[i].push(s):y[i]=[s];let u=null;return n.revalidateOnReconnect&&(u=addEventListener("online",r)),()=>{if(T=()=>null,x.current=!0,o&&_[i]){const e=_[i],t=e.indexOf(o);t>=0&&(e[t]=e[e.length-1],e.pop())}if(y[i]){const e=y[i],t=e.indexOf(s);t>=0&&(e[t]=e[e.length-1],e.pop())}null!==u&&removeEventListener("online",u)}},[i,z]),O(()=>{let e=null;const t=async()=>{w.current.error||!n.refreshWhenHidden&&!l()||n.refreshWhenOffline||!f()||await z({dedupe:!0}),n.refreshInterval&&(e=setTimeout(t,n.refreshInterval))};return n.refreshInterval&&(e=setTimeout(t,n.refreshInterval)),()=>{e&&clearTimeout(e)}},[n.refreshInterval,n.refreshWhenHidden,n.refreshWhenOffline,z]),n.suspense){if(C)throw new Error("Suspense on server side is not yet supported!");let e=d(i),t=d(u);if("undefined"===typeof e&&"undefined"===typeof t){if(v[i]||z(),v[i]&&"function"===typeof v[i].then)throw v[i];e=v[i]}if("undefined"===typeof e&&t)throw t;return{error:t,data:e,revalidate:z,isValidating:w.current.isValidating}}return Object(o.useMemo)(()=>{const e={revalidate:z};return Object.defineProperties(e,{error:{get:function(){return S.current.error=!0,I.current===i?w.current.error:h}},data:{get:function(){return S.current.data=!0,I.current===i?w.current.data:a}},isValidating:{get:function(){return S.current.isValidating=!0,w.current.isValidating}}}),e},[z])},z=s.a.createElement;function M(e){return fetch(e).then((function(e){return e.json()}))}t.default=function(){var e=I("/api/randomQuote",M),t=e.data,r=e.error,n=null===t||void 0===t?void 0:t.from,o=null===t||void 0===t?void 0:t.text;return t||(o="Loading ...."),r&&(o="Failed to fetch the quote"),z(u.a,null,z("h1",{className:"jsx-1236022937"},"Quotes of the Day"),z("div",{className:"jsx-1236022937 quote"},o),n&&z("span",{className:"jsx-1236022937 author"},"By : ",n),z(i.a,{id:"1236022937"},["main.jsx-1236022937{width:90%;max-width:900px;margin:300px auto;text-align:center;}",".quote.jsx-1236022937{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}",".author.jsx-1236022937{font-family:sans-serif;color:#559834;font-size:20px;}"]))}},"yM+p":function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=r("YFqc"),s=r.n(o),u=i.a.createElement,a={marginRight:15};t.a=function(){return u("div",null,u(s.a,{href:"/"},u("a",{style:a},"Home")),u(s.a,{href:"/about"},u("a",{style:a},"About")),u(s.a,{href:"/quotes"},u("a",{style:a},"Quote of Day")))}},zfdX:function(e,t,r){"use strict";var n=r("q1tI"),i=r.n(n),o=(r("YFqc"),r("yM+p")),s=i.a.createElement;t.a=function(e){return s("div",null,s(o.a,null),e.children)}}},[["4MWS",1,2,0]]]);