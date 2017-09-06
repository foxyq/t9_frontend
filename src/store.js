import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import numberReducer from "./reducers/numbers";
import messageReducer from "./reducers/messages";

const reducer = combineReducers({
  numbers: numberReducer,
  message: messageReducer
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
