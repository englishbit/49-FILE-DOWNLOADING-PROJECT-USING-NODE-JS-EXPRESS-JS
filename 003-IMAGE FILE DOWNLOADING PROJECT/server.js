require('dotenv').config()
const app=require('./app')

//reading the port number form .env file
const PORT=process.env.PORT


// starting the server
app.listen(PORT,()=>{
    console.log("server is responding")
})