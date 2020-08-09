webpackHotUpdate("cms",{

/***/ "./src/components/Button/InternalButton.js":
/*!*************************************************!*\
  !*** ./src/components/Button/InternalButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
var _this = undefined,
    _jsxFileName = "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/Button/InternalButton.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var InternalButton = function InternalButton(_ref) {
  var text = _ref.text,
      path = _ref.path,
      primary = _ref.primary,
      border = _ref.border,
      rounded = _ref.rounded;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: path,
    className: " \n          px-8 py-4 \n          " + (border && primary ? 'border-2 border-primary' : '') + " \n          " + (border && !primary ? 'border-2 border-black' : '') + " \n          " + (primary ? 'bg-black text-primary' : 'text-black bg-primary') + " \n          " + (rounded ? 'rounded-full' : 'rounded-lg') + " \n          " + (primary ? 'hover:bg-primary hover:text-black' : 'hover:bg-black hover:text-primary') + "\n        ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, text);
};

var _default = InternalButton;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InternalButton, "InternalButton", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/Button/InternalButton.js");
  reactHotLoader.register(_default, "default", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/Button/InternalButton.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/CallToAction/ImageToRight.js":
/*!*****************************************************!*\
  !*** ./src/components/CallToAction/ImageToRight.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageToRight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_InternalButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/InternalButton */ "./src/components/Button/InternalButton.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/CallToAction/ImageToRight.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





function ImageToRight(_ref) {
  var title = _ref.title,
      description = _ref.description,
      image = _ref.image;
  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"])({
    // Percentage of item in view to trigger animation
    threshold: 0.25
  }),
      ref = _useInView[0],
      inView = _useInView[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col items-center max-w-screen-lg mx-auto py-10 md:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: {
      visible: {
        opacity: 1,
        y: 0
      },
      hidden: {
        opacity: 0,
        y: 25
      }
    },
    transition: {
      ease: "easeOut",
      duration: 1.25,
      delay: 0.35
    },
    className: "flex-1 mb-10 text-center md:mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-primary text-4xl text-center mb-8 px-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-white text-2xl text-center px-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_InternalButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Saber Mais",
    path: "fotos",
    primary: true,
    border: true,
    rounded: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].img, {
    ref: ref,
    animate: controls,
    initial: "hidden",
    variants: {
      visible: {
        opacity: 1,
        y: 0
      },
      hidden: {
        opacity: 0,
        y: 25
      }
    },
    transition: {
      ease: "easeOut",
      duration: 1.25,
      delay: 0.35
    },
    className: "flex-1 my-auto mx-auto w-64",
    src: image,
    alt: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })));
}

__signature__(ImageToRight, "useAnimation{controls}\nuseInView{[ref, inView]}\nuseEffect{}", function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__["useAnimation"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImageToRight, "ImageToRight", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/CallToAction/ImageToRight.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.054fd8c05c97cb7c890c.hot-update.js.map