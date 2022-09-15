import React, { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("clickekd");
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>onclick</button>
    </div>
  );
};
export default BasicUseEffect;
