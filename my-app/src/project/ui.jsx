import React from 'react';
import Uibody from './uibody';
import Heading from '../head';
import View from './view';
import { getByTestId } from '@testing-library/react';
import { useEffect } from 'react';
import { useState } from 'react';
import UpdateValues from './updatevalues';
import ViewValues from "./view";
import Btn from "./btn";
import Adduser from './adduser';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useHistory
      } from "react-router-dom";

export default function Ui(){   
        var arr = JSON.parse(localStorage.getItem("arr"));
        const [del, setDel] = useState(false);
        const history = useHistory();
      
        function getIdToDelete(k) {
          console.log(k);
          const delet = prompt("Are u sure U Wanna Delete", true);
          if (delet) {
            var arr = JSON.parse(localStorage.getItem("arr"));
            var ar = arr.filter((val) => val.id != k);
      
            localStorage.setItem("arr", JSON.stringify(ar));
            setDel((del) => !del);
          }
        }
return( <>
       
        <div>
        <Router>
        <Link to="/add"><button >Add New User</button></Link> 
        
        <Switch>
        <Route exact path="/add">
                <Adduser/>
        </Route>
         <Route exact path="/view/:id" children={<ViewValues />}></Route>
        
        <Route exact path="/update/:id" children={<UpdateValues />}></Route>
          
        <Route exact path="/">
        <div>
                        <table>
                                <th><Heading/></th>
                                <tbody>
                                <div>
                <div>
                        <table>
                                {arr.map((val)=>{
                                        const viu=`/view/${val.id}`;
                                        const udat=`/update/${val.id}`;
                                       return <div>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.salary}</td>
                                        <td>
                                        <div>
                                       
                                        {/* <RouteID value={{viu, udat}}> */}
                                       
                                        <Link to={viu}><button>view</button> </Link>
                                        <Link to={udat}><button>update</button> </Link>
                                        {/* </RouteID> */}
                                        <button onClick={() => { getIdToDelete(val.id); }} > delete</button>
                                        </div>
                                        </td>
                                        </div>
                                })

                                }
                               
                        </table>
                </div>
        </div>                                                            
                                </tbody>
                                <button>check arr</button>

                        </table>
                </div>
        </Route>
      
        </Switch>
           
        </Router>
                
        </div>
       
        </>
);

}
