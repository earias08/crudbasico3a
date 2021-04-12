import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto';

function App() {
  return (
    <Router>
       <Switch>
         <Route exact path='/'>
           <Inicio></Inicio>
         </Route>
         <Route exact path='/productos'>
            <ListarProductos></ListarProductos>
         </Route>
         <Route exact path='/productos/nuevo'>
            <AgregarProducto></AgregarProducto>
         </Route>
       </Switch>
    </Router>
  );
}

export default App;
