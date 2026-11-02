const path=require("path")
function zipdownload(req,res){
    const filename=process.env.ZIP_FILE
    const filepath=path.join(__dirname,"files",filename)


    res.download(filepath,filename,(err)=>{

        if(err && !res.headersSent){
            res.status(400).send("file is not found")
        }
    })
}

module.exports=zipdownload