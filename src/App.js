// Import libraries
import React, { Component } from "react";

// Import components and modules
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";

class App extends Component {
  constructor() {
    super();

    {/* App state parameter asignments */}
    {/* DisplayCooperResult, InputFields: age, gender, distance */}
    {/* LoginForm: renderLoginForm */}
    this.state = { 
      age: "", 
      gender: "female", 
      distance: "",
      renderLoginForm: false};
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    {/* Method to render Login button, and LoginForm upon Login button click */}
    let renderLogin
    if (this.state.renderLoginForm === true) {
      renderLogin = (<LoginForm />)
    } else {
      renderLogin = (<button id="login" onClick = {() => {this.setState({renderLoginForm: true})}}>Login</button>)
    }

    return (
      <div>
        {/* Render Cooper Test and input fields explanation */}
        <p>Please enter your biometrics and run distance to see the corresponding <a href="https://en.wikipedia.org/wiki/Cooper_test" >Cooper Test</a> result.</p>
        <p>The "distance" field should receive the approximate distance you can run in 12 minutes.</p>
        <InputFields inputChangeHandler={this.onChange.bind(this)} />

        {/* Render Cooper Test result calculated from above inputs*/}
        <DisplayCooperResult
          age={this.state.age}
          gender={this.state.gender}
          distance={this.state.distance}
        />

        {/* render user login info here */}
        <hr></hr>
        {renderLogin}
      </div>
    )
  }
}

export default App;