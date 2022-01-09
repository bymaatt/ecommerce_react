import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting='¡Bienvenidos a mi tienda!' />
    </div>
  );
}

export default App;
