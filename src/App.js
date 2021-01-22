import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInOrRegister from './pages/sign-in-or-register/sign-in-or-register.component';
import Header from './components/header/header.component';

import {checkUserSession} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth != null) {
      this.unsubscribeFromAuth();
    }

    if (this.unsubscribeFromSnapShot != null) {
      this.unsubscribeFromSnapShot();
    }
  }

  render() {
    return (
      <div>
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
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInOrRegister />
                )
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  checkUserSession: PropTypes.func,
  currentUser: PropTypes.object,
};
