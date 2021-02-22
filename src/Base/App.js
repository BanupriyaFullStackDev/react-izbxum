import React from "react";
import Header from "../Header/Header";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "raja" };
  }
  render() {
    return (
      <div className="container">
        <Header />
        <button className="btn btn-sm btn-danger">{this.state.name}</button>
        <Header />
      </div>
    );
  }
}

export default App;
