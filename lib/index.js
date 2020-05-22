(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./directionalmovement/bullAndBearIndex", "./momentum/rateOfChange", "./volume/priceAndVolumeTrend"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./directionalmovement/bullAndBearIndex"), require("./momentum/rateOfChange"), require("./volume/priceAndVolumeTrend"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.bullAndBearIndex, global.rateOfChange, global.priceAndVolumeTrend);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _bullAndBearIndex, _rateOfChange, _priceAndVolumeTrend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "bullAndBearIndex", {
    enumerable: true,
    get: function get() {
      return _bullAndBearIndex.default;
    }
  });
  Object.defineProperty(_exports, "rateOfChange", {
    enumerable: true,
    get: function get() {
      return _rateOfChange.default;
    }
  });
  Object.defineProperty(_exports, "priceAndVolumeTrend", {
    enumerable: true,
    get: function get() {
      return _priceAndVolumeTrend.default;
    }
  });
  _bullAndBearIndex = _interopRequireDefault(_bullAndBearIndex);
  _rateOfChange = _interopRequireDefault(_rateOfChange);
  _priceAndVolumeTrend = _interopRequireDefault(_priceAndVolumeTrend);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});