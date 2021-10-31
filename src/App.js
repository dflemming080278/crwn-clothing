import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { init, unSubscribeFromAuth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state={
      currentUser: null,
      unsubscribeFromAuth: null
    }//
  }
  

  handleCurrentUser = async (userAuth) => {
    if(userAuth) {

      await createUserProfileDocument(userAuth);
      this.setState({ 
        currentUser: userAuth 
      }
      // ,() => { //async pattern, ensure setstate finish
      //   console.log(this.state.currentUser);
      // }
      );
    } else {
      this.setState({ 
        currentUser: null 
      }
      // ,() => { //async pattern, ensure setstate finish
      //   console.log(this.state.currentUser);
      // }
      );
    }

    console.log('currentUser: ' + this.state.currentUser );
  }

  componentDidMount() {
    init( this.handleCurrentUser );       
  }

  componentWillUnmount() {
    unSubscribeFromAuth();
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
