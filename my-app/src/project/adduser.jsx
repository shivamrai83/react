import React, {useState} from 'react';


export default function Adduser(){

const[id, setId]=useState(0);
const[name, setName]=useState("");
const[salary, setSalary]=useState(0);

function addUser(){
    
}


return(
        <div>
               Name:<input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                Salary:<input type="text" name="salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}} /><br/>
                <button onClick={()=>{}}>Add User</button>
        </div>
);

}
