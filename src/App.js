import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos';
import AgregarProducto from './components/AgregarProducto';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import {useState, useEffect} from 'react';
import EditarProducto from './components/EditarProducto';

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    // llamar a la funcion que consulta a la api
    consultarAPI();
  }, []);

  const consultarAPI = async() =>{
    try{
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if(respuesta.status === 200){
        // guardar datos en el state
        const datos = await respuesta.json();
        setProductos(datos);
      }

    }catch(error){
      console.log(error)
    }
  }


  return (
    <Router>
      <Navegacion></Navegacion>
       <Switch>
         <Route exact path='/'>
           <Inicio></Inicio>
         </Route>
         <Route exact path='/productos'>
            <ListarProductos productos={productos} consultarAPI={consultarAPI}></ListarProductos>
         </Route>
         <Route exact path='/productos/nuevo'>
            <AgregarProducto consultarAPI={consultarAPI}></AgregarProducto>
         </Route>
         <Route exact path='/productos/editar/:id'>
           <EditarProducto></EditarProducto>
         </Route>
       </Switch>
       <Footer></Footer>
    </Router>
  );
}

export default App;
