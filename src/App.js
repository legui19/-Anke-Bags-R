import React from 'react';
import { useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../src/Components/NavBar/NavBar.jsx';
import HomeContainer from './Containers/HomeContainer';
import CartContainer from './Containers/CartContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContext  from './Context/CartContext';
import CategoryContainer from './Containers/CategoryContainer';
import CheckOutContainer from "./Containers/CheckOutContainer/CheckOutContainer";
import Saludo from './Components/Saludo'
import CatContainer from './Containers/CatContainer'
import Footer from '../src/Components/Footer/Footer.jsx'
import '../src/css/App.css'
import NavBarMain from './Components/NavBar/NavBarMain.jsx';



function App() {
  const [tipo, setTipo] = useState('inicia')
    return (

    <div className="App">
      <CartContext>  
        <BrowserRouter>
        
            <NavBar  type={tipo} setTipo={setTipo}/>
            <Footer/>
            <Switch>
            <Route path='/gracias/' render={() => <Saludo/>}/>
            <Route path='/checkout/' render={() => <CheckOutContainer />}/>
              <Route path='/item/:id' component={ItemDetailContainer}/>
              <Route exact path='/categories/:id' component={CatContainer}/>
              <Route path='/categories/' component={CategoryContainer}/>
              <Route path='/cart/' render={() => <CartContainer />}/>
              <Route path='/' render={() => <HomeContainer />} />
            </Switch> 
        </BrowserRouter>
      </CartContext> 
    </div>
  
  );
}

export default App;
