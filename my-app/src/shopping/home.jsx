import React from 'react';
import Cart from './cart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";


export default function HomePage(){

var arr=[{id:1,product:"Nike Shoes",price:"10000"},{id:2,product:"Gucchi Shirt",price:"29999"},{id:3,product:"Prada Purse",price:"80000"}]

function addtocart(id){
var cart=JSON.parse(localStorage.getItem("cart"));
var pus=arr.filter((val)=>val.id==id);
cart.push(pus[0]);
localStorage.setItem("cart",JSON.stringify(cart));
alert("added sucessfully");
}


return(
    <>
    <div>
        {arr.map((val,index)=>{
            return <div>
                {val.product} <br/>
                {val.price} <br/>
                <button onClick={()=>{addtocart(val.id);}}>add</button>
            </div>
        })}
    </div>
   
 
    </>
)

}

