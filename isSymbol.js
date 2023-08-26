import getTag from './.internal/getTag.js'

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
function isSymbol(value) {
  const type = typeof value
  return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

// const symbolValue = Symbol();
// console.log(typeof symbolValue); // 输出: "symbol"
// console.log(symbolValue.toString()); // 输出: "Symbol()"

// const symbolObject = Object(symbolValue);
// console.log(typeof symbolObject); // 输出: "object"
// console.log(Object.prototype.toString.call(symbolObject)); // 输出: "[object Symbol]"

// console.log(isSymbol(symbolObject));

export default isSymbol
