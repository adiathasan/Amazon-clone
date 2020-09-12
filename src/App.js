import React from 'react';
import Home from './components/home';
import Header from './components/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Checkout from './components/checkout';
import CheckoutContextProvider from './dataLayer/CheckoutContext';
import Login from './components/login';
import Payment from './components/payment';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <CheckoutContextProvider>
          
          <Switch>
              <Route path='/login'>
                <Login />
              </Route> 
              <Route path='/checkout'>
                <Header />
                <Checkout/>
              </Route>  
              <Route path='/payment'>
                <Header />
                <Payment/>
              </Route>  
              <Route path='/'>
                <Header />
                <Home/>
              </Route>       
          </Switch>
        </CheckoutContextProvider>
        </div>
      </BrowserRouter>
  );
}

export default App;
