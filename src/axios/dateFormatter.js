export const getDate = (date) => {
  let newMonth = (new Date(date)).getMonth()
  let newDay = (new Date(date)).getDay()
  let newYear = (new Date(date)).getFullYear()
  let newHours = (new Date(date)).getHours()
  let newMinutes = (new Date(date)).getMinutes()
  return `${newDay}/${newMonth}/${newYear}  ${newHours}:${newMinutes}`
}
