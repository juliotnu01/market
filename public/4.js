(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/productos/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/productos/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        text: 'Nombre del producto',
        align: 'start',
        sortable: false,
        value: 'nombre'
      }, {
        text: 'Descripción',
        value: 'descripcion'
      }, {
        text: 'Descripción Corta.',
        value: 'descripcion_corta'
      }, {
        text: 'Tipo',
        value: 'tipo'
      }, {
        text: 'Categoria',
        value: 'categoría'
      }, {
        text: 'Precio',
        value: 'precio_normal'
      }, {
        text: 'SKU',
        value: 'sku'
      }, {
        text: 'Producto Destacado',
        value: 'destacaado'
      }, {
        text: 'Imagen',
        value: 'imagen'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      model: {
        categoria: '',
        descripcion: '',
        descripcion_corta: '',
        destacado: false,
        imagen: '',
        nombre: '',
        precio_normal: '',
        sku: '',
        tipo: ''
      },
      modelEdit: {
        categoria: '',
        descripcion: '',
        descripcion_corta: '',
        destacado: false,
        imagen: '',
        nombre: '',
        precio_normal: '',
        sku: '',
        tipo: ''
      },
      urlIMG: '',
      items_productos: []
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
    handlerIMGproducto: function handlerIMGproducto(object) {
      this.model.imagen = object;
      this.urlIMG = URL.createObjectURL(object);
    },
    handlerIMGproductoEdit: function handlerIMGproductoEdit(object) {
      this.modelEdit.imagen = object;
      this.urlIMG = URL.createObjectURL(object);
    },
    openProductosMasivos: function openProductosMasivos() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var proveedor;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              proveedor = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              try {
                _this.model_productos.proveedor = proveedor.id;
                _this.dialogUploadExcelProducto = true;
                _this.titleProveedor = proveedor.razon_social;
              } catch (error) {
                console.log(error);
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    initialize: function initialize() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$axios, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios('/api/get-productos');
            case 3:
              _yield$axios = _context2.sent;
              data = _yield$axios.data;
              _this2.items_productos = data;
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    editItem: function editItem(item) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _yield$axios2, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios("/api/get-producto/".concat(item.id));
            case 2:
              _yield$axios2 = _context3.sent;
              data = _yield$axios2.data;
              _this3.modelEdit = data;
              _this3.urlIMG = data.imagen;
              _this3.dialogEdit = true;
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    editarProducto: function editarProducto() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var formData;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              formData = new FormData();
              formData.append('categoria', _this4.modelEdit.categoria);
              formData.append('descripcion', _this4.modelEdit.descripcion);
              formData.append('descripcion_corta', _this4.modelEdit.descripcion_corta);
              formData.append('destacado', _this4.modelEdit.destacado);
              formData.append('imagen', _this4.modelEdit.imagen);
              formData.append('nombre', _this4.modelEdit.nombre);
              formData.append('precio_normal', _this4.modelEdit.precio_normal);
              formData.append('sku', _this4.modelEdit.sku);
              formData.append('tipo', _this4.modelEdit.tipo);
              _context4.next = 13;
              return axios.put("/api/update-producto/".concat(_this4.modelEdit.id), formData, {
                headers: {
                  'Content-Type': "multipart/form-data"
                }
              });
            case 13:
              _this4.initialize();
              _this4.dialogEdit = false;
              _context4.next = 20;
              break;
            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
            case 20:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 17]]);
      }))();
    },
    deleteItem: function deleteItem(item) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _this5.dialogDelete = true;
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    close: function close() {
      this.dialog = false;
    },
    closeEdit: function closeEdit() {
      this.dialogEdit = false;
    },
    closeDelete: function closeDelete() {
      var _this6 = this;
      this.dialogDelete = false;
      this.$nextTick(function () {
        _this6.editedItem = Object.assign({}, _this6.defaultItem);
        _this6.editedIndex = -1;
      });
    },
    save: function save() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var formData;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              formData = new FormData();
              formData.append('categoria', _this7.model.categoria);
              formData.append('descripcion', _this7.model.descripcion);
              formData.append('descripcion_corta', _this7.model.descripcion_corta);
              formData.append('destacado', _this7.model.destacado);
              formData.append('imagen', _this7.model.imagen);
              formData.append('nombre', _this7.model.nombre);
              formData.append('precio_normal', _this7.model.precio_normal);
              formData.append('sku', _this7.model.sku);
              formData.append('tipo', _this7.model.tipo);
              console.log(_this7.model.imagen);
              _context6.next = 14;
              return axios.post('/api/add-producto', formData, {
                headers: {
                  'Content-Type': "multipart/form-data"
                }
              });
            case 14:
              _this7.initialize();
              _this7.dialog = false;
              _this7.model = {
                categoria: '',
                descripcion: '',
                descripcion_corta: '',
                destacado: false,
                imagenes: '',
                nombre: '',
                precio_normal: '',
                sku: '',
                tipo: ''
              };
              _context6.next = 22;
              break;
            case 19:
              _context6.prev = 19;
              _context6.t0 = _context6["catch"](0);
              console.log(_context6.t0);
            case 22:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 19]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/productos/index.vue?vue&type=template&id=96f4d1f2&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/productos/index.vue?vue&type=template&id=96f4d1f2& ***!
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
      items: _vm.items_productos,
      "sort-by": "calories"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function fn() {
        return [_c("v-toolbar", {
          attrs: {
            flat: ""
          }
        }, [_c("v-toolbar-title", [_vm._v("Productos")]), _vm._v(" "), _c("v-divider", {
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
            "max-width": "900px"
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
        }, [_vm._v("Agregar Producto")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-switch", {
          attrs: {
            label: "".concat(_vm.model.destacado.toString() == "true" ? "Destacado" : "")
          },
          model: {
            value: _vm.model.destacado,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "destacado", $$v);
            },
            expression: "model.destacado"
          }
        })], 1), _vm._v(" "), _c("v-img", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.urlIMG,
            expression: "urlIMG"
          }],
          staticStyle: {
            margin: "2%"
          },
          attrs: {
            height: "250",
            src: _vm.urlIMG
          }
        }), _vm._v(" "), _c("v-card-text", [_c("v-container", [_c("v-row", [_c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-file-input", {
          attrs: {
            "show-size": "",
            counter: "",
            label: "Seleccione imagen del producto"
          },
          on: {
            change: _vm.handlerIMGproducto
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Nombre del producto"
          },
          model: {
            value: _vm.model.nombre,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "nombre", $$v);
            },
            expression: "model.nombre"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            type: "number",
            label: "Precio del producto"
          },
          model: {
            value: _vm.model.precio_normal,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "precio_normal", $$v);
            },
            expression: "model.precio_normal"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "SKU"
          },
          model: {
            value: _vm.model.sku,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "sku", $$v);
            },
            expression: "model.sku"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Tipo"
          },
          model: {
            value: _vm.model.tipo,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "tipo", $$v);
            },
            expression: "model.tipo"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Categoria"
          },
          model: {
            value: _vm.model.categoria,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "categoria", $$v);
            },
            expression: "model.categoria"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("v-textarea", {
          attrs: {
            label: "Descripcion"
          },
          model: {
            value: _vm.model.descripcion,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "descripcion", $$v);
            },
            expression: "model.descripcion"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("v-textarea", {
          attrs: {
            label: "Descripcion corta"
          },
          model: {
            value: _vm.model.descripcion_corta,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "descripcion_corta", $$v);
            },
            expression: "model.descripcion_corta"
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
            "max-width": "900px"
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
        }, [_vm._v("Editar Producto")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-switch", {
          attrs: {
            label: "".concat(_vm.model.destacado.toString() == "true" ? "Destacado" : "")
          },
          model: {
            value: _vm.model.destacado,
            callback: function callback($$v) {
              _vm.$set(_vm.model, "destacado", $$v);
            },
            expression: "model.destacado"
          }
        })], 1), _vm._v(" "), _c("v-img", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.urlIMG,
            expression: "urlIMG"
          }],
          staticStyle: {
            margin: "2%"
          },
          attrs: {
            height: "250",
            src: _vm.urlIMG
          }
        }), _vm._v(" "), _c("v-card-text", [_c("v-container", [_c("v-row", [_c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("v-file-input", {
          attrs: {
            "show-size": "",
            counter: "",
            label: "Seleccione imagen del producto"
          },
          on: {
            change: _vm.handlerIMGproductoEdit
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Nombre del producto"
          },
          model: {
            value: _vm.modelEdit.nombre,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "nombre", $$v);
            },
            expression: "modelEdit.nombre"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            type: "number",
            label: "Precio del producto"
          },
          model: {
            value: _vm.modelEdit.precio_normal,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "precio_normal", $$v);
            },
            expression: "modelEdit.precio_normal"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "4"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "SKU"
          },
          model: {
            value: _vm.modelEdit.sku,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "sku", $$v);
            },
            expression: "modelEdit.sku"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Tipo"
          },
          model: {
            value: _vm.modelEdit.tipo,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "tipo", $$v);
            },
            expression: "modelEdit.tipo"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("v-text-field", {
          attrs: {
            label: "Categoria"
          },
          model: {
            value: _vm.modelEdit.categoria,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "categoria", $$v);
            },
            expression: "modelEdit.categoria"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("v-textarea", {
          attrs: {
            label: "Descripcion"
          },
          model: {
            value: _vm.modelEdit.descripcion,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "descripcion", $$v);
            },
            expression: "modelEdit.descripcion"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("v-textarea", {
          attrs: {
            label: "Descripcion corta"
          },
          model: {
            value: _vm.modelEdit.descripcion_corta,
            callback: function callback($$v) {
              _vm.$set(_vm.modelEdit, "descripcion_corta", $$v);
            },
            expression: "modelEdit.descripcion_corta"
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
            click: _vm.editarProducto
          }
        }, [_vm._v("\n                                Save\n                            ")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "500px"
          },
          model: {
            value: _vm.dialogDelete,
            callback: function callback($$v) {
              _vm.dialogDelete = $$v;
            },
            expression: "dialogDelete"
          }
        }, [_c("v-card", [_c("v-card-title", {
          staticClass: "text-h5"
        }, [_vm._v("Are you sure you want to delete this item?")]), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-spacer")], 1)], 1)], 1)], 1)];
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
        }, [_vm._v("\n                mdi-delete\n            ")])];
      }
    }, {
      key: "item.imagen",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [_c("img", {
          attrs: {
            src: item.imagen,
            width: "50"
          }
        })];
      }
    }, {
      key: "item.state",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_vm._v("\n            " + _vm._s(item.state ? "ACTIVO" : "INACTIVO") + "\n        ")];
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

/***/ "./resources/js/Views/productos/index.vue":
/*!************************************************!*\
  !*** ./resources/js/Views/productos/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_96f4d1f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=96f4d1f2& */ "./resources/js/Views/productos/index.vue?vue&type=template&id=96f4d1f2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/Views/productos/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_96f4d1f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_96f4d1f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/productos/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/productos/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Views/productos/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/productos/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/productos/index.vue?vue&type=template&id=96f4d1f2&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Views/productos/index.vue?vue&type=template&id=96f4d1f2& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_96f4d1f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=96f4d1f2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/productos/index.vue?vue&type=template&id=96f4d1f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_96f4d1f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_96f4d1f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);