import React, { Component } from "react";

class App extends Component {
  constructor() {
    this.state = { age: '', gender: 'female', distance: '' };
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div>
        <div>
          <label>Distance</label>
          <input id="distance" onChange={this.onChange.bind(this)} />
        </div>

        <select id="gender" onChange={this.onChange.bind(this)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age" onChange={this.onChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
