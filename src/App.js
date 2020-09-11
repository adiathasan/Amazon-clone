import React from 'react';
import Home from './components/home';
import Header from './components/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Checkout from './components/checkout';
import CheckoutContextProvider from './dataLayer/CheckoutContext';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <CheckoutContextProvider>
          <Header />
          <Switch>
              <Route path='/checkout'>
                <Checkout/>
              </Route>  
              <Route path='/'>
                <Home/>
              </Route>    
          </Switch>
        </CheckoutContextProvider>
        </div>
      </BrowserRouter>
  );
}

export default App;
