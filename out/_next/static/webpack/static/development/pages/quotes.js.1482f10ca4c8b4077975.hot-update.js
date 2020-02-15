webpackHotUpdate("static/development/pages/quotes.js",{

/***/ "./pages/quotes.jsx":
/*!**************************!*\
  !*** ./pages/quotes.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/MyLayout */ "./component/MyLayout.jsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/manojkumars/Documents/next_tutorial/pages/quotes.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Quotes() {
  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/randomQuotes', fetcher),
      data = _useSwr.data,
      error = _useSwr.error;

  return __jsx(_component_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Quotes of the Day"));
}

/* harmony default export */ __webpack_exports__["default"] = (Quotes);

/***/ })

})
//# sourceMappingURL=quotes.js.1482f10ca4c8b4077975.hot-update.js.map