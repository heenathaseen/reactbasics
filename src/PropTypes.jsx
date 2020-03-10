import React, { Component } from "react";
import PropTypes from "prop-types";

const Title = ({ title, count }) => <h3>{`${title} ${count}`}</h3>;

Title.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number

  // Types of prop-types

  //   optionalArray: PropTypes.array,
  //   optionalBool: PropTypes.bool,
  //   optionalFunc: PropTypes.func,
  //   optionalNumber: PropTypes.number,
  //   optionalObject: PropTypes.object,
  //   optionalString: PropTypes.string,
  //   optionalSymbol: PropTypes.symbol,
};

class Proptypes extends Component {
  state = {
    count: 0
  };

  increment = () => this.setState(({ count }) => ({ count: count + 1 }));

  decrement = () => this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <Title title="Counter" count={count} />
        <button type="button" onClick={this.increment}>
          +
        </button>
        <p>{count}</p>
        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default Proptypes;
