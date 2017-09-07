import { STORE_INPUT, STORE_RESPONSE } from './numbers';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = msg => ({ type: MESSAGE_SHOW, payload: msg });

export default function (state = '', action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;

    case STORE_INPUT:
    case STORE_RESPONSE:
      return '';

    default:
      return state;
  }
}
