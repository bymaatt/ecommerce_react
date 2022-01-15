import React from 'react'

const ItemDetail = (producto) => {
    return (
        <div>
            {productos.nombre}
            <img src={productos.imagen} alt={productos.descripcion}/>
            {productos.precio}
        </div>
    )
}

export default ItemDetail
