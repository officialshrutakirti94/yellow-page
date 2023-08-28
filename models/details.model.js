const mongoose=require('mongoose')
const detailSchema=new mongoose.Schema({
    selection:String,
    name:String,
    address:String,
    contact:String,
    email:String
})
mongoose.model('details',detailSchema);