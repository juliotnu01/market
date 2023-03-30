(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/producto/SingleProduct.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _assets_components_cartCard_CardCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/components/cartCard/CardCart */ "./resources/js/assets/components/cartCard/CardCart.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardCart: _assets_components_cartCard_CardCart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getProducts', 'singleProduct', "itemsBySearch"])), {}, {
    productos_relacionados: {
      get: function get() {
        var model = [];
        for (var index = 0; index < this.itemsBySearch.length; index++) {
          var _element$nombre, _element$nombre2, _element$precio_norma;
          var element = this.itemsBySearch[index];
          model.push({
            id: element.id,
            price: element.precio_normal,
            category: element.categoria,
            amount: element.precio_normal,
            qty: 0,
            title: (_element$nombre = element.nombre) !== null && _element$nombre !== void 0 ? _element$nombre : "",
            img: element.imagen == "" || element.imagen == null ? "https://www.4me.com/wp-content/uploads/2018/01/4me-icon-product.png" : element.imagen,
            name: (_element$nombre2 = element.nombre) !== null && _element$nombre2 !== void 0 ? _element$nombre2 : "",
            precio: (_element$precio_norma = element.precio_normal) !== null && _element$precio_norma !== void 0 ? _element$precio_norma : 999,
            descuento: 23
          });
        }
        return model;
      },
      set: function set(val) {
        this.$store.commit('setItemsBySarch', val);
      }
    },
    computed_singleProduct: {
      get: function get() {
        return this.singleProduct;
      },
      set: function set(val) {
        this.$store.commit('setSingleProduct', val);
      }
    }
  }),
  data: function data() {
    return {
      tab: null,
      isQuantity: 0,
      singleProductData: {
        id: 1,
        img: __webpack_require__(/*! ../../assets/images/products/flash-1.png */ "./resources/js/assets/images/products/flash-1.png"),
        title: 'Sneakers',
        category: 'Sneakers',
        amount: 300,
        rating: 3,
        qty: 0
      },
      flashDeals: [{
        img: __webpack_require__(/*! ../../assets/images/products/flash-1.png */ "./resources/js/assets/images/products/flash-1.png"),
        name: "Sneakers"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/flash-2.png */ "./resources/js/assets/images/products/flash-2.png"),
        name: "Watch"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/flash-3.png */ "./resources/js/assets/images/products/flash-3.png"),
        name: "Mobile"
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["addCart", "removeCart"])), {}, {
    addCartx: function addCartx(data) {
      this.addCart(data);
    },
    removeCartx: function removeCartx(data) {
      this.removeCart(data);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=template&id=6efd94d7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/producto/SingleProduct.vue?vue&type=template&id=6efd94d7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    staticClass: "my-6"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6",
      lg: "6",
      xl: "6"
    }
  }, [_c("div", {
    staticClass: "product-slider"
  }, [_c("VueSlickCarousel", {
    ref: "c1",
    attrs: {
      fade: true,
      asNavFor: _vm.$refs.c2,
      focusOnSelect: true
    }
  }, [_c("div", [_c("v-img", {
    staticClass: "mx-auto",
    attrs: {
      width: "300",
      height: "auto",
      src: _vm.computed_singleProduct.imagen
    }
  })], 1)])], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("h1", {
    staticClass: "mb-4"
  }, [_vm._v(_vm._s(_vm.computed_singleProduct.nombre))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex mb-4"
  }, [_c("p", {
    staticClass: "grey--text text--grey-lighten-1 me-3 mb-0"
  }, [_vm._v("Rated:")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center justify-center align-center mb-1"
  }, [_c("v-rating", {
    attrs: {
      value: 4.5,
      color: "amber",
      dense: "",
      "half-increments": "",
      readonly: "",
      size: "16"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "grey--text text--darken-4 ml-1"
  }, [_vm._v("\n                      (49)\n                  ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("h2", {
    staticClass: "primary--text"
  }, [_vm._v("$" + _vm._s(_vm.computed_singleProduct.precio_normal))])]), _vm._v(" "), _c("div", {
    staticClass: "mb-6"
  }, [_c("v-btn", {
    staticClass: "text-capitalize mb-3",
    "class": _vm.singleProductData.qty <= 0 ? "d-block" : "d-none",
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.addCartx(_vm.singleProductData);
      }
    }
  }, [_vm._v("\n                      Add to Cart \n                  ")]), _vm._v(" "), _c("div", {
    staticClass: "align-center",
    "class": _vm.singleProductData.qty <= 0 ? "d-none" : "d-flex"
  }, [_c("v-btn", {
    staticClass: "br-8",
    attrs: {
      color: "primary",
      outlined: "",
      icon: "",
      tile: ""
    },
    on: {
      click: function click($event) {
        return _vm.removeCartx(_vm.singleProductData);
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-minus")])], 1), _vm._v(" "), _c("h3", {
    staticClass: "mx-5"
  }, [_vm._v(_vm._s(_vm.singleProductData.qty))]), _vm._v(" "), _c("v-btn", {
    staticClass: "br-8",
    attrs: {
      color: "primary",
      outlined: "",
      icon: "",
      tile: ""
    },
    on: {
      click: function click($event) {
        return _vm.addCartx(_vm.singleProductData);
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-plus")])], 1)], 1)], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "mt-12",
    attrs: {
      cols: "12"
    }
  }, [_c("v-tabs", {
    attrs: {
      "background-color": "transparent",
      color: "primary"
    },
    model: {
      value: _vm.tab,
      callback: function callback($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c("v-tab", {
    staticClass: "font-600 text-capitalize"
  }, [_vm._v("\n                  Description\n              ")]), _vm._v(" "), _c("v-tab", {
    staticClass: "font-600 text-capitalize"
  }, [_vm._v("\n                  Review (3)\n              ")])], 1), _vm._v(" "), _c("v-tabs-items", {
    staticClass: "transparent my-6 pb-6",
    model: {
      value: _vm.tab,
      callback: function callback($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c("v-tab-item", [_c("h3", {
    staticClass: "mb-4"
  }, [_vm._v("Descripción :")]), _vm._v(" "), _c("div", {
    staticClass: "Typography-sc-1nbqu5-0 ebXTOD"
  }, [_vm._v("\n                     " + _vm._s(_vm.computed_singleProduct.descripcion) + "\n                 ")])]), _vm._v(" "), _c("v-tab-item", [_c("div", {
    staticClass: "mb-8"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap mb-4"
  }, [_c("v-avatar", {
    staticClass: "me-3",
    attrs: {
      size: "48"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/faces/7.png */ "./resources/js/assets/images/faces/7.png"),
      alt: ""
    }
  })]), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "font-600"
  }, [_vm._v("Jannie Schumm")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center justify-center mb-1"
  }, [_c("v-rating", {
    staticClass: "me-2",
    attrs: {
      value: 4.5,
      color: "amber",
      dense: "",
      "half-increments": "",
      readonly: "",
      size: "16"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "font-600 me-2"
  }, [_vm._v("\n                                      4.7\n                                  ")]), _vm._v(" "), _c("div", {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("\n                                      4 months ago\n                                  ")])], 1)])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "7",
      md: "6",
      lg: "4"
    }
  }, [_vm._v("\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.\n                      ")])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-8"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap mb-4"
  }, [_c("v-avatar", {
    staticClass: "me-3",
    attrs: {
      size: "48"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/faces/6.png */ "./resources/js/assets/images/faces/6.png"),
      alt: ""
    }
  })]), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "font-600"
  }, [_vm._v("Joe Kenan")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center justify-center mb-1"
  }, [_c("v-rating", {
    staticClass: "me-2",
    attrs: {
      value: 4.5,
      color: "amber",
      dense: "",
      "half-increments": "",
      readonly: "",
      size: "16"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "font-600 me-2"
  }, [_vm._v("\n                                      4.7\n                                  ")]), _vm._v(" "), _c("div", {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("\n                                      1.9 years ago\n                                  ")])], 1)])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "7",
      md: "6",
      lg: "4"
    }
  }, [_vm._v("\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.\n                      ")])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-8"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap mb-4"
  }, [_c("v-avatar", {
    staticClass: "me-3",
    attrs: {
      size: "48"
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../assets/images/faces/8.png */ "./resources/js/assets/images/faces/8.png"),
      alt: ""
    }
  })]), _vm._v(" "), _c("div", [_c("h5", {
    staticClass: "font-600"
  }, [_vm._v("Jenifer Tulio")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center justify-center mb-1"
  }, [_c("v-rating", {
    staticClass: "me-2",
    attrs: {
      value: 4.5,
      color: "amber",
      dense: "",
      "half-increments": "",
      readonly: "",
      size: "16"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "font-600 me-2"
  }, [_vm._v("\n                                      4.7\n                                  ")]), _vm._v(" "), _c("div", {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("\n                                      1.9 years ago\n                                  ")])], 1)])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "7",
      md: "6",
      lg: "4"
    }
  }, [_vm._v("\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.\n                      ")])], 1)], 1), _vm._v(" "), _c("h2", {
    staticClass: "font-600 mb-6"
  }, [_vm._v("Write a Review for this product")]), _vm._v(" "), _c("h5", {
    staticClass: "font-600 mb-3"
  }, [_vm._v("Your Rating "), _c("sup", {
    staticClass: "primary--text"
  }, [_vm._v("*")])]), _vm._v(" "), _c("v-rating", {
    staticClass: "mb-3",
    attrs: {
      value: 0,
      color: "amber",
      "background-color": "amber",
      dense: "",
      "half-increments": "",
      readonly: "",
      size: "20"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "font-600 mb-3"
  }, [_vm._v("Your Review "), _c("sup", {
    staticClass: "primary--text"
  }, [_vm._v("*")])]), _vm._v(" "), _c("v-textarea", {
    staticClass: "mb-3",
    attrs: {
      color: "primary",
      outlined: "",
      "background-color": "white"
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "text-capitalize",
    attrs: {
      color: "primary"
    }
  }, [_vm._v("\n                      Submit\n                  ")])], 1)], 1), _vm._v(" "), _c("h3", {
    staticClass: "mb-6"
  }, [_vm._v("Productos relacionados")]), _vm._v(" "), _c("v-row", _vm._l(_vm.productos_relacionados, function (item, index) {
    return _c("v-col", {
      key: index,
      attrs: {
        cols: "12",
        sm: "6",
        md: "4",
        lg: "3",
        xl: "2"
      }
    }, [_c("CardCart", {
      staticClass: "m-5",
      attrs: {
        "content-img": item.img,
        "content-text": item.title,
        counter: item.qty
      },
      on: {
        cartRemove: function cartRemove($event) {
          return _vm.removeCart(item);
        },
        cartAdd: function cartAdd($event) {
          return _vm.addCart(item);
        }
      }
    })], 1);
  }), 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-slider .product-slider-click[data-v-6efd94d7] {\n  display: flex;\n  justify-content: center;\n}\n.product-slider .product-slider-click[data-v-6efd94d7] .slick-slide {\n  width: 80px !important;\n  margin-right: 16px;\n  border: 1px solid #dae1e7;\n  border-radius: 5px;\n}\n.product-slider .product-slider-click[data-v-6efd94d7] .slick-current {\n  border: 1px solid #D23F57;\n  border-radius: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/Views/producto/SingleProduct.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Views/producto/SingleProduct.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProduct_vue_vue_type_template_id_6efd94d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=template&id=6efd94d7&scoped=true& */ "./resources/js/Views/producto/SingleProduct.vue?vue&type=template&id=6efd94d7&scoped=true&");
/* harmony import */ var _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=script&lang=js& */ "./resources/js/Views/producto/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleProduct_vue_vue_type_style_index_0_id_6efd94d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true& */ "./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProduct_vue_vue_type_template_id_6efd94d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProduct_vue_vue_type_template_id_6efd94d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6efd94d7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/producto/SingleProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/producto/SingleProduct.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Views/producto/SingleProduct.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6efd94d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=style&index=0&id=6efd94d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6efd94d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6efd94d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6efd94d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_style_index_0_id_6efd94d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Views/producto/SingleProduct.vue?vue&type=template&id=6efd94d7&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Views/producto/SingleProduct.vue?vue&type=template&id=6efd94d7&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6efd94d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProduct.vue?vue&type=template&id=6efd94d7&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=template&id=6efd94d7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6efd94d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProduct_vue_vue_type_template_id_6efd94d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/images/faces/6.png":
/*!************************************************!*\
  !*** ./resources/js/assets/images/faces/6.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/6.png?b5ce315cdff3524f87bd251e80c2990a";

/***/ }),

/***/ "./resources/js/assets/images/faces/7.png":
/*!************************************************!*\
  !*** ./resources/js/assets/images/faces/7.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/7.png?e099f3d0a0d5fd1cc5c68f3f345e1e17";

/***/ }),

/***/ "./resources/js/assets/images/faces/8.png":
/*!************************************************!*\
  !*** ./resources/js/assets/images/faces/8.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/8.png?f0d8b360c1d96c2672a8f3e1f2188263";

/***/ })

}]);