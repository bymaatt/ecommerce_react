import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section>
        <ItemListContainer greeting='¡Bienvenidos a mi tienda!' />
      </section>
      <section>
        <ItemDetailsContainer />
      </section>
    </div>
  );
}

export default App;
