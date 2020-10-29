import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
             

                <button onclick="concatVal(1)"> 1</button>
                <button >2</button>
                <button >3</button>
                <button >+</button><br/>


                <button >4</button>
                <button >5</button>
                <button >6</button>
                <button >-</button><br/>

                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button >x</button><br/>


                <button >.</button>
                <button >0</button>
                <button >=</button>
                <button >÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;