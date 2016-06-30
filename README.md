## Obj-id

Generte and get id for an object.


### Install

```
npm install obj-id
```

### Usage

```
import objId from 'obj-id';

let a = {};
let b = {};


objId(a);  #=> 1
objId(b);  #=> 2
objId(b);  #=> 2
objId(a);  #=> 1
```

### Run Test

```
npm install 

npm run test
```
