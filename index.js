const express = require('express')
const nunjusck = require('nunjucks')
const app = express()

nunjusck.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')
app.use('/assets', express.static('assets'))

const paramsValidator = (req, res, next) => {
  let ageExists = !!req.query.age
  if (!ageExists) {
    console.log(ageExists)
    return res.redirect('/')
  }
  next()
}

app.get('/', (req, res) => {
  res.render('age-form')
})

app.post('/check', (req, res) => {
  let age = req.body.age
  let nextRoute = age >= 18 ? '/major' : '/minor'
  return res.redirect(nextRoute + `?age=${age}`)
})

app.get('/major', paramsValidator, (req, res) => {
  let age = req.query.age
  let args = { message: '', type: 'success' }
  switch (true) {
    case isNaN(parseInt(age, 10)):
      args.message = `Wait, what? how can you be '${age}' years old?`
      args.type = 'error'
      break
    case age <= 0:
      args.message = "Whaaaaat! you haven't been born yet?"
      args.type = 'error'
      break
    case age < 18:
      args.message =
        'Hey! I see what you did there, trying to recapture your youth?'
      args.type = 'error'
      break
    case age < 120:
      args.message = `You're of legal age, you're ${age} years old.`
      break
    default:
      args.message = 'WOW! Am I in the presence of a Highlander?'
      args.type = 'error'
  }
  return res.render('message', args)
})

app.get('/minor', paramsValidator, (req, res) => {
  let age = req.query.age
  let args = { message: '', type: 'success' }
  switch (true) {
    case isNaN(parseInt(age, 10)):
      args.message = `Wait, what? how can you be '${age}' years old?`
      args.type = 'error'
      break
    case age <= 0:
      args.message = "Whaaaaat! you haven't been born yet?"
      args.type = 'error'
      break
    case age < 18:
      args.message = `You're a minor, you're ${age} years old.`
      break
    case age < 120:
      args.message = `Hey! I see what you did there, trying to do something unappropriate for your age uhn?`
      args.type = 'error'
      break
    default:
      args.message = 'WOW! Am I in the presence of a Highlander?'
      args.type = 'error'
  }
  return res.render('message', args)
})

app.listen(3000)
