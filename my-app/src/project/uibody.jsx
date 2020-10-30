import { getByTestId } from '@testing-library/react';
import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";
import Action from './action';
import View from "./view";


export default function Uibody(){
var arr=JSON.parse(localStorage.getItem("arr"));

function getId(k){
        
        console.log(k);

        var arr=JSON.parse(localStorage.getItem("arr"));
        var ar=arr.filter((val,index)=>index!=k-1);
        
        localStorage.setItem("arr",JSON.stringify(ar));
        console.log(localStorage.getItem("arr"));

        // goView(k);
}
// function deleteId(id){
//             var arr = arr.filter(item => item.id !== id);
//             localStorage.setItem("arr",arr);
// }

return(<>
        <Router>
        <Link to="/"></Link> 
        <Link></Link>

        <Switch>
        <Route exact path="/">
        <Uibody/>
        </Route>
          
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
                                       <button onClick={()=>{getId(val.id)}}>view</button>
                                        <button>update</button>
                                        <button >delete</button>
                                        </div>
                                        </td>
                                        </div>
                                })

                                }
                                {/* {function goView(ka){
                                        <View/>
                                }} */}
                        </table>
                </div>
        </div>
        </Router>
        </>
);

}
