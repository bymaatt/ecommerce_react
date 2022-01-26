import React from 'react';
import './Cart.css'
import { useCartContext } from '../Context/CartContext'

const CartItem = () => {

    const {cartList, deleteItem, vaciarCarrito, total} =useCartContext()

  return (
    <div className='contenedor_master'>
        <div className='contenedor_detalle'>
            {cartList.map(productos =><ul className=" item card-title"><li key={productos.id}>{productos.nombre} - cant: {productos.counter} <button className='btns1' onClick={() => deleteItem(productos.id)}>x</button></li></ul>)}
        </div>
        <div>
            <h3>Total: $ {total()}</h3>
        </div>
        <div className='butt_master'>
            <button className='btn-dark butt' onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    </div>
  )
}

export default CartItem;
