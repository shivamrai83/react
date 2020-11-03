import { getByTestId } from '@testing-library/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useHistory
      } from "react-router-dom";
import Action from './action';
import View from "./view";



export default function Uibody(){
var arr=JSON.parse(localStorage.getItem("arr"));
const [del,setDel]=useState(false);
const history=useHistory()

function getIdToDelete(k){
        
        console.log(k);
        const delet = prompt("Are u sure U Wanna Delete",true);
        if(delet){
        var arr=JSON.parse(localStorage.getItem("arr"));
        var ar=arr.filter((val)=>val.id!=k);
        
        localStorage.setItem("arr",JSON.stringify(ar));
        setDel(del=>!del);
        
        }       
      
}

function viewpage(){
        history.push("/view");
      
}


return(<>
        <Router>
        <Link to="/view"></Link> 

        <Switch>
      
        <Route exact path="/view">
        <View/>
        </Route>
        </Switch>
           
        <div>
                <div>
                        <table>
                                {arr.map((val)=>{
                                       return <div>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.salary}</td>
                                        <td>
                                        <div>
                                        <button onClick={()=>{viewpage()}}>view</button>
                                        <button>update</button>
                                        <button onClick={()=>{getIdToDelete(val.id)}}>delete</button>
                                        </div>
                                        </td>
                                        </div>
                                })

                                }
                               
                        </table>
                </div>
        </div>
        </Router>
        </>
);

}
