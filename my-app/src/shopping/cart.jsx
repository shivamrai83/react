import React, { useEffect, useState } from 'react';
import Heading from './heading';

export default function Cart(){
    const [sum,setSum]=useState(0);
    const [delet,setDelete]=useState(false);
    
const cart=JSON.parse(localStorage.getItem("cart"));

useEffect(()=>{
   const total= cart.reduce((acc,val)=>acc=acc+parseInt(val.price),0);
   setSum(total);
})
function resetCart(){
    const d=prompt("All data Will be Deleted",true);
    if(d){
    localStorage.setItem("cart",JSON.stringify([]));
    setDelete((d)=>!d);
    }
}
function deleteItem(index){
    const del=prompt("All data Will be Deleted",true);
    if(del){
    const cart=JSON.parse(localStorage.getItem("cart"));
    // let arr = cart.filter((val)=>val.id!=id);
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    setDelete((del)=>!del);
    }
}
return(
    <>  
    <div>
    <table>
        <th><Heading/></th>
            <tbody>
                <div>
                <div>
                    <table>
                        {cart.map((val,index)=>{
                                      
                            return <div>      
                                <td>{val.product}</td>
                                <td>{val.price}</td>  
                                <td><button onClick={()=>{deleteItem(index);}}>delete</button></td>
                                </div>
                                })

                        }
                        <br/>
                       Total Price:{sum}
                       
                       <button onClick={()=>{resetCart();}}>Reset Cart</button>        
                    </table>
                </div>
                </div>                                                            
            </tbody>
    </table>
    </div>
    </>
)

}

