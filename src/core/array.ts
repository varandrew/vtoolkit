
/**
 * @description: 获取原生类型的值
 * @param {any} value
 * @return {string} type
 */
export const getType = (v: any): string => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();


/**
 * @description: 检查给定的参数是否是一个数组
 * @param {any} value
 * @return {boolean}
 */
const isArray = (val: any): val is Array<any> => Array.isArray(val);


/**
 * @description: 检查提供的参数是否是类数组（即可迭代）
 * @param {any} value
 * @return {boolean}
 */
const isArrayLike = (val: any): val is ArrayLike<any>=> {
  try {
    return [...val], true;
  } catch (e) {
    return false;
  }
};