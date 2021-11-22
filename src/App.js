import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
