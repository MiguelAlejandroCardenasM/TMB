import React , {Component}from 'react';


class App extends Component{
    

    constructor(){
        super();
        this.state={
            Usuario:'',
            Contrasena:'',
            nombre:'',
            Apellidos:'',
            GradoEstudios:'',
            HorarioDispo:'',
            _id:'',
            registros:[]
        }
        this.nuevoRegistro= this.nuevoRegistro.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleChange2= this.handleChange2.bind(this);
    }
    componentDidMount(){
        this.fetchtasks();
    }
    fetchtasks(){
        fetch('/api/tasks')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                this.setState({registros: data});
            });
    }
    //Borrar
    borrar(id){
        if(confirm('Esta seguro de querer eliminar?')){
            //console.log('/api/tasks/'+id);
        fetch('/api/tasks/'+ id,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            M.toast({html: 'Eliminado'});
            this.fetchtasks();
        })
        }
    }
    //Editar

    Editar(id){
        fetch(`/api/tasks/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({
            Usuario: data.Usuario,
            Contrasena: data.Contrasena,
            nombre: data.nombre,
            Apellidos: data.Apellidos,
            GradoEstudios: data.GradoEstudios,
            HorarioDispo: data.HorarioDispo,
            _id: data._id
            });
        });
    }
    
    //agrega el nuevo registro del formulario
    nuevoRegistro(e){
        if(this.state._id){
            fetch(`/api/tasks/${this.state._id}`,{
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then (data=>{
                console.log(data);
                M.toast({html: 'Actualizado'});
                this.setState({Usuario:'',
                Contrasena:'',
                nombre:'',
                Apellidos:'',
                GradoEstudios:'',
                HorarioDispo:''});
                this.fetchtasks();
            })

        }else{
            fetch('/api/tasks',
        {
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            M.toast({html: 'Guardado'});
            this.setState({Usuario:'',
            Contrasena:'',
            nombre:'',
            Apellidos:'',
            GradoEstudios:'',
            HorarioDispo:''});
            this.fetchtasks();
        });
        }
        
        
        //evita que la pagina se refresque
        e.preventDefault(e);
    }
    handleChange(e){
        const {name, value}=e.target;
        this.setState({
            [name]:value
        });
    }
    handleChange2(e) {
        console.log(e.value);
        this.setState({HorarioDispo: e.value });
      }

    render(){
        return (
            <div className="container ">       
                    
                   {/*<Login /> */} 

                    <nav>
                        <div className="nav-wrapper purple darken-4 ">
                            <a href="#!" className="brand-logo center">SRDS</a>
                            <a href="/api/tasks">aqui</a>
                        </div>
                    </nav>
                    {/*<Perfil color='blue' mensaje='soy el mapa'/>*/}
                   
                            <div className="col s6">
                                <table className="striped">
                                    <thead>
                                        <tr>
                                        <th>Nombre</th>
                                        <th>Apellidos</th>
                                        <th>Grado de Estudios</th>
                                        <th>Disponibilidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.registros.map(registro=>{
                                                return(
                                                    <tr key= {registro._id}>
                                                        <td>{registro.nombre}</td>
                                                        <td>{registro.Apellidos}</td>
                                                        <td>{registro.GradoEstudios}</td>
                                                        <td>{registro.HorarioDispo}</td>
                                                        <td>
                                                            
                                                            <button className="btn ligth-blue" onClick={()=>this.Editar(registro._id)}><i className="material-icons">edit</i></button>
                                                            <button className="btn ligth-blue" onClick={()=>this.borrar(registro._id)}><i className="material-icons">delete</i></button>
                                                        </td>
                                                        
                                                    </tr>

                                                )
                                         })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                  
            
        );
    }
}
export default App;