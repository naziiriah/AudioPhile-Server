const express = require('express')
const { urlencoded } = require('body-parser')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const color = require('colors')
const port = process.env.PORT || 6000
const { errorHandler } = require('./middleware/errorMiddleware')
 

connectDB()
const app = express()

app.use(express.json())
app.use(urlencoded({extended:false}))


app.use('/api', require('./routes/cartRoutes'))
app.use('/user', require('./routes/userRoutes'))

app.use(errorHandler )


app.listen(port, () => {
    console.log(`server running at port ${port}`)
})

