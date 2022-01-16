import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Routes>
          <section>
            <ItemListContainer greeting='¡Bienvenidos a mi tienda!' />
          </section>
          <section>
            <ItemDetailsContainer />
          </section>
          <Route path='/Cart' element= {<Cart />}/>
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
