import React, { Component } from "react";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    };
  }

  //React Lifecycle Method
  componentDidMount() {
    this.fetchStock();
  }

  //API CALL
  fetchStock() {
    const API_KEY = process.env.REACT_STOCK_API_KEY;
    let StockSymbol = "FB";
    let API_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=full&apikey=${API_KEY}`;

    fetch(API_call)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);
      });
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
