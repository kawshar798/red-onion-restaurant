import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header/Header'
import Banner from './Components/Baner/Baner';
import MenuItems from './Components/MenuItems/MenuItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Notfound from './Components/Notfound/Notfound';
function App() {
  return (
    <div className="App">


      <Router>

        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
            <MenuItems />
          </Route>
          <Route path="/food/:foodKey">
          <Header></Header>
            <ItemDetails> </ItemDetails>
          </Route>
          <Route path="*">
          <Notfound />

        </Route>
        </Switch>
       
      </Router>


    </div>
  );
}

export default App;
