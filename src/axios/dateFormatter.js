export const getDate = (date) => {
  const formatMinutes = (min) => {
    if(min < 10){
      return '0' + min
    }
  }
  let newMonth = (new Date(date)).getMonth() + 1
  let newDay = (new Date(date)).getDate()
  let newYear = (new Date(date)).getFullYear()
  let newHours = (new Date(date)).getHours()
  let newMinutes = formatMinutes((new Date(date)).getMinutes())

  return `${newDay}/${newMonth}/${newYear}  ${newHours}:${newMinutes}`
}
