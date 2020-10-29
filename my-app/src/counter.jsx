import React from "react";


export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      tick: 0,
      unmount: false
    };
  }


  counterClick = (e) => {
    this.setState((prevState) => {
      return { tick: prevState.tick + 1 };
    });
  };
  counterClicksub = (e) => {
    this.setState((prevState) => {
      return { tick: prevState.tick - 1 };
    });
  };
  counterReset=(e)=>{
      this.state={tick:0};
      console.log(this.state.tick);
  }

  unmount=(e)=>{
  this.setState({unmount:true})
  }
  componentWillUnmount(){
    console.log("unmounted!");
  }

  render() {
    console.log("render");

    // render should return somethig
    return (
      <div>
        <button onClick={(e) => {
            this.counterClick();
          }}
        >
          {" "}
          counter++
        </button>

        <button onClick={(e) => {
            this.counterClicksub();
          }}
        >
          {" "}
          counter --
        </button>

        <div>
          <h2>Tick: {this.state.tick}</h2>
        </div>

        <button onClick={(e)=>{this.counterReset();}}> Counter Reset
        </button>
        <button onClick={(e)=>{this.unmount();}}>unmount</button>

        {!this.state.unmount && <h1>Welcome</h1>}
      </div>
    );
  }

  // componentDidUpdate() {
  //   this.setState({
  //   tick:10
  //   })
  //   }

  
}
