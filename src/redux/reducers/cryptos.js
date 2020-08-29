import {
  GET_CRYPTOS
} from "../actions/types";

export default function cryptos(state = { cryptos: null }, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_CRYPTOS:
      return {
        ...state,
        cryptos: payload.data,
      };
    default:
      return state;
  }
}
