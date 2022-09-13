/****************class Compnent********************/

// import React from "react";
// class CompClass extends React.Component {
//   state = { name: "", age: "" };
//   // allVariables() {
//   //   return this.state;
//   // }

//   changeValue = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     // const { name, age } = this.allVariables();

//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.changeValue}
//           ></input>
//           <input
//             type="text"
//             name="age"
//             value={this.state.age}
//             onChange={this.changeValue}
//           ></input>
//           <button type="submit">Submit</button>
//         </form>
//         {this.state.name}
//         {this.state.age}
//       </div>
//     );
//   }
// }
// export default CompClass;

/********** Functional component *******************/
import React from "react";
import { useState } from "react";

const CompFunc = () => {
  const customer = { custname: "", age: "" };
  let [localValue, changedValue] = useState(customer);

  const changeValue = (e) => {
    const { name, value } = e.target;
    changedValue({ ...localValue, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(localValue);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="custname"
          value={localValue.custname}
          onChange={changeValue}
        ></input>
        <input
          type="text"
          name="age"
          value={localValue.age}
          onChange={changeValue}
        ></input>
        <button type="submit">Submit</button>
      </form>

      {localValue.custname}
      {localValue.age}
    </div>
  );
};

export default CompFunc;
