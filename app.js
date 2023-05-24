// Load express module
const express = require('express')
// Use express
const app = express()
// Define server-related variables
const port = 3000
// Load express-handlebars
const exphdb = require('express-handlebars')

// Use express handlebars in express
app.engine('handlebars', exphdb({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars') 

// Setting up route and response body 
app.get('/', (req, res) => {
  res.render('index')
})

// The server is running adn listening at http://localhost:3000
app.listen(port, () => {
  console.log(`The server is running at localhost:${port}`)
})