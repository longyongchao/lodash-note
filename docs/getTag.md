# getTag 
> 用于获取 JavaScript 值的内部 \[\[Class\]\] 标签，类似于typeof，但结果更详细

**内部函数，不对外暴露**

[source](../getTag.js)

## 相关知识点
* 在JavaScript中，`Object.prototype`是所有对象的原型（PS：实际上TS中的class是原型链的语法糖，在此不多赘述）。
* `Object.prototype.toString`是原型链顶端的一个共享函数，它源码的简洁版大概是下面这样：
  ```js
  Object.prototype.toString = function() {
    return '[object ' + this.constructor.name + ']';
  };
  ```
* `.toString()`, `Object.prototype.toString`和`Object.prototype.toString.call`的区别如下。
  ```js
  const arr = [1, 2, 3];

  console.log(arr.toString()); // 1, 2, 3
  console.log(Object.prototype.toString(arr)); // [object Object]
  console.log(Object.prototype.toString.call(arr)); // [object Array]
  ```
* 实际上无论传入任何值，`Object.prototype.toString`都是返回`[object Object]`，因此需要加上`.call`才能得到期望的答案。
* 总的来说，`getTag`实际上是在`Object.prototype.toString.call()`的基础上，进一步对`null`和`undefined`做了区分。