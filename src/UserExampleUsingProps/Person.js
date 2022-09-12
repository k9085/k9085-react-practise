import React from "react";

const Person = (props) => {
  return (
    <div>
      name:{props.children} , age:{props.age}
    </div>
  );
};

export default Person;
