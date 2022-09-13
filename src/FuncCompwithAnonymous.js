import React, { useState } from "react";

const FuncCompAnony = () => {
  let [value, changeValue] = useState(10);

  return (
    <div>
      usestate Example
      <div>value:{value}</div>
      <button onClick={() => changeValue(value + 20)}>Click me</button>
    </div>
  );
};
export default FuncCompAnony;
