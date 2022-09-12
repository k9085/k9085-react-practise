import React from "react";
import Person from "./Person";

/*Changing state data using setstate 
and
showing it in child component using props */

class Users2 extends React.Component {
  state = {
    title: "Persons Data",
    persons: [
      { name: "Kavita", age: 30 },
      { name: "raveena", age: 32 },
      { name: "ragina", age: 35 }
    ]
  };

  dataChange = () => {
    this.setState({
      title: "Persons Info",
      persons: [
        { name: "Kav", age: 0 },
        { name: "rav", age: 2 },
        { name: "rag", age: 5 }
      ]
    });
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.dataChange}>
          dataChange
        </button>
        Title: {this.state.title}
        <Person age={this.state.persons[0].age}>
          {this.state.persons[0].name}
        </Person>
        <Person age={this.state.persons[1].age}>
          {this.state.persons[1].name}
        </Person>
        <Person age={this.state.persons[2].age}>
          {this.state.persons[2].name}
        </Person>
      </div>
    );
  }
}
export default Users2;
