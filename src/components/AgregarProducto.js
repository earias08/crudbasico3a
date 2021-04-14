import React from 'react';
import { Container, Form } from 'react-bootstrap';

const AgregarProducto = () => {
    return (
      <Container>
          <Form className='my-5'>
              <h1 className='my-5'>Agregar nuevo producto</h1>
              <Form.Group>
                  <Form.Label>Nombre del producto*</Form.Label>
                  <Form.Control type='text' placeholder='Café'></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Precio*</Form.Label>
                  <Form.Control type='number' placeholder='50'></Form.Control>
              </Form.Group>
              <h3 className='text-center mt-4'>Categoria</h3>
              <div className='text-center my-4'>
                  <Form.Check inline type='radio' label='Bebida caliente' name='categoria'></Form.Check>
                  <Form.Check inline type='radio' label='Bebida fria' name='categoria'></Form.Check>
                  <Form.Check inline type='radio' label='Dulce' name='categoria'></Form.Check>
                  <Form.Check inline type='radio' label='Salado' name='categoria'></Form.Check>
              </div>
          </Form>
      </Container>
    );
};

export default AgregarProducto;