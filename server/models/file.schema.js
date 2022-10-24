const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    'secure_url':{
        type:String,
        required:true,
        unique:true
    },

    'signature': {
        type:String,
        required:true
    },

    'url': {
        type:String,
        required:true,
        unique:true
    },

    'public_id': {
        type:String,
        required:true,
        unique:true
    }

},{'timestamps':true})

module.exports = mongoose.model('file',fileSchema)



