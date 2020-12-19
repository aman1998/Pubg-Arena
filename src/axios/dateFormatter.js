export const getDate = (date) => {
  let newMonth = (new Date(date)).getMonth() + 1
  let newDay = (new Date(date)).getDate()
  let newYear = (new Date(date)).getFullYear()
  let ar = (new Date(date)).toTimeString().split(' ')
  ar.splice(2,3)
  let timeZone = ar[1].split('')
  timeZone.splice(timeZone.length - 2, 0, ':')
  let time = ar[0] + ' ' + timeZone.join('')
  return `${newDay}/${newMonth}/${newYear}  ${time}`
}

export const getJustDate = (date) => {
  let newMonth = (new Date(date)).getMonth() + 1
  let newDay = (new Date(date)).getDate()
  let newYear = (new Date(date)).getFullYear()
  return `${newDay}.${newMonth}.${newYear}`
}

export const getJustTime = (date) => {
  let time = (new Date(date)).getHours()
  let minutes = (new Date(date)).getMinutes()
  return `${time}:${ minutes < 10 ? `0${minutes}`: minutes}`
}