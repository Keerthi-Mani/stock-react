import React, { Component } from "react";
import Plot from "react-plotly.js";

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
    const pointerToThis = this;
    // console.log(pointerToThis);

    const API_KEY = process.env.REACT_STOCK_API_KEY;
    let StockSymbol = "GOOGL";
    let API_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=full&apikey=${API_KEY}`;

    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_call)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        // console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          //Display Date in X-axis
          stockChartXValuesFunction.push(key);
          //Dispaly Open Rate in Y-axis
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }
        // console.log(stockChartXValuesFunction);
        // console.log(stockChartYValuesFunction);

        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartXValuesFunction
        });
      });
  }

  render() {
    return (
      <div>
        <h1>
          <strong>Stock Market</strong>
        </h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: {
                color: "red"
              }
            }
          ]}
          layout={{ width: 720, height: 440, title: "A Fancy Plot" }}
        />
      </div>
    );
  }
}

export default Stock;
