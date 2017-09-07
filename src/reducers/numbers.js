export const STORE_RESPONSE = 'numbers/STORE_RESPONSE';
export const STORE_INPUT = 'numbers/STORE_INPUT';
export const ADD_INPUT = 'numbers/ADD_INPUT';

const RESET_INPUT = 'numbers/RESET_INPUT';

const initState = {
  response: {},
  input: '',
};

export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case STORE_RESPONSE:
      return {
        ...state,
        response: action.response,
      };

    case STORE_INPUT:
      return {
        ...state,
        input: action.input,
      };

    case ADD_INPUT:
      return {
        ...state,
        input: state.input.concat(action.input),
      };

    case RESET_INPUT:
      return {
        ...state,
        input: '',
      };

    default:
      return state;
  }
}

export function storeResponse(response) {
  return {
    type: STORE_RESPONSE,
    response,
  };
}

export function storeInput(input) {
  return {
    type: STORE_INPUT,
    input,
  };
}

export function addInput(input) {
  return {
    type: ADD_INPUT,
    input,
  };
}

export function resetInput() {
  return {
    type: RESET_INPUT,
  };
}
