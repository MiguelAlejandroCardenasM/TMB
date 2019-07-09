const mongoose=require('mongoose');
const Conn='mongodb://localhost/srds2';
mongoose.connect(Conn)
    .then(db=>console.log('Db conectada'))
    .catch(err=>console.error(err));
    
module.exports=mongoose;