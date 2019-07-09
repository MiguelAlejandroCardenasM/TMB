const mongoose=require('mongoose');
const {Schema}=mongoose;

const Materia= new Schema({
    Nombre:{type: String, required: true},
    Clave:{type: String, required: true},
    Horario:{type: String, required: true}

})

module.exports=mongoose.model('materia',Materia);