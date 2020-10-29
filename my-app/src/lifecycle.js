import React from "react";
// import Welcome from "./welcome";

export default class LifeCycle extends React.Component {
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

  unmount=(e)=>{
  this.setState({unmount:true})
  }

  render() {
    console.log("render");

    // render should return somethig
    return (
      <div>
        <button
          onClick={(e) => {
            this.counterClick();
          }}
        >
          {" "}
          counter
        </button>
        <div>
          <h2>Tick: {this.state.tick}</h2>
        </div>

        <button onClick={(e)=>{this.unmount(e)}}> unmount component
        </button>

        {!this.state.unmount && <div><p>ShivamRai</p></div>}
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
