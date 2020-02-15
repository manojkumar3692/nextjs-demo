webpackHotUpdate("static/development/pages/quotes.js",{

/***/ "./pages/quotes.jsx":
/*!**************************!*\
  !*** ./pages/quotes.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/MyLayout */ "./component/MyLayout.jsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "/Users/manojkumars/Documents/next_tutorial/pages/quotes.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Quotes() {
  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])('/api/randomQuote', fetcher),
      data = _useSwr.data,
      error = _useSwr.error;

  var author = data === null || data === void 0 ? void 0 : data.from;
  var quote = data === null || data === void 0 ? void 0 : data.text;
  if (!data) quote = 'Loading ....';
  if (error) quote = 'Failed to fetch the quote';
  return __jsx(_component_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1236022937",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Quotes of the Day"), __jsx("div", {
    className: "jsx-1236022937" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-1236022937" + " " + "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "By : ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1236022937",
    __self: this
  }, "main.jsx-1236022937{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-1236022937{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-1236022937{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5vamt1bWFycy9Eb2N1bWVudHMvbmV4dF90dXRvcmlhbC9wYWdlcy9xdW90ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCZ0IsQUFHcUIsQUFNVSxBQU1HLFVBWFAsVUFNRixHQU1BLEdBWEksUUFNSCxHQU1BLE9BWEcsS0FNRSxHQU10QixVQVhBLE9BTUEiLCJmaWxlIjoiL1VzZXJzL21hbm9qa3VtYXJzL0RvY3VtZW50cy9uZXh0X3R1dG9yaWFsL3BhZ2VzL3F1b3Rlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L015TGF5b3V0XCJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJ1xuXG5mdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgcmV0dXJuIHIuanNvbigpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIFF1b3RlcyAoKSB7XG4gICAgY29uc3Qge2RhdGEsZXJyb3J9ID0gdXNlU3dyKCcvYXBpL3JhbmRvbVF1b3RlJyxmZXRjaGVyKTtcbiAgICBjb25zdCBhdXRob3IgPSBkYXRhPy5mcm9tO1xuICAgIGxldCBxdW90ZSA9IGRhdGE/LnRleHQ7XG5cbiAgICBpZighZGF0YSkgcXVvdGUgPSAnTG9hZGluZyAuLi4uJ1xuICAgIGlmKGVycm9yKSBxdW90ZSA9ICdGYWlsZWQgdG8gZmV0Y2ggdGhlIHF1b3RlJ1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluTGF5b3V0PlxuICAgICAgICA8aDE+UXVvdGVzIG9mIHRoZSBEYXk8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlXCI+e3F1b3RlfTwvZGl2PlxuICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+QnkgOiB7YXV0aG9yfTwvc3Bhbj59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAzMDBweCBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucXVvdGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgIGNvbG9yOiAjZTI0M2RlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9NYWluTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVzOyJdfQ== */\n/*@ sourceURL=/Users/manojkumars/Documents/next_tutorial/pages/quotes.jsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Quotes);

/***/ })

})
//# sourceMappingURL=quotes.js.591432a3af203b637d51.hot-update.js.map