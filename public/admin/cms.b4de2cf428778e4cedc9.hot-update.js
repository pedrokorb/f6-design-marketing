webpackHotUpdate("cms",{

/***/ "./src/components/ImageBanner/ImageBanner.js":
/*!***************************************************!*\
  !*** ./src/components/ImageBanner/ImageBanner.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/ImageBanner/ImageBanner.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var ImageBanner = function ImageBanner(_ref) {
  var imageSrc = _ref.imageSrc,
      overlay = _ref.overlay;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative w-full overflow-hidden flex flex-col justify-center items-center",
    style: {
      background: overlay ? "linear-gradient(180deg,rgba(0,0,0,.6) 0,rgba(0,0,0,.6)) ,url(" + imageSrc + ")" : "url(" + imageSrc + ")",
      height: '500px',
      // backgroundAttachment: 'fixed', //to fix the image in background when scroll 
      backgroundPosition: 'botton center',
      backgroundPositionX: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });
};

var _default = ImageBanner;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImageBanner, "ImageBanner", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/ImageBanner/ImageBanner.js");
  reactHotLoader.register(_default, "default", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/ImageBanner/ImageBanner.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.b4de2cf428778e4cedc9.hot-update.js.map