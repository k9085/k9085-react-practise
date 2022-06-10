import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = { persons: [] };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log(response.data);
      this.setState({ persons: response.data });
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.persons.map((person) => (
          <li key={person.id}> {person.title}</li>
        ))}

        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
