import React from "react";
import InterestChild from "./InterestCild";

class InterestParent extends React.Component {
  state = {
    Customers: [
      { name: "Sita", principal: 300 },
      { name: "Gita", principal: 400 },
      { name: "Rita", principal: 500 }
    ]
  };

  calculateInterest = () => {
    const Calculate = this.state.Customers.map((customer) => {
      const Interest = customer;
      Interest.principal += 60;
      return Interest;
    });
    this.setState({ Calculate });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.calculateInterest}>
          calculate Interest
        </button>

        {this.state.Customers.map((customer) => {
          return (
            <InterestChild name={customer.name}>
              {customer.principal}
            </InterestChild>
          );
        })}
      </div>
    );
  }
}
export default InterestParent;
