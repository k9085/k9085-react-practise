import React from "react";
import UsersPropsChild from "./UsersPropsChild";

class UsersPropsParent extends React.Component {
  state = { b: "dataaaa" };
  render() {
    return (
      <div>
        Props example
        <div>
          <UsersPropsChild age="10">{this.state.b}</UsersPropsChild>
        </div>
      </div>
    );
  }
}
export default UsersPropsParent;
