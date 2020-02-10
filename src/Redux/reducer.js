import { INCREMENT, DECREMENT } from './types';

const initalState = {
  count: 0,
};

export const reducers = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};
