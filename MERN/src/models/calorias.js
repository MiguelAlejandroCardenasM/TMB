const mongoose=require('mongoose');
const {Schema}=mongoose;

const Calorias= new Schema({
    identificador:{type: String, required: true},
    Alimento:{type:String,required:true},
    Calorias:{type:Number,required:true},
    Cantidad :{type: Number, required:true},

})

module.exports=mongoose.model('calorias',Calorias);