import React, {useRef} from "react";

function Ref() {
    // textInput must be declared here so the ref can refer to it
    const textInput = useRef(null);
    
    function handleClick() {
        // debugger;
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={textInput} /><br></br>
          <input
          type="text"
          ref={textInput} /><br></br>
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );
  }
export default Ref;