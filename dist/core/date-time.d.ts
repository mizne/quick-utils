/**
 * 判断 当前时间 是否在开始和结束时间之间
 *
 * @param {string} beginOrEndTime 譬如 9:00 22:11
 * @param {string} endOrBeginTime 譬如 19:30 08:11
 * @returns {boolean} 是否 在开始和结束时间之间
 */
declare function whetherInBetween(beginOrEndTime: string, endOrBeginTime: string): boolean;
export { whetherInBetween };
