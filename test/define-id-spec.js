import objId from '../libs/index';
import {key} from '../libs/constants';
import assert from 'assert';

describe('Define object id', () => {
    let item;

    beforeEach(() => item = new Object());

    it('should return a id when an object with null id', () => {
        let id = objId(item);
        let {value} = Object.getOwnPropertyDescriptor(item, key);
        assert.equal(value, id, 'should create and return id');
    });

    it('should return defined id', () => {
        let id = objId(item);
        assert.equal(objId(item), id, 'should return id');
    });

    it('should define own proerty as id', () => {
        class Person {}
        let parentId = objId(Person.prototype);
        let person = new Person();
        assert.notEqual(parentId, objId(person));
    });
});
