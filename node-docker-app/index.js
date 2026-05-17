const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const NAME = process.env.APP_NAME || 'Docker'

app.get('/', (req, res) => {
  res.send(`<h1>Hello from ${NAME}!</h1>`)
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
