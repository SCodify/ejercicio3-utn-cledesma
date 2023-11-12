// Componente Hijo

import React from "react"
import './styles.css'


function index({ imgProducto, nombre, descrip, precio, sku, stock }) {
  return (
    <div className="card-container">
      <div className="img-card-container">
        <img src={imgProducto} alt=""/>
      </div>
      <div className="text-card-container">
        <h3>Nombre: {nombre}</h3>
        <p>Descripción: {descrip}</p>
        <p>Precio: ${precio}</p>
        <p>SKU: {sku}</p>
        <p>Stock: {stock}</p>
        <button>Agregar al carro</button>
      </div>
    </div>
  )
}

export default index
