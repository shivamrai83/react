import React, { useState } from 'react';

export default function UseState() {
  const [count, setCount] = useState(0);
  const [textValue, setTextValue] = useState('Change Me!!');

function clickHandler(){
    if(count<10){
        setCount(count+1)
    }else{
        alert("not greater than 10");
    }
}

  return (
    <div>
      <p> Count: {count}</p>

      <button onClick={() =>clickHandler ()}>
        Click me
      </button>
      <div>
      TextBox: <input type="text" value={textValue} onChange={(e)=>{setTextValue(e.target.value)}}/>
      </div>
      {count}
    </div>
  );
}