import React,{ Component }from 'react';
import {Redirect,Link} from 'react-router-dom';

class Ranking extends Component{

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
    render(){
        return(

            <div>
                <h1> Soy el  Ranking</h1> 
                <div className="col s6">
                                <table className="striped">
                                    <thead>
                                        <tr>
                                        <th>Nombre</th>
                                        <th>Apellidos</th>
                                        <th>Peso Perdido</th>
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
                
            
        )
    }
}

export  default Ranking;