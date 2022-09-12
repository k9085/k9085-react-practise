import React from "react";

const Person1 = (props) => {
  return (
    <div>
      name:{props.children} , age:{props.age}
    </div>
  );
};

export default Person1;
