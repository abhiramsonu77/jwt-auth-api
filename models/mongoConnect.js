const mongoose = require("mongoose");
const initMongo = ()=>{
    mongoose.connect('mongodb+srv://zhastra:284472dem@cluster0.v5fvn.mongodb.net/APIREST?retryWrites=true&w=majority')
    .then(()=>{
    console.log('connected');
    }).catch(err=>{
    console.log(err);
    });
}
module.exports={initMongo};