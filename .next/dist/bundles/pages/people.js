module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/people/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return People; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_swapi__ = __webpack_require__("./services/swapi.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table__ = __webpack_require__("@material-ui/core/Table");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody__ = __webpack_require__("@material-ui/core/TableBody");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableCell__ = __webpack_require__("@material-ui/core/TableCell");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableCell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_TableCell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead__ = __webpack_require__("@material-ui/core/TableHead");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow__ = __webpack_require__("@material-ui/core/TableRow");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper__);
var _jsxFileName = "C:\\Users\\wajih\\Desktop\\develop\\internship\\reactProjet\\famoco\\pages\\people\\index.js";

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_core_Paper___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Table___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_TableHead___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_TableRow___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "height"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "mass"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "hair_color"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "skin_color"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableBody___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
            lineNumber: 52
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          component: "th",
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, item.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, item.height), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, item.mass), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, item.hair_color), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CustomTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, item.skin_color));
      }))));
    }
  }]);

  return People;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./services/swapi.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchPeople; });
/* unused harmony export fetchDetails */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fetch_everywhere__ = __webpack_require__("fetch-everywhere");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fetch_everywhere___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fetch_everywhere__);

var fetchPeople = function fetchPeople() {
  return __WEBPACK_IMPORTED_MODULE_0_fetch_everywhere___default()("https://swapi.co/api/people/").then(function (response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }).then(function (response) {
    return response.json();
  }).then(function (res) {
    return Promise.resolve(res);
  });
};
var fetchDetails = function fetchDetails(_id) {
  return __WEBPACK_IMPORTED_MODULE_0_fetch_everywhere___default()(_id).then(function (response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }).then(function (response) {
    return response.json();
  }).then(function (res) {
    return Promise.resolve(res);
  });
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/people/index.js");


/***/ }),

/***/ "@material-ui/core/Paper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "fetch-everywhere":
/***/ (function(module, exports) {

module.exports = require("fetch-everywhere");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=people.js.map