import './counter.css'
import React, { useState } from 'react'

const ItemCount =({min, max}) => {

    const [counter, setCounter] = useState(0)
    
    const sumarCarrito= () =>{
            counter < max ? setCounter(estadoPrevio => estadoPrevio + 1) : alert ('Stock maximo de producto')
    }
    const restarCarrito = () => {
        counter > min ? setCounter(estadoPrevio => estadoPrevio - 1) : alert('El minimo de Compra es 1 unidad')
        
    }
    const reset = () => {
        setCounter(estadoPrevio => estadoPrevio = 0)
    }
    return (
        <div>
            <button href="" className="btns1 btn-dark" onClick={sumarCarrito}>+</button>
            <button href="" className="btns2 btn-warning" onClick={reset}>Eliminar</button>
            <button href="" className="btns btn-primary" onClick={restarCarrito}>-</button>
            
            <p className='contador'>Cant: {counter}</p>
        </div>
    )
}

export default ItemCount
