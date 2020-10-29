import React from "react";

export class Child extends React.Component {
  constructor(){
      super()
  }

  handleParentToChildClick = () => {
      this.props.childHandler('Hi I am from Child')
  };

 


  render() {
    return (
        <div>
      <button
        onClick={() => {
          this.handleParentToChildClick();
        }}
      >
        Share child To parent
      </button>

      </div>
      
    );
  }
}
