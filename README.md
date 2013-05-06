# xtend

[![browser support][3]][4]

Extend like a boss

xtend is a basic utility library which allows you to extend an object by appending all of the properties from each object in a list. When there are identical properties, the right-most property takes presedence.

xtend can also recursively extend object trees. Give an array of objects as the first parameter and true as the second.

## Examples

```js
var extend = require("xtend")

var combination = extend({
    a: "a"
}, {
    b: "b"
})
// { a: "a", b: "b" }

var recursiveCombination = extend(
    [
      {a:"a",c:"c",d:{e:{g:"g"},i:"i"}},
      {b:"b",c:"c2",d:{e:{h:"h"}}},
      {x:"x"}
    ],
    true)
//{ a: 'a', c: 'c2', d: { e: { g: 'g', h: 'h' }, i: 'i' }, b: 'b', x: 'x' }

```


## MIT Licenced


  [3]: http://ci.testling.com/Raynos/xtend.png
  [4]: http://ci.testling.com/Raynos/xtend
