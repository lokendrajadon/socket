const mongoose = require('mongoose');


const connect = mongoose.connect('mongodb://127.0.0.1:27017/socket', { useNewUrlParser: true, useUnifiedTopology: true ,'useFindAndModify': false ,'useCreateIndex': true}).then(()=>{
console.log('connection is established');
}).catch((e)=>{
    console.log(e);
});

const image = mongoose.Schema({
    
    image:{
        data: Buffer,
        contentType: String
    }
   
})


const uploadImage = mongoose.model('imageupload', image);
module.exports = uploadImage;