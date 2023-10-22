/**
 * 提供各种类型判断方法
 **/
const toStringFunc = Object.prototype.toString

export const isNull = (target: any): boolean =>
  toStringFunc.call(target) === '[object Null]'

export const isBoolean = (target: any): boolean =>
  toStringFunc.call(target) === '[object Boolean]'

export const isNumber = (target: any): boolean =>
  toStringFunc.call(target) === '[object Number]' && !isNaN(target)

export const isUndefined = (target: any): boolean => target === undefined

export const isArray = (target: any): boolean =>
  toStringFunc.call(target) === '[object Array]'

export const isObject = (target: any): target is Record<string, unknown> =>
  toStringFunc.call(target) === '[object Object]'

export const isFunction = (target: any): boolean => typeof target === 'function'

export const isEmptyObject = (target: any): boolean =>
  isObject(target) && Object.keys(target).length === 0
