import React from 'react'
import carrito from './assets/img/carrito.png'

function CartWidget() {
    return (
        <div>
            <img id='carrito' src={carrito} alt="carrito" />
        </div>
    )
}

export default CartWidget
 