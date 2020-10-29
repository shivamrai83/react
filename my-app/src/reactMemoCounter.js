import React from "react";

const Counter = ({ value }) => {
    console.log('Rendering counter');
    return (
      <>
       <div>
           {value}
        </div>
      </>
    );
  };

  export default React.memo(Counter);