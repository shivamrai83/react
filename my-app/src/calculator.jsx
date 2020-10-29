import React,{useState} from 'react';
// import KeyPadComponent from './keyPad';
const Calci = () => {
    const [value,setValue]=useState(" ");

    function concat(s){
        setValue(value+s);
    }

    function evaluate(){
        const sum=eval(value);
       setValue(sum);
    }
   

    return(
       <div>
           <input type="text" value={value}  />
           <div>
             

                <button onClick={()=>concat('1')}>1</button>
                <button onClick={()=>concat('2')}>2</button>
                <button  onClick={()=>concat('3')}>3</button>
                <button  onClick={()=>concat('+')} >+</button><br/>


                <button  onClick={()=>concat('4')}>4</button>
                <button  onClick={()=>concat('5')}>5</button>
                <button  onClick={()=>concat('6')}>6</button>
                <button  onClick={()=>concat('-')}>-</button><br/>

                <button  onClick={()=>concat('7')} >7</button>
                <button  onClick={()=>concat('8')}>8</button>
                <button  onClick={()=>concat('9')}>9</button>
                <button  onClick={()=>concat('*')}>x</button><br/>


                <button  onClick={()=>concat('.')}>.</button>
                <button  onClick={()=>concat('0')}>0</button>
                <button  onClick={()=>evaluate()}>=</button>
                <button  onClick={()=>concat('/')}>÷</button><br/>
                <button  onClick={()=>setValue(" ")}>Reset</button>
            </div>
       </div>

    )
}

export default Calci;

