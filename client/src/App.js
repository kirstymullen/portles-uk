import React, {useEffect, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';

import Header from './components/header/header.component';

import {GlobalStyle} from './global.styles';

import {checkUserSession} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInOrRegister = lazy(() =>
  import('./pages/sign-in-or-register/sign-in-or-register.component')
);

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
          </ErrorBoundary>
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
