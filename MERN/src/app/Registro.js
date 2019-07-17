import React,{Component} from 'react';
import Select from 'react-select';
import {Redirect,Link} from 'react-router-dom';
import {Sexo} from './data';



class Registro extends Component{
    constructor(){
        super();
        this.state={
            Usuario:'',
            Contrasena:'',
            Nombre:'',
            Apellidos:'',
            Edad:'',
            Altura:'',
            Peso:'',
            _id:'',
            Sexo:'',
            registros:[]
        }
        this.nuevoRegistro= this.nuevoRegistro.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleChange2= this.handleChange2.bind(this);
        
    }

    componentDidMount(){
        this.setState({_id:this.props.location.state.id});
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
                Nombre:'',
                Apellidos:'',
                Edad:'',
                Altura:'',
                Peso:'',
                Sexo:''
            });
                this.fetchtasks();
                location.href="/";
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
            Nombre:'',
            Apellidos:'',
            Edad:'',
            Altura:'',
            Peso:'',
            Sexo:''
        });            
            location.href="/";
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
        this.setState({Sexo: e.value  });
      }

render (){
    return(
        <div className="container " >
            <div className="row">
                <div className="col s6 offset-s2">
                    <div className="card">
                        <div className="card-content ">
                            <span className="card-title center-align ">Registro</span>
                            <form onSubmit={this.nuevoRegistro }> 
                                <div className="row">
                                    <div className="input-field col s12  ">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input className="purple-text text-lighten-3" name="Usuario" value={this.state.Usuario} onChange={this.handleChange} type="text" placeholder="Usuario" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">lock</i>
                                        <input name="Contrasena" value={this.state.Contrasena} onChange={this.handleChange} type="password" placeholder="Contrasena" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="Nombre" value={this.state.Nombre} onChange={this.handleChange} type="text" placeholder="Nombres" required/>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="Apellidos" value={this.state.Apellidos} onChange={this.handleChange} type="text" placeholder="Apellidos" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="Altura"  value={this.state.Altura} onChange={this.handleChange} type="text" placeholder="Altura (cm)" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="Peso" value={this.state.Peso} onChange={this.handleChange} type="text" placeholder="Peso (kg)" required/>
                                    </div>
                                </div> 
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="Edad" value={this.state.Edad} onChange={this.handleChange} type="text" placeholder="Edad" required/>
                                    </div>
                                </div> 
                                <div className="row">
                                  <Select defaultValue={Sexo[0]} options={Sexo} onChange={this.handleChange2}></Select>
                                </div>  
                                <div className="row">                                         
                                <button  className="btn ligth-blue col s12" type="submit" >
                        Enviar <i className="material-icons">send</i>
                    </button>
                    </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}
export default Registro ;