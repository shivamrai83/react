import React from "react";

export class State extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "My Initial Val",
      firstName: "",
      lastName: "",
    };
  }

  inputChangeHandler = (e) => {
      this.setState({
          [e.target.name] :e.target.value
      })
  };

  titleChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  };
  render() {
    return (
      <div>
        <div>
         FirstName: <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={(e) => {
              this.inputChangeHandler(e);
            }}
          />

         LastName: <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={(e) => {
              this.inputChangeHandler(e);
            }}
          />
        </div>

        <div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e, value) => {
              //test for dropdow
              this.titleChangeHandler(e, value);
            }}
          />
        </div>
        {this.state.firstName}
        <div>
            <button onClick={()=>{alert(JSON.stringify(this.state))}}>
                show state
            </button>
        </div>
      </div>
    );
  }
}
