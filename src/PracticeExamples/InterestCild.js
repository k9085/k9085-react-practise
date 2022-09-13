import React from "react";

const InterestChild = (props) => {
  return (
    <div>
      name: {props.name}, principal: {props.children}
    </div>
  );
};

export default InterestChild;
