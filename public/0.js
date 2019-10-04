(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/register/RegisterForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/register/RegisterForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/config */ "./resources/js/config.js");
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/mixins/form */ "./resources/js/mixins/form.js");
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
  mixins: [_mixins_form__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      passwordHidden: true,
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_config__WEBPACK_IMPORTED_MODULE_1__["api"].path('register'), this.form).then(function (res) {
          _this.$toast.success('You have been successfully registered!');

          _this.$emit('success', res.data);
        })["catch"](function (err) {
          _this.handleErrors(err.response.data.errors);
        }).then(function () {
          _this.loading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/register/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/register/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm */ "./resources/js/pages/register/RegisterForm.vue");
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
  components: {
    RegisterForm: _RegisterForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    success: function success(data) {
      this.$store.dispatch('auth/saveToken', data);
      this.$store.dispatch('auth/setUser', data);
      this.$router.push({
        name: 'index'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/register/RegisterForm.vue?vue&type=template&id=5251f20c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/register/RegisterForm.vue?vue&type=template&id=5251f20c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "v-form",
    {
      ref: "form",
      attrs: { "lazy-validation": "" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit($event)
        }
      },
      model: {
        value: _vm.valid,
        callback: function($$v) {
          _vm.valid = $$v
        },
        expression: "valid"
      }
    },
    [
      _c("v-text-field", {
        attrs: {
          label: _vm.labels.name,
          "error-messages": _vm.errors.name,
          rules: [_vm.rules.required("name")],
          disabled: _vm.loading
        },
        model: {
          value: _vm.form.name,
          callback: function($$v) {
            _vm.$set(_vm.form, "name", $$v)
          },
          expression: "form.name"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.labels.email,
          type: "email",
          "error-messages": _vm.errors.email,
          rules: [_vm.rules.required("email")],
          disabled: _vm.loading
        },
        model: {
          value: _vm.form.email,
          callback: function($$v) {
            _vm.$set(_vm.form, "email", $$v)
          },
          expression: "form.email"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.labels.password,
          "append-icon": _vm.passwordHidden ? "visibility_off" : "visibility",
          type: _vm.passwordHidden ? "password" : "text",
          "error-messages": _vm.errors.password,
          disabled: _vm.loading,
          rules: [_vm.rules.required("password")],
          hint: "At least 6 characters"
        },
        on: {
          "click:append": function() {
            return (_vm.passwordHidden = !_vm.passwordHidden)
          }
        },
        model: {
          value: _vm.form.password,
          callback: function($$v) {
            _vm.$set(_vm.form, "password", $$v)
          },
          expression: "form.password"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: _vm.labels.password_confirmation,
          type: _vm.passwordHidden ? "password" : "text",
          "error-messages": _vm.errors.password_confirmation,
          disabled: _vm.loading,
          rules: [_vm.rules.required("password_confirmation")]
        },
        model: {
          value: _vm.form.password_confirmation,
          callback: function($$v) {
            _vm.$set(_vm.form, "password_confirmation", $$v)
          },
          expression: "form.password_confirmation"
        }
      }),
      _vm._v(" "),
      _c(
        "v-layout",
        { staticClass: "mt-2", attrs: { row: "" } },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                flat: "",
                disabled: _vm.loading,
                to: { name: "login" },
                color: "grey darken-2"
              }
            },
            [_vm._v("\n      Back to login\n    ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                type: "submit",
                loading: _vm.loading,
                disabled: _vm.loading || !_vm.valid,
                color: "primary"
              }
            },
            [_vm._v("\n      Register\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/register/index.vue?vue&type=template&id=4c63890f&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/register/index.vue?vue&type=template&id=4c63890f& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "v-flex",
    { attrs: { sm8: "", md6: "", lg4: "" } },
    [
      _c(
        "v-card",
        { attrs: { raised: "" } },
        [
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "primary", flat: "" } },
            [_c("v-toolbar-title", [_vm._v("Register")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [_c("register-form", { on: { success: _vm.success } })],
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

/***/ "./resources/js/helpers/formatter.js":
/*!*******************************************!*\
  !*** ./resources/js/helpers/formatter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formatter = {
  titlecase: function titlecase(value) {
    return value.replace(/_/g, ' ').replace(/[\u00C0-\u1FFF\u2C00-\uD7FF\w]+\s*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (formatter);

/***/ }),

/***/ "./resources/js/mixins/form.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_formatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/helpers/formatter */ "./resources/js/helpers/formatter.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      valid: true,
      labels: {},
      form: {},
      rules: {},
      errors: {}
    };
  },
  created: function created() {
    var _this = this;

    for (var key in this.form) {
      if (this.form[key] !== null && _typeof(this.form[key]) === 'object') {
        for (var i in this.form[key]) {
          var key2 = key + '.' + i;
          this.errors[key2] = [];

          if (!this.labels[key2]) {
            this.labels[key2] = _helpers_formatter__WEBPACK_IMPORTED_MODULE_0__["default"].titlecase(i);
          }
        }
      } else {
        this.errors[key] = [];

        if (!this.labels[key]) {
          this.labels[key] = _helpers_formatter__WEBPACK_IMPORTED_MODULE_0__["default"].titlecase(key);
        }
      }
    }

    this.rules.required = function (field) {
      return function (v) {
        return !!v || 'The ' + (_this.labels && _this.labels[field] && _this.labels[field].toLowerCase() + ' ') + 'field is required';
      };
    };
  },
  methods: {
    handleErrors: function handleErrors(errors) {
      if (errors) {
        this.setErrors(errors);
      } else {
        this.clearErrors();
      }
    },
    setErrors: function setErrors(errors) {
      for (var key in this.errors) {
        this.errors[key] = errors[key] || [];
      }
    },
    clearErrors: function clearErrors() {
      for (var key in this.errors) {
        this.errors[key] = [];
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/register/RegisterForm.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/register/RegisterForm.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_5251f20c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=5251f20c& */ "./resources/js/pages/register/RegisterForm.vue?vue&type=template&id=5251f20c&");
/* harmony import */ var _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/register/RegisterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterForm_vue_vue_type_template_id_5251f20c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterForm_vue_vue_type_template_id_5251f20c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/register/RegisterForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/register/RegisterForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/register/RegisterForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/register/RegisterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/register/RegisterForm.vue?vue&type=template&id=5251f20c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/register/RegisterForm.vue?vue&type=template&id=5251f20c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_5251f20c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterForm.vue?vue&type=template&id=5251f20c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/register/RegisterForm.vue?vue&type=template&id=5251f20c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_5251f20c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_5251f20c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/register/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/register/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4c63890f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4c63890f& */ "./resources/js/pages/register/index.vue?vue&type=template&id=4c63890f&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/register/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4c63890f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4c63890f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/register/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/register/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/register/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/register/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/register/index.vue?vue&type=template&id=4c63890f&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/register/index.vue?vue&type=template&id=4c63890f& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c63890f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4c63890f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/register/index.vue?vue&type=template&id=4c63890f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c63890f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4c63890f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);