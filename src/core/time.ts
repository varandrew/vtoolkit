/**
 * @description: 延迟
 * @param {number} wait
 * @return {*}
 */
export const sleep = (wait: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(window.performance.now())
    }, wait)
  })
}
