/** 笔记
 * * 在JavaScript中，`Object.prototype`是所有对象的原型（PS：实际上TS中的class是原型链的语法糖，在此不多赘述）。
 * * `Object.prototype.toString`是原型链顶端的一个共享函数，它源码的简洁版大概是下面这样：
 * Object.prototype.toString = function() {
 *   return '[object ' + this.constructor.name + ']';
 * };
 * * `.toString()`, `Object.prototype.toString`和`Object.prototype.toString.call`的区别如下。
 * const arr = [1, 2, 3];
 * console.log(arr.toString()); // 1, 2, 3
 * console.log(Object.prototype.toString(arr)); // [object Object]
 * console.log(Object.prototype.toString.call(arr)); // [object Array]
 * * 实际上无论传入任何值，`Object.prototype.toString`都是返回`[object Object]`，因此需要加上`.call`才能得到期望的答案。
 * * 总的来说，`getTag`实际上是在`Object.prototype.toString.call()`的基础上，进一步对`null`和`undefined`做了区分。
 */

const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

// console.log(getTag(null)); // [object Null]
// console.log(getTag(undefined)); // [object Undefined]
// console.log(getTag('string')); // [object String]
// console.log(getTag(true)); // [object Boolean]
// console.log(getTag({a: '123'})); // [object Object]
// console.log(getTag([1, 2, 3])); // [object Array]
// console.log(getTag(() => {})); // [object Function]

// console.log(toString(undefined)); // [object Undefined]
// console.log(toString(null)); // [object Undefined]

// const emptyObj = {};
// const obj = {abc: 'abc'};
// const emptyArr = [];
// const arr = [1, 2, 3];
// const emptyStr = '';
// const str = 'abc'

// console.log('empty object:')
// console.log(emptyObj.toString()); 
// console.log(Object.prototype.toString(emptyObj)); 
// console.log(Object.prototype.toString.call(emptyObj)); 

// console.log('object:')
// console.log(obj.toString()); 
// console.log(Object.prototype.toString(obj)); 
// console.log(Object.prototype.toString.call(obj)); 

// console.log('empty array:')
// console.log(emptyArr.toString());
// console.log(Object.prototype.toString(emptyArr));
// console.log(Object.prototype.toString.call(emptyArr));

// console.log('array:')
// console.log(arr.toString());
// console.log(Object.prototype.toString(arr));
// console.log(Object.prototype.toString.call(arr));

// console.log('empty string:')
// console.log(emptyStr.toString());
// console.log(Object.prototype.toString(emptyStr));
// console.log(Object.prototype.toString.call(emptyStr));

// console.log('string:')
// console.log(str.toString());
// console.log(Object.prototype.toString(str));
// console.log(Object.prototype.toString.call(str));

export default getTag
