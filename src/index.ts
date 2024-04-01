import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000
// request and response
app.get('/ping', (_req, res) => {
  console.log('someone  here!!' + new Date().toDateString())
  res.send('pong')
})

app.use('/api/v1/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log('server running in port 3000')
})
