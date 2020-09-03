import Api from "../../api/api";
import { apiStart, apiEnd, apiError } from "./api";
import {
  GET_CRYPTOS,
  FOLLOW_CRYPTO,
  UNFOLLOW_CRYPTO
} from "./types";

function requestSuccess(type, data = null) {
  return { type, payload: { data } };
}

export function getCryptos(currency, limit) {
  return async dispatch => {
    dispatch(apiStart());
    try {
      const data = await Api.get(`top/totaltoptiervolfull?limit=${limit}&tsym=${currency}`)
      dispatch(requestSuccess(GET_CRYPTOS, data));
    } catch (error) {
      dispatch(apiEnd());
      dispatch(apiError(error));
    }
  };
}

export function followCryptyo(crypto) {
  return async dispatch => {
    dispatch(apiStart());
    try {
      dispatch(requestSuccess(FOLLOW_CRYPTO, crypto));
    } catch (error) {
      dispatch(apiEnd());
      dispatch(apiError(error));
    }
  };
}

export function unfollowCryptyo(crypto) {
  return async dispatch => {
    dispatch(apiStart());
    try {
      dispatch(requestSuccess(UNFOLLOW_CRYPTO, crypto));
    } catch (error) {
      dispatch(apiEnd());
      dispatch(apiError(error));
    }
  };
}
