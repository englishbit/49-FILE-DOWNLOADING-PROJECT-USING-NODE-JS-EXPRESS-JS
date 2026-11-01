const path=require('path')
// logic for downloading 


function downloadtext(req,res){
    const filename=process.env.TEXT_FILE || "sample.txt"
    const filepath=path.join(__dirname,"files",filename)

    res.download(filepath,filename,(error)=>{
        if(error&& !res.headerSent){
            res.status(400).send("text file not found")
        }
    })
}

module.exports=downloadtext
