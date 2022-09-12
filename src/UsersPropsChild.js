import React from "react";

const UsersPropsChild = (props) => {
  return (
    <div>
      Users Example
      <div>
        {props.children} {props.age}
      </div>
    </div>
  );
};

export default UsersPropsChild;
