import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './actions';

// eslint-disable-next-line
const ReduxCounter = ({ count, incrementAction, decrementAction }) => (
  <div className="counter">
    <h3>Counter</h3>
    <button type="button" onClick={incrementAction}>
      +
    </button>
    <p>{count}</p>
    <button type="button" onClick={decrementAction}>
      -
    </button>
  </div>
);

//  mapping state into props
const mapStateToProps = (state) => ({
  count: state.count,
});

// calling actions
const mapDispatchToProps = {
  incrementAction,
  decrementAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxCounter);
