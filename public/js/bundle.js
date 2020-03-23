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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App(game) {\n    _classCallCheck(this, App);\n\n    this._game = game;\n  }\n\n  _createClass(App, [{\n    key: \"setup\",\n    value: function setup() {\n      this._game.init(); // Any setup that is required that only runs once before game loads goes here\n\n\n      this.gameLoop();\n    }\n  }, {\n    key: \"gameLoop\",\n    value: function gameLoop() {\n      // need to bind the current this reference to the callback\n      requestAnimationFrame(this.gameLoop.bind(this));\n\n      this._game.render();\n    }\n  }]);\n\n  return App;\n}();\n\nwindow.onload = function () {\n  var app = new App(new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n  app.setup();\n};\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/assets/imgs/bg.png":
/*!***********************************!*\
  !*** ./src/js/assets/imgs/bg.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b63b6d0ca7a5fd84c4d6ba1fed8e5177.png\");\n\n//# sourceURL=webpack:///./src/js/assets/imgs/bg.png?");

/***/ }),

/***/ "./src/js/assets/imgs/ship.png":
/*!*************************************!*\
  !*** ./src/js/assets/imgs/ship.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"461335650597f7b4da8099a1e6950734.png\");\n\n//# sourceURL=webpack:///./src/js/assets/imgs/ship.png?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _models_background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/background */ \"./src/js/models/background.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.canvas = document.getElementById(\"background\");\n    this.ctx = this.canvas.getContext(\"2d\");\n  }\n\n  _createClass(Game, [{\n    key: \"init\",\n    value: function init() {\n      this.background = new _models_background__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 0, 1, this.canvas.width, this.canvas.height, this.ctx);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(\"rendering\");\n      this.background.draw();\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/interfaces/drawable-interface.js":
/*!*************************************************!*\
  !*** ./src/js/interfaces/drawable-interface.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\r\n * Creates the Drawable object which will be the base class for\r\n * all drawable objects in the game. Sets up default variables\r\n * that all child objects will inherit, as well as the default\r\n * functions.\r\n */\nvar Drawable = /*#__PURE__*/function () {\n  function Drawable(x, y, speed, canvasWidth, canvasHeight, width, height) {\n    _classCallCheck(this, Drawable);\n\n    // Default variables\n    this.x = x;\n    this.y = y;\n    this.speed = speed;\n    this.canvasWidth = canvasWidth;\n    this.canvasHeight = canvasHeight;\n    this.width = width;\n    this.height = height;\n  } // Define abstract function to be implemented in child objects\n\n\n  _createClass(Drawable, [{\n    key: \"draw\",\n    value: function draw() {}\n  }]);\n\n  return Drawable;\n}();\n\nmodule.exports = Drawable;\n\n//# sourceURL=webpack:///./src/js/interfaces/drawable-interface.js?");

/***/ }),

/***/ "./src/js/models/background.js":
/*!*************************************!*\
  !*** ./src/js/models/background.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interfaces_drawable_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/drawable-interface */ \"./src/js/interfaces/drawable-interface.js\");\n/* harmony import */ var _interfaces_drawable_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interfaces_drawable_interface__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_image_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/image-repository */ \"./src/js/models/image-repository.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n/**\r\n * Creates the Background object which will become a child of\r\n * the Drawable object. The background is drawn on the \"background\"\r\n * canvas and creates the illusion of moving by panning the image.\r\n */\n\nvar Background = /*#__PURE__*/function (_Drawable) {\n  _inherits(Background, _Drawable);\n\n  function Background(x, y, speed, canvasWidth, canvasHeight, context) {\n    var _this;\n\n    _classCallCheck(this, Background);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Background).call(this, x, y, speed, canvasWidth, canvasHeight));\n    _this.context = context;\n    return _this;\n  } // Implement abstract function\n\n\n  _createClass(Background, [{\n    key: \"draw\",\n    value: function draw() {\n      // Pan background\n      console.log(this.x, ' ', this.y);\n      this.y += this.speed;\n      this.context.drawImage(_models_image_repository__WEBPACK_IMPORTED_MODULE_1__[\"background\"], this.x, this.y); // Draw another image at the top edge of the first image\n\n      this.context.drawImage(_models_image_repository__WEBPACK_IMPORTED_MODULE_1__[\"background\"], this.x, this.y - this.canvasHeight); // If the image scrolled off the screen, reset\n\n      if (this.y >= this.canvasHeight) this.y = 0;\n    }\n  }]);\n\n  return Background;\n}(_interfaces_drawable_interface__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\n//# sourceURL=webpack:///./src/js/models/background.js?");

/***/ }),

/***/ "./src/js/models/image-repository.js":
/*!*******************************************!*\
  !*** ./src/js/models/image-repository.js ***!
  \*******************************************/
/*! exports provided: background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"background\", function() { return background; });\n/* harmony import */ var _assets_imgs_bg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/bg.png */ \"./src/js/assets/imgs/bg.png\");\n/* harmony import */ var _assets_imgs_ship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/ship.png */ \"./src/js/assets/imgs/ship.png\");\n\n\n/**\r\n * Define an object to hold all our images for the game so images\r\n * are only ever created once. This type of object is known as a\r\n * singleton.\r\n */\n// Define images\n\nvar background = new Image(); // Set images src\n\nbackground.src = _assets_imgs_bg_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/js/models/image-repository.js?");

/***/ })

/******/ });