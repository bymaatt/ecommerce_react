import React from 'react';
import CartWidget from './CartWidget';



function NavBar() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <p class="navbar-brand" href="#">Impo Coleccionables</p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <p class="nav-link">Inicio</p> 
                            </li>
                            <li class="nav-item">
                            <p class="nav-link">Colección</p> 
                            </li>
                            <li class="nav-item">
                            <p class="nav-link">Contacto</p>
                            </li>
                            <li class="nav-item">
                            <p class="nav-link">Tienda</p>
                            </li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
