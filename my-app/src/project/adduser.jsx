
import React, {Component, useState} from 'react';


export default function Adduser(){

const arr=JSON.parse(localStorage.getItem("arr"));
const i=arr.length;
const[id,setId]=useState(i);
const[name, setName]=useState("");
const[salary, setSalary]=useState(0);

// export const ContextArray=React.createContext();



function addUser(){
       
    const emp={
            id:id+1,
            name:name,
            salary:salary
    }
    const arr=JSON.parse(localStorage.getItem("arr"));
    arr.push(emp);
    localStorage.setItem("arr",JSON.stringify(arr));
   
    setName(" ");
    setSalary(0);
   setId(id+1);
//    localStorage.clear();
//    localStorage.setItem("arr",JSON.stringify([]));
}
function getUser(){
       
        alert(localStorage.getItem("arr"));
}

return(
        <>

               Name:<input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                Salary:<input type="text" name="salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}} /><br/>
                <button onClick={()=>{addUser()}}>Add User</button>
                <button onClick={()=>{getUser()}}>Get user</button>
             </>  
);

}


