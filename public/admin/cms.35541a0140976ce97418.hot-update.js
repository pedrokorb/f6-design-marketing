webpackHotUpdate("cms",{

/***/ "./src/components/Navbar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/NavBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _img_f6_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/f6.svg */ "./src/img/f6.svg");
/* harmony import */ var _img_f6_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_f6_svg__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/Navbar/NavBar.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var links = [{
  name: "Sobre",
  value: "/about"
}, {
  name: "Propostas",
  value: "/propostas"
}, {
  name: "Projetos",
  value: "/projetos"
}, {
  name: "Trajetória",
  value: "/trajetoria"
}, {
  name: "Fotos",
  value: "/fotos"
}];

var NavBar = function NavBar() {
  var _ref;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      sidebarOpen = _useState[0],
      setSidebarOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      navbarHeight = _useState2[0],
      setNavbarHeight = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      scrolled = _useState3[0],
      changeState = _useState3[1];

  var navbar = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var onScroll = function onScroll() {
      if (document.documentElement.scrollTop > 50 && !scrolled) {
        changeState(true);
      } else if (document.documentElement.scrollTop <= 50 && scrolled) changeState(false);
    };

    window.addEventListener("scroll", onScroll);
    setNavbarHeight(navbar.current.getBoundingClientRect().height);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrolled]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "z-50 fixed w-full duration-300 transition-all nav " + (scrolled ? "p-4 bg-black shadow-lg" : "p-5 bg-transparent"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-screen-lg mx-auto flex justify-between items-center my-auto ",
    ref: navbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_f6_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Logotipo Candidato " + navbarHeight,
    className: "duration-300 transition-all " + (scrolled ? "w-16" : "w-24"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "text-white outline-0 lg:hidden",
    onClick: function onClick() {
      setSidebarOpen(!sidebarOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaAngleDown"], {
    style: (_ref = {
      transform: 'rotate(0deg)',
      transition: 'all 0.3s ease-out'
    }, _ref["transform"] = sidebarOpen ? 'rotate(180deg)' : '', _ref),
    className: "w-8 h-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden lg:block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, links.map(function (link, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: index,
      to: link.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "px-2 hover:text-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, link.name));
  })))), sidebarOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:hidden text-white duration-300 transition-all " + (scrolled ? "bg-opacity-100" : "bg-black bg-opacity-75 shadow-md rounded-lg") + " m-4 h-full flex flex-col justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, links.map(function (link, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: index,
      to: link.value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "py-2 hover:text-primary ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 23
      }
    }, link.name));
  }))))));
};

__signature__(NavBar, "useState{[sidebarOpen, setSidebarOpen](false)}\nuseState{[navbarHeight, setNavbarHeight](0)}\nuseState{[scrolled, changeState](false)}\nuseRef{navbar}\nuseEffect{}");

var _default = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(links, "links", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/Navbar/NavBar.js");
  reactHotLoader.register(NavBar, "NavBar", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/Navbar/NavBar.js");
  reactHotLoader.register(_default, "default", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/components/Navbar/NavBar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.35541a0140976ce97418.hot-update.js.map