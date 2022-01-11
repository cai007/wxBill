const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatTimeWithWeek = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekIndex = date.getDay()
  const weekArray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]

  return `${[year, month, day].map(formatNumber).join('/')} ${weekArray[weekIndex]}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime,
  formatTimeWithWeek
}
