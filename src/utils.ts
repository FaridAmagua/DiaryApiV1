import { NewDiaryEntry, Visibility, Weather } from './types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const parseComments = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Comments must be an object')
  }
  return commentFromRequest
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseDate = (dateFromRequest: string): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('error in date input')
  }
  return dateFromRequest
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('error in weather input')
  }
  return weatherFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('error in visibility input')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comments: parseComments(object.comments),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
