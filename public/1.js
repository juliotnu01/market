(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/home/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar.vue */ "./resources/js/components/navbar.vue");
/* harmony import */ var _assets_components_cartCard_CardCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/components/cartCard/CardCart */ "./resources/js/assets/components/cartCard/CardCart.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
    Navbar: _components_navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardCart: _assets_components_cartCard_CardCart__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["getProducts"])),
  data: function data() {
    var _ref;
    return _ref = {
      slickSettings: {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [{
          breakpoint: 2100,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true
          }
        }, {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        }, {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        }, {
          breakpoint: 1264,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
      },
      slickSettingsTwo: {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        }, {
          breakpoint: 1264,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }]
      },
      slickSettingsThree: {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1700,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
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
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      },
      brandsIcon: [{
        name: "TMW",
        image: __webpack_require__(/*! ../../assets/images/brands/v.png */ "./resources/js/assets/images/brands/v.png")
      }, {
        name: "Zerrari",
        image: __webpack_require__(/*! ../../assets/images/brands/u.png */ "./resources/js/assets/images/brands/u.png")
      }, {
        name: "Zord",
        image: __webpack_require__(/*! ../../assets/images/brands/v.png */ "./resources/js/assets/images/brands/v.png")
      }, {
        name: "Gini",
        image: __webpack_require__(/*! ../../assets/images/brands/u.png */ "./resources/js/assets/images/brands/u.png")
      }, {
        name: "Nesla",
        image: __webpack_require__(/*! ../../assets/images/brands/v.png */ "./resources/js/assets/images/brands/v.png")
      }],
      topRatings: [{
        img: __webpack_require__(/*! ../../assets/images/products/camera-1.png */ "./resources/js/assets/images/products/camera-1.png"),
        title: "Camera",
        price: "$3,300"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/shoes-2.png */ "./resources/js/assets/images/products/shoes-2.png"),
        title: "Shoe",
        price: "$400"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/mobile-1.png */ "./resources/js/assets/images/products/mobile-1.png"),
        title: "Mobile",
        price: "$999"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/watch-1.png */ "./resources/js/assets/images/products/watch-1.png"),
        title: "Watch",
        price: "$600"
      }],
      newArrivals: [{
        img: __webpack_require__(/*! ../../assets/images/products/imagegoggles.png */ "./resources/js/assets/images/products/imagegoggles.png"),
        title: "Sunglass",
        price: "$150"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/lipstick(2).png */ "./resources/js/assets/images/products/lipstick(2).png"),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/lipstick(2).png */ "./resources/js/assets/images/products/lipstick(2).png"),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/bgwatch.png */ "./resources/js/assets/images/products/bgwatch.png"),
        title: "Lipstick",
        price: "$250"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/lipstick(4).png */ "./resources/js/assets/images/products/lipstick(4).png"),
        title: "Green Plant",
        price: "$250"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/lipstick(3).png */ "./resources/js/assets/images/products/lipstick(3).png"),
        title: "Bonsai Tree",
        price: "$450"
      }],
      bigDiscounts: [{
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/7.beatsw3.png */ "./resources/js/assets/images/products/Electronics/7.beatsw3.png"),
        title: "BenX 2020"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/9.SonyTV1080p.png */ "./resources/js/assets/images/products/Electronics/9.SonyTV1080p.png"),
        title: "Tony TV 1080p"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/10.SonyPS4.png */ "./resources/js/assets/images/products/Electronics/10.SonyPS4.png"),
        title: "Tony PS4"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/11.Netgear2020.png */ "./resources/js/assets/images/products/Electronics/11.Netgear2020.png"),
        title: "Setgearr 2020"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/12.SonyBGB.png */ "./resources/js/assets/images/products/Electronics/12.SonyBGB.png"),
        title: "Tony BGB"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/13.LGProducts.png */ "./resources/js/assets/images/products/Electronics/13.LGProducts.png"),
        title: "RG Products"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/14.Panasonic2019.png */ "./resources/js/assets/images/products/Electronics/14.Panasonic2019.png"),
        title: "Sanasonic 2019"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/15.DuneHD.png */ "./resources/js/assets/images/products/Electronics/15.DuneHD.png"),
        title: "Zune HD"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Electronics/19.LGWashingMachine.png */ "./resources/js/assets/images/products/Electronics/19.LGWashingMachine.png"),
        title: "JK Washing Machine"
      }],
      topCategories: [{
        img: __webpack_require__(/*! ../../assets/images/banners/category-1.png */ "./resources/js/assets/images/banners/category-1.png")
      }, {
        img: __webpack_require__(/*! ../../assets/images/banners/category-2.png */ "./resources/js/assets/images/banners/category-2.png")
      }, {
        img: __webpack_require__(/*! ../../assets/images/banners/category-3.png */ "./resources/js/assets/images/banners/category-3.png")
      }, {
        img: __webpack_require__(/*! ../../assets/images/banners/category-1.png */ "./resources/js/assets/images/banners/category-1.png")
      }, {
        img: __webpack_require__(/*! ../../assets/images/banners/category-1.png */ "./resources/js/assets/images/banners/category-1.png")
      }, {
        img: __webpack_require__(/*! ../../assets/images/banners/category-2.png */ "./resources/js/assets/images/banners/category-2.png")
      }, {
        img: __webpack_require__(/*! ../../assets/images/banners/category-3.png */ "./resources/js/assets/images/banners/category-3.png")
      }, {
        img: __webpack_require__(/*! ../../assets/images/banners/category-1.png */ "./resources/js/assets/images/banners/category-1.png")
      }],
      featuredBrands: [{
        img: __webpack_require__(/*! ../../assets/images/products/london-britches.png */ "./resources/js/assets/images/products/london-britches.png"),
        title: "London Britches"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/jimandjiko.png */ "./resources/js/assets/images/products/jimandjiko.png"),
        title: "Jim & Jago"
      }],
      categories: [{
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png */ "./resources/js/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"),
        title: "Tops"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Clothes/10.LandsJacket.png */ "./resources/js/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
        title: "Jacket"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png */ "./resources/js/assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png"),
        title: "Smart Watch"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Accessories/10.RayBanOcean.png */ "./resources/js/assets/images/products/Fashion/Accessories/10.RayBanOcean.png"),
        title: "Sunglasses"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Accessories/3.BrownCap.png */ "./resources/js/assets/images/products/Fashion/Accessories/3.BrownCap.png"),
        title: "Cap"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Shoes/1.NikeRed.png */ "./resources/js/assets/images/products/Fashion/Shoes/1.NikeRed.png"),
        title: "Nike Red"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Shoes/5.NikeBlue.png */ "./resources/js/assets/images/products/Fashion/Shoes/5.NikeBlue.png"),
        title: "Nike Silver"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png */ "./resources/js/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png"),
        title: "Gold Necklace"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png */ "./resources/js/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png"),
        title: "NBL Hoodie"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Clothes/10.LandsJacket.png */ "./resources/js/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
        title: "Jacket"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png */ "./resources/js/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"),
        title: "Tops"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/Fashion/Clothes/10.LandsJacket.png */ "./resources/js/assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
        title: "Jacket"
      }],
      heroSlider: [{
        img: __webpack_require__(/*! ../../assets/images/products/apple-watch-0.png */ "./resources/js/assets/images/products/apple-watch-0.png"),
        name: "50% Off For Your First Shopping"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/apple-watch-0.png */ "./resources/js/assets/images/products/apple-watch-0.png"),
        name: " 20% Off For  First Electronics Purchase"
      }, {
        img: __webpack_require__(/*! ../../assets/images/products/apple-watch-0.png */ "./resources/js/assets/images/products/apple-watch-0.png"),
        name: "Get 70% Off For  First  Grocery Purchase"
      }],
      tab: null,
      items: ["Brands", "Shops"],
      slickSettingsSingleItem: {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
      },
      slickSettingsFour: {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
            slidesToShow: 3,
            slidesToScroll: 3,
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
      },
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
    }, _defineProperty(_ref, "slickSettings", {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [{
        breakpoint: 2000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true
        }
      }, {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true
        }
      }, {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      }, {
        breakpoint: 1264,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    }), _defineProperty(_ref, "flashDeals", [
      // {
      //     img: require("../../assets/images/products/flash-1.png"),
      //     name: "Sneakers",
      //     precio: 123,
      //     descuento: 21,
      // },
      // {
      //     img: require("../../assets/images/products/flash-2.png"),
      //     name: "Watch",
      //     precio: 123,
      //     descuento: 21,
      // },
      // {
      //     img: require("../../assets/images/products/flash-3.png"),
      //     name: "Mobile",
      //     precio: 123,
      //     descuento: 21,
      // },
      // {
      //     img: require("../../assets/images/products/flash-4.png"),
      //     name: "Zapple Watch",
      //     precio: 123,
      //     descuento: 21,
      // },
      // {
      //     img: require("../../assets/images/products/flash-1.png"),
      //     name: "Hike Sneakers",
      //     precio: 123,
      //     descuento: 21,
      // },
      // {
      //     img: require("../../assets/images/products/flash-2.png"),
      //     name: "Watch",
      //     precio: 123,
      //     descuento: 21,
      // },
      // {
      //     img: require("../../assets/images/products/flash-3.png"),
      //     name: "Mobile",
      //     precio: 123,
      //     descuento: 21,
      // },
      // {
      //     img: require("../../assets/images/products/flash-4.png"),
      //     name: "Zapple Watch",
      //     precio: 123,
      //     descuento: 21,
      // },
      // {
      //     img: require("../../assets/images/products/flash-4.png"),
      //     name: "Zapple Watch asdasd",
      //     precio: 123,
      //     descuento: 21,
      // },
    ]), _defineProperty(_ref, "gardenGuitar", [{
      img: __webpack_require__(/*! ../../assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png */ "./resources/js/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png"),
      name: "Painted Leaf Begonia"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/Home&Garden/26.ArecaPalminClayPot.png */ "./resources/js/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png"),
      name: "Areca PalminClay Pot"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png */ "./resources/js/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png"),
      name: "Black Coral Sansevieria"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/Music/1.6StringCheapElectricGuitar.png */ "./resources/js/assets/images/products/Music/1.6StringCheapElectricGuitar.png"),
      name: "String Electric Guitar"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/Music/28.RolandFullSetVDrums.png */ "./resources/js/assets/images/products/Music/28.RolandFullSetVDrums.png"),
      name: "Roland Full SetV Drums"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/Music/12.CheapUkuleleOffers.png */ "./resources/js/assets/images/products/Music/12.CheapUkuleleOffers.png"),
      name: "Ukulele Offers"
    }]), _defineProperty(_ref, "newArrivals", [{
      img: __webpack_require__(/*! ../../assets/images/products/imagegoggles.png */ "./resources/js/assets/images/products/imagegoggles.png"),
      title: "Sunglass",
      price: "$150"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/lipstick(2).png */ "./resources/js/assets/images/products/lipstick(2).png"),
      title: "Lipstick",
      price: "$250"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/lipstick(2).png */ "./resources/js/assets/images/products/lipstick(2).png"),
      title: "Lipstick",
      price: "$250"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/bgwatch.png */ "./resources/js/assets/images/products/bgwatch.png"),
      title: "Lipstick",
      price: "$250"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/lipstick(4).png */ "./resources/js/assets/images/products/lipstick(4).png"),
      title: "Green Plant",
      price: "$250"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/lipstick(3).png */ "./resources/js/assets/images/products/lipstick(3).png"),
      title: "Bonsai Tree",
      price: "$450"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/lipstick(2).png */ "./resources/js/assets/images/products/lipstick(2).png"),
      title: "Lipstick",
      price: "$250"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/bgwatch.png */ "./resources/js/assets/images/products/bgwatch.png"),
      title: "Lipstick",
      price: "$250"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/lipstick(4).png */ "./resources/js/assets/images/products/lipstick(4).png"),
      title: "Green Plant",
      price: "$250"
    }, {
      img: __webpack_require__(/*! ../../assets/images/products/lipstick(3).png */ "./resources/js/assets/images/products/lipstick(3).png"),
      title: "Bonsai Tree",
      price: "$450"
    }]), _ref;
  },
  created: function created() {
    this.getProductos();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["addCart", "removeCart"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])(["setOverlay"])), {}, {
    getProductos: function getProductos() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios, data, index, _element$precio_norma, _element$precio_norma2, _element$nombre, _element$nombre2, _element$precio_norma3, element;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this.setOverlay(true);
              _context.next = 4;
              return axios("/api/get-productos");
            case 4:
              _yield$axios = _context.sent;
              data = _yield$axios.data;
              for (index = 0; index < data.length; index++) {
                element = data[index];
                _this.flashDeals.push({
                  id: element.id,
                  price: parseInt((_element$precio_norma = element.precio_normal) !== null && _element$precio_norma !== void 0 ? _element$precio_norma : 999),
                  category: element.categoria,
                  amount: parseInt((_element$precio_norma2 = element.precio_normal) !== null && _element$precio_norma2 !== void 0 ? _element$precio_norma2 : 999),
                  qty: 0,
                  title: (_element$nombre = element.nombre) !== null && _element$nombre !== void 0 ? _element$nombre : "",
                  img: element.imagen == "" || element.imagen == null ? "https://www.4me.com/wp-content/uploads/2018/01/4me-icon-product.png" : element.imagen,
                  name: (_element$nombre2 = element.nombre) !== null && _element$nombre2 !== void 0 ? _element$nombre2 : "",
                  precio: parseInt((_element$precio_norma3 = element.precio_normal) !== null && _element$precio_norma3 !== void 0 ? _element$precio_norma3 : 999),
                  descuento: 23
                });
              }
              _this.setOverlay(false);
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 10]]);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/index.vue?vue&type=template&id=48aa0501&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/home/index.vue?vue&type=template&id=48aa0501&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-6 mb-14"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      xl: "12",
      lg: "12"
    }
  }, [_c("v-carousel", {
    staticClass: "vuetify-carousel",
    attrs: {
      cycle: "",
      height: "100%",
      "hide-delimiter-background": "",
      "show-arrows-on-hover": "",
      "show-arrows": false
    }
  }, _vm._l(_vm.heroSlider, function (n, index) {
    return _c("v-carousel-item", {
      key: index
    }, [_c("v-sheet", {
      attrs: {
        height: "100%",
        light: ""
      }
    }, [_c("v-row", {
      staticClass: "fill-height",
      attrs: {
        align: "center"
      }
    }, [_c("v-col", {
      staticClass: "mb-14 mb-sm-0",
      attrs: {
        cols: "7",
        lg: "8"
      }
    }, [_c("v-col", {
      staticClass: "ms-3 ps-0",
      attrs: {
        cols: "12",
        xl: "7"
      }
    }, [_c("h1", {
      staticClass: "show-3 font-weight-bold mb-4"
    }, [_vm._v("\n                                        " + _vm._s(n.name) + "\n                                    ")])]), _vm._v(" "), _c("v-col", {
      attrs: {
        cols: "12",
        xl: "8"
      }
    }, [_c("p", {
      staticClass: "secondary--text banner-text mb-4"
    }, [_vm._v("\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis\n                                        lobortis consequat eu, quam etiam at quis ut convallis.\n                                    ")])]), _vm._v(" "), _c("v-btn", {
      staticClass: "text-capitalize ms-3",
      attrs: {
        color: "primary"
      }
    }, [_vm._v("Shop Now")])], 1), _vm._v(" "), _c("v-col", {
      attrs: {
        cols: "5",
        lg: "4"
      }
    }, [_c("v-img", {
      attrs: {
        "aspect-ratio": "1",
        contain: "",
        src: n.img
      }
    })], 1)], 1)], 1)], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c("v-row", {}, [_c("v-col", {
    attrs: {
      cols: "12",
      lg: "4"
    }
  }, [_c("base-card", {
    staticClass: "h-100"
  }, [_c("VueSlickCarousel", _vm._b({
    staticClass: "slick-secondary",
    attrs: {
      arrows: true,
      dots: false
    },
    scopedSlots: _vm._u([{
      key: "prevArrow",
      fn: function fn(arrowOption) {
        return [_c("v-btn", {
          staticClass: "mx-2 slick-left-arrow",
          attrs: {
            icon: "",
            small: ""
          }
        }, [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("\n                                " + _vm._s(arrowOption) + "\n                                mdi-arrow-left\n                            ")])], 1)];
      }
    }, {
      key: "nextArrow",
      fn: function fn(arrowOption) {
        return [_c("v-btn", {
          staticClass: "mx-2 slick-right-arrow",
          attrs: {
            icon: "",
            small: ""
          }
        }, [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("\n                                " + _vm._s(arrowOption) + "\n                                mdi-arrow-right\n                            ")])], 1)];
      }
    }])
  }, "VueSlickCarousel", _vm.slickSettingsSingleItem, false), _vm._l(3, function (item) {
    return _c("div", {
      key: item,
      staticClass: "px-4 pt-4"
    }, [_c("v-row", [_c("v-col", {
      staticClass: "mx-auto text-center mt-14",
      attrs: {
        cols: "12",
        lg: "8"
      }
    }, [_c("h2", {
      staticClass: "mb-2"
    }, [_vm._v("Introducing New Winter Collection")]), _vm._v(" "), _c("p", {
      staticClass: "text-14 grey--text text--darken-2 mb-6"
    }, [_vm._v("\n                                    Starting at $39 & save upto 40%\n                                ")]), _vm._v(" "), _c("router-link", {
      staticClass: "d-inline-block bb-primary text-decoration-none black--text font-600",
      attrs: {
        to: "/"
      }
    }, [_vm._v("\n                                    SHOP NOW\n                                ")])], 1)], 1), _vm._v(" "), _c("v-img", {
      attrs: {
        contain: "",
        src: "../../../../images/products/Rectangle 130.png"
      }
    })], 1);
  }), 0)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      lg: "8"
    }
  }, [_vm.flashDeals.length > 0 ? _c("VueSlickCarousel", _vm._b({
    staticClass: "slick-secondary mb-6",
    attrs: {
      arrows: true,
      dots: false
    },
    scopedSlots: _vm._u([{
      key: "prevArrow",
      fn: function fn(arrowOption) {
        return [_c("v-btn", {
          staticClass: "mx-2 slick-arrow",
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
          staticClass: "mx-2 slick-arrow",
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
    }], null, false, 2876525060)
  }, "VueSlickCarousel", _vm.slickSettingsFour, false), _vm._l(_vm.flashDeals, function (item, index) {
    return _c("v-col", {
      key: index,
      attrs: {
        cols: "12"
      },
      on: {
        click: function click($event) {
          return _vm.$router.push({
            name: "home.productos.unico",
            params: {
              id: item.id
            }
          });
        }
      }
    }, [_c("v-img", {
      staticClass: "mb-4 br-8 card-overlay-item",
      attrs: {
        contain: "",
        src: item.img
      }
    }), _vm._v(" "), _c("v-rating", {
      attrs: {
        value: 4.5,
        color: "amber",
        dense: "",
        "half-increments": "",
        readonly: "",
        size: "16"
      }
    }), _vm._v(" "), _c("h5", {
      staticClass: "mb-1"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("div", {
      staticClass: "d-flex align-center flex-wrap"
    }, [_c("h5", {
      staticClass: "primary--text mr-1"
    }, [_vm._v("$" + _vm._s(_vm._f("numberFormat")(item.precio)))]), _vm._v(" "), _c("h5", {
      staticClass: "grey--text text--darken-1"
    }, [_vm._v("$" + _vm._s(_vm._f("numberFormat")(item.descuento)))])])], 1);
  }), 1) : _vm._e(), _vm._v(" "), _c("base-card", {
    staticClass: "mb-6",
    attrs: {
      cardHoverShadow: ""
    }
  }, [_c("div", {
    staticClass: "px-8 py-4 d-flex flex-wrap flex-sm-nowrap align-center justify-sm-space-odd justify-center"
  }, [_c("div", [_c("v-img", {
    staticClass: "mx-auto",
    attrs: {
      "max-width": "290",
      src: "../../../../images/products/shoes-1.png"
    }
  })], 1), _vm._v(" "), _c("div", {}, [_c("h3", {
    staticClass: "mb-2"
  }, [_vm._v("Converse Collecitons")]), _vm._v(" "), _c("p", {
    staticClass: "grey--text text--darken-2 mb-4"
  }, [_vm._v("\n                            Get the most exciting deals. Starting at $59\n                        ")]), _vm._v(" "), _c("a", {
    staticClass: "text-decoration-none black--text bb-primary font-weight-bold",
    attrs: {
      href: "#"
    }
  }, [_vm._v("SHOP NOW")])])])]), _vm._v(" "), _vm.flashDeals.length > 0 ? _c("VueSlickCarousel", _vm._b({
    staticClass: "slick-secondary mb-6",
    attrs: {
      arrows: true,
      dots: false
    },
    scopedSlots: _vm._u([{
      key: "prevArrow",
      fn: function fn(arrowOption) {
        return [_c("v-btn", {
          staticClass: "mx-2 slick-arrow",
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
          staticClass: "mx-2 slick-arrow",
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
    }], null, false, 2876525060)
  }, "VueSlickCarousel", _vm.slickSettingsFour, false), _vm._l(_vm.flashDeals, function (item, index) {
    return _c("v-col", {
      key: index,
      attrs: {
        cols: "12"
      },
      on: {
        click: function click($event) {
          return _vm.$router.push({
            name: "home.productos.unico",
            params: {
              id: item.id
            }
          });
        }
      }
    }, [_c("v-img", {
      staticClass: "mb-4 br-8 card-overlay-item",
      attrs: {
        contain: "",
        src: item.img
      }
    }), _vm._v(" "), _c("v-rating", {
      attrs: {
        value: 4.5,
        color: "amber",
        dense: "",
        "half-increments": "",
        readonly: "",
        size: "16"
      }
    }), _vm._v(" "), _c("h5", {
      staticClass: "mb-1"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("div", {
      staticClass: "d-flex align-center flex-wrap"
    }, [_c("h5", {
      staticClass: "primary--text mr-1"
    }, [_vm._v("$" + _vm._s(_vm._f("numberFormat")(item.precio)))]), _vm._v(" "), _c("h5", {
      staticClass: "grey--text text--darken-1"
    }, [_vm._v("$" + _vm._s(_vm._f("numberFormat")(item.descuento)))])])], 1);
  }), 1) : _vm._e()], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    staticClass: "pb-0",
    attrs: {
      cols: "12"
    }
  }, [_c("h2", {
    staticClass: "mb-0"
  }, [_vm._v("Featured Categories")])]), _vm._v(" "), _c("v-col", {
    staticClass: "mb-4",
    attrs: {
      cols: "12",
      lg: "4"
    }
  }, [_c("router-link", {
    staticClass: "text-decoration-none",
    attrs: {
      to: "/single-product"
    }
  }, [_c("base-card", {
    staticClass: "p-relative h-100 d-flex align-center",
    attrs: {
      cardHoverShadow: ""
    }
  }, [_c("v-img", {
    attrs: {
      contain: "",
      src: "../../../../images/products/dslr-camera.png"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "text-uppercase p-absolute bottom-0 ma-5"
  }, [_vm._v("camera")])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "mb-4",
    attrs: {
      cols: "12",
      lg: "8"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6",
      lg: "6"
    }
  }, [_c("router-link", {
    staticClass: "text-decoration-none",
    attrs: {
      to: "/single-product"
    }
  }, [_c("base-card", {
    attrs: {
      cardHoverShadow: ""
    }
  }, [_c("div", {
    staticClass: "pa-5"
  }, [_c("v-img", {
    staticClass: "mx-auto mb-5",
    attrs: {
      "max-width": "280",
      src: "../../../../images/products/ps4.png"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "font-600"
  }, [_vm._v("GAMING")])], 1)])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      lg: "6"
    }
  }, [_c("router-link", {
    staticClass: "text-decoration-none",
    attrs: {
      to: "/single-product"
    }
  }, [_c("base-card", {
    attrs: {
      cardHoverShadow: ""
    }
  }, [_c("div", {
    staticClass: "pa-5"
  }, [_c("v-img", {
    staticClass: "mx-auto mb-5",
    attrs: {
      "max-width": "280",
      src: "../../../../images/products/apple-watch-4.png"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "font-600"
  }, [_vm._v("WATCH")])], 1)])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      lg: "6"
    }
  }, [_c("router-link", {
    staticClass: "text-decoration-none",
    attrs: {
      to: "/single-product"
    }
  }, [_c("base-card", {
    attrs: {
      cardHoverShadow: ""
    }
  }, [_c("div", {
    staticClass: "pa-5"
  }, [_c("v-img", {
    staticClass: "mx-auto mb-5",
    attrs: {
      "max-width": "280",
      src: "../../../../images/products/drone.png"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "font-600"
  }, [_vm._v("DRONE")])], 1)])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      lg: "6"
    }
  }, [_c("router-link", {
    staticClass: "text-decoration-none",
    attrs: {
      to: "/single-product"
    }
  }, [_c("base-card", {
    attrs: {
      cardHoverShadow: ""
    }
  }, [_c("div", {
    staticClass: "pa-5"
  }, [_c("v-img", {
    staticClass: "mx-auto mb-5",
    attrs: {
      "max-width": "280",
      src: "../../../../images/products/phone.png"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "font-600"
  }, [_vm._v("PHONE")])], 1)])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "mb-4",
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("base-card", {
    attrs: {
      cardHoverShadow: ""
    }
  }, [_c("div", {
    staticClass: "px-8",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$router.push({
          name: "home.buscar.productos"
        });
      }
    }
  }, [_c("v-row", {
    attrs: {
      align: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("h3", {
    staticClass: "mb-2"
  }, [_vm._v("Big Saves on Home Decoration. Save Upto 80%")]), _vm._v(" "), _c("p", {
    staticClass: "text-14 grey--text text--darken-2 mb-6"
  }, [_vm._v("\n                                Easy payment policy, 12 months 0% in interest.\n                            ")]), _vm._v(" "), _c("router-link", {
    staticClass: "text-decoration-none bb-primary black--text font-600",
    attrs: {
      to: {
        name: "home.buscar.productos"
      }
    }
  }, [_vm._v("\n                                SHOP NOW\n                            ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("v-img", {
    attrs: {
      height: "292",
      contain: "",
      src: "../../../../images/products/tableChair.png"
    }
  })], 1)], 1)], 1)])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "mb-4",
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("base-card", {
    staticClass: "grey darken-1 white--text",
    attrs: {
      cardHoverShadow: ""
    }
  }, [_c("div", {
    staticClass: "px-8",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.$router.push({
          name: "home.buscar.productos"
        });
      }
    }
  }, [_c("v-row", {
    attrs: {
      align: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("h3", {
    staticClass: "mb-2"
  }, [_vm._v("Big Saves on Home Decoration. Save Upto 80%")]), _vm._v(" "), _c("p", {
    staticClass: "text-14 grey--text text--lighten-1 mb-6"
  }, [_vm._v("\n                                Easy payment policy, 12 months 0% in interest.\n                            ")]), _vm._v(" "), _c("router-link", {
    staticClass: "text-decoration-none bb-primary white--text font-600",
    attrs: {
      to: {
        name: "home.buscar.productos"
      }
    }
  }, [_vm._v("\n                                SHOP NOW\n                            ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("v-img", {
    attrs: {
      height: "292",
      contain: "",
      src: "../../../../images/products/outfit.png"
    }
  })], 1)], 1)], 1)])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "px-0",
    attrs: {
      cols: "12"
    }
  }, [_vm.flashDeals.length > 0 ? _c("VueSlickCarousel", _vm._b({
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
  }, "VueSlickCarousel", _vm.slickSettings, false), _vm._l(_vm.flashDeals, function (item, index) {
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
  }), 1) : _vm._e()], 1), _vm._v(" "), _c("v-col", {
    staticClass: "px-0",
    attrs: {
      cols: "12"
    }
  }, [_vm.flashDeals.length > 0 ? _c("VueSlickCarousel", _vm._b({
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
  }, "VueSlickCarousel", _vm.slickSettingsSixItem, false), _vm._l(_vm.flashDeals, function (n, index) {
    return _c("v-col", {
      key: index,
      attrs: {
        cols: "12"
      },
      on: {
        click: function click($event) {
          return _vm.$router.push({
            name: "home.productos.unico",
            params: {
              id: _vm.item.id
            }
          });
        }
      }
    }, [_c("v-img", {
      staticClass: "mb-4 br-8 card-overlay-item",
      attrs: {
        contain: "",
        src: n.img
      }
    }), _vm._v(" "), _c("h5", {
      staticClass: "mb-1"
    }, [_vm._v(_vm._s(n.title))]), _vm._v(" "), _c("h5", {
      staticClass: "primary--text"
    }, [_vm._v(_vm._s(_vm._f("numberFormat")(n.price)))])], 1);
  }), 1) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-right-gradient[data-v-48aa0501] {\n  background-image: linear-gradient(90deg, white, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true&");

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

/***/ "./resources/js/Views/home/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/Views/home/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_48aa0501_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=48aa0501&scoped=true& */ "./resources/js/Views/home/index.vue?vue&type=template&id=48aa0501&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/Views/home/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_48aa0501_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true& */ "./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_48aa0501_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_48aa0501_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48aa0501",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/home/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/home/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Views/home/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48aa0501_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/index.vue?vue&type=style&index=0&id=48aa0501&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48aa0501_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48aa0501_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48aa0501_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_48aa0501_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Views/home/index.vue?vue&type=template&id=48aa0501&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Views/home/index.vue?vue&type=template&id=48aa0501&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48aa0501_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=48aa0501&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/home/index.vue?vue&type=template&id=48aa0501&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48aa0501_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_48aa0501_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/assets/images/banners/category-1.png":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/banners/category-1.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/category-1.png?b8455668cd2bb6a6e76bf0ace41b8e04";

/***/ }),

/***/ "./resources/js/assets/images/banners/category-2.png":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/banners/category-2.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/category-2.png?d64a39c05ec9c777767b730592fa6cf6";

/***/ }),

/***/ "./resources/js/assets/images/banners/category-3.png":
/*!***********************************************************!*\
  !*** ./resources/js/assets/images/banners/category-3.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/category-3.png?51d9e36c6412ef5212e68c3f34b0e9f6";

/***/ }),

/***/ "./resources/js/assets/images/brands/u.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/images/brands/u.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/u.png?8344e2ea92749d101cdfc854694370ac";

/***/ }),

/***/ "./resources/js/assets/images/brands/v.png":
/*!*************************************************!*\
  !*** ./resources/js/assets/images/brands/v.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/v.png?d45659326198299857632af1a17f62e6";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/10.SonyPS4.png":
/*!************************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/10.SonyPS4.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/10.SonyPS4.png?b9f95ae4eb2cf9b7a6bca65f01fbc129";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/11.Netgear2020.png":
/*!****************************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/11.Netgear2020.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/11.Netgear2020.png?acd45554409e23a728f877a55d54e788";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/12.SonyBGB.png":
/*!************************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/12.SonyBGB.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/12.SonyBGB.png?7a7da17234d4ee5df7a4952722079cd4";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/13.LGProducts.png":
/*!***************************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/13.LGProducts.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/13.LGProducts.png?48bb07b1ad2d303ec4112b217de92a5e";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/14.Panasonic2019.png":
/*!******************************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/14.Panasonic2019.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/14.Panasonic2019.png?f03d1e2b7a17bb11f842c3d20fdb669e";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/15.DuneHD.png":
/*!***********************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/15.DuneHD.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/15.DuneHD.png?d2e8843e737daf7cc3e00ebbe0fb4b10";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/19.LGWashingMachine.png":
/*!*********************************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/19.LGWashingMachine.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/19.LGWashingMachine.png?8cc0c4206e07dc60550fc128535db571";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/7.beatsw3.png":
/*!***********************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/7.beatsw3.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/7.beatsw3.png?b1063fdf1f89ed2d10cd1abb928dd9ac";

/***/ }),

/***/ "./resources/js/assets/images/products/Electronics/9.SonyTV1080p.png":
/*!***************************************************************************!*\
  !*** ./resources/js/assets/images/products/Electronics/9.SonyTV1080p.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/9.SonyTV1080p.png?fa74258f63eeb1bd1b4b4e7a33d9e43e";

/***/ }),

/***/ "./resources/js/assets/images/products/Fashion/Accessories/3.BrownCap.png":
/*!********************************************************************************!*\
  !*** ./resources/js/assets/images/products/Fashion/Accessories/3.BrownCap.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/3.BrownCap.png?83ebc2cd63ee92cf3e54f4fe445ad82c";

/***/ }),

/***/ "./resources/js/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png":
/*!*****************************************************************************************!*\
  !*** ./resources/js/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.SilverHighNeckSweater.png?4202456ba02bd1dc734c85a9c2145a54";

/***/ }),

/***/ "./resources/js/assets/images/products/Fashion/Clothes/10.LandsJacket.png":
/*!********************************************************************************!*\
  !*** ./resources/js/assets/images/products/Fashion/Clothes/10.LandsJacket.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/10.LandsJacket.png?8bcceb5036328aef66db049177f80a6e";

/***/ }),

/***/ "./resources/js/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png":
/*!*********************************************************************************!*\
  !*** ./resources/js/assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/3.NBLHoopHoodie.png?43b8b74dbb58bf1869fbe066f3fc1c7d";

/***/ }),

/***/ "./resources/js/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png":
/*!**********************************************************************************************!*\
  !*** ./resources/js/assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.Heavy22ktGoldNecklaceSet.png?d76b9fe642a88ead8fc231ca1ecc7a01";

/***/ }),

/***/ "./resources/js/assets/images/products/Fashion/Shoes/1.NikeRed.png":
/*!*************************************************************************!*\
  !*** ./resources/js/assets/images/products/Fashion/Shoes/1.NikeRed.png ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.NikeRed.png?c12650fab896c3f4e5431e99bf32e703";

/***/ }),

/***/ "./resources/js/assets/images/products/Fashion/Shoes/5.NikeBlue.png":
/*!**************************************************************************!*\
  !*** ./resources/js/assets/images/products/Fashion/Shoes/5.NikeBlue.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/5.NikeBlue.png?d913e2971bd680118a85ddc414dcd0cf";

/***/ }),

/***/ "./resources/js/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png":
/*!****************************************************************************************!*\
  !*** ./resources/js/assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/25.PaintedLeafBegoniaPlant.png?32a11962110797bef38eb810894be42e";

/***/ }),

/***/ "./resources/js/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png":
/*!***********************************************************************************!*\
  !*** ./resources/js/assets/images/products/Home&Garden/26.ArecaPalminClayPot.png ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/26.ArecaPalminClayPot.png?c06da80f271b13557b96967f76ed015a";

/***/ }),

/***/ "./resources/js/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png":
/*!*******************************************************************************************!*\
  !*** ./resources/js/assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/27.BlackCoralSansevieriaPlant.png?bb0124c777776f3f2f3098965108bf24";

/***/ }),

/***/ "./resources/js/assets/images/products/Music/1.6StringCheapElectricGuitar.png":
/*!************************************************************************************!*\
  !*** ./resources/js/assets/images/products/Music/1.6StringCheapElectricGuitar.png ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/1.6StringCheapElectricGuitar.png?08681cda58a0238a41f4d60e3f5d3f4b";

/***/ }),

/***/ "./resources/js/assets/images/products/Music/12.CheapUkuleleOffers.png":
/*!*****************************************************************************!*\
  !*** ./resources/js/assets/images/products/Music/12.CheapUkuleleOffers.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/12.CheapUkuleleOffers.png?252bd7b04179a0ab9de0a9e478a24869";

/***/ }),

/***/ "./resources/js/assets/images/products/Music/28.RolandFullSetVDrums.png":
/*!******************************************************************************!*\
  !*** ./resources/js/assets/images/products/Music/28.RolandFullSetVDrums.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/28.RolandFullSetVDrums.png?82660783e0d1d97ce09845182d0585c6";

/***/ }),

/***/ "./resources/js/assets/images/products/apple-watch-0.png":
/*!***************************************************************!*\
  !*** ./resources/js/assets/images/products/apple-watch-0.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/apple-watch-0.png?e7bae13fd5dbba4bf94a21f4300c5ced";

/***/ }),

/***/ "./resources/js/assets/images/products/bgwatch.png":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/products/bgwatch.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/bgwatch.png?65c09db840ba971b588b54330727bd8d";

/***/ }),

/***/ "./resources/js/assets/images/products/camera-1.png":
/*!**********************************************************!*\
  !*** ./resources/js/assets/images/products/camera-1.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/camera-1.png?fe9d70f4b5afa322b1f8dcc61214b789";

/***/ }),

/***/ "./resources/js/assets/images/products/imagegoggles.png":
/*!**************************************************************!*\
  !*** ./resources/js/assets/images/products/imagegoggles.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/imagegoggles.png?12c33feaa7fac063f6168000dbb5da59";

/***/ }),

/***/ "./resources/js/assets/images/products/jimandjiko.png":
/*!************************************************************!*\
  !*** ./resources/js/assets/images/products/jimandjiko.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/jimandjiko.png?5110364e781b6e955f11dddcce80d9ca";

/***/ }),

/***/ "./resources/js/assets/images/products/lipstick(2).png":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/lipstick(2).png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/lipstick(2).png?1db154b8aafcb28343d34cd03c1a7264";

/***/ }),

/***/ "./resources/js/assets/images/products/lipstick(3).png":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/lipstick(3).png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/lipstick(3).png?422bf95acb624b1100535ebf8f50ca38";

/***/ }),

/***/ "./resources/js/assets/images/products/lipstick(4).png":
/*!*************************************************************!*\
  !*** ./resources/js/assets/images/products/lipstick(4).png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/lipstick(4).png?21dc6f393361ff1ce22f4912e71cf224";

/***/ }),

/***/ "./resources/js/assets/images/products/london-britches.png":
/*!*****************************************************************!*\
  !*** ./resources/js/assets/images/products/london-britches.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/london-britches.png?c3ce0efa086c18d1b26523e2e02c1adb";

/***/ }),

/***/ "./resources/js/assets/images/products/mobile-1.png":
/*!**********************************************************!*\
  !*** ./resources/js/assets/images/products/mobile-1.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/mobile-1.png?84c625db6d160d6fa0fd420a6f7cdb5d";

/***/ }),

/***/ "./resources/js/assets/images/products/shoes-2.png":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/products/shoes-2.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/shoes-2.png?f9f48b58eb2f25cd33f85a7ea37880c7";

/***/ }),

/***/ "./resources/js/assets/images/products/watch-1.png":
/*!*********************************************************!*\
  !*** ./resources/js/assets/images/products/watch-1.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/watch-1.png?ac61d10802934126cbd55746f4a27e01";

/***/ })

}]);