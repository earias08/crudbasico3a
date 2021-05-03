import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useParams, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import {campoRequerido, rangoValor} from './common/helpers'

const EditarProducto = (props) => {
  const [producto, setProducto] = useState({});
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  // const id =  useParams().id;
  const nombreProductoRef = useRef("");
  const precioProductoRef = useRef(0);
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    consultarProducto();
  }, []);

  const consultarProducto = async () => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const productoEncontrado = await respuesta.json();
        setProducto(productoEncontrado);
      }
    } catch (error) {
      console.log(error);
      // mostrar un cartel al usuario
    }
  };

  const leerCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // revisar si cambio la categoria si es asi me quedo con lo que esta en el state categoria, sino asignar el valor de producto.categoria
    let _categoria = (categoria === '')? (producto.categoria):(categoria);
    console.log(nombreProductoRef.current);
    console.log(nombreProductoRef.current.value);
    // validar los datos
    if(campoRequerido(nombreProductoRef.current.value)
     && rangoValor(parseInt(precioProductoRef.current.value)) 
    && campoRequerido(_categoria)){
      // ocultar el cartel de error
      setError(false);
      // si esta bien envio el request a la api
      try{

        const productoModificado = {
          nombreProducto: nombreProductoRef.current.value,
          precioProducto: precioProductoRef.current.value,
          categoria: _categoria
        };
        // realizar el request
        const respuesta =await fetch(`${URL}/${producto.id}`, {
          method: "PUT",
          headers:{ "Content-Type":"application/json"},
          body: JSON.stringify(productoModificado)
        });
        console.log(respuesta);
        if(respuesta.status === 200){
          // mostrar cartel al usuario
          Swal.fire(
            'Producto editado',
            'El producto fue modificado correctamente',
            'success'
          )
          // actualizar los datos
           props.consultarAPI();
          //  quiero redireccionar a otra ruta
          props.history.push('/productos');
        }
       
      }catch(error){
        console.log(error)
        // mostrar un cartel al usuario de que algo fallo
      }

    }else{
      // si esta mal mostrar cartel de error
      setError(true);
    }
  };

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <h1 className="my-5 text-center">Editar producto</h1>
        <Form.Group>
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Café"
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="50"
            defaultValue={producto.precioProducto}
            ref={precioProductoRef}
          ></Form.Control>
        </Form.Group>
        <h3 className="text-center mt-4">Categoria</h3>
        <div className="text-center my-4">
          <Form.Check
            inline
            type="radio"
            label="Bebida caliente"
            name="categoria"
            value="bebida-caliente"
            onChange={leerCategoria}
            defaultChecked={
              producto.categoria && producto.categoria === "bebida-caliente"
            }
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Bebida fria"
            name="categoria"
            value="bebida-fria"
            onChange={leerCategoria}
            defaultChecked={
              producto.categoria && producto.categoria === "bebida-fria"
            }
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Dulce"
            name="categoria"
            value="dulce"
            onChange={leerCategoria}
            defaultChecked={
              producto.categoria && producto.categoria === "dulce"
            }
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Salado"
            name="categoria"
            value="salado"
            onChange={leerCategoria}
            defaultChecked={
              producto.categoria && producto.categoria === "salado"
            }
          ></Form.Check>
        </div>
        <Button variant="danger" type="submit" className="w-100">
          Guardar
        </Button>
        {error === true ? (
          <Alert variant="danger" className="my-5">
            Faltan cargar datos obligatorios
          </Alert>
        ) : null}
      </Form>
    </Container>
  );
};

export default withRouter(EditarProducto);
