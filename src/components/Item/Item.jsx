import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'


function Item({productos}) {
    return (
        <div id='ItemList' className='arreglo_mio'>
            <div className='arreglo_img'>
                <img id="img_arreglo" src={productos.imagen} className="card-img-top" alt={productos.nombre}/>
            </div>
            <div className="arreglo_description">
                <h2 className="card-title">{productos.nombre}</h2>
                <h3>$ {productos.precio}</h3>
                <p className="card-text">Descripción: {productos.descripcion}</p>
                <ItemCount min = {1} max = {productos.stock} reset= {0} />
                <h6 className="card-title">stock: {productos.stock} unidades</h6>
                
            </div>
            
        </div>
    )
}

export default Item
