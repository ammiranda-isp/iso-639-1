'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ISO6391 = function () {
  function ISO6391() {
    _classCallCheck(this, ISO6391);
  }

  _createClass(ISO6391, null, [{
    key: 'getLanguages',
    value: function getLanguages() {
      var codes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return codes.map(function (code) {
        return {
          code: code,
          name: ISO6391.getName(code),
          nativeName: ISO6391.getNativeName(code)
        };
      });
    }
  }, {
    key: 'getName',
    value: function getName(code) {
      return ISO6391.validate(code) ? _data2.default[code].name : '';
    }
  }, {
    key: 'getAllNames',
    value: function getAllNames() {
      return Object.values(_data2.default).map(function (l) {
        return l.name;
      });
    }
  }, {
    key: 'getNativeName',
    value: function getNativeName(code) {
      return ISO6391.validate(code) ? _data2.default[code].nativeName : '';
    }
  }, {
    key: 'getAllNativeNames',
    value: function getAllNativeNames() {
      return Object.values(_data2.default).map(function (l) {
        return l.nativeName;
      });
    }
  }, {
    key: 'getCode',
    value: function getCode(name) {
      var code = Object.keys(_data2.default).find(function (code) {
        var language = _data2.default[code];

        return language.name.toLowerCase() === name.toLowerCase() || language.nativeName.toLowerCase() === name.toLowerCase();
      });
      return code || '';
    }
  }, {
    key: 'getAllCodes',
    value: function getAllCodes() {
      return Object.keys(_data2.default);
    }
  }, {
    key: 'validate',
    value: function validate(code) {
      return _data2.default[code] !== undefined;
    }
  }]);

  return ISO6391;
}();

exports.default = ISO6391;
