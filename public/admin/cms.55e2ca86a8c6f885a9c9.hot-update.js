webpackHotUpdate("cms",{

/***/ "./src/components/ServicesSection/ServicesSection.js":
/*!***********************************************************!*\
  !*** ./src/components/ServicesSection/ServicesSection.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_computer_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/computer 1.svg */ "./src/img/computer 1.svg");
/* harmony import */ var _img_computer_1_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_computer_1_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_pen_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/pen 1.svg */ "./src/img/pen 1.svg");
/* harmony import */ var _img_pen_1_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_pen_1_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_certificate_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/certificate 1.svg */ "./src/img/certificate 1.svg");
/* harmony import */ var _img_certificate_1_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_certificate_1_svg__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/ServicesSection/ServicesSection.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var ServicesSection = function ServicesSection(_ref) {
  var title = _ref.title,
      description = _ref.description;
  var services = [{
    icon: _img_computer_1_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    title: "Marketing Digital",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }, {
    icon: _img_pen_1_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    title: "Identidade Visual",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }, {
    icon: _img_certificate_1_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: "Segurança",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "services",
    className: "mx-auto bg-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col py-16 mx-auto max-w-screen-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-primary text-4xl text-center px-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-white text-2xl italic text-center px-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: service.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-1 mx-auto flex justify-center items-center bg-primary h-32 w-32 mb-4 rounded-full",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: service.icon,
      alt: "service",
      className: "h-24 w-24 text-black",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-xl text-white text-center mb-2 uppercase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, service.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-white text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }, service.description));
  }))));
};

var _default = ServicesSection;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ServicesSection, "ServicesSection", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/ServicesSection/ServicesSection.js");
  reactHotLoader.register(_default, "default", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/ServicesSection/ServicesSection.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/img/certificate 1.svg":
/*!***********************************!*\
  !*** ./src/img/certificate 1.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEyIiBoZWlnaHQ9IjIxMiIgdmlld0JveD0iMCAwIDIxMiAyMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xODcuMTM3IDEzMi4zMDdMMjEyIDEwNS45MzVMMTg3LjEwNSA3OS41OTU0TDE5MS43MTQgNDMuNjQ4TDE1Ni4wOTEgMzYuOTY1N0wxMzguNjg1IDUuMTgxMTVMMTA1Ljk0MyAyMC43MDQyTDczLjE4NDkgNS4yMjE3Mkw1NS44MjM5IDM3LjAyMjVMMjAuMjA1MiA0My43NTM1TDI0Ljg1ODggNzkuNjk2OEwwIDEwNi4wNjFMMjQuODkxMyAxMzIuNDA1TDIwLjI3NDEgMTY4LjM1Mkw1NS45MDA5IDE3NS4wMzRMNzMuMzAyNSAyMDYuODE5TDEwNi4wNDUgMTkxLjI5MkwxMzguODA3IDIwNi43NzhMMTU2LjE3MiAxNzQuOTY5TDE5MS43ODcgMTY4LjI0MkwxOTEuMzA4IDE2NC41NjNMMTg3LjEzNyAxMzIuMzA3Wk0xMDYgMTc1LjUwNUM2Ny42MDYxIDE3NS41MDUgMzYuNDk1MSAxNDQuMzg2IDM2LjQ5NTEgMTA2QzM2LjQ5NTEgNjcuNjE0MyA2Ny42MDYxIDM2LjQ5NTEgMTA2IDM2LjQ5NTFDMTQ0LjM5OCAzNi40OTUxIDE3NS41MDUgNjcuNjE0MyAxNzUuNTA1IDEwNkMxNzUuNTA1IDE0NC4zODYgMTQ0LjM5NCAxNzUuNTA1IDEwNiAxNzUuNTA1WiIvPgo8cGF0aCBkPSJNMTA2IDQ5LjYwODFDNzQuOTA5NCA0OS42MDgxIDQ5LjYwODMgNzQuOTA1MSA0OS42MDgzIDEwNkM0OS42MDgzIDEzNy4wOTUgNzQuOTA5NCAxNjIuMzkyIDEwNiAxNjIuMzkyQzEzNy4wOTEgMTYyLjM5MiAxNjIuMzkyIDEzNy4wOTkgMTYyLjM5MiAxMDZDMTYyLjM5MiA3NC45MDExIDEzNy4wOTEgNDkuNjA4MSAxMDYgNDkuNjA4MVpNMTA0Ljg3MiAxMzIuMTI1TDc4LjkyMiAxMTAuNDgzTDczLjg5MSAxMDYuMjg0TDgyLjI4NTUgOTYuMjEzOUwxMDMuMDcxIDExMy41NDJMMTMyLjU4MyA3Ny4yNjI0TDE0Mi43NTkgODUuNTM1MUwxMDQuODcyIDEzMi4xMjVaIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/img/pen 1.svg":
/*!***************************!*\
  !*** ./src/img/pen 1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE0IiBoZWlnaHQ9IjIxNCIgdmlld0JveD0iMCAwIDIxNCAyMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNDIuNDkgMEw5Ni4zODgyIDQ2LjA5ODZMMTA2LjMxMiA1Ni4wMjI5TDQ2LjA5NjIgODguMDA3MUwwLjI2NjcyNCAyMTRMMTI1LjcyMyAxNjcuNjM1TDE1OC4xMzcgMTA3Ljg0NUwxNjcuNjMxIDExNy4zNDNMMjEzLjczMyA3MS4yNDRMMTQyLjQ5IDBaTTExMS4yMDggMTUwLjg4NUw1MS45Njk1IDE3Mi43NzlMNzQuMDA4MSAxNTAuNzRDNzcuMjczNyAxNTIuMzcxIDgwLjgzNTYgMTUzLjIwMyA4NC40MDY4IDE1My4yMDNDOTAuMzY5MSAxNTMuMjAzIDk2LjMyODUgMTUwLjkyNyAxMDAuODgxIDE0Ni4zODRDMTA5Ljk2MyAxMzcuMjg5IDEwOS45NjkgMTIyLjU0NiAxMDAuODg0IDExMy40NTFDOTYuMzMyMiAxMDguOTA2IDkwLjM3MjggMTA2LjYzIDg0LjQxMyAxMDYuNjNDNzguNDUwNyAxMDYuNjMgNzIuNDkzOCAxMDguOTA2IDY3Ljk0ODQgMTEzLjQ1NUM2MC43IDEyMC43MDMgNTkuMjQ1IDEzMS41MzEgNjMuNTU2NCAxNDAuMjQxTDQwLjk1MTQgMTYyLjg0Nkw2Mi44Njg4IDEwMi41OTFMMTE3LjU4MyA3My41Mjg2TDE0MC42NDQgOTYuNTkzTDExMS4yMDggMTUwLjg4NVpNNzguNDI5OCAxMjMuOTI0QzgwLjAyNDQgMTIyLjMyNyA4Mi4xNDkzIDEyMS40NDcgODQuNDA5NyAxMjEuNDQ3Qzg2LjY3MzQgMTIxLjQ0NyA4OC43OTg0IDEyMi4zMjcgOTAuMzk4OCAxMjMuOTI0QzkzLjY5NzQgMTI3LjIyOCA5My42OTc0IDEzMi42MDcgOTAuNDA0NiAxMzUuOTAyQzg4LjgwNDIgMTM3LjUwMyA4Ni42NzA5IDEzOC4zODUgODQuNDA2OCAxMzguMzg1QzgyLjE0NTYgMTM4LjM4NSA4MC4wMjM5IDEzNy41MDUgNzguNDI5OCAxMzUuOTEzQzc1LjEyMjQgMTMyLjYwNyA3NS4xMjI0IDEyNy4yMzEgNzguNDI5OCAxMjMuOTI0WiIvPgo8L3N2Zz4K"

/***/ })

})
//# sourceMappingURL=cms.55e2ca86a8c6f885a9c9.hot-update.js.map