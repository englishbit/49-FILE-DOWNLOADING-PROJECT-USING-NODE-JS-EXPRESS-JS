const path=require('path')
const zipdownload=require('./zipdownload')
const express=require('express')
app=express()


app.use(express.static(path.join(__dirname,"public")))
app.get('/api/zipdownload',zipdownload)

module.exports=app