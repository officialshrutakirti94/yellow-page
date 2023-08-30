const mongoose=require('mongoose')
const detailSchema=new mongoose.Schema({
    selection:String,
    name:String,
    address:String,
    contact:String,
    email:String,
    upload_img:{type:String,default:'NA'}
})
mongoose.model('details',detailSchema);