import {
  ADD_WALLET
} from "../actions/types";

export default function wallet(state = { wallets: [] }, action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_WALLET:
      return {
        ...state,
        wallets: [...new Set([...state.wallets, payload.data])],
      };
    default:
      return state;
  }
}
