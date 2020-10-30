// const { useState, useEffect } = require("react");

import React from 'react';

import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";

import Adduser from './adduser';
import UiWrapper from './wrapper';
export default function Ui(){
       
return( <>
      
        <div>
        <Router>
        <Link to="/add"><button >Add New User</button></Link> 
        <Link to="/crud"></Link>

        
        <Switch>
        <Route exact path="/add">
                <Adduser/>
        </Route>
          
        <Route exact path="/crud">
                < UiWrapper/>
        </Route>
          
       
        </Switch>
           
        </Router>
                
                
               
        </div>
       
        </>
);

}
