import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";

class App extends Component {
  constructor() {
    super();
    this.state = { age: "", gender: "female", distance: "" };
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div>

        <InputFields inputChangeHandler={this.onChange.bind(this)} />

        <DisplayCooperResult
          age={this.state.age}
          gender={this.state.gender}
          distance={this.state.distance}
        />
      </div>
    )
  }
}

export default App;
