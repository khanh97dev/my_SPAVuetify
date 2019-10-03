(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Social.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Social.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [{
        jobTitle: 'Web Developer',
        name: 'Michael Wang',
        color: '#ba234b',
        dark: true,
        avatar: {
          src: '',
          size: '36'
        }
      }, {
        jobTitle: 'Web Designer',
        name: 'Jessie J',
        color: '#e57b09',
        dark: true,
        avatar: {
          src: '',
          size: '36'
        }
      }, {
        jobTitle: 'Web Developer',
        name: 'Jim J',
        color: 'teal',
        dark: true,
        avatar: {
          src: '',
          size: '36'
        }
      }, {
        jobTitle: 'Product Manager',
        name: 'John Doe',
        color: '#a51288',
        dark: true,
        cardBgImage: '/static/bg/15.jpg',
        avatar: {
          src: '',
          size: '36'
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Social.vue?vue&type=template&id=4827d1b6&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Social.vue?vue&type=template&id=4827d1b6& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-container",
    { attrs: { "grid-list-xl": "", fluid: "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c("v-flex", { attrs: { sm12: "" } }, [_c("h4", [_vm._v("Basic")])]),
          _vm._v(" "),
          _vm._l(_vm.users, function(item, index) {
            return _c(
              "v-flex",
              { key: "mini" + index, attrs: { lg3: "", sm12: "" } },
              [
                _c(
                  "social-widget",
                  _vm._b({ attrs: { mini: "" } }, "social-widget", item, false)
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("v-flex", { attrs: { sm12: "" } }, [_c("h4", [_vm._v("Normal")])]),
          _vm._v(" "),
          _vm._l(_vm.users, function(item, index) {
            return _c(
              "v-flex",
              { key: "basic" + index, attrs: { lg3: "", sm12: "" } },
              [_c("social-widget", _vm._b({}, "social-widget", item, false))],
              1
            )
          }),
          _vm._v(" "),
          _c("v-flex", { attrs: { sm12: "" } }, [
            _c("h4", [_vm._v("Name Card with top nav")])
          ]),
          _vm._v(" "),
          _vm._l(_vm.users, function(item, index) {
            return _c(
              "v-flex",
              { key: "basic-top-nav" + index, attrs: { lg3: "", sm12: "" } },
              [
                _c(
                  "social-widget",
                  _vm._b(
                    { attrs: { "top-nav": "" } },
                    "social-widget",
                    item,
                    false
                  )
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("v-flex", { attrs: { sm12: "" } }, [
            _c("h4", [_vm._v("Bottom Nav Name Card")])
          ]),
          _vm._v(" "),
          _vm._l(_vm.users, function(item, index) {
            return _c(
              "v-flex",
              { key: "bottom-nav" + index, attrs: { lg3: "", sm12: "" } },
              [
                _c(
                  "social-widget",
                  _vm._b(
                    { attrs: { "bottom-nav": "" } },
                    "social-widget",
                    item,
                    false
                  )
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c("v-flex", { attrs: { sm12: "" } }, [
            _c("h4", [_vm._v("Contact Card")])
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/admin/Social.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/admin/Social.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Social_vue_vue_type_template_id_4827d1b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Social.vue?vue&type=template&id=4827d1b6& */ "./resources/js/pages/admin/Social.vue?vue&type=template&id=4827d1b6&");
/* harmony import */ var _Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Social.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Social_vue_vue_type_template_id_4827d1b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Social_vue_vue_type_template_id_4827d1b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Social.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Social.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/admin/Social.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Social.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/Social.vue?vue&type=template&id=4827d1b6&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/admin/Social.vue?vue&type=template&id=4827d1b6& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_4827d1b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Social.vue?vue&type=template&id=4827d1b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Social.vue?vue&type=template&id=4827d1b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_4827d1b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_4827d1b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);