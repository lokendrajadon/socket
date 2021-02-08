const mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const connect = mongoose.connect('mongodb://127.0.0.1:27017/socket', { useNewUrlParser: true, useUnifiedTopology: true ,'useFindAndModify': false ,'useCreateIndex': true}).then(()=>{
console.log('connection is established');
}).catch((e)=>{
    console.log(e);
});

const chatUserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim: true,
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    image:{
        data: Buffer,
        contentType: String
    },
    status:{
        type:Boolean,
        default:0
    },
    created_at:{
        type: Date, 
        default: Date.now
    }
})

chatUserSchema.pre('save', function(next){
   // if (!user.password.isModified('password')) return next();
    var user = this;
     bcrypt.hash(user.password,10, function(err, hash){
        if (err) {
            return next(err);
        }
        user.password = hash;

        // bcrypt.hash(user.confirmpassword,10, function(err, hash){
        //     if (err) {
        //         return next(err);
        //     }
        //     user.confirmpassword = hash;
        // });
        next();
    });
})

const userRegister = mongoose.model('userResgister', chatUserSchema);
module.exports = userRegister;