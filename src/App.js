import React, { Component } from "react";
import "./styles.css";

import CanvasGrid from "./components/CanvasGrid/CanvasGrid.js";
import CanvasData from "./components/CanvasData/CanvasData.js";

import { gridUtils } from "./utils/gridUtils.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    gridUtils.testing();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <CanvasGrid />
        <CanvasData />
      </div>
    );
  }
}

export default App;
