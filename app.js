// Load express module
const express = require('express')
// Use express
const app = express()
// Define server-related variables
const port = 3000
// Load express-handlebars
const exphdb = require('express-handlebars')
// Load body parser package
const bodyParser = require('body-parser')
// Load and use generatePassword function
const generatePassword = require('./generate_password')

// Use express handlebars in express
app.engine('handlebars', exphdb({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars') 

// Use body parser
app.use(express.urlencoded({extended: true}))

// Setting up route and response body 
app.get('/', (req, res) => {
  res.render('index')
})
// Setting up POST route
app.post('/', (req, res) => {
  const options = req.body
  const passwords = generatePassword(options)
  res.render('index', {passwords: passwords, options: options})
})

// The server is running adn listening at http://localhost:3000
app.listen(port, () => {
  console.log(`The server is running at localhost:${port}`)
})