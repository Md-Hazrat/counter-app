//3. reducers - increment -> count => count + 1
// - decrement -> count => count - 1
// - reset -> count => 0

import { DECREMENT, INCREMENT, RESET } from "../contants/counterConstant";

const initialCounter = { count: 0 };

const countReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
export default countReducer;
