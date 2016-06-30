'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var index = 1;
var key = exports.key = '_obj_id_';
var defineId = function defineId(obj) {
    var id = index++;
    Object.defineProperty(obj, key, {
        value: id,
        writable: false,
        configurable: false,
        enumerable: false
    });
    return id;
};

exports.default = function (obj) {
    return obj[key] || defineId(obj);
};
