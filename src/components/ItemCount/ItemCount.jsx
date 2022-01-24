import './counter.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount =({min, max, onAdd}) => {

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
            <button className="btns1 btn-dark" onClick={sumarCarrito}>+</button>
            <button className="btns2 btn-warning" onClick={reset}>Eliminar</button>
            <button className="btns1 btn-dark" onClick={restarCarrito}>-</button>
            <br/>
            <button className="btns1 btn-danger addToCart" onClick={() => onAdd(counter)} disabled={counter < 1 && 'disabled'}>Agregar al carrito</button>
            <br/>
            <Link to='/'><button className="btns3 btn-dark">Volver</button> </Link>
            
            <p className='contador'>Cant: {counter}</p>
        </div>
    )
}

export default ItemCount
