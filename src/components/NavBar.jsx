import React from 'react';
import './Navbar.css'
import CartWidget from './CartWidget';



function NavBar() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a href="/#" class="navbar-brand">Impo Coleccionables</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a href= "/#" class="nav-link">Inicio</a> 
                            </li>
                            <li class="nav-item">
                            <a href="/#" class="nav-link">Colección</a> 
                            </li>
                            <li class="nav-item">
                            <a href="/#" class="nav-link">Contacto</a>
                            </li>
                            <li class="nav-item">
                            <a href="/#" class="nav-link">Tienda</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
