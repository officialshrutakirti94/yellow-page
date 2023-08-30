require('./models/db')
const express= require ('express');
const mongoose=require('mongoose')
const detail=mongoose.model('details')
const app=express();
const multer=require('multer')
const bodyParser=require('body-parser')
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
var upload_img=''
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function(req, file, cb) {
      upload_img=file.originalname;
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage });
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/add',(req,res)=>{
    res.render('yellopage',{msg:''})
})
app.post('/save',upload.single('upload_img'),(req,res)=>{
    var details =new detail(req.body)
    console.log(details)
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