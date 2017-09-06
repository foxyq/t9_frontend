import { postInput } from "../api/numberServices";
import { showMessage } from "./messages";

const initState = {
  apiResult: [],
  allCombinations: [],
  suggestedWords: [],
  input: ""
};

export const NUMBERS_POST = "NUMBERS_POST";
const CURRENT_UPDATE = "CURRENT_UPDATE";

export const updateCurrent = val => ({ type: CURRENT_UPDATE, payload: val });
export const postNumbers = numbers => ({
  type: NUMBERS_POST,
  payload: numbers
});

export const sendNumbers = numbers => {
  return dispatch => {
    dispatch(showMessage("generating suggested words"));
    postInput(numbers).then(res => dispatch(postNumbers(numbers)));
  };
};

export default (state = initState, action) => {
  switch (action.type) {
    case NUMBERS_POST:
      return {
        ...state,
        apiResult: action.payload, // prvy problem
        input: ""
      };

    case CURRENT_UPDATE:
      return { ...state, input: action.payload };

    default:
      return state;
  }
};
