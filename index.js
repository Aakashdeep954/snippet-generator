const express = require('express')
const app = express()
const path = require('path')

app.set('views engine', 'ejs')
app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.render('home.ejs')
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})