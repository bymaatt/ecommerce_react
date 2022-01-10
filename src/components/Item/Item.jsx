import React from 'react'
import './Item.css'


function Item({productos}) {
    return (
        <div className='arreglo_mio'>
            <div className='arreglo_img'>
                <img id="img_arreglo" src={productos.imagen} className="card-img-top" alt={productos.nombre}/>
            </div>
            <div className="arreglo_description">
                <h2 className="card-title">{productos.nombre}</h2>
                <h6 className="card-title">stock: {productos.stock} unidades</h6>
                <p className="card-text">Descripción: {productos.descripcion}</p>
                <a href="/#" className="btn btn-primary">Comprar</a>
            </div>
            
        </div>
    )
}

export default Item
