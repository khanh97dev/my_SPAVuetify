(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Media.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Media.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        id: 1,
        color: 'blue',
        icon: 'picture_as_pdf',
        text: '1.221 Files',
        subText: 'pdf files'
      }, {
        id: 2,
        color: 'red',
        icon: 'music_video',
        text: '250 Albums',
        subText: 'in Comedy'
      }, {
        id: 3,
        color: 'purple',
        icon: 'attach_file',
        text: '61.150 Files',
        subText: 'in File'
      }, {
        id: 4,
        color: 'teal',
        icon: 'perm_media',
        text: '3.250 Medias',
        subText: 'in Profile'
      }, {
        id: 5,
        color: 'blue',
        icon: 'cloud',
        text: '1.250 Datas',
        subText: 'in Cloud'
      }, {
        id: 6,
        color: 'black',
        icon: 'audiotrack',
        text: '3.250 Audios',
        subText: 'in General'
      }, {
        id: 7,
        color: '#75e569',
        icon: 'collections',
        text: '2.350 Medias',
        subText: 'in Profile'
      }, {
        id: 8,
        color: '#e5d769',
        icon: 'create_new_folder',
        text: '150 Folders',
        subText: 'in Repository'
      }, {
        id: 9,
        color: '#ba234b',
        icon: 'headset',
        text: '3.250 Musics',
        subText: 'in Pop'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Media.vue?vue&type=template&id=3f75ffaa&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/Media.vue?vue&type=template&id=3f75ffaa& ***!
  \*********************************************************************************************************************************************************************************************************/
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
          _c(
            "v-flex",
            { attrs: { lg12: "" } },
            [
              _c(
                "v-card",
                { attrs: { color: "white" } },
                [
                  _c("v-card-text", [
                    _vm._v("\n            Media Widgets\n          ")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n            Great for your media content!\n          "
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.items, function(item, index) {
            return _c(
              "v-flex",
              { key: item.id, attrs: { lg4: "", sm12: "" } },
              [
                _c(
                  "v-card",
                  { attrs: { color: "white" } },
                  [
                    _c(
                      "v-layout",
                      {
                        staticClass: "ma-0",
                        attrs: { row: "", "justify-space-between": "" }
                      },
                      [
                        _c(
                          "v-flex",
                          { attrs: { xs2: "" } },
                          [
                            _c(
                              "v-icon",
                              { attrs: { size: "64", color: item.color } },
                              [_vm._v(_vm._s(item.icon))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { staticClass: "text-sm-right", attrs: { xs3: "" } },
                          [
                            _c(
                              "span",
                              {
                                style: {
                                  color: item.color,
                                  fontWeight: "bold",
                                  fontSize: "16px"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.text) +
                                    "\n              "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(item.subText) +
                                  "\n              "
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          })
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

/***/ "./resources/js/pages/admin/Media.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/admin/Media.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media_vue_vue_type_template_id_3f75ffaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media.vue?vue&type=template&id=3f75ffaa& */ "./resources/js/pages/admin/Media.vue?vue&type=template&id=3f75ffaa&");
/* harmony import */ var _Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/Media.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Media_vue_vue_type_template_id_3f75ffaa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Media_vue_vue_type_template_id_3f75ffaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/Media.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/Media.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/admin/Media.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Media.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/Media.vue?vue&type=template&id=3f75ffaa&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/admin/Media.vue?vue&type=template&id=3f75ffaa& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_3f75ffaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=template&id=3f75ffaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/Media.vue?vue&type=template&id=3f75ffaa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_3f75ffaa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_3f75ffaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);