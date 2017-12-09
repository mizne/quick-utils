/**
 * 将location的search参数 转化为 键值对的对象结构
 *
 * @param {string} search
 * @returns {{[key: string]: string | string[]}}
 */
function parseURLSearch(search: string): { [key: string]: string | string[] } {
  if (!search) {
    return {}
  }
  const str = search[0] === '?' ? search.slice(1) : search
  const arr = str.split('&').filter(e => e)

  return arr.reduce<{ [key: string]: string | string[] }>((accu, curr) => {
    const [key, val] = curr.split('=')
    const oldV = accu[key]
    if (typeof oldV === 'undefined') {
      accu[key] = val
      return accu
    } 
    if (typeof oldV === 'string') {
      accu[key] = [oldV, val]
      return accu
    } 
    if (Array.isArray(oldV)) {
      accu[key] = [...oldV, val]
      return accu
    }
  }, {})
}

export { parseURLSearch }
