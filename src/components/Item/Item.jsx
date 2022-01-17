import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'


function Item({productos}) {
    return (
        <div id='ItemList' className='arreglo_mio'>
            <div className='arreglo_img'>
                <img id="img_arreglo" src={productos.imagen} className="card-img-top" alt={productos.nombre}/>
            </div>
            <div className="arreglo_description">
                <h2 className="card-title">{productos.nombre}</h2>
                <p className="card-text">Descripción: {productos.descripcion}</p>
                <Link to={`/detalle/${productos.id}`}>
                    <button className="btns1 btn-dark">Detalle de Producto</button>
                </Link>
                <h6 className="card-title">stock: {productos.stock} unidades</h6>
                
            </div>
            
        </div>
    )
}

export default Item
