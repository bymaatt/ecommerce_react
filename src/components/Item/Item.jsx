import React from 'react'
import './Item.css'

function Item({productos}) {
    return (
        <div>
            <h2>{productos.nombre}</h2>
            <h3>
                Precio: $ {productos.precio}
            </h3>
            <h3>
                stock: {productos.stock} unidades
            </h3>
            <p>
                {productos.descripcion}
            </p>
            <img id='imgProd' src= {productos.imagen} alt= {productos.nombre} />
        </div>
    )
}

export default Item
