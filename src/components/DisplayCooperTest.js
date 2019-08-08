import React, { Component } from "react";
import CooperCalculator from "../modules/CooperCalculator";

class DisplayCooperResult extends Component {
  calculate() {
    return CooperCalculator(
      this.props.age,
      this.props.gender,
      this.props.distance
    );
  }

  render() {
    let result;

    if (this.props.age !== "" && this.props.distance !== "") {
      result = (
        <div>
          <p>
            For a {this.props.age} year-old {this.props.gender} running a
            distance of {this.props.distance},
          </p>
          <p>the Cooper Test result is: {this.calculate}.</p>
        </div>
      );
    }
    return <div>{result}</div>;
  }
}

export default DisplayCooperResult;
