require('dotenv').config()
const app=require('./app')

PORT =process.env.PORT

app.listen(PORT,()=>{
    console.log("server is responding")
})