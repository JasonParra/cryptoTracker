import { apiStart, apiEnd, apiError } from "./api";
import {
  ADD_WALLET
} from "./types";

function requestSuccess(type, data = null) {
  return { type, payload: { data } };
}

export function addWallet(wallet) {
  return async dispatch => {
    dispatch(apiStart());
    try {
      dispatch(requestSuccess(ADD_WALLET, wallet));
    } catch (error) {
      dispatch(apiEnd());
      dispatch(apiError(error));
    }
  };
}

