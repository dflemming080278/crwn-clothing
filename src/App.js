import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { initFirebaseAuth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state={
      currentUser: null,
      unsubscribeFromAuth: null
    }//
  }
  

  handleCurrentUser = (user) => {
    this.setState({ currentUser: user});
  }

  componentDidMount() {
    initFirebaseAuth( this.handleCurrentUser,  this.state.unsubscribeFromAuth);
  }

  componentWillUnmount() {
      this.state.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser= { this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component = { HomePage } />
          <Route exact path='/shop' component = { ShopPage } />
          <Route exact path='/signin' component = { SignInAndSignUpPage } />
        </Switch>
      </div>
    );
  }
  
}

export default App;
