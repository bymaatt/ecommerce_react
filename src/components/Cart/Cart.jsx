import React from 'react'
import './Cart.css'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


const Cart=() => {
    const {cartList, deleteItem, vaciarCarrito} =useCartContext()
    return (
        <>
            {cartList.length ===0 ?(
                <div>
                    <h1>No has agregado nada en el carrito aún</h1>
                    <Link to='/'>
                        <button className='btns1 btn-dark'> Ir a la tienda</button>
                    </Link>
                </div>
                ) : (
                <>
                    <div className='contenedor_master'>
                        <div className='contenedor_detalle'>
                            {cartList.map(productos =><ul className=" item card-title"><li key={productos.id}>{productos.nombre} - cant: {productos.counter} <button className='btns1' onClick={() => deleteItem(productos.id)}>x</button></li></ul>)}
                        </div>
                        <div className='butt_master'>
                            <button className='btn-dark butt' onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </div>
                    </div>
                    
                </>
                )}
        </>
    )
}

export default Cart
