'use strict';
import {key} from './constants';
import uuid from 'uuid';

let defineId = (obj) => {
    let id = uuid.v4();
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
