import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ItemProducto = (props) => {
  const eliminarProducto = (codigo) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el producto?",
      text: "No puedes recuperar un producto que fue eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(codigo);
        // agregar solicitud deleted
        try {
          const URL = process.env.REACT_APP_API_URL + "/" + codigo;
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "Producto eliminado",
              "El producto seleccionado fue correctamente eliminado",
              "success"
            );
            // volver hacer la consulta a la api
            props.consultarAPI();
          }
        } catch (error) {
          console.log(error);
          Swal.fire("Ocurrio un error", "Intentenlo nuevamente", "warning");
        }
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.producto.nombreProducto}{" "}
        <span className="font-weight-bold">
          ${props.producto.precioProducto}
        </span>
      </p>
      <div>
        <Button variant="warning" className="mr-2 text-light">
          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
        </Button>
        <Button
          variant="danger"
          onClick={() => eliminarProducto(props.producto.id)}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
