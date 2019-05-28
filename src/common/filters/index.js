// 全局的过滤器

/**
 * 截取字符串的方法
 * @param {string} val 要截取的字符串
 * @param {number} leg 截取后的字符串的长度
 */
let cutStr = (val, leg) => {
  if (!val) return ''
  return val.slice(0, leg)
}
export default  {
  cutStr
}
