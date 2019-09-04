import React from "react";
import {Route,Switch} from 'react-router-dom';
import "./App.css";
import HomePage from './components/pages/homepage/homepage';
import ShopPage from './components/pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignOutPage from './components/pages/sign-in-sign-up/sign-in-sign-up';




function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path ='/' component = {HomePage} />
      <Route  path ='/shop' component = {ShopPage} />
      <Route exact path ='/signin' component = {SignInAndSignOutPage} />
      </Switch>
    </div>
  
      );
}

export default App;
