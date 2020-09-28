const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initState = 0;

export default function counter(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
