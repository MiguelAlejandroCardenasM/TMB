const express=require('express');
const router=express.Router();
const Task =require('../models/task');
const Materia =require('../models/Materias');
const Datos = require('../models/datos');
const Cal=require('../models/calorias');
//Busqueda de la BD obtiene valores mediante un metodo asincrono

router.get('/alimento/', async(req,res)=>{
    const alimentos = await Cal.find()
    res.json(alimentos);
});
router.get('/alimentoe/:id', async(req,res)=>{
    const alimentos = await Cal.find({_id: req.param.id})
    res.json(alimentos);
});
router.get('/',async (req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
});
router.post('/alimento',async(req,res)=>{
    const {identificador,Alimento,Calorias,Cantidad}=req.body;
    const alimento= new Cal({identificador,Alimento,Calorias,Cantidad});
    await alimento.save();
    res.json('received');
})
//Muestra en pantalla los resultados
rout[er.post('/',async(req, res)=>{
    const{Usuario,Contrasena,nombre,Apellidos,GradoEstudios,HorarioDispo}=req.body;
    const task=new Task({Usuario,Contrasena,nombre,Apellidos,GradoEstudios,HorarioDispo});
    await task.save();
    res.json('received');
});

//
router.get('/validate/:Usuario/:Pass',async(req,res)=>{
    const usuario=await Task.findOne({"Usuario":req.params.Usuario,"Contrasena":req.params.Pass});
    res.json(usuario);
})

//Actualizar registros de la BD
router.put('/:id', async(req,res)=>{
    const {Usuario,Contrasena,nombre,Apellidos,GradoEstudios,HorarioDispo}=req.body;
    const newTask={Usuario,Contrasena,nombre,Apellidos,GradoEstudios,HorarioDispo};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    res.json({status: "Task Updated"})
});
router.put('/alimento/:id', async(req,res)=>{
    const {identificador,Alimento,Calorias,Cantidad}=req.body;
    const newTask={identificador,Alimento,Calorias,Cantidad};
    await Cal.findByIdAndUpdate(req.params.id,newTask);
    res.json({status: "Task Updated"})
});
router.delete('/alimento/:id',async (req,res)=>{
    await Cal.findByIdAndRemove(req.params.id);
    res.json('deleted');
});
//Borrar Registro de la BD
router.delete('/:id',async (req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json('deleted');
});


module.exports=router;