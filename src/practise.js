import React from "react";

class Practise extends React.Component {
  state = { a: 10 };

  changeValue = () => {
    this.setState({ a: "blue" });
  };

  changeValueDynamic = (newValue) => {
    this.setState({ a: newValue });
  };

  changeValuebyBind = (newValue) => {
    this.setState({ a: newValue });
  };

  onInputChange = (event) => {
    this.setState({ a: event.target.value });
  };

  render() {
    return (
      <div>
        hello gm
        <div>{this.state.a} </div>
        <button type="button" onClick={this.changeValue}>
          Value to be changed
        </button>{" "}
        <br />
        <button type="button" onClick={() => this.changeValueDynamic(110)}>
          Value to be changed dynamically
        </button>{" "}
        <br />
        <button
          type="button"
          onClick={this.changeValuebyBind.bind(this, "changed value to 150")}
        >
          Value to be changed by bind
        </button>
        <br />
        <input type="text" onChange={this.onInputChange} value={this.state.a} />
      </div>
    );
  }
}
export default Practise;
