import React from 'react'
import './CartWidget.css'
import carro from '../../assets/png/carrito.png'

function CartWidget() {
    return (
        <div>
            <img id='carrito' src={carro} alt="carrito" />
        </div>
    )
}

export default CartWidget
 