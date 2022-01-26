import React from 'react'
import './Cart.css'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


const Cart=() => {
    const {cartList} =useCartContext()
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
                    <CartItem/>
                </>
                )}
        </>
    )
}

export default Cart
