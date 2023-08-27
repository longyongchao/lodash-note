/**
 * * `typeof`可以获取值的类型值；
 * * 类型值为`object`或者`function`的都被认为是对象，但前提是不为`null`；
 * * 由上可以推断出，`null`会被`typeof`判定为`object`或者`function`；
 * * 结合下面代码实验，可知`null`被`typeof`判定为`object`，这是一个历史遗留问题，`null`实际上是一个特殊的值，表示空对象指针，但它并不是真正的对象。
 * console.log(typeof null) // 输出 object
 */

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

// console.log(typeof null) // output object

export default isObject
