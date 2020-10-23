import React from "react";


export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      tick: 0,
      unmount: false
    };
  }


  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
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
      this.setState({tick:0})
  }

  unmount=(e)=>{
  this.setState({unmount:true})
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

        {/* {!this.state.unmount && <div><Welcome/></div>} */}
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
    // will not update if false
  }
}
