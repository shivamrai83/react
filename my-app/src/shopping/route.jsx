import React from 'react';
import Cart from './cart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import HomePage from './home';

  export default function Rout(){



    return<>
    <Router>
    <Link to="/"><button >Home</button></Link> 

    Shopping Site &nbsp;
    
    <Link to="/cart"><button >Cart</button></Link> 
    <br/>
    <br/>
    <Switch>
    <Route exact path="/">
    <HomePage />
    </Route>
    <Route exact path="/cart">
    <Cart />
    </Route>
    </Switch>
    </Router>
    </>
  }