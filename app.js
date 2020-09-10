const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
port = 3001
if (process.env.PORT) {
    port = process.env.PORT
}

mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.get('/', (req, res) => {
  res.send('Endpoints: GET, POST /users, GET, PATCH, DELETE /users/:userID')
})

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})