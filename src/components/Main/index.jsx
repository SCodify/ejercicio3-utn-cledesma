import React, { useState, useEffect } from "react"
import './styles.css'
import Card from "../Card"

function index() {
  const [data, setData] = useState([]);

  async function getDataProducts() {
    try {
      let response = await fetch("http://localhost:5173/db.json") 
      const datos = await response.json()
      setData(datos)
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
