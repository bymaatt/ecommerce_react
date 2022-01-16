import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'



const ItemDetail = ({product}) => {
    return (
        <div id='ItemList' className='arreglo_mio'>
            <div className='arreglo_img'>
                <img id="img_arreglo" src={product.imagen} className="card-img-top" alt={product.nombre}/>
            </div>
            <div className="arreglo_description">
                <h2 className="card-title">{product.nombre}</h2>
                <h3>$ {product.precio}</h3>
                <p className="card-text">Descripción: {product.descripcion}</p>
                <ItemCount min = {1} max = {product.stock} reset= {0} />
                <h6 className="card-title">stock: {product.stock} unidades</h6>
            </div>
        </div>
    )
}

export default ItemDetail
