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
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _img_computer_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/computer 1.svg */ "./src/img/computer 1.svg");
/* harmony import */ var _img_computer_1_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_computer_1_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_pen_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/pen 1.svg */ "./src/img/pen 1.svg");
/* harmony import */ var _img_pen_1_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_pen_1_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_certificate_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/certificate 1.svg */ "./src/img/certificate 1.svg");
/* harmony import */ var _img_certificate_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_certificate_1_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ServiceItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServiceItem */ "./src/components/ServicesSection/ServiceItem.js");
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
  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["useInView"])({
    threshold: 0.3
  }),
      ref = _useInView[0],
      inView = _useInView[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  var services = [{
    icon: _img_computer_1_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    title: "Marketing Digital",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }, {
    icon: _img_pen_1_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: "Identidade Visual",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }, {
    icon: _img_certificate_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: "Segurança",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "services",
    className: "mx-auto bg-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
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
      duration: 0.75,
      delay: 0.35
    },
    className: "flex flex-col py-16 mx-auto max-w-screen-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-primary text-4xl text-center px-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-white text-2xl italic text-center px-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col md:flex-row mt-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, services.map(function (service) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: service.title,
      icon: service.icon,
      title: service.title,
      description: service.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    });
  }))));
};

__signature__(ServicesSection, "useAnimation{controls}\nuseInView{[ref, inView]}\nuseEffect{}", function () {
  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__["useAnimation"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["useInView"]];
});

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

/***/ })

})
//# sourceMappingURL=cms.a65c0e704d0b8572adf8.hot-update.js.map