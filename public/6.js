(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/proveedor/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/proveedor/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      dialog: false,
      dialogEdit: false,
      dialogDelete: false,
      headers: [{
        text: 'Razon Social',
        align: 'start',
        sortable: false,
        value: 'razon_social'
      }, {
        text: 'Nombre Comercial',
        value: 'nombre_comercial'
      }, {
        text: 'N.I.T.',
        value: 'nit'
      }, {
        text: 'Cantidad de productos',
        value: 'cantidad_de_productos'
      }, {
        text: 'Estado',
        value: 'state'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      editedIndex: -1,
      model: {
        razon_social: '',
        nombre_comercial: '',
        nit: '',
        state: false
      },
      modelEdit: {
        razon_social: '',
        nombre_comercial: '',
        nit: '',
        state: false
      },
      items_proveedores: [],
      dialogUploadExcelProducto: false,
      titleProveedor: '',
      model_productos: {
        productos: [],
        proveedor: null
      },
      idProveedor: null
    };
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    parseDataExcel: function parseDataExcel() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (data.length <= 0) return null;
      for (var index = 0; index < data.length; index++) {
        var element = data[index];
        var modelExcel = {
          ID: this.isset(element.ID),
          categoria: this.isset(element.categoria),
          descripcion: this.isset(element.descripcion),
          descripcion_corta: this.isset(element.descripcion_corta),
          destacado: this.isset(element.destacado),
          imagenes: this.isset(element.imagenes),
          nombre: this.isset(element.nombre),
          precio_normal: this.isset(element.precio_normal),
          sku: this.isset(element.sku),
          tipo: this.isset(element.tipo)
        };
        this.model_productos.productos.push(modelExcel);
      }
    },
    isset: function isset() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (typeof el !== "undefined" && el !== null) {
        return el;
      } else {
        return '';
      }
    },
    readExcelFile: function readExcelFile(file) {
      var _this = this;
      var reader = new FileReader();
      reader.onload = function (event) {
        var data = new Uint8Array(event.target.result);
        var workbook = xlsx__WEBPACK_IMPORTED_MODULE_0__["read"](data, {
          type: 'array'
        });
        var worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var jsonData = xlsx__WEBPACK_IMPORTED_MODULE_0__["utils"].sheet_to_json(worksheet);
        _this.parseDataExcel(jsonData);
      };
      reader.readAsArrayBuffer(file);
    },
    cargarProductosMasivos: function cargarProductosMasivos() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.post('/api/add-producto-masivamente', _this2.model_productos);
            case 3:
              _this2.dialogUploadExcelProducto = false;
              _this2.initialize();
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    openProductosMasivos: function openProductosMasivos() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var proveedor;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              proveedor = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              try {
                _this3.model_productos.proveedor = proveedor.id;
                _this3.dialogUploadExcelProducto = true;
                _this3.titleProveedor = proveedor.razon_social;
              } catch (error) {
                console.log(error);
              }
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    initialize: function initialize() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios('/api/get-proveedores');
            case 3:
              _yield$axios = _context3.sent;
              data = _yield$axios.data;
              _this4.items_proveedores = data;
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    editItem: function editItem(item) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _yield$axios2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios("/api/get-proveedor/".concat(item.id));
            case 2:
              _yield$axios2 = _context4.sent;
              data = _yield$axios2.data;
              _this5.modelEdit = data;
              _this5.dialogEdit = true;
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    updateProveedor: function updateProveedor() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios.put("/api/update-proveedor/".concat(_this6.modelEdit.id), _this6.modelEdit);
            case 3:
              _this6.dialogEdit = false;
              _this6.initialize();
              _context5.next = 10;
              break;
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }))();
    },
    deleteItem: function deleteItem(item) {
      this.idProveedor = item.id;
      this.dialogDelete = true;
    },
    deleteProveedor: function deleteProveedor(item) {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios["delete"]("/api/delete-proveedor/".concat(_this7.idProveedor));
            case 2:
              _this7.dialogDelete = false;
              _this7.initialize();
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    close: function close() {
      this.dialog = false;
    },
    closeEdit: function closeEdit() {
      this.dialogEdit = false;
    },
    closeDelete: function closeDelete() {
      var _this8 = this;
      this.dialogDelete = false;
      this.$nextTick(function () {
        _this8.editedItem = Object.assign({}, _this8.defaultItem);
        _this8.editedIndex = -1;
      });
    },
    save: function save() {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _yield$axios$post, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios.post('/api/add-proveedor', _this9.model);
            case 3:
              _yield$axios$post = _context7.sent;
              data = _yield$axios$post.data;
              _this9.initialize();
              _this9.dialog = false;
              _this9.model = {
                razon_social: '',
                nombre_comercial: '',
                nit: '',
                state: false
              };
              _context7.next = 13;
              break;
            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](0);
              console.log(_context7.t0);
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/proveedor/index.vue?vue&type=template&id=39b70512&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/proveedor/index.vue?vue&type=template&id=39b70512& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "p-4"
  }, [_c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      search: _vm.search,
      items: _vm.items_proveedores,
      "sort-by": "calories"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function fn() {
        return [_c("v-toolbar", {
          attrs: {
            flat: ""
          }
        }, [_c("v-toolbar-title", [_vm._v("Proveedores")]), _vm._v(" "), _c("v-divider", {
          staticClass: "mx-4",
          attrs: {
            inset: "",
            vertical: ""
          }
        }), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-text-field", {
          attrs: {
            "append-icon": "mdi-magnify",
            label: "Search",
            "single-line": "",
            "hide-details": ""
          },
          model: {
            value: _vm.search,
            callback: function callback($$v) {
              _vm.search = $$v;
            },
            expression: "search"
          }
        }), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "500px"
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref) {
              var on = _ref.on,
                attrs = _ref.attrs;
              return [_c("v-btn", _vm._g(_vm._b({
                attrs: {
                  small: "",
                  dense: "",
                  fab: "",
                  dark: "",
                  color: "indigo"
                }
              }, "v-btn", attrs, false), on), [_c("v-icon", {
                attrs: {
                  dark: "",
                  dense: "",
                  small: ""
                }
              }, [_vm._v("\n                                mdi-plus\n                            ")])], 1)];
            }
          }]),
          model: {
            value: _vm.dialog,
            callback: function callback($$v) {
              _vm.dialog = $$v;
            },
            expression: "dialog"
          }
        }, [_vm._v(" "), _c("v-card", [_c("v-card-title", [_c("span", {
          staticClass: "text-h5"
        }, [_vm._v("Agregar Proveedor")])]), _vm._v(" "), _c("v-card-text", [_c("v-container", [_c("v-row", [_c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Razon Social"
          },
          model: {
            value: _vm.model.razon_social,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "razon_social", $$v);
            },
            expression: "model.razon_social"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Nombre Comercial"
          },
          model: {
            value: _vm.model.nombre_comercial,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "nombre_comercial", $$v);
            },
            expression: "model.nombre_comercial"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "N.I.T."
          },
          model: {
            value: _vm.model.nit,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "nit", $$v);
            },
            expression: "model.nit"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-switch", {
          attrs: {
            label: "".concat(_vm.model.state.toString() == "true" ? "Activo" : "Inactivo")
          },
          model: {
            value: _vm.model.state,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "state", $$v);
            },
            expression: "model.state"
          }
        })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "blue darken-1",
            text: ""
          },
          on: {
            click: _vm.close
          }
        }, [_vm._v("\n                                Cancel\n                            ")]), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "blue darken-1",
            text: ""
          },
          on: {
            click: _vm.save
          }
        }, [_vm._v("\n                                Save\n                            ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "500px"
          },
          model: {
            value: _vm.dialogEdit,
            callback: function callback($$v) {
              _vm.dialogEdit = $$v;
            },
            expression: "dialogEdit"
          }
        }, [_c("v-card", [_c("v-card-title", [_c("span", {
          staticClass: "text-h5"
        }, [_vm._v("Edit Proveedor")])]), _vm._v(" "), _c("v-card-text", [_c("v-container", [_c("v-row", [_c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Razon Social"
          },
          model: {
            value: _vm.modelEdit.razon_social,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "razon_social", $$v);
            },
            expression: "modelEdit.razon_social"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Nombre Comercial"
          },
          model: {
            value: _vm.modelEdit.nombre_comercial,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "nombre_comercial", $$v);
            },
            expression: "modelEdit.nombre_comercial"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "N.I.T."
          },
          model: {
            value: _vm.modelEdit.nit,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "nit", $$v);
            },
            expression: "modelEdit.nit"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-switch", {
          attrs: {
            label: "".concat(_vm.modelEdit.state.toString() == "true" || _vm.modelEdit.state == 1 ? "Activo" : "Inactivo")
          },
          model: {
            value: _vm.modelEdit.state,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "state", $$v);
            },
            expression: "modelEdit.state"
          }
        })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "blue darken-1",
            text: ""
          },
          on: {
            click: _vm.closeEdit
          }
        }, [_vm._v("\n                                Cancel\n                            ")]), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "blue darken-1",
            text: ""
          },
          on: {
            click: _vm.updateProveedor
          }
        }, [_vm._v("\n                                Save\n                            ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "600px"
          },
          model: {
            value: _vm.dialogDelete,
            callback: function callback($$v) {
              _vm.dialogDelete = $$v;
            },
            expression: "dialogDelete"
          }
        }, [_c("v-card", [_c("v-card-title", {
          staticClass: "text-h5t"
        }, [_vm._v("Esta Seguro que desea eliminar el proveedor ?")]), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "blue darken-1",
            text: ""
          },
          on: {
            click: _vm.closeDelete
          }
        }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "blue darken-1",
            text: ""
          },
          on: {
            click: _vm.deleteProveedor
          }
        }, [_vm._v("OK")]), _vm._v(" "), _c("v-spacer")], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "500px"
          },
          model: {
            value: _vm.dialogUploadExcelProducto,
            callback: function callback($$v) {
              _vm.dialogUploadExcelProducto = $$v;
            },
            expression: "dialogUploadExcelProducto"
          }
        }, [_c("v-card", [_c("v-card-title", {
          staticClass: "text-h5"
        }, [_vm._v("Cargar Productos para: " + _vm._s(_vm.titleProveedor))]), _vm._v(" "), _c("v-card-text", [_c("v-file-input", {
          attrs: {
            "show-size": "",
            label: "File input"
          },
          on: {
            change: _vm.readExcelFile
          }
        })], 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "blue darken-1",
            text: ""
          },
          on: {
            click: function click($event) {
              _vm.dialogUploadExcelProducto = false;
            }
          }
        }, [_vm._v("Cancelar")]), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "blue darken-1",
            text: ""
          },
          on: {
            click: _vm.cargarProductosMasivos
          }
        }, [_vm._v("Cargar")]), _vm._v(" "), _c("v-spacer")], 1)], 1)], 1)], 1)];
      },
      proxy: true
    }, {
      key: "item.actions",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("v-icon", {
          staticClass: "mr-2",
          attrs: {
            small: ""
          },
          on: {
            click: function click($event) {
              return _vm.editItem(item);
            }
          }
        }, [_vm._v("\n                mdi-pencil\n            ")]), _vm._v(" "), _c("v-icon", {
          attrs: {
            small: ""
          },
          on: {
            click: function click($event) {
              return _vm.deleteItem(item);
            }
          }
        }, [_vm._v("\n                mdi-delete\n            ")]), _vm._v(" "), _c("v-icon", {
          attrs: {
            small: ""
          },
          on: {
            click: function click($event) {
              return _vm.openProductosMasivos(item);
            }
          }
        }, [_vm._v("\n                mdi-upload\n            ")])];
      }
    }, {
      key: "item.state",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [_vm._v("\n            " + _vm._s(item.state ? "ACTIVO" : "INACTIVO") + "\n        ")];
      }
    }, {
      key: "item.cantidad_de_productos",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_vm._v("\n            " + _vm._s(item.cantidad_de_productos.length) + "\n        ")];
      }
    }, {
      key: "no-data",
      fn: function fn() {
        return [_c("span", [_vm._v("No hay datos disponibles")])];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Views/proveedor/index.vue":
/*!************************************************!*\
  !*** ./resources/js/Views/proveedor/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_39b70512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=39b70512& */ "./resources/js/Views/proveedor/index.vue?vue&type=template&id=39b70512&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/Views/proveedor/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_39b70512___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_39b70512___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/proveedor/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/proveedor/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Views/proveedor/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/proveedor/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/proveedor/index.vue?vue&type=template&id=39b70512&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Views/proveedor/index.vue?vue&type=template&id=39b70512& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_39b70512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=39b70512& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/proveedor/index.vue?vue&type=template&id=39b70512&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_39b70512___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_39b70512___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);