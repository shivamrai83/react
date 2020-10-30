import React, { useEffect } from 'react';


export default function View(props){
   

    var arr=JSON.parse(localStorage.getItem("arr"));
    console.log(arr);
    var s=props.valu;
    console.log(s+"s");
    var view=arr.filter((val)=>s==val.id);
    console.log(view); 

   
return(<>
        <h1>shivam</h1>
        <div>
           {view.map((v)=>{
            return(
                <div>
                    <td>v.id</td>
                    <td>v.name</td>
                    <td>v.salary</td>                   
                </div>
            )            
            }  
               
           )}
        </div>
        <button>goback</button>
        </>
);
}
