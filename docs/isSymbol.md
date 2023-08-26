# isSymbol
> 检查一个值的原始类型是否被归类为Symbol

[source](../isSymbol.js)

[test](../test/isSymbol.test.js)

## 相关知识点
```js
const symbolValue = Symbol();
console.log(typeof symbolValue); // 输出: "symbol"
console.log(symbolValue.toString()); // 输出: "Symbol()"

const symbolObject = Object(symbolValue);
console.log(typeof symbolObject); // 输出: "object"
console.log(Object.prototype.toString.call(symbolObject)); // 输出: "[object Symbol]"
```
以上的`symbolObject`会被`isSymbol`判定为`true`。