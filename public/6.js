(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Chart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Chart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {
        'USA': 90,
        'China': 70,
        'Russia': 40,
        'Germany': 30,
        'United Kingdom': 35,
        'Turkey': 22
      },
      lineChartData: {
        '2018-05-13': 640,
        '2018-05-14': 200,
        '2018-05-15': 250,
        '2018-05-16': 350,
        '2018-05-17': 200,
        '2018-05-18': 670,
        '2018-05-19': 600,
        '2018-05-20': 800
      },
      areaStatisticData: {
        '2018-01-01 00:00:00 -0800': 250,
        '2018-01-02 00:00:00 -0800': 150,
        '2018-01-03 00:00:00 -0800': 450,
        '2018-01-04 00:00:00 -0800': 350,
        '2018-01-05 00:00:00 -0800': 700,
        '2018-01-06 00:00:00 -0800': 360
      },
      scatterStatisticData: {
        '174.0': '30.0',
        '176.5': '79.3',
        '142.5': '68.3',
        '155.5': '37.3',
        '165.5': '54.3',
        '140.5': '15.3',
        '153.5': '24.3',
        '152.5': '75.3',
        '146.5': '98.3'
      },
      linearMultipleChartdata: [{
        name: 'Workout',
        data: {
          '2017-01-01 00:00:00 -0800': 3,
          '2017-01-02 00:00:00 -0800': 9,
          '2017-01-03 00:00:00 -0800': 14,
          '2017-01-04 00:00:00 -0800': 7,
          '2017-01-05 00:00:00 -0800': 4
        }
      }, {
        name: 'Go to concert',
        data: {
          '2017-01-01 00:00:00 -0800': 3,
          '2017-01-02 00:00:00 -0800': 2,
          '2017-01-03 00:00:00 -0800': 5,
          '2017-01-04 00:00:00 -0800': 9,
          '2017-01-05 00:00:00 -0800': 14
        }
      }, {
        name: 'Call Parents',
        data: {
          '2017-01-01 00:00:00 -0800': 9,
          '2017-01-02 00:00:00 -0800': 13,
          '2017-01-03 00:00:00 -0800': 8,
          '2017-01-04 00:00:00 -0800': 4,
          '2017-01-05 00:00:00 -0800': 9
        }
      }, {
        name: 'Eat Breakfast',
        data: {
          '2017-01-01 00:00:00 -0800': 5,
          '2017-01-02 00:00:00 -0800': 3,
          '2017-01-03 00:00:00 -0800': 5,
          '2017-01-04 00:00:00 -0800': 8,
          '2017-01-05 00:00:00 -0800': 5
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Chart.vue?vue&type=template&id=00258125&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Chart.vue?vue&type=template&id=00258125& ***!
  \***************************************************************************************************************************************************************************************************/
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
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [_c("pie-chart", { attrs: { data: _vm.data, legend: "bottom" } })],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [
              _c("column-chart", {
                attrs: {
                  data: _vm.data,
                  colors: ["#b00"],
                  label: "Population",
                  ytitle: "Population"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [
              _c("bar-chart", {
                attrs: {
                  data: _vm.data,
                  colors: ["#75e569"],
                  xtitle: "Population"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [
              _c("area-chart", {
                attrs: {
                  data: _vm.areaStatisticData,
                  xtitle: "Time",
                  ytitle: "Population",
                  dataset: { borderWidth: 3 }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [
              _c("scatter-chart", {
                attrs: {
                  data: _vm.scatterStatisticData,
                  xtitle: "Size",
                  colors: ["#107250"],
                  ytitle: "Population"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [
              _c("line-chart", {
                attrs: {
                  data: _vm.lineChartData,
                  colors: ["#8b47d8"],
                  xtitle: "Time",
                  ytitle: "Population",
                  dataset: { borderWidth: 3 }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [
              _c("line-chart", {
                attrs: {
                  data: _vm.lineChartData,
                  colors: ["#47d8a5"],
                  curve: false,
                  xtitle: "Time",
                  ytitle: "Population",
                  dataset: { borderWidth: 3 }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [
              _c("pie-chart", {
                attrs: { data: _vm.data, legend: "bottom", donut: true }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg4: "", sm6: "", xs12: "" } },
            [
              _c("line-chart", { attrs: { data: _vm.linearMultipleChartdata } })
            ],
            1
          )
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

/***/ "./resources/js/pages/Chart.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Chart.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart_vue_vue_type_template_id_00258125___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.vue?vue&type=template&id=00258125& */ "./resources/js/pages/Chart.vue?vue&type=template&id=00258125&");
/* harmony import */ var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.vue?vue&type=script&lang=js& */ "./resources/js/pages/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chart_vue_vue_type_template_id_00258125___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chart_vue_vue_type_template_id_00258125___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Chart.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Chart.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Chart.vue?vue&type=template&id=00258125&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Chart.vue?vue&type=template&id=00258125& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_00258125___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=template&id=00258125& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Chart.vue?vue&type=template&id=00258125&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_00258125___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_00258125___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);