import React, { useState } from "react";

const FuncCompExample = () => {
  const [value, changeValue] = useState(10);

  return (
    <div>
      usestate Example
      <div>value:{value}</div>
    </div>
  );
};
export default FuncCompExample;

// function FuncCompExample() {
//   const [value, changeValue] = useState(10);

//   return <div>usestate example</div>;
// }
// export default FuncCompExample;
