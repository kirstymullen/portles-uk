import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInOrRegister from './pages/sign-in-or-register/sign-in-or-register.component';
import Header from './components/header/header.component';

import {GlobalStyle} from './global.styles';

import {checkUserSession} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

const App = ({checkUserSession}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const currentUser = useSelector(selectCurrentUser);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <div className='page-container'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInOrRegister />
            }
          />
        </Switch>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  checkUserSession: PropTypes.func,
  currentUser: PropTypes.object,
};
