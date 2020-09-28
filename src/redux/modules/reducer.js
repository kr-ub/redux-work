import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import counter from "./counter";
const reducer = (history) =>
  combineReducers({
    counter,
    router: connectRouter(history),
  });

export default reducer;
