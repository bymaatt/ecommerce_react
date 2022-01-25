import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import Formulario from './components/Formulario/Formulario';
import {CartContextProvider} from './components/Context/CartContext'



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <Routes>
            
            <Route exact path='/'element= {<ItemListContainer greeting='¡Bienvenidos a mi tienda!' />} />
            <Route exact path='/categoria/:idCategoria' element = {<ItemListContainer />}/>
            
            <Route exact path='/detalle/:idDetalle' element = {<ItemDetailsContainer />}/>
            
            
            <Route exact path='/Cart' element= {<Cart />}/>

            <Route exact path='/formulario' element= {<Formulario />} />

          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
