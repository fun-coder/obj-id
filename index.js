'use strict';

let index = 1;

export const key = '_obj_id_';

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
