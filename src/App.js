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
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

import {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userReference = await createUserProfileDocument(userAuth);
        this.unsubscribeFromSnapShot = userReference.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
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
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
};
