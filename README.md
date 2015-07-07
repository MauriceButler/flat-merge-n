# flat-merge-n

A simple shallow merge utility. Takes n values, returns the merged result.

- Does not modify the original values.
- Only merges own properties.
- Does not clone values.
- Always returns an object.

# Usage

```javascript
var merge = require('flat-merge');

var a = {
        foo: 'stuff',
        bar: 2,
        baz: true
    };

var b = {
        whatsits: 'majigger',
        baz: false
    };

var c = {
        whatsits: 'meh',
        beep: 'boop'
    };

var result = merge(a,b,c);

->

result == {
    foo: 'stuff',
    bar: 2,
    baz: false,
    whatsits: 'meh',
    beep: 'boop'
}
```
