import React from 'react';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a href="/#" className="navbar-brand">Impo Coleccionables</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a href= "/#" className="nav-link">Inicio</a> 
                            </li>
                            <li className="nav-item">
                            <a href="/#" className="nav-link">Colección</a> 
                            </li>
                            <li className="nav-item">
                            <a href="/#" className="nav-link">Contacto</a>
                            </li>
                            <li className="nav-item">
                            <a href="/#" className="nav-link">Tienda</a>
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
