import React from "react";

 const Counter = ({ value, children, onclick }) => {
    console.log('Rendering: ', children)
    return (
      <>
       <div>
          {children}: {value}
        </div>
        <button onClick={onclick}>
           {children}
        </button>
      </>
    );
  };
 export default React.memo(Counter);