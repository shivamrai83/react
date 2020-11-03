
import React, {Component, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';


export default function Adduser(){
const[name, setName]=useState("");
const[salary, setSalary]=useState(0);
const[id,setId]=useState(0);

useEffect(()=>{
const arr=JSON.parse(localStorage.getItem("arr"));
if(arr.length!==0){
const i=arr[arr.length-1].id;
console.log("mounted id is:",i);
setId(i);
}
else{
setId(0);
}
},[])

var history=useHistory();
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
   history.push("/crud");
//    localStorage.clear();
//    localStorage.setItem("arr",JSON.stringify([]));
}


return(
        <>
                Name:<input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                Salary:<input type="text" name="salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}} /><br/>
                <button onClick={()=>{addUser()}}>Add User</button>
                <button>Get user</button>
        </>  
);

}


