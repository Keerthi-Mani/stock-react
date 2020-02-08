This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# React-Stock

# Installation

```
$ npm install react-plotly.js plotly.js
```

# Quick start

The easiest way to use this component is to import and pass data to a plot component:

```
import React,{Component} from 'react';
import Plot from 'react-plotly.js';

class App extends Component {
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
```

You should see a plot like this:
<img width="743" alt="Screen Shot 2020-02-07 at 8 51 40 PM" src="https://user-images.githubusercontent.com/52920074/74077500-23ce7b00-49ee-11ea-91c5-ab2e63aef6d8.png">

## Stock Symbols

<img width="413" alt="Screen Shot 2020-02-07 at 8 56 10 PM" src="https://user-images.githubusercontent.com/52920074/74077502-25983e80-49ee-11ea-8121-1a1c3dd27c51.png">

## API Reference

### TIME_SERIES_DAILY High Usage

This API returns daily time series (date, daily open, daily high, daily low, daily close, daily volume) of the global equity specified, covering 20+ years of historical data.

The most recent data point is the prices and volume information of the current trading day, updated realtime.

### API Parameters

- Required: function

```
The time series of your choice. In this case, function=TIME_SERIES_DAILY
```

- Required: symbol

```
The name of the equity of your choice. For example: symbol=MSFT
```

- Optional: outputsize

By default, outputsize=compact. Strings compact and full are accepted with the following specifications: compact returns only the latest 100 data points; full returns the full-length time series of 20+ years of historical data. The "compact" option is recommended if you would like to reduce the data size of each API call.

- Optional: datatype

By default, datatype=json. Strings json and csv are accepted with the following specifications: json returns the daily time series in JSON format; csv returns the time series as a CSV (comma separated value) file.

- Required: apikey

Your API key. Claim your free API key here.

<img width="749" alt="Screen Shot 2020-02-07 at 9 14 04 PM" src="https://user-images.githubusercontent.com/52920074/74077599-0948d180-49ef-11ea-8b50-350d9aceec71.png">
### Examples (click for JSON output)

```
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo

https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=demo
```

### Downloadable CSV file:

```
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo&datatype=csv
```
