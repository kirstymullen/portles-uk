import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInOrRegister from './pages/sign-in-or-register/sign-in-or-register.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userReference = await createUserProfileDocument(userAuth);
        this.unsubscribeFromSnapShot = userReference.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapShot();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
}

export default App;
