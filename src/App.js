import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header/Header'
import Banner from './Components/Baner/Baner';
import MenuItems from './Components/MenuItems/MenuItems';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Notfound from './Components/Notfound/Notfound';
import Features from './Components/Features/Features';
import Login from './Components/Login/Login';
import { AuthContextProvider } from './Components/Login/useAuth';
function App() {

  const [cart, setCart] = useState([]);
  const cartHandler = (data) => {
    const alreadyAdd = cart.find(cart => cart.key == data.key);
    const newCart = [...cart, data]
    setCart(newCart);
    if (alreadyAdd) {
      const remainCat = cart.filter(cart => cart.key != data)
      setCart(remainCat);
    } else {
      const newCart = [...cart, data]
      setCart(newCart);
    }
  }
  return (
    <div className="App">
      <AuthContextProvider>

        <Router>
          <Switch>

            <Route exact path="/">
              <Header cart={cart.length}></Header>
              <Banner></Banner>
              <MenuItems />
              <Features />
            </Route>
            <Route path="/food/:foodKey">
              <Header cart={cart.length}></Header>
              <ItemDetails cartHandler={cartHandler}> </ItemDetails>
            </Route>
            <Route path="/login">
              <Header cart={cart.length}></Header>
              <Login />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>

        </Router>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
