const mongoose=require('mongoose');
const {Schema}=mongoose;

const Datos= new Schema({
    Usuario:{type:String,required:true},
    Contrasena:{type: String, required: true},
    Nombre:{type: String, required: true},
    Apellidos:{type: String, required: true},
    Edad:{type: String, required:true},
    Altura:{type: String, required: true},
    Peso: {type: String , required:true},
    Sexo: {type:String, required:true}
})

module.exports=mongoose.model('datos',Datos);