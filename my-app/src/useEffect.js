import React, { useState, useEffect } from 'react';

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [textValue, setTextValue] = useState('Change Me!!');
  
  useEffect(() => {
    return ()=>{
       
        console.log('ComponentWillUnMount')
    }
  }, []);
  
  
  useEffect(() => {
    
    console.log('ComponentDidMount')
}, []);


useEffect(() => {
   
   console.log('ComponentDidUpdate')
},);

//dependancy array, call me when count changes
useEffect(() => {
   
    document.title=count;
},[count]); 

  return (
    <div>
      <p> Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <div>
      TextBox: <input type="text" value={textValue} onChange={(e)=>{setTextValue(e.target.value)}}/>
      </div>
    </div>
  );
}