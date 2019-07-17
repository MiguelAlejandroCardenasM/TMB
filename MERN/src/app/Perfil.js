import React , {Component}from 'react';
import {Link,Redirect} from 'react-router-dom';
import Select from 'react-select';
import {Ejercicio} from './data';



class Perfil extends Component{
constructor(){
  super();
  this.state={
    Age:0,
    Height:0,
    Weigth:0,
    IMC: '',
    TMB:'',
    Sexo:'',
    IMCStatus: '',
    FC:1,
    name: ' ',
    _id:'',
    imagen:""
  }
  this.handleChange2= this.handleChange2.bind(this);
  this.fetchtasks=this.fetchtasks.bind(this);
  this.CalcularFC=this.CalcularFC.bind(this);
  this.avatar=this.avatar.bind(this);
 
}
componentDidMount(){
  this.fetchtasks();
  

  
  
  
}
fetchtasks(){
        fetch(`/api/tasks/perfil/${this.props.location.state.iden}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                this.setState({
                  Age:data.Edad,
                  Height:data.Altura/100,
                  Weigth:data.Peso,
                  _id:data._id,
                  name: data.Nombre+' '+data.Apellidos,
                  Sexo:data.Sexo
                });
                this.CalcularIMC();
                this.avatar();
                if(this.state.Sexo=='H'){
                  this.CalcularTMBH();
                }
                else
                this.CalcularTMBM();
            });
    }
CalcularIMC(){
  
  console.log(this.state._id);
  this.setState({IMC: this.state.Weigth/(this.state.Height*this.state.Height)});
  
 
}
CalcularTMBH(){
  this.setState({  TMB: (( ((this.state.Weigth*10)+(6.25*(this.state.Height*100))-(5*this.state.Age)+5))) })
}
CalcularTMBM(){
  this.setState({TMB: ((this.state.Weigth*10)+(6.25*(this.state.Height*100))-(5*this.state.Age)-161)})
}
CalcularFC(){
  this.setState({FC: this.state.Ejercicio* this.state.TMB});
}

handleChange2(e) {
  console.log(e.value);
  
  this.setState({Ejercicio: e.value });
  this.CalcularFC();
  

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
      location.href="/";
  })
  }
}
avatar(){
  if (this.state.Sexo=='H'){
    this.setState({imagen:"/imagenes/avatar.png"});
  }
  else
  this.setState({imagen:"/imagenes/mujer.jpg"});
}

render(){
  const imgstyles={
    height: '60px'
  }
  let imag=this.state.imagen;
  
  
  
    return(
        <div>

          {/* Barra de Navegacion */}
    <div className="navbar-fixed">
    <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><img src="/imagenes/logo1.png" style={ imgstyles} alt="Logo"/></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Cerrar Sesión</a></li>
            
          </ul>
          <ul className="sidenav" id="mobile-demo">
              <li><a href="badges.html">Components</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="container" style={{marginTop: '25px'}}>
    
    <div className="row">

        <div className="col s6">
          <hr></hr>
            <div className="card">
                      <div className="card-image">
                      
                          <img src={this.state.imagen} className="circle responsive-img" alt="" />
                      </div>
                      <div className="card-content center-text">
                          <span className="card-title">Hola {this.state.name}</span>
                          <p>Edad:  { this.state.Age}</p>
                      </div>
            </div>
        
          <div className="collection">
              <a href="http://www.imss.gob.mx/sites/all/statics/salud/guia-alimentos.pdf" target="_blank" className="collection-item">Guia Alimentos</a>
              
              
              
              <Link className="collection-item " to={{
                pathname:'./CalcularC',
                state:{
                  namec:this.state.IMC,
                  id: this.state.name
                }}}>Calcular Calorias</Link>
                <h4 className="collection-item">Dietas</h4>
              <a href="./pdf/1000.pdf" target="_blank" className="collection-item">Dieta de 1000 Calorias</a>
              <a href="./pdf/1200.pdf" target="_blank" className="collection-item">Dieta de 1200 Calorias</a>
              <a href="./pdf/1500.pdf" target="_blank" className="collection-item">Dieta de 1500 Calorias</a>
              <a href="./pdf/1800.pdf" target="_blank" className="collection-item">Dieta de 1800 Calorias</a>
              <a href="./pdf/2000.pdf" target="_blank" className="collection-item">Dieta de  2000 Calorias</a>
              <a href="./pdf/2500.pdf" target="_blank" className="collection-item">Dieta de  2500 Calorias</a>
              <a href="./pdf/2500-3000.pdf" target="_blank" className="collection-item">Dieta de  2500 - 3000 Calorias</a>
                <Link className="collection-item " to={{
                pathname:'./Registro',
                state:{
                  id:this.state._id
                }}}>Modificar Informacion</Link>
                <li className="collection-item" onClick={()=>this.borrar(this.state._id)}>Borrar Perfil</li>
              
            </div>
          
            {/*<div className="card-panel cyan darken-2">
                <span className="white-text">
                  <p style={{color: 'gold'}}>Grado de estudios:</p><p>Doctorado en Computación</p>
                </span>
              </div>*/}
        </div>
  
        <div className="col s12 m6">
         
          <div className="card-panel">
              
              
              <div className="row">
                  <div className="col s12 m12">
                      <div className="card">
                        <div className="col s12 cyan darken-2">
                          <span className="card-title white-text"><center>Tu IMC es:</center></span>
                        </div>
                        <br/>
                        <div className="card-content">
                          
                          <center>{this.state.IMC}</center> 
                          
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="/imagenes/imc.png" height="90%" width="100%"></img>
                    </div>
     
                    <div className="col s12 m12">
                      <div className="card">
                        <div className="col s12 cyan darken-2">
                          <span className="card-title white-text"><center>TMB </center></span>
                        </div>
                        <br/>
                        <div className="card-content">
                          <center>{this.state.TMB}</center>
                          <Select defaultValue={Ejercicio[0]} onChange={this.handleChange2} options={Ejercicio}/>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m12">
                      <div className="card">
                        <div className="col s12 cyan darken-2">
                          <span className="card-title white-text"><center>Requerimiento Calorico </center></span>
                        </div>
                        <br/>
                        <div className="card-content">
                          <center>{this.state.FC}</center>
              
                        </div>
                      </div>
                    </div>
            </div>  
            <div>
            <object  data="./pdf/ejemplo.pdf"></object>
            </div>
            
            {/*<h4>Habilidades</h4>
            
            <div className="row">
                <div className="col s12 m5">
                    <div className="card">
                      <div className="col s12 cyan darken-2">
                        <span className="card-title white-text"><center>Estatus</center></span>
                      </div>
                      <br/>
                      <div className="card-content">
                        
                      </div>
                    </div>
            </div>
               
                
          </div>*/}
        </div>
      </div>
    </div>


      </div>
    
      <footer className="page-footer light-blue lighten-2">
          <div className="container ">
            <div className="row">
              <div className="col l6 s12">
                
                <img src="./imagenes/Foto.jpg" height="180" width="180"></img>
                <p  className="center-align"> Campaña de sensibilización en prevención y control de enfermedades  
                  cronicas  en poblacion docente y administrativa en plantel de cobach primer ayuntamiento de playas de rosarito</p>
              </div>
              <div>
              <img src="./imagenes/image.png" height="200" width="400"></img>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            
    </div>
    )
}

}

export default Perfil;