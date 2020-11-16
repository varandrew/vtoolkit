/**
 * @description: 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
 * @example get(object, 'a.b.c', 'default')
 * @param {object} source 要检索的对象
 * @param {string} path 要获取属性的路
 * @param {string} defaultValue 如果解析值是 undefined ，这值会被返回
 * @return {*}
 */
export const get = (source: object, path: string, defaultValue: string = '') => {
   // 将数组格式的路径转化成dot格式的，再拆分成key数组
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')

  let result = source
  for (const p of paths) {
    result = Object(result)[p] // null 与 undefined 取属性会报错, 用Object包装一下
  }
  return result || defaultValue
}