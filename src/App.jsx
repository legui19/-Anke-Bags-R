import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import CartNew from './components/Cart/CartNew';
//import ComponenteCount from './components/ItemDetailContainer/ItemDetailContainer';
//import Cart from './components/Cart/Cart';
import InicioPage from './components/Inicio/InicioPage';
import ItemDetail from './components/ItemDetail/ItemDetail';




function App() {
  const titulo = 'Hola soy pagina de Inicio'
  const subtitulo = 'Bienvenido'
  const subtitulo2 = 'Gastón'

  return (
    <Router>
      <div className="App">
        <NavBar menu={["Inicio", "¿Como Comprar?", "Productos", "Sobre Nosotros", "Contacto", "Mi Carrito"]} />


        <switch>
          <Route exact path='/inicio' component={InicioPage} />


          <Route exact path='/productos' component={ItemListContainer} >
            <ItemListContainer greeting={'Hola soy "Item List Container"'} />
          </Route>

          <Route path='/categoria/:idCategoria' component={ItemListContainer} />

          <Route exact path='/detalle/:id' component={ItemDetailContainer} />

          <Route exact path='/itemDetail' component={ItemDetail} />

          <Route exact path='/Cart' component={CartNew} />

        </switch>

      </div>
    </Router>
  );
}

export default App;

{/* <Route> exact path='/ItemDetail' component={ItemDetail} </> */}
//<Route exact path='/cart' component={Cart} />
//<h1 bg-green>Hola Clientes de Anke & Bags</h1>
        //<h3>Gastón </h3>

