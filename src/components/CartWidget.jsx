import React from 'react'
import carro from '../assets/png/carrito.png'

function CartWidget() {
    return (
        <div>
            <img id='carrito' src={carro} alt="carrito" />
        </div>
    )
}

export default CartWidget
 