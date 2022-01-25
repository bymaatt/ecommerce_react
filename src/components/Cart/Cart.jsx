import React from 'react'
import './Cart.css'
import { useCartContext } from '../Context/CartContext'


const Cart=() => {
    const {cartList, vaciarCarrito} =useCartContext()
    return (
        <div className='contenedor_master'>
            <div className='contenedor_detalle'>
                {cartList.map(productos => <ul className=" item card-title"><li key={productos.id}>{productos.nombre} - cant: {productos.counter}</li></ul>)}
            </div>
            <div className='butt_master'>
                <button className='btn-dark butt' onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart
