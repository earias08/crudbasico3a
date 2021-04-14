import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const AgregarProducto = () => {
  // crear states
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState("");

  const leerCategoria = (e) =>{
    setCategoria(e.target.value)
  }

  return (
    <Container>
      <Form className="my-5">
        <h1 className="my-5">Agregar nuevo producto</h1>
        <Form.Group>
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control type="text" placeholder="Café" onChange={(e)=> setNombreProducto(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="50" onChange={(e)=> setPrecioProducto(e.target.value)}></Form.Control>
        </Form.Group>
        <h3 className="text-center mt-4">Categoria</h3>
        <div className="text-center my-4">
          <Form.Check
            inline
            type="radio"
            label="Bebida caliente"
            name="categoria"
            value='bebida-caliente'
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Bebida fria"
            name="categoria"
            value='bebida-fria'
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Dulce"
            name="categoria"
            value='dulce'
            onChange={leerCategoria}
          ></Form.Check>
          <Form.Check
            inline
            type="radio"
            label="Salado"
            name="categoria"
            value='salado'
            onChange={leerCategoria}
          ></Form.Check>
        </div>
      </Form>
    </Container>
  );
};

export default AgregarProducto;
