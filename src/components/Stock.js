import React, { Component } from "react";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    };
  }

  render() {
    return (
      <div>
        <h1>
          <strong>Stock Market</strong>
        </h1>
      </div>
    );
  }
}

export default Stock;
