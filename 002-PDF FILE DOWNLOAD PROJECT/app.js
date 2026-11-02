const express=require('express')
const pdfdownload=require("./pdfdownload")
const path=require('path')

const app=express()

app.use(express.static(path.join(__dirname,"public")))
app.get('/api/pdfdownload',pdfdownload)

module.exports=app