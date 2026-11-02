const path=require('path')


// core logic for downloading the file 
function imagedownload(req,res){
    //retrive the file & dir name 
    const filename=process.env.IMG_FILE_ONE
    const filepath=path.join(__dirname,"files",filename)

    //sending the file to user device
    res.download(filepath,filename,(err)=>{
        if(err && !res.headersSent){
            res.status(400).send("image file is not found")
        }
    })

}


module.exports =imagedownload