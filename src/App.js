import React, { Component } from "react";
import DisplayCooperResult from './components/DisplayCooperResult'

class App extends Component {
  constructor() {
    super();
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

        <DisplayCooperResult age = { this.state.age } gender = { this.state.gender } distance = { this.state.distance } />
      </div>
    );
  }
}

export default App;
