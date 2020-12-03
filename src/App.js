import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInOrRegister from './pages/sign-in-or-register/sign-in-or-register.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <div className='page-container'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/shop'>
            <ShopPage />
          </Route>
          <Route path='/signin'>
            <SignInOrRegister />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
