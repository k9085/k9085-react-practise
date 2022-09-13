/*  "https://jsonplaceholder.typicode.com/todos" */

import axios from "axios";
import React from "react";

class AccessingData extends React.Component {
  state = { bulkdata: [] };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => this.setState({ bulkdata: response.data }));
  }

  render() {
    return (
      <div>
        json example
        {/* {this.state.bulkdata} */}
        {this.state.bulkdata.map((data) => {
          return (
            <li key={data.id}>
              {data.title} {data.userId}
            </li>
          );
        })}
      </div>
    );
  }
}

export default AccessingData;
