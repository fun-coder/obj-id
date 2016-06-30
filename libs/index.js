'use strict';
import {key} from './constants';

let index = 1;
let defineId = (obj) => {
    let id = index++;
    Object.defineProperty(obj, key, {
        value: id,
        writable: false,
        configurable: false,
        enumerable: false
    });
    return id;
};

export default (obj) => {
    return obj[key] || defineId(obj);
};
