# isObject
> 检查一个值的类型是否为对象

[source](../isObject.js)

[test](../test/isObject.test.js)

## 相关知识点
* `typeof`可以获取值的类型值；
* 类型值为`object`或者`function`的都被认为是对象，但前提是不为`null`；
* 由上可以推断出，`null`会被`typeof`判定为`object`或者`function`；
* 结合下面代码实验，可知`null`被`typeof`判定为`object`，这是一个历史遗留问题，`null`实际上是一个特殊的值，表示空对象指针，但它并不是真正的对象。
    ```js
    console.log(typeof null) // 输出 object
    ```

