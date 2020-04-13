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
import { AuthContextProvider, PrivateRoute } from './Components/Login/useAuth';
import Shipment from './Components/Shipment/Shipment';
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

  const handleCheckout = (productKey, productQuantity) => {
    const newCart = cart.map(item => {
      if (item.key === productKey) {
        item.quantity = productQuantity
      }
      return item;
    });
    const filteredCart = newCart.filter(item => item.quantity > 0)
    setCart(filteredCart)
  }
  return (
    <div className="App">
      <AuthContextProvider>

        <Router>
          <Switch>
            <Route exact path="/">
              <Header cart={cart} />
              <Banner></Banner>
              <MenuItems cart={cart} />
              <Features />
            </Route>
            <Route path="/food/:foodKey">
              <Header cart={cart} />
              <ItemDetails cartHandler={cartHandler}> </ItemDetails>
              <Footer />
            </Route>

            <PrivateRoute path="/shipment">
              <Header cart={cart} />
              <Shipment cart={cart} handleCheckout={handleCheckout} />
              <Footer />
            </PrivateRoute>
            
            <Route path="/login">
              <Header cart={cart} />
              <Login />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>

        </Router>
      
      </AuthContextProvider>
    </div>
  );
}

export default App;
