const express=require('express')

const downloadtext=require('./textdownload')

const app=express()

app.get('/api/download',downloadtext)

module.exports=app