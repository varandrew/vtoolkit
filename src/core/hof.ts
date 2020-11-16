import { sleep } from "./time"

/**
 * @description: repeat函数，每次间隔时间调用被包裹的函数，重复指定的次数
 * @param {Function} func 调用函数
 * @param {number} times 调用次数
 * @param {number} wait 间隔
 * @return {*}
 */
export const repeat = (func: Function, times: number, wait: number) => {
  if (typeof func !== 'function') throw new Error('func must be a function!')

  return async (...args: any[]) => {
    for (let i = 0; i < times; i++) {
      console.log(await sleep(wait))
      func.apply(null, args)
    }
  }
}