## Obj-id

Generte and get id for an object.


[![Build Status](https://travis-ci.org/fun-coder/obj-id.svg?branch=master)](https://travis-ci.org/fun-coder/obj-id)


### Install

```bash
npm install obj-id
```

### Usage

```javascript
import objId from 'obj-id';

let a = {};
let b = {};


objId(a);  #=> '52d3be1e-9161-41d6-97eb-89af1a58d1b2'
objId(b);  #=> 'd2cbc63a-e9a2-4aa0-ad68-e45e9f6beff2'
objId(b);  #=> 'd2cbc63a-e9a2-4aa0-ad68-e45e9f6beff2'
objId(a);  #=> '52d3be1e-9161-41d6-97eb-89af1a58d1b2'
```

### Run Test

```
npm install 

npm run test
```
