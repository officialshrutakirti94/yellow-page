require('./models/db')
const express= require ('express');
const mongoose=require('mongoose')
const detail=mongoose.model('details')
const app=express();
const bodyParser=require('body-parser')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/add',(req,res)=>{
    res.render('yellopage',{msg:''})
})
app.post('/save',(req,res)=>{
    var details =new detail(req.body)
    details.save()
    .then((result)=>{
        console.log('data fetched')
        res.render('yellopage',{msg:'Data Saved'})

    })
    .catch((err=>{
        console.log(err)
    }))
})
app.post('/checkDuplicate',(req,res)=>{
    var email= req.body.email;
    console.log(x)
    query={email:email};
    detail.find()
    .then((result)=>{
        if(result.length===0)
        console.log('valid email')
        else
        console.log('email already exist')
    })

})
app.listen(3000,(req,res)=>{
    console.log('server is online')
})