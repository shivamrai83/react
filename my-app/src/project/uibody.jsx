import { getByTestId } from '@testing-library/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useHistory,
        useParams
      } from "react-router-dom";
import UpdateValues from './updatevalues';
import ViewValues from "./view";
import Btn from "./btn";
import Ui from './ui';


// export const RouteID = React.createContext();

export default function Uibody(){
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

  
return(<>
        <Router>
        <Link to="/view "></Link> 

        <Switch>      
        <Route exact path="/view/:id" children={<ViewValues />}></Route>
        
        <Route exact path="/update/:id" children={<UpdateValues />}></Route>
        </Switch>   
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
        </Router>
        </>
);

}

