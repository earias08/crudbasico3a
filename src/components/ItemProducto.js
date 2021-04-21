import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        Nombre Producto <span className="font-weight-bold">$100</span>
      </p>
      <div>
        <Button variant="warning" className='mr-2'>Editar</Button>
        <Button variant="danger">Borrar</Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
