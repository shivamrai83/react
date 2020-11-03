import React from 'react';
import Uibody from './uibody';
import Heading from '../head';
import View from './view'
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useHistory
      } from "react-router-dom";
export default function UiWrapper(){

    return (
        <>
         <Router>
        <Link to="/view"></Link> 
        <Switch>
                
        <Route exact path="/view">
                <View/>
        </Route>
          
       
       
        </Switch>
           
        </Router>
        <div>
                        <table>
                                <th><Heading/></th>
                                <tbody>
                                        <Uibody/>                                                                            
                                </tbody>
                                <button>check arr</button>

                        </table>
                </div>
        </>
    )

}