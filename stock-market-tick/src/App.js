import React, { Component } from "react";
import "./App.css";
import Websocket from "react-websocket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
      result: "",
      stockname: "",
      stockprice: ""
    };
  }
  handleData(data) {
    let result = JSON.parse(data);
    this.setState({ count: result });
    result.forEach(([name, price]) => (  console.log(`${name}: ${price}`)));
  }

  render() {
    return (
      <div className="App">
        <div>
          <p>{this.state.count}</p>
          <table>
            <thead>
              <tr>
                <td>Ticker</td>
                <td>Price</td>
                <td>Last Updated</td>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
          <Websocket
            url="ws://stocks.mnet.website"
            onMessage={this.handleData.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
