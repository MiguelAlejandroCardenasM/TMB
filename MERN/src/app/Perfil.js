import React , {Component}from 'react';
import Estatus from './Estatus';
import {Link,Redirect} from 'react-router-dom';
import Select from 'react-select';
import {Ejercicio} from './data';



class Perfil extends Component{
constructor(props){
  super(props);
  this.state={
    Age:22,
    Height:1.8,
    Weigth:80,
    IMC: '',
    TMB:'',
    Sexo:'H',
    IMCStatus: '',
    FC:1,
    name: 'Obed'
  }
  this.handleChange2= this.handleChange2.bind(this);
}
componentDidMount(){
  this.CalcularIMC();
  
  if(this.state.Sexo=='H'){
    this.CalcularTMBH();
  }
  else
  this.CalcularTMBM();
}
CalcularIMC(){
  

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

render(){
  const imgstyles={
    height: '60px'
  }
  
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

        <div className="col s4">
          <hr></hr>
            <div className="card">
                      <div className="card-image">
                          <img src="/imagenes/avatar.png" alt="Mi imagen" />
                      </div>
                      <div className="card-content center-text">
                          <span className="card-title">Hola {this.state.name}</span>
                          <p>Edad:  {this.state.Age}</p>
                      </div>
            </div>
        
          <div className="collection">
              <a href="http://www.imss.gob.mx/sites/all/statics/salud/guia-alimentos.pdf" className="collection-item">Guia Alimentos</a>
              <a href="#!" className="collection-item ">CalcularIMC</a>
              <Link className="collection-item " to={{
                pathname:'./CalcularC',
                state:{
                  namec:this.state.IMC,
                  id: this.state.name
                }}}>Calcular Calorias</Link>
              <a href="#!" className="collection-item">Ranking</a>
            </div>
          
            {/*<div className="card-panel cyan darken-2">
                <span className="white-text">
                  <p style={{color: 'gold'}}>Grado de estudios:</p><p>Doctorado en Computación</p>
                </span>
              </div>*/}
        </div>
  
        <div className="col s8">
         
          <div className="card-panel">
              <h4>IMC</h4>
              
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
                    <table className="striped">
                    <thead>
                      <tr>
                          <th>IMC</th>
                          <th>Clasificacion</th>
                          
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{'< 18.5'}</td>
                        <td>Desnutricion</td>
                        
                      </tr>
                      <tr>
                        <td>{'18.6 - 24.9'}</td>
                        <td>Normal</td>
                        
                      </tr>
                      <tr>
                        <td>{'25 - 29.9'}</td>
                        <td>Sobrepeso</td>
                        
                      </tr>
                      <tr>
                        <td>{'30 - 34.9'}</td>
                        <td>Obesidad I</td>
                        
                      </tr>
                      <tr>
                        <td>{'35 - 39.9'}</td>
                        <td>Obesidad II</td>
                        
                      </tr>
                      <tr>
                        <td>{'40 > '}</td>
                        <td>Obesidad III</td>
                        
                      </tr>
                    </tbody>
                  </table>
                    <div className="col s12 m12">
                      <div className="card">
                        <div className="col s12 cyan darken-2">
                          <span className="card-title white-text"><center>TMB </center></span>
                        </div>
                        <br/>
                        <div className="card-content">
                          <center>{this.state.TMB}</center>
                          <Select onChange={this.handleChange2} options={Ejercicio}/>
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
    </div>
    )
}

}

export default Perfil;