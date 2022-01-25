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
          <div className='form_container'>
            <form onSubmit={handleSubmit}>
              <div className='principales'>
                <div className='item1 item2'>
                  <label for="nombre">
                    <span>*Nombre: </span>
                    <input type="text" name="nombre" id='nombre' required onChange={handleImputs}/>
                  </label>
                </div>
                <div className='item1 item2'>
                  <label for="apellido">
                    <span>*Apellido: </span>
                    <input type="text" name="apellido" id='apellido' required onChange={handleImputs}/>
                  </label>
                </div>
                <div className='item1 item2'>
                  <label for= 'mail'>
                    <span>*email: </span>
                    <input type="mail" name='mail' id='mail' required />
                  </label>
                </div>
              </div>
              <div className='item1'>
                <label for='asunto'>
                  <span>Asunto: </span>
                  <input type="text" list='items' name='asunto' id='asunto' />
                  <datalist className='select' name='asunto' id='items' simple>
                    <option> Devolución</option>
                    <option>Sugerencia</option>
                    <option>Reclamo</option>
                    <option>Agradecimiento</option>
                  </datalist>
                </label>
              </div>
              <div className='item2'>
                <textarea type="textarea" rows="10" cols="50" placeholder='Escribinos...'/>
              </div>
              <div className='boton'>
                <button className='btns4 btn-dark' type="reset">Borrar</button>
                <button className='btns4 btn-dark' type='submit'>Enviar</button>
              </div>              
            </form>
          </div>        
        </div>

    </div>
  ) 

}

export default Formulario;
