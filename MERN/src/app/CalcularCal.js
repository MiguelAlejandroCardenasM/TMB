import React,{Component} from 'react';
import Select from 'react-select';
import { Cereales, groupedOptions } from './data';

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
class CalCal extends Component{
    constructor(){
    super();
    this.state={
        hola: '',
        totalcalorias:0,
        identificador:'',
        Alimento:'',
        Cantidad:0,
        Calorias:0,
        registros:[],
        _id:''


    } 
    this.nuevoRegistro= this.nuevoRegistro.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleChange2= this.handleChange2.bind(this);
    this.calcularcalorias=this.calcularcalorias.bind(this);
    }
    componentDidMount(){
        this.setState({hola:this.props.location.state.namec});
        this.setState({identificador: this.props.location.state.id})
        this.fetchtasks();
        
        
    }
    
    fetchtasks(){
        fetch('/api/tasks/alimento/')
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                this.setState({registros: data});
                this.calcularcalorias();
            });
    }
    nuevoRegistro(e){
        fetch('/api/tasks/alimento',
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
            this.setState({
                Cantidad:''

            });
            this.fetchtasks();
            
            
        })
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
        
        this.setState({Calorias: e.value , Alimento: e.label});
        

      }
      
     
      calcularcalorias(){
          let temp=0;
        this.state.registros.forEach(registro=>{
            let x= registro.Calorias*registro.Cantidad;
            temp=temp+x;
            console.log(temp);
        
        });
        this.setState({totalcalorias:temp});
      }
    
    borrar(id){
        if(confirm('Esta seguro de querer eliminar?')){
            //console.log('/api/tasks/'+id);
        fetch('/api/tasks/alimento/'+ id,{
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
      
      
      
      
      
    render(){
        const formatGroupLabel = data => (
            <div style={groupStyles}>
              <span>{data.label}</span>
              <span style={groupBadgeStyles}>{data.options.length}</span>
            </div>
          );
          let temp=0;
          
        return (
            <div className="container " >
            <div>
              {/*  <h1>{this.state.hola}</h1>*/}
                
            </div>
            <div className="row">
                <div className="col s12 m6 ">
                    <div className="card">
                        <div className="card-content ">
                            <span className="card-title center-align ">Añadir Alimento</span>
                            <form onSubmit={this.nuevoRegistro }> 
                               
                                <div className="row">
                                    <div className="input-field col s12">
                                    <Select defaultValue={Cereales[0]} options={groupedOptions} onChange={this.handleChange2}formatGroupLabel={formatGroupLabel} required/>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input name="Cantidad" value={this.state.Cantidad} onChange={this.handleChange} type="text" placeholder="Cantidad" required/>
                                    </div>
                                </div>
                                </div>  
                                <div className="row">                                         
                                <button  className="btn ligth-blue col s12" type="submit" >
                       Agregar <i className="material-icons">send</i>
                    </button>
                    </div>
                            </form> 
                        </div>
                    </div>
                </div>
                <div className="col s6 m6 ">
                <table className="striped">
                    <thead>
                      <tr>
                          <th>Alimento</th>
                          <th>Porciones (100 g)</th>
                          <th>Cantidad</th>
                          
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.registros.map(registro=>{
                        
                                                return(
                                                    <tr key= {registro._id}>
                                                        <td>{registro.Alimento}</td>
                                                        <td>{registro.Calorias}</td>
                                                        <td>{registro.Cantidad}</td>
                                                        <td>{registro.Calorias*registro.Cantidad}</td>
                                                        <td>
                                                            <button className="btn ligth-blue" onClick={()=>this.borrar(registro._id)}><i className="material-icons">delete</i></button>
                                                        </td>
                                                        
                                                    </tr>

                                                )
                                         })}
                      
                    </tbody>
                  </table>
                </div>
            </div>
            
            <div className="col s6 m6 offset-s2">
                    <div className="card">
                    <div className="col s12 cyan darken-2">
                          <span className="card-title white-text"><center>Total de Calorias:</center></span>
                        </div>
                        <div className="card-content">
                          
                          <center>
                        

                           {this.state.totalcalorias} Calorias</center> 
                          
                        </div>
                    </div>
            </div>
        </div>
            
        )
    }
}
export default CalCal;