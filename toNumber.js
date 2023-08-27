/** 笔记
 * * NaN 表示非数字，用于表示数学运算的结果不是有效数字的情况。有内置方法 isNaN(value)用于判断类型，它是一个特殊的数值。
 * 
 * * What is the need for use reTrim Regex to remove whitespaces? Because the javascript built-in trim function have same effect.
 * * Maybe the trim function realese version is ES5, anthour need to consider the old js code.
 * 
 * * The JS built-in parseInt function could specifies the base of the numeral system using radix paramenter(second position in function parameter).
 * 
 * * The unary plus operator can translate the number-like string to number. Such as:
 * const numstr = '0xff';
 * console.log(+numstr); // output 256
 */

import isObject from './isObject.js'
import isSymbol from './isSymbol.js'

/** Used as references for various `Number` constants. */
const NAN = 0 / 0

/** Used to match leading and trailing whitespace. */
const reTrim = /^\s+|\s+$/g

/** Used to detect bad signed hexadecimal string values. */
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

/** Used to detect binary string values. */
const reIsBinary = /^0b[01]+$/i

/** Used to detect octal string values. */
const reIsOctal = /^0o[0-7]+$/i

/** Built-in method references without a dependency on `root`. */
const freeParseInt = parseInt

/**
 * Converts `value` to a number.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @see isInteger, toInteger, isNumber
 * @example
 *
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
function toNumber(value) {
  /** if value's type is Number, return itself directly */
  if (typeof value === 'number') {
    return value
  }
  /** if value's type is Symbol, return NaN*/
  if (isSymbol(value)) {
    return NAN
  }
  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value
    value = isObject(other) ? `${other}` : other
  }
  /** handle the value when its type is bool */
  if (typeof value !== 'string') {
    return value === 0 ? value : +value
  }
  value = value.replace(reTrim, '') // removes any leading/trailing witespace.
  const isBinary = reIsBinary.test(value) // check the value if binary.
  return (isBinary || reIsOctal.test(value)) // lazy excute! Because the judge is OR logic.
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value)
}

const testBool = false
const str = '0xffff'

console.log(+str)
console.log(str.slice(2))
console.log(toNumber(str))

// export default toNumber
