webpackHotUpdate("cms",{

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_mainbackground_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../img/mainbackground.jpg */ "./src/img/mainbackground.jpg");
/* harmony import */ var _img_mainbackground_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_mainbackground_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Features */ "./src/components/Features.js");
/* harmony import */ var _components_BlogRoll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlogRoll */ "./src/components/BlogRoll.js");
/* harmony import */ var _components_Banner_MainBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Banner/MainBanner */ "./src/components/Banner/MainBanner.js");
/* harmony import */ var _components_ServicesSection_ServicesSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ServicesSection/ServicesSection */ "./src/components/ServicesSection/ServicesSection.js");
/* harmony import */ var _img_backgroundSection_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/backgroundSection.jpg */ "./src/img/backgroundSection.jpg");
/* harmony import */ var _img_backgroundSection_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_backgroundSection_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_shirts_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/shirts.png */ "./src/img/shirts.png");
/* harmony import */ var _img_shirts_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_shirts_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_CallToAction_ImageToRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CallToAction/ImageToRight */ "./src/components/CallToAction/ImageToRight.js");
/* harmony import */ var _components_ParternersSection_PartnersSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ParternersSection/PartnersSection */ "./src/components/ParternersSection/PartnersSection.js");
var _this = undefined,
    _jsxFileName = "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/templates/index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};














var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      heading = _ref.heading,
      subheading = _ref.subheading,
      mainpitch = _ref.mainpitch,
      description = _ref.description,
      intro = _ref.intro;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Banner_MainBanner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    imageSrc: _img_mainbackground_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    overlay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ServicesSection_ServicesSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "Servi\xE7os",
    description: "N\xF3s oferecemos todos esses servi\xE7os para voc\xEA",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CallToAction_ImageToRight__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Cole\xE7\xE3o by Pati Ribeiro Design",
    description: "Uma cole\xE7\xE3o que vai deixar voc\xEA doido para clicar no bot\xE3o abaixo!",
    image: _img_shirts_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    overlay: true,
    backgroundImage: _img_backgroundSection_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ParternersSection_PartnersSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: "Parceiros",
    description: "Essas empresas confiaram no nosso trabalho e hoje colhem os resultados",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }));
};
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subheading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mainpitch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  intro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPageTemplate, {
    image: frontmatter.image,
    title: frontmatter.title,
    heading: frontmatter.heading,
    subheading: frontmatter.subheading,
    mainpitch: frontmatter.mainpitch,
    description: frontmatter.description,
    intro: frontmatter.intro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "1377013887";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/templates/index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/home/pedrokorb/Documents/Pedro/Gatsby/f6/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.9739b68015b8ec88de4e.hot-update.js.map