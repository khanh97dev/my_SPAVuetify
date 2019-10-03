(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Snackbar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Snackbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Snackbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
      showSnackbar: false,
      locationVertical: 'top',
      locationHorizontal: null,
      mode: '',
      timeout: 2000,
      content: 'I\'m cool snackbar..',
      color: 'undefined'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Snackbar.vue?vue&type=template&id=48a5e90e&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Snackbar.vue?vue&type=template&id=48a5e90e& ***!
  \******************************************************************************************************************************************************************************************************/
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
    { attrs: { fluid: "", "grid-list-xl": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c("v-flex", { attrs: { "d-flex": "", lg2: "", sm6: "", xs12: "" } }),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg6: "", sm6: "", xs12: "" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "" } },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _vm._v(
                                        "\n                  Choose snackbar color:\n                  "
                                      ),
                                      _c("swatches", {
                                        attrs: {
                                          inline: "",
                                          colors: "material-basic",
                                          exceptions: ["#FFFFFF"],
                                          shapes: "circles",
                                          "show-border": ""
                                        },
                                        model: {
                                          value: _vm.color,
                                          callback: function($$v) {
                                            _vm.color = $$v
                                          },
                                          expression: "color"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm3: "" } },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label: "Left",
                                      value: "left",
                                      color: _vm.$root.themeColor
                                    },
                                    model: {
                                      value: _vm.locationHorizontal,
                                      callback: function($$v) {
                                        _vm.locationHorizontal = $$v
                                      },
                                      expression: "locationHorizontal"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs6: "", sm3: "" } },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label: "Right",
                                      value: "right",
                                      color: _vm.$root.themeColor
                                    },
                                    model: {
                                      value: _vm.locationHorizontal,
                                      callback: function($$v) {
                                        _vm.locationHorizontal = $$v
                                      },
                                      expression: "locationHorizontal"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs6: "", sm3: "" } },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label: "Top",
                                      value: "top",
                                      color: _vm.$root.themeColor
                                    },
                                    model: {
                                      value: _vm.locationVertical,
                                      callback: function($$v) {
                                        _vm.locationVertical = $$v
                                      },
                                      expression: "locationVertical"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs6: "", sm3: "" } },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label: "Bottom",
                                      value: "bottom",
                                      color: _vm.$root.themeColor
                                    },
                                    model: {
                                      value: _vm.locationVertical,
                                      callback: function($$v) {
                                        _vm.locationVertical = $$v
                                      },
                                      expression: "locationVertical"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm3: "" } },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label: "Multi-line (mobile)",
                                      value: "multi-line",
                                      color: _vm.$root.themeColor
                                    },
                                    model: {
                                      value: _vm.mode,
                                      callback: function($$v) {
                                        _vm.mode = $$v
                                      },
                                      expression: "mode"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm3: "" } },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label: "Vertical (mobile)",
                                      value: "vertical",
                                      color: _vm.$root.themeColor
                                    },
                                    model: {
                                      value: _vm.mode,
                                      callback: function($$v) {
                                        _vm.mode = $$v
                                      },
                                      expression: "mode"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                {
                                  attrs: { xs12: "", sm4: "", "offset-sm4": "" }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: { label: "Text", type: "text" },
                                    model: {
                                      value: _vm.content,
                                      callback: function($$v) {
                                        _vm.content = $$v
                                      },
                                      expression: "content"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm4: "" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Time to hide toast:",
                                      type: "number"
                                    },
                                    model: {
                                      value: _vm.timeout,
                                      callback: function($$v) {
                                        _vm.timeout = _vm._n($$v)
                                      },
                                      expression: "timeout"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            block: "",
                            dark: "",
                            color: _vm.$root.themeColor
                          },
                          on: {
                            click: function($event) {
                              _vm.showSnackbar = true
                            }
                          }
                        },
                        [_vm._v("\n            Show Snackbar\n          ")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-snackbar",
                    {
                      attrs: {
                        bottom: _vm.locationVertical === "bottom",
                        left: _vm.locationHorizontal === "left",
                        "multi-line": _vm.mode === "multi-line",
                        right: _vm.locationHorizontal === "right",
                        timeout: _vm.timeout,
                        top: _vm.locationVertical === "top",
                        color: _vm.color,
                        vertical: _vm.mode === "vertical"
                      },
                      model: {
                        value: _vm.showSnackbar,
                        callback: function($$v) {
                          _vm.showSnackbar = $$v
                        },
                        expression: "showSnackbar"
                      }
                    },
                    [
                      _vm._v(
                        "\n          " + _vm._s(_vm.content) + "\n          "
                      ),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "white", flat: "" },
                          on: {
                            click: function($event) {
                              _vm.showSnackbar = false
                            }
                          }
                        },
                        [_vm._v("\n            Close\n          ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", { attrs: { "d-flex": "", lg2: "", sm6: "", xs12: "" } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Snackbar.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/Snackbar.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Snackbar_vue_vue_type_template_id_48a5e90e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=template&id=48a5e90e& */ "./resources/js/pages/Snackbar.vue?vue&type=template&id=48a5e90e&");
/* harmony import */ var _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=script&lang=js& */ "./resources/js/pages/Snackbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Snackbar_vue_vue_type_template_id_48a5e90e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Snackbar_vue_vue_type_template_id_48a5e90e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Snackbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Snackbar.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Snackbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Snackbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Snackbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Snackbar.vue?vue&type=template&id=48a5e90e&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Snackbar.vue?vue&type=template&id=48a5e90e& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_48a5e90e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Snackbar.vue?vue&type=template&id=48a5e90e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Snackbar.vue?vue&type=template&id=48a5e90e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_48a5e90e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_48a5e90e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);