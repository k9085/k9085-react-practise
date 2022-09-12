import React from "react";
import Person from "./Person";
/* simple prop example */

class Users extends React.Component {
  render() {
    return (
      <div>
        <Person age="20"> I am Kevin</Person>
        <Person age="30"> I am Sacin</Person>
        <Person age="40"> I am Jain</Person>
      </div>
    );
  }
}
export default Users;
