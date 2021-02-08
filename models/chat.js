const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://127.0.0.1:27017/socket', { useNewUrlParser: true, useUnifiedTopology: true ,'useFindAndModify': false ,'useCreateIndex': true}).then(()=>{
console.log('connection is established');
}).catch((e)=>{
    console.log(e);
});


const chatMessages = mongoose.Schema({

    name:{
        type:String,
    },
    fromId:{
        type:Number
    },
    toChatId:{
        type:Number
    },
    message:{
        type:String
    }

})

const chatMessageDetails = mongoose.model('messages',chatMessages);
module.exports = chatMessageDetails;