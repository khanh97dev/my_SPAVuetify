(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-LoginForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/login/LoginForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/login/LoginForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_form__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      passwordHidden: true,
      form: {
        email: null,
        password: null
      }
    };
  },
  created: function created() {
    this.form.email = this.$route.query.email || null;
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_config__WEBPACK_IMPORTED_MODULE_1__["api"].path('login'), this.form).then(function (res) {
          _this.$toast.success('Welcome back!');

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/login/LoginForm.vue?vue&type=template&id=f0e562a4&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/login/LoginForm.vue?vue&type=template&id=f0e562a4& ***!
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
          label: _vm.labels.email,
          type: "email",
          "error-messages": _vm.errors.email,
          rules: [_vm.rules.required("email")],
          disabled: _vm.loading,
          "prepend-icon": "person"
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
          "prepend-icon": "lock"
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
                to: { name: "forgot", query: { email: _vm.form.email } },
                color: "grey darken-2"
              }
            },
            [_vm._v("\n      Forgot password?\n    ")]
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
            [_vm._v("\n      Login\n    ")]
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

/***/ "./resources/js/pages/login/LoginForm.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/login/LoginForm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginForm_vue_vue_type_template_id_f0e562a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=f0e562a4& */ "./resources/js/pages/login/LoginForm.vue?vue&type=template&id=f0e562a4&");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/login/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginForm_vue_vue_type_template_id_f0e562a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginForm_vue_vue_type_template_id_f0e562a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/login/LoginForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/login/LoginForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/login/LoginForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/login/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/login/LoginForm.vue?vue&type=template&id=f0e562a4&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/login/LoginForm.vue?vue&type=template&id=f0e562a4& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_f0e562a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=template&id=f0e562a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/login/LoginForm.vue?vue&type=template&id=f0e562a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_f0e562a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_f0e562a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);