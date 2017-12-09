/**
 * 判断 当前时间 是否在开始和结束时间之间
 * 
 * @param {string} beginOrEndTime 譬如 9:00 22:11
 * @param {string} endOrBeginTime 譬如 19:30 08:11
 * @returns {boolean} 是否 在开始和结束时间之间
 */
function whetherInBetween(
  beginOrEndTime: string, 
  endOrBeginTime: string
): boolean {
  const [beginHour, beginMinute] = beginOrEndTime.split(':').map(Number)
  const [endHour, endMinute] = endOrBeginTime.split(':').map(Number)
  const now = new Date()
  const nowMilliseconds = now.getTime()

  const year = now.getFullYear()
  const month = now.getMonth()
  const day = now.getDate()

  const startTime = new Date(year, month, day, beginHour, beginMinute, 0, 0).getTime()
  const endTime = new Date(year, month, day, endHour, endMinute, 0, 0).getTime()

  return (startTime - nowMilliseconds) * (nowMilliseconds - endTime) > 0
}

export { whetherInBetween }