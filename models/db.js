const mongoose=require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/dbStudent',{useNewUrlParser:true}).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
require('./details.model')