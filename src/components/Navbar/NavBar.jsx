import React from 'react';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';




function NavBar() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Impo Coleccionables</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/#" className="nav-link">Colección</a> 
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link">Contacto</a>
                            </li>
                            <li className="nav-item dropdown"  >
                                <a href="/#ItemList" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías de Producto</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink className="dropdown-item" to="/categoria/vengadores">Vengadores</NavLink>
                                        <NavLink className="dropdown-item" to="/categoria/independientes">Heroes Independientes</NavLink>
                                        <NavLink className="dropdown-item" to="/categoria/mutante">Mutantes</NavLink>
                                    </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Link to='/cart'>
                            <CartWidget/>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
