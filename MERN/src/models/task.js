const mongoose=require('mongoose');
const {Schema}=mongoose;

/*const TaskSchema= new Schema({
    title: {type: String,required: true},
    description: {type: String, required: true}
});
*/
const Registro =new Schema({
    Usuario:{type: String, required: true },
    Contrasena:{type: String, required: true},
    nombre: {type: String, required: true},
    Apellidos: {type: String, required: true },
    GradoEstudios:{type: String, required: true},
    HorarioDispo:{type: String, required: true},
});



module.exports=mongoose.model('task',Registro);