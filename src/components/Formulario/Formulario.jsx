import React, { useState } from 'react';
import './Formulario.css'

function Formulario() {

  const [values, setValues] = useState ({
    nombre:'',
    apellido: '',
  })
  
  const {nombre,apellido} = values

  console.log (nombre)
  console.log (apellido)

  const handleImputs = (e) => {
    setValues ({
        ...values,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    alert (`¡Hola ${nombre} ${apellido} su formulario fue enviado con exito!`)
  }
  
  return(
    <div>
        <h1>Contactanos</h1>
        <div className='form_gral'>
          <form onSubmit={handleSubmit}>
            <div className='item1'>
            <label for="nombre"> Nombre:</label>
              <input type="text" name="nombre" id='nombre' onChange={handleImputs}/>
            </div>
            <div className='item1'>
            <label for="apellido"> Apellido:</label>
              <input type="text" name="apellido" id='apellido' onChange={handleImputs}/>
            </div>
            <button type='submit'>Enviar</button>
          </form>
        </div>

    </div>
  ) 

}

export default Formulario;
