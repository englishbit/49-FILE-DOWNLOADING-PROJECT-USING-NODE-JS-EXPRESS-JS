const path=require('path')

function pdfdownload(req,res){
    filename=process.env.PDF_FILE
    filepath=path.join(__dirname,"files",filename)

    res.download(filepath,filename,(error)=>{
        if(error && !res.headersSent){
            res.status(400).Send("file is not found")
        }

    })

}

module.exports=pdfdownload