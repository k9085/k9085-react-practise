import React from "react";
import axios from "axios";

export default class Usingjsonfile extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response);
      this.setState({ persons: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1> json data to get title by techm</h1>
        {this.state.persons.map((person) => (
          <li key={person.id}> {person.title}</li>
        ))}
      </div>
    );
  }
}
