(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/GoogleAnalytics.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/GoogleAnalytics.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MyComponent',
  mounted: function mounted() {
    var _this = this;

    this.beforeLoadGA().then(function () {
      _this.loadGA();
    });
  },
  // mounted
  methods: {
    beforeLoadGA: function () {
      var _beforeLoadGA = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return function (w, d, s, g, js, fs) {
                  g = w.gapi || (w.gapi = {});
                  g.analytics = {
                    q: [],
                    ready: function ready(f) {
                      this.q.push(f);
                    }
                  };
                  js = d.createElement(s);
                  fs = d.getElementsByTagName(s)[0];
                  js.src = 'https://apis.google.com/js/platform.js';
                  fs.parentNode.insertBefore(js, fs);

                  js.onload = function () {
                    g.load('analytics');
                  };
                }(window, document, 'script');

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function beforeLoadGA() {
        return _beforeLoadGA.apply(this, arguments);
      }

      return beforeLoadGA;
    }(),
    loadGA: function loadGA() {
      gapi.analytics.ready(function () {
        /**
         * Authorize the user immediately if the user has already granted access.
         * If no access has been created, render an authorize button inside the
         * element with the ID "embed-api-auth-container".
         */
        gapi.analytics.auth.authorize({
          container: 'embed-api-auth-container',
          clientid: '145038313'
        });
        /**
         * Create a new ViewSelector instance to be rendered inside of an
         * element with the id "view-selector-container".
         */

        var viewSelector = new gapi.analytics.ViewSelector({
          container: 'view-selector-container'
        }); // Render the view selector to the page.

        viewSelector.execute();
        /**
         * Create a new DataChart instance with the given query parameters
         * and Google chart options. It will be rendered inside an element
         * with the id "chart-container".
         */

        var dataChart = new gapi.analytics.googleCharts.DataChart({
          query: {
            metrics: 'ga:sessions',
            dimensions: 'ga:date',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
          },
          chart: {
            container: 'chart-container',
            type: 'LINE',
            options: {
              width: '100%'
            }
          }
        });
        /**
         * Render the dataChart on the page whenever a new view is selected.
         */

        viewSelector.on('change', function (ids) {
          dataChart.set({
            query: {
              ids: ids
            }
          }).execute();
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/GoogleAnalytics.vue?vue&type=template&id=4c149854&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/GoogleAnalytics.vue?vue&type=template&id=4c149854& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { attrs: { id: "embed-api-auth-container" } }),
      _vm._v(" "),
      _c("div", { attrs: { id: "chart-container" } }),
      _vm._v(" "),
      _c("div", { attrs: { id: "view-selector-container" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/GoogleAnalytics.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/GoogleAnalytics.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleAnalytics_vue_vue_type_template_id_4c149854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleAnalytics.vue?vue&type=template&id=4c149854& */ "./resources/js/pages/GoogleAnalytics.vue?vue&type=template&id=4c149854&");
/* harmony import */ var _GoogleAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoogleAnalytics.vue?vue&type=script&lang=js& */ "./resources/js/pages/GoogleAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoogleAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoogleAnalytics_vue_vue_type_template_id_4c149854___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoogleAnalytics_vue_vue_type_template_id_4c149854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/GoogleAnalytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/GoogleAnalytics.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/GoogleAnalytics.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleAnalytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/GoogleAnalytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/GoogleAnalytics.vue?vue&type=template&id=4c149854&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/GoogleAnalytics.vue?vue&type=template&id=4c149854& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics_vue_vue_type_template_id_4c149854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GoogleAnalytics.vue?vue&type=template&id=4c149854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/GoogleAnalytics.vue?vue&type=template&id=4c149854&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics_vue_vue_type_template_id_4c149854___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoogleAnalytics_vue_vue_type_template_id_4c149854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);