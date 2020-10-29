import React, { useState, useEffect } from "react";

export default function Shivam(){
    const [count,changeCount]=useState(0);
    
    useEffect(()=>{
        debugger;
        console.log("logic....");
        return ()=>{
            debugger;
            console.log("Cleaning Up....");
        }
    },[count]);


    return(
        <>
        {/* <input type="text" name='fname' value={count} onChange={(e)=>{changeCount(count)}}/> */}
        {count}
        <button onClick={()=>{changeCount(count+1)}}>+</button>
        <button onclick={()=>{}}></button>
        </>
    );
}

