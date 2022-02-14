import React from 'react';
import './Gracias.css'
import { Link } from 'react-router-dom';

function Gracias() {
  return(
    <div>
            <h1>
                ¡Muchas gracias por su compra!
            </h1>
            <p>
                Lo estaremos contactando a la brevedad para coordinar la entrega.
            </p>
            <br />
            <Link to='/'>
                <button className='btns1  btn-dark'>Volver a la tienda</button>
            </Link>
            
    </div>
  )
}

export default Gracias;
