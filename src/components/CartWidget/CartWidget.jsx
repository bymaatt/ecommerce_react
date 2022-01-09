import React from 'react'
import './CartWidget.css'
import carro from '../assets/png/carrito.png'

function CartWidget() {
    return (
        <div>
            <a href="/#"><img id='carrito' src={carro} alt="carrito" /></a>
        </div>
    )
}

export default CartWidget
 