const express = require('express')
const { urlencoded } = require('body-parser')


const app = express()
app.use(urlencoded({extended:false}))

const port = process.env.PORT  || 9000

app.use(express.json())


app.use('/api', require('./routes/cartRoutes'))


app.listen(port, () => {
    console.log(`server running at port ${port}`)
})

