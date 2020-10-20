const express = require('express')

const cors = require('cors')

//const views = require('./views')

const data = require('./data')

const app = express()
const port = 3200

app.use(cors())

//app.use(express.urlencoded({extended: true}))

app.get('/destination', (req, res) => {
  res.send(data.places)
  //res.send(views.bali)
})

app.get('/formArea', (req, res) => {
    res.send(data.form)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})