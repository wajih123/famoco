webpackHotUpdate(6,{

/***/ "./pages/detailPerson/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailsPerson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table__ = __webpack_require__("./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody__ = __webpack_require__("./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableCell__ = __webpack_require__("./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableCell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableCell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead__ = __webpack_require__("./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow__ = __webpack_require__("./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper__ = __webpack_require__("./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_swapi__ = __webpack_require__("./services/swapi.js");

var _jsxFileName = "C:\\Users\\wajih\\Desktop\\develop\\internship\\reactProjet\\famoco\\pages\\detailPerson\\index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var DetailsPerson =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DetailsPerson, _React$Component);

  function DetailsPerson() {
    _classCallCheck(this, DetailsPerson);

    return _possibleConstructorReturn(this, (DetailsPerson.__proto__ || Object.getPrototypeOf(DetailsPerson)).apply(this, arguments));
  }

  _createClass(DetailsPerson, [{
    key: "render",
    value: function render() {
      var CustomTableCell = Object(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["withStyles"])(function (theme) {
        return {
          head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white
          },
          body: {
            fontSize: 14
          }
        };
      })(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableCell___default.a);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, " name "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, " homeworld "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "films "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, " species"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, " vehicles "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, " starships "))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, " ", this.props.results.name, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, " ", this.props.results.homeworld, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, " ", this.props.results.films, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, " ", this.props.results.species, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, " ", this.props.results.vehicles, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, " ", this.props.results.starships, " ")))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, results;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_10__services_swapi__["a" /* fetchDetails */])(query.p);

              case 3:
                results = _context.sent;
                return _context.abrupt("return", {
                  results: results
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return DetailsPerson;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DetailsPerson, "DetailsPerson", "C:\\Users\\wajih\\Desktop\\develop\\internship\\reactProjet\\famoco\\pages\\detailPerson\\index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/detailPerson\\index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.3f6936a27148be672abe.hot-update.js.map