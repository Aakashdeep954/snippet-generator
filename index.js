const express = require('express')
const app = express()
const path = require('path')

app.set('views engine', 'ejs')
app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.render('home.ejs')
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})