import React,{useState,useCallback} from "react";
import Counter from "./useCallBackCounter";
 
const UseCallBack = () => {
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    const counterHandler1=useCallback(()=>{
        setCount1(count1+1);
    },[count1])

    const counterHandler2=useCallback(()=>{
        setCount2(count2+1);
    },[count2])

  return (<>
      <Counter value={count1} onclick={counterHandler1}>Counter 1</Counter>
      <Counter value={count2} onclick={counterHandler2}>Counter 2</Counter>
  </>);
};

export default UseCallBack;
