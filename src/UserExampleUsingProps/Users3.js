import React from "react";
import Person from "./Person";

/*Changing state data using Map function (decreasing age)
and
showing it in child component using props */

class Users3 extends React.Component {
  state = {
    title: "Persons Data",
    persons: [
      { name: "Kavita", age: 30 },
      { name: "raveena", age: 32 },
      { name: "ragina", age: 35 }
    ]
  };

  dataChange = () => {
    const newState = this.state.persons.map((person) => {
      const tempPerson = person;
      tempPerson.age -= 10;
      return tempPerson;
    });
    this.setState({ newState });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.dataChange}>
          dataChange via map iterate
        </button>
        Title: {this.state.title}
        {this.state.persons.map((person) => {
          return <Person age={person.age}>{person.name}</Person>;
        })}
      </div>
    );
  }
}
export default Users3;
