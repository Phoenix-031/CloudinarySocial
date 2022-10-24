const File = require("../models/file.schema");
const cloudinary = require("../config/cloudinary")

const fileUploadHandler = async (req,res) => {
    
    try {
        const {image} = req.body

        const uploadtocres = await cloudinary.uploader.upload(image,
        {
            upload_preset:'fklkso3m'
        })

        if(uploadtocres) {

            const {public_id, url, secure_url, signature} = uploadtocres
            
            const nwfile = new File({public_id,url,secure_url,signature})
            const svfile = await nwfile.save()

            res.status(200).json({
            success: true,
            svfile
        })
            
        }

    } catch (err) {
        res.status(500).json({
            success:false,
            msg:err
        });
    }
}

const getImageHandler = async (req,res) => {
    try {
        
        const imgdata = await File.find()

        res.status(200).json({
            success: true,
            imgdata
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { fileUploadHandler,getImageHandler }