import moment from 'moment'

export const getMinutesFromDayBeginning = () => {
  const now = moment()

  return now.hour() * 60 + now.minute()
}

export const getDaysFromNowWithouHours = date => {
  const todayWithouHours = moment.utc().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
  const dateWithouHours = moment.utc(date).set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
  return todayWithouHours.diff(moment(dateWithouHours), 'days')
}
