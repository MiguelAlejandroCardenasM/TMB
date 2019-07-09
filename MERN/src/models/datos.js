const mongoose=require('mongoose');
const {Schema}=mongoose;

const Datos= new Schema({
    Usuario:{type:String,required:true},

    Nombre:{type: String, required: true},
    Contrasena:{type: String, required: true},
    Apelllidos:{type: String, required: true},
    Edad:{type: String, required:true},
    Altura:{type: String, required: true},
    Peso: {type: String , required:true},
    IMCInicial:{type: Number},
    IMCActual:{type:Number},

    

})

module.exports=mongoose.model('datos',Datos);