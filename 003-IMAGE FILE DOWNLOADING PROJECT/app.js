/// import important library

const express=require('express')
const imagedownload=require('./imagedownload')
const path=require('path')

const app=express()
//calling the api
app.use(express.static(path.join(__dirname,"public")))
app.get('/api/imagedownload',imagedownload)


module.exports=app