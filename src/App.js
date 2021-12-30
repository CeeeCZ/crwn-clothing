import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { useState, useEffect } from 'react';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  auth.onAuthStateChanged(user => {
    setCurrentUser(user)
  })

  // auth.signOut();

  console.log(currentUser)

  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
