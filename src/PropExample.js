import React, { useState } from "react";

const PropExample = () => {
  const [value, changeValue] = useState(10);

  return (
    <div>
      usestate Example
      <div>value:{value}</div>
    </div>
  );
};
export default PropExample;

// function UserChild() {
//   const [value, changeValue] = useState(10);

//   return <div>usestate example</div>;
// }
// export default UserChild;
