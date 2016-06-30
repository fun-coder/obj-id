import objId from '../libs/index';
import {key} from '../libs/constants';
import assert from 'assert';

describe('Define object id', () => {
    let item;

    beforeEach(() => item = Object.create(null));

    it('should return a id when an object with null id', () => {
        let id = objId(item);
        let {value} = Object.getOwnPropertyDescriptor(item, key);
        assert.equal(value, id, 'should create and return id');
    });

    it('should return defined id', () => {
        let id = objId(item);
        assert.equal(objId(item), id, 'should return id');
    });
});
