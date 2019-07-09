import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Prueba from './Prueba';



 
render(<BrowserRouter><Prueba/></BrowserRouter>,document.getElementById('app'));