import { DiaryEntry, Visibility, Weather } from '../types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: '2021-01-01',
    weather: Weather.Sunny,
    visibility: Visibility.Great,
    comments: 'This is a great day'
  },
  {
    id: 2,
    date: '2021-01-02',
    weather: Weather.Foggy,
    visibility: Visibility.Great,
    comments: 'This is a great day'
  }
]
