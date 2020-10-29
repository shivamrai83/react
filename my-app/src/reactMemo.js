import React,{useState} from "react";
import Counter from './reactMemoCounter';

const Memo = () => {
    const [count,setCount]=useState(0);
    const [text,setText]=useState('Change Me!!');

  return (<>
          <button onClick={()=>{setCount(count+1)}}>
        Counter        
        </button>
      <input type='text' onChange={(e)=>{setText(e.target.value)}} />  
      <Counter value={count}/>
      
  </>);
};

export default Memo;
