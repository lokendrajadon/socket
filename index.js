const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const flash =  require('connect-flash')
const bcrypt =require('bcrypt')
const userRegister = require('./models/register')



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(flash());


app.get('/', (req, res) => {
 res.render('register', {
     message:null
 })
})

app.post('/register', async (req, res) => {

    try {
        // // confirm that user typed same password twice
        if (req.body.email && req.body.username && req.body.password && req.body.passwordConf) {
            if (req.body.password !== req.body.passwordConf) {
                res.render('register',{
                    message: "Password And ConfirmPassword Does Not Match!"
                })    
            } else {
                const exist =  await userRegister.findOne({email : req.body.email})
                const checkEmail = JSON.stringify(exist);
                    if(typeof checkEmail && checkEmail != 'null') {
                    res.render('register',{
                        message: "Email is already taken!"
                    })  
                } else {
                    const insertUser = new userRegister({
                        name : req.body.username,
                        email :req.body.email,
                        password :req.body.password,
                        confirmpassword : req.body.passwordConf,
                    })
                    await insertUser.save();
                    res.render('register',{
                        message: "Registration successfully"
                    })    
                }
            }
        }else {
            res.render('register',{
                message: "All fields required!"
             }) 
        }
    } catch (error) {
        res.send(error)
    }
    
})

app.post('/login', async (req,res) =>{
    try {
           if (req.body.logemail && req.body.logpassword) {

            const checkUserDetails = await userRegister.findOne({email:req.body.logemail })

                if(checkUserDetails == 'null'){
                    res.render('register', {
                        message: 'Please enter valid credentials'
                    })
                }else{
                    await bcrypt.compare(req.body.logpassword,checkUserDetails.password, (err, result) =>{
                        if(err){
                            res.send(error)
                        }else if(!result){
                            res.render('register',{
                                message : "please enter valid credentials"
                            })
                        }else{
                            res.redirect('/profile')
                        }
                    })
                                      
                }
            
          }
    } catch (error) {
        res.send(error)
    }
})

app.get('/profile', async (req,res)=>{
    const userData = await userRegister.find()
    console.log(userData)
    res.render('profile',{
        data: userData
    })
})


app.listen(9000, () =>{
    console.log('connected to this port 9000')
})
