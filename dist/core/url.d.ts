/**
 * 将location的search参数 转化为 键值对的对象结构
 *
 * @param {string} search
 * @returns {{[key: string]: string | string[]}}
 */
declare function parseURLSearch(search: string): {
    [key: string]: string | string[];
};
export { parseURLSearch };
