import express from 'express'
import * as diaryServices from '../services/diariesServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(404).send(e.message)
  }
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

export default router
