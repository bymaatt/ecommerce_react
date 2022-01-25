import '../../ItemCount/counter.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'




const ItemDetail = ({product}) => {

    const [show, setShow]= useState (true)

    const onAdd = (counter) => {
        setShow(false)
        alert (`${counter} unidades seleccionadas`)
    }

    return (
        <div id='ItemList' className='arreglo_mio'>
            <div className='arreglo_img'>
                <img id="img_arreglo" src={product.imagen} className="card-img-top" alt={product.nombre}/>
            </div>
            <div className="arreglo_description">
                <h2 className="card-title">{product.nombre}</h2>
                <h3>$ {product.precio}</h3>
                <p className="card-text">Descripción: {product.descripcion}</p>
                {show ? <ItemCount min = {1} max = {product.stock} reset= {0} onAdd={onAdd}/> :
                <div>
                    <Link to= '/cart'><button className='  btn-dark'>Terminar Compra</button></Link>
                    <Link to= '/'><button className='btns1 btn-dark'>Seguir Comprando</button></Link>
                </div>
                }
                <h6 className="card-title">stock: {product.stock} unidades</h6>
            </div>
        </div>
    )
}

export default ItemDetail
