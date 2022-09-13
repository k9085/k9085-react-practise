import axios from "axios";
import React from "react";

class MethodGet extends React.Component {
  state = {
    bulkdata: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => this.setState({ bulkdata: response.data }));
  }

  render() {
    return (
      <div>
        {this.state.bulkdata.map((data) => (
          <li key="id"> {data.title}</li>
        ))}
      </div>
    );
  }
}
export default MethodGet;
