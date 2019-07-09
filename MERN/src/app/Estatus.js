import React, {Component} from 'react'

class Estatus extends Component{

    constructor(){
        super();
        this.state={
          IMCStatus: ''
        }
      }

componentDidMount(){
  this.setState({IMCStatus:this.props.location.state.namec});
}


    
 
       /* if (imc<=18.5)
         {this.setState({IMCStatus:'Desnutricion'});}
         if  (imc>18.6 && imc <= 24.9)
         this.setState({IMCStatus: 'Normal'});
         
       }
*/
 render(){



     return(

        <h1> {this.state.IMCStatus} </h1>
     )
 } 

}

export default Estatus;