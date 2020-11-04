import React, { useEffect } from 'react';
import {
    useHistory,
    useParams
  } from "react-router-dom";

export default function ViewValues() {
   
        let { id } = useParams();
    var arr=JSON.parse(localStorage.getItem("arr"));
    var ar=arr.filter((val)=>val.id==id);
    const history = useHistory();
   
    return (
      <div>
              {ar.map((v)=>{
                      return (
                              <div>
                                      <tr>ID: {v.id}</tr>
                                      <tr>Name: {v.name}</tr>
                                      <tr>Sal: {v.salary}</tr>
                                      <button onClick={()=>{  history.push("/crud");}}>done viewing</button>
                              </div>
                      )

              })

              }
           
      </div>
    );
  }
