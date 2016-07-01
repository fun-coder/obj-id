'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require('./constants');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineId = function defineId(obj) {
    var id = _uuid2.default.v4();
    Object.defineProperty(obj, _constants.key, {
        value: id,
        writable: false,
        configurable: false,
        enumerable: false
    });
    return id;
};

exports.default = function (obj) {
    return obj[_constants.key] || defineId(obj);
};