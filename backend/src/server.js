const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.SECRET_KEY || 'secret'))
app.use(session({ secret: process.env.SECRET_KEY || 'secret', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
},
  () => console.log("Listening on port 3001")
)

const db = mongoose.connection;

db.once('open', () => {
  console.log("Connected to MongoDB")
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

//ROUTES
app.use("/", routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
