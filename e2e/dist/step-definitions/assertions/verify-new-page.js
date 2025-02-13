"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _webElementHelper = require("../../support/web-element-helper");
var _htmlBehavior = require("../../support/html-behavior");
var _logger = require("../../logger");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the title "(.*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(elementPosition, negate, expectedTitle) {
    var _elementPosition$matc;
    var globalConfig, _this$screen, page, context, pageIndex;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          globalConfig = this.globalConfig, _this$screen = this.screen, page = _this$screen.page, context = _this$screen.context;
          _logger.logger.log("the ".concat(elementPosition, " window|tab should ").concat(negate ? 'not ' : '', "contain the title ").concat(expectedTitle));
          pageIndex = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
          _context2.next = 5;
          return page.waitForTimeout(2000);
        case 5:
          _context2.next = 7;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var pages, pageTitle;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  pages = context.pages();
                  _context.next = 3;
                  return (0, _htmlBehavior.getTitleWithinPage)(page, pages, pageIndex);
                case 3:
                  pageTitle = _context.sent;
                  if (!((pageTitle === null || pageTitle === void 0 ? void 0 : pageTitle.includes(expectedTitle)) === !negate)) {
                    _context.next = 8;
                    break;
                  }
                  return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 8:
                  return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), globalConfig, {
            target: expectedTitle,
            failureMessage: "\uD83E\uDDE8 Expected page to ".concat(negate ? 'not ' : '', "contain the title ").concat(expectedTitle, " \uD83E\uDDE8")
          });
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? be displayed$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(elementKey, elementPosition, negate) {
    var _elementPosition$matc2;
    var _this$screen2, page, context, globalConfig, pageIndex, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _this$screen2 = this.screen, page = _this$screen2.page, context = _this$screen2.context, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " on the ").concat(elementPosition, " window|tab should ").concat(negate ? 'not ' : '', "be displayed"));
          pageIndex = Number((_elementPosition$matc2 = elementPosition.match(/\d/g)) === null || _elementPosition$matc2 === void 0 ? void 0 : _elementPosition$matc2.join('')) - 1;
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context4.next = 6;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var pages, isElementVisible;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  pages = context.pages();
                  _context3.next = 3;
                  return (0, _htmlBehavior.getElementOnPage)(page, elementIdentifier, pages, pageIndex);
                case 3:
                  _context3.t0 = _context3.sent;
                  isElementVisible = _context3.t0 != null;
                  if (!(isElementVisible === !negate)) {
                    _context3.next = 9;
                    break;
                  }
                  return _context3.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 9:
                  return _context3.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " on page to ").concat(negate ? 'not ' : '', "be displayed \uD83E\uDDE8")
          });
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  }));
  return function (_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(elementKey, elementPosition, negate, expectedElementText) {
    var _elementPosition$matc3;
    var _this$screen3, page, context, globalConfig, pageIndex, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _this$screen3 = this.screen, page = _this$screen3.page, context = _this$screen3.context, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " on the ").concat(elementPosition, " window|tab should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));
          pageIndex = Number((_elementPosition$matc3 = elementPosition.match(/\d/g)) === null || _elementPosition$matc3 === void 0 ? void 0 : _elementPosition$matc3.join('')) - 1;
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context6.next = 6;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var pages, elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  pages = context.pages();
                  _context5.next = 3;
                  return (0, _waitForBehavior.waitForSelectorOnPage)(page, elementIdentifier, pages, pageIndex);
                case 3:
                  elementStable = _context5.sent;
                  if (!elementStable) {
                    _context5.next = 15;
                    break;
                  }
                  _context5.next = 7;
                  return (0, _htmlBehavior.getElementTextWithinPage)(page, elementIdentifier, pages, pageIndex);
                case 7:
                  elementText = _context5.sent;
                  if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate)) {
                    _context5.next = 12;
                    break;
                  }
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 12:
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 13:
                  _context5.next = 16;
                  break;
                case 15:
                  return _context5.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 16:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " on page to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText, " \uD83E\uDDE8")
          });
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6, this);
  }));
  return function (_x9, _x10, _x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? equal the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(elementKey, elementPosition, negate, expectedElementText) {
    var _elementPosition$matc4;
    var _this$screen4, page, context, globalConfig, pageIndex, elementIdentifier;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _this$screen4 = this.screen, page = _this$screen4.page, context = _this$screen4.context, globalConfig = this.globalConfig;
          _logger.logger.log("the ".concat(elementKey, " on the ").concat(elementPosition, " window|tab should ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText));
          pageIndex = Number((_elementPosition$matc4 = elementPosition.match(/\d/g)) === null || _elementPosition$matc4 === void 0 ? void 0 : _elementPosition$matc4.join('')) - 1;
          elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
          _context8.next = 6;
          return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var pages, elementStable, elementText;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  pages = context.pages();
                  _context7.next = 3;
                  return (0, _waitForBehavior.waitForSelectorOnPage)(page, elementIdentifier, pages, pageIndex);
                case 3:
                  elementStable = _context7.sent;
                  if (!elementStable) {
                    _context7.next = 15;
                    break;
                  }
                  _context7.next = 7;
                  return pages[pageIndex].textContent(elementIdentifier);
                case 7:
                  elementText = _context7.sent;
                  if (!(elementText === expectedElementText === !negate)) {
                    _context7.next = 12;
                    break;
                  }
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.PASS);
                case 12:
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.FAIL);
                case 13:
                  _context7.next = 16;
                  break;
                case 15:
                  return _context7.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);
                case 16:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          })), globalConfig, {
            target: elementKey,
            failureMessage: "\uD83E\uDDE8 Expected ".concat(elementKey, " on page to ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText, " \uD83E\uDDE8")
          });
        case 6:
        case "end":
          return _context8.stop();
      }
    }, _callee8, this);
  }));
  return function (_x14, _x15, _x16, _x17, _x18) {
    return _ref7.apply(this, arguments);
  };
}());