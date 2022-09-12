import React from "react";
import Person1 from "./Person1";

/*Accessing data from state and 
showing it in child component using props */

class Users1 extends React.Component {
  state = {
    title: "Persons Data",
    persons: [
      { name: "Kavita", age: 30 },
      { name: "raveena", age: 32 },
      { name: "ragina", age: 35 }
    ]
  };

  render() {
    return (
      <div>
        Title: {this.state.title}
        <Person1 age={this.state.persons[0].age}>
          {this.state.persons[0].name}
        </Person1>
        <Person1 age={this.state.persons[1].age}>
          {this.state.persons[1].name}
        </Person1>
        <Person1 age={this.state.persons[2].age}>
          {this.state.persons[2].name}
        </Person1>
      </div>
    );
  }
}
export default Users1;
