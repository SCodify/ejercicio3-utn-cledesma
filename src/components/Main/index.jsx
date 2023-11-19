import React, { useState, useEffect } from "react"
import './styles.css'
import Card from "../Card"

function index() {
  const [data, setData] = useState([]);

  async function getDataProducts() {
    try {
      let response = await fetch("https://myapp-softcodify.netlify.app/db.json") 
      const productos = await response.json()
      setData(productos)
    } catch (error) {
      console.error(error)      
    }
  }

  useEffect(()=>{
    getDataProducts()
  }, [])

  return (
    <main>
      {data.map((item, index) => 
        <Card 
          key={index}
          imgProducto={item.imgProducto}
          nombre={item.nombre}
          descrip={item.descrip}
          precio={item.precio}
          sku={item.sku}
          stock={item.stock}
        />
      )} 

    </main>
  )
}

export default index
