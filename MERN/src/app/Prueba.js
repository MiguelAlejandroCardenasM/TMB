import React,{Component} from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import Perfil from './Perfil';
import Login from './Login';
import App from './App';
import Registro from './Registro';
import Ranking from './Ranking';
import CalCal from './CalcularCal';

class Prueba extends Component {
    render() {
      const Prueba = () => (
        <div>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Registro' component={Registro}/>
            <Route path='/Perfil' component={Perfil}/>
            <Route path='/api/tasks' component={App}/>
            <Route path='/Ranking' component={Ranking}/>
            <Route path='/CalcularC' component={CalCal}/>
          </Switch>
        </div>
      )
      return (
        <Switch>
          <Prueba/>
        </Switch>
      );
    }
  }
  export default withRouter(Prueba);