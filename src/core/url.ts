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
  const normalizeStr = search[0] === '?' ? search.slice(1) : search
  const items = normalizeStr.split('&').filter(e => e)

  return items.reduce<{ [key: string]: string | string[] }>((accu, curr) => {
    const [key, val] = curr.split('=')
    const prev = accu[key]
    if (typeof prev === 'undefined') {
      accu[key] = val
      return accu
    } 
    if (typeof prev === 'string') {
      accu[key] = [prev, val]
      return accu
    } 
    if (Array.isArray(prev)) {
      accu[key] = [...prev, val]
      return accu
    }
  }, {})
}

export { parseURLSearch }
