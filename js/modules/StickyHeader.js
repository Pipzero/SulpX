"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES6 Class syntax
var Hero = function Hero(name, specialAbility) {
  _classCallCheck(this, Hero);

  // setting property values
  this._name = name;
  this._specialAbility = specialAbility; // declaring a method on the object

  this.getDetails = function () {
    return "".concat(this._name, " can ").concat(this._specialAbility);
  };
};

var _default = Hero;
exports["default"] = _default;