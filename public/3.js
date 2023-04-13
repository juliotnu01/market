(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/producto/SingleProduct.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/producto/SingleProduct.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _assets_components_cartCard_CardCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/cartCard/CardCart */ "./resources/js/assets/components/cartCard/CardCart.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardCart: _assets_components_cartCard_CardCart__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getProducts', 'singleProduct', "itemsBySearch"])), {}, {
    productos_relacionados: {
      get: function get() {
        var model = [];
        for (var index = 0; index < this.itemsBySearch.length; index++) {
          var _element$amount, _element$precio;
          var element = this.itemsBySearch[index];
          model.push({
            id: element.id,
            price: element.price,
            category: element.category,
            amount: parseInt((_element$amount = element.amount) !== null && _element$amount !== void 0 ? _element$amount : 999),
            qty: 0,
            title: element.title,
            img: element.img,
            name: element.name,
            precio: parseInt((_element$precio = element.precio) !== null && _element$precio !== void 0 ? _element$precio : 99),
            descuento: element.descuento
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
        return {
          id: this.singleProduct.id,
          img: this.singleProduct.imagen,
          title: this.singleProduct.nombre,
          descripcion: this.singleProduct.descripcion,
          category: this.singleProduct.categoria,
          amount: this.singleProduct.precio_normal,
          rating: 3,
          qty: 0
        };
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
      flashDeals: [{
        img: __webpack_require__(/*! ../../assets/images/products/flash-1.png */ "./resources/js/assets/images/products/flash-1.png"),
        name: "Sneakers"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/flash-2.png */ "./resources/js/assets/images/products/flash-2.png"),
        name: "Watch"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/flash-3.png */ "./resources/js/assets/images/products/flash-3.png"),
        name: "Mobile"
      }],
      slickSettingsSixItem: {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1700,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true
          }
        }, {
          breakpoint: 1264,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        }, {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },
  created: function created() {
    this.testA();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["addCart", "removeCart"])), {}, {
    testA: function testA() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var id;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              id = _this.$route.params.id;
              _context.next = 3;
              return _this.$store.dispatch('getsingleProduct', id);
            case 3:
              _context.next = 5;
              return _this.$store.dispatch('getProductosBySearch', _this.singleProduct.nombre.substr(0, 10));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    addCartx: function addCartx(data) {
      console.log({
        data: data
      });
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
      src: _vm.computed_singleProduct.img
    }
  })], 1)])], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("h1", {
    staticClass: "mb-4"
  }, [_vm._v(_vm._s(_vm.computed_singleProduct.title))]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        (49)\n                    ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("h2", {
    staticClass: "primary--text"
  }, [_vm._v("$" + _vm._s(_vm._f("numberFormat")(_vm.computed_singleProduct.amount)))])]), _vm._v(" "), _c("div", {
    staticClass: "mb-6"
  }, [_c("v-btn", {
    staticClass: "text-capitalize mb-3",
    "class": _vm.computed_singleProduct.qty <= 0 ? "d-block" : "d-none",
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.addCartx(_vm.computed_singleProduct);
      }
    }
  }, [_vm._v("\n                    Add to Cart\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "align-center",
    "class": _vm.computed_singleProduct.qty <= 0 ? "d-none" : "d-flex"
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
        return _vm.removeCartx(_vm.computed_singleProduct);
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-minus")])], 1), _vm._v(" "), _c("h3", {
    staticClass: "mx-5"
  }, [_vm._v(_vm._s(_vm.computed_singleProduct.qty))]), _vm._v(" "), _c("v-btn", {
    staticClass: "br-8",
    attrs: {
      color: "primary",
      outlined: "",
      icon: "",
      tile: ""
    },
    on: {
      click: function click($event) {
        return _vm.addCartx(_vm.computed_singleProduct);
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
  }, [_vm._v("\n                    Description\n                ")]), _vm._v(" "), _c("v-tab", {
    staticClass: "font-600 text-capitalize"
  }, [_vm._v("\n                    Review (3)\n                ")])], 1), _vm._v(" "), _c("v-tabs-items", {
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
  }, [_vm._v("\n                        " + _vm._s(_vm.computed_singleProduct.descripcion) + "\n                    ")])]), _vm._v(" "), _c("v-tab-item", [_c("div", {
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
  }, [_vm._v("\n                                        4.7\n                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("\n                                        4 months ago\n                                    ")])], 1)])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "7",
      md: "6",
      lg: "4"
    }
  }, [_vm._v("\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis.\n                                Facilisis vitae gravida egestas ac account.\n                            ")])], 1)], 1), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                                        4.7\n                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("\n                                        1.9 years ago\n                                    ")])], 1)])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "7",
      md: "6",
      lg: "4"
    }
  }, [_vm._v("\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis.\n                                Facilisis vitae gravida egestas ac account.\n                            ")])], 1)], 1), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                                        4.7\n                                    ")]), _vm._v(" "), _c("div", {
    staticClass: "grey--text text--darken-2"
  }, [_vm._v("\n                                        1.9 years ago\n                                    ")])], 1)])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "7",
      md: "6",
      lg: "4"
    }
  }, [_vm._v("\n                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis.\n                                Facilisis vitae gravida egestas ac account.\n                            ")])], 1)], 1), _vm._v(" "), _c("h2", {
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
  }, [_vm._v("\n                        Submit\n                    ")])], 1)], 1), _vm._v(" "), _c("h3", {
    staticClass: "mb-6"
  }, [_vm._v("Productos relacionados")]), _vm._v(" "), _vm.productos_relacionados.length > 0 ? _c("VueSlickCarousel", _vm._b({
    staticClass: "slick-secondary",
    attrs: {
      arrows: true,
      dots: false
    },
    scopedSlots: _vm._u([{
      key: "prevArrow",
      fn: function fn(arrowOption) {
        return [_c("v-btn", {
          staticClass: "mx-2 slick-arrow prev slick-prev",
          attrs: {
            fab: "",
            dark: "",
            small: "",
            color: "secondary"
          }
        }, [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("\n                            " + _vm._s(arrowOption) + "\n                            mdi-arrow-left\n                        ")])], 1)];
      }
    }, {
      key: "nextArrow",
      fn: function fn(arrowOption) {
        return [_c("v-btn", {
          staticClass: "mx-2 slick-arrow next slick-next",
          attrs: {
            fab: "",
            dark: "",
            small: "",
            color: "secondary"
          }
        }, [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("\n                            " + _vm._s(arrowOption) + "\n                            mdi-arrow-right\n                        ")])], 1)];
      }
    }], null, false, 2033273252)
  }, "VueSlickCarousel", _vm.slickSettingsSixItem, false), _vm._l(_vm.productos_relacionados, function (item, index) {
    return _c("v-col", {
      key: index,
      attrs: {
        cols: "12"
      }
    }, [_c("CardCart", {
      attrs: {
        idItem: item.id,
        "content-img": item.img,
        "content-text": item.title,
        amount: item.amount,
        contentRating: item.rating,
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
  }), 1) : _vm._e()], 1)], 1)], 1);
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