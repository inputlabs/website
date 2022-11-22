const Path = require('path')
const express = require('express')

const PORT = 8000
const app = express()
app.set('view engine', 'pug')
app.set('views', 'src/pug')
app.use('/static', express.static('src/static'))
app.locals.basedir = app.get('views');

app.get(/\/.*$/, (req, res) => {
  const pugpath = req.path.slice(1) || 'index'
  const ENV = 'dev'
  res.render(pugpath, {require, ENV, PATH: req.path})
})

app.listen(PORT, () => {
  console.log(`Dev app listening on port ${PORT}!`)
})
