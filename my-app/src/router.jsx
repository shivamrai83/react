import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Func from './dat';
import './App.css';
import To from './todo';

import Stopwatch from './stopwatch';
import Counter from './counter';
import State from './form.jsx';
import Body from './body.jsx';
import LifeCycle from './lifecycle.js';
import Calci from './calculator.jsx';
import UseEffect from './useEffect';

import Shivam from './functional.jsx';
import Ui from './project/ui';
import Memo from'./reactMemo';
import UseMemo from './useMemo'
import UseCallBack from "./useCallBack";



export default function Route1() {
  return (
    <Router>
      
       
              <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
           
              <Link to="/table">Table</Link> &nbsp;&nbsp;&nbsp;

              <Link to="/counter">Counter</Link> &nbsp;&nbsp;&nbsp;
           
              <Link to="/form">Form</Link> &nbsp;&nbsp;&nbsp;

              <Link to="/stopwatch">Stopwatch</Link> &nbsp;&nbsp;&nbsp;

              <Link to="/todo">To-Do List</Link> &nbsp;&nbsp;&nbsp;

              <Link to="/calci">Calculator</Link> &nbsp;&nbsp;&nbsp;

              <Link to="/crud">C-R-U-D</Link> &nbsp;&nbsp;&nbsp;
     
        <Switch>
          <Route exact path="/">
           <h1> hello</h1>
          </Route>
          <Route exact path="/table">
            <Func/>
          </Route>
          <Route exact path="/counter">
            <Counter/>
          </Route>
          <Route exact path="/form">
          <State/>
          </Route>
          <Route exact path="/stopwatch">
          <Stopwatch/>
          </Route>
          <Route exact path="/todo">
           <To/>
          </Route>

          <Route exact path="/calci">
          <Calci/>
          </Route>
          <Route exact path="/crud">
          <Ui/>
          </Route>
        </Switch>
      
      
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return( <h2>About</h2>);
// }

// function Users() {
//   return <h2>Users</h2>;
// }