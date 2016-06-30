'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require('./constants');

var index = 1;
var defineId = function defineId(obj) {
    var id = index++;
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