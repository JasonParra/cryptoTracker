import {
  GET_CRYPTOS,
  FOLLOW_CRYPTO,
  UNFOLLOW_CRYPTO
} from "../actions/types";

export default function crypto(state = { cryptos: [], followingCoins: [] }, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_CRYPTOS:
      return {
        ...state,
        cryptos: payload.data.data.Data,
      };
    case FOLLOW_CRYPTO:
      return {
        ...state,
        followingCoins: [...new Set([...state.followingCoins, payload.data])],
      };
    case UNFOLLOW_CRYPTO:
      return {
        ...state,
        followingCoins: state.followingCoins.filter(item => item !== payload.data),
      };
    default:
      return state;
  }
}
