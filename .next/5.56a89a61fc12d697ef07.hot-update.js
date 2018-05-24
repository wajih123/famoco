webpackHotUpdate(5,{

/***/ "./pages/people/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return People; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_swapi__ = __webpack_require__("./services/swapi.js");
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
var _jsxFileName = "C:\\Users\\wajih\\Desktop\\develop\\internship\\reactProjet\\famoco\\pages\\people\\index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var People =
/*#__PURE__*/
function (_React$Component) {
  _inherits(People, _React$Component);

  function People() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, People);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = People.__proto__ || Object.getPrototypeOf(People)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        results: []
      }
    }), _temp));
  }

  _createClass(People, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_1__services_swapi__["a" /* fetchPeople */])().then(function (res) {
        return _this2.setState({
          results: res.results
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "height"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "mass"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "hair_color"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "skin_color"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.state.results.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default.a, {
          onClick: function onClick() {
            return __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push({
              pathname: '/detailPerson',
              query: {
                p: item.url
              }
            });
          },
          key: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          component: "th",
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, item.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, item.height), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, item.mass), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, item.hair_color), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, item.skin_color));
      }), ")}")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return People;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(People, "People", "C:\\Users\\wajih\\Desktop\\develop\\internship\\reactProjet\\famoco\\pages\\people\\index.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/people\\index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.56a89a61fc12d697ef07.hot-update.js.map