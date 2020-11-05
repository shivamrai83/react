import React from 'react';
import { useState } from 'react';
import {
    useHistory,
    useParams
  } from "react-router-dom";

export default function UpdateValues(){
    const[nam, setName]=useState("");
    const[sal, setSalary]=useState(0);
    let { id } = useParams();
    const history = useHistory();

    function updateUser(){
    var arr=JSON.parse(localStorage.getItem("arr"));

    // for(let i=0;i<arr.length;i++){
    //   if(arr[i].id==id){
    //     arr[i].name=nam;
    //     arr[i].salary=sal;
    //     break;
    //   }
    // }
    // localStorage.setItem("arr",arr);

    var changearr = arr.filter((val) =>val.id!=id );
    console.log("1 changearr",changearr);

    var pusharr = arr.filter((val) =>val.id==id );
    console.log("2 push",pusharr);
    pusharr[0].id=id;
    pusharr[0].name=nam?nam:pusharr[0].name;
    pusharr[0].salary=sal?sal:pusharr[0].salary;
    changearr.push(pusharr[0]);
    console.log(changearr);
    console.log(pusharr);
      localStorage.setItem("arr",JSON.stringify(changearr));
      history.push("/");
    }
return (
<div>
    ID:{id} <br/>
    Name:<input type="text" name="name" value={nam} onChange={(e)=>{setName(e.target.value)}} /><br/>
    Salary:<input type="text" name="salary" value={sal} onChange={(e)=>{setSalary(e.target.value)}} /><br/>
    <button onClick={()=>{updateUser()}}>Update User</button>
  
</div>

);
}