const mongoose = require("mongoose");
const initMongo = ()=>{
    mongoose.connect('mongodb://localhost:27017/itemList')
    .then(()=>{
    console.log('connected');
    }).catch(err=>{
    console.log(err);
    });
}
module.exports={initMongo};