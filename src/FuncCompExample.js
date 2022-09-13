import React, { useState } from "react";

const FuncCompExample = () => {
  let [value, changeValue] = useState(10);

  const changeFunction = () => {
    changeValue(value - 20);
  };

  return (
    <div>
      usestate Example
      <div>value:{value}</div>
      <button onClick={() => changeFunction()}>Click me</button>
    </div>
  );
};
export default FuncCompExample;

// function FuncCompExample() {
//   const [value, changeValue] = useState(10);

//   return <div>usestate example</div>;
// }
// export default FuncCompExample;
