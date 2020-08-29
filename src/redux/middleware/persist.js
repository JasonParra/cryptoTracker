import {
  GET_CRYPTOS,
} from "../actions/types";
import { AsyncStorage } from "react-native";
import { includes } from "lodash";

const persist = (store) => (next) => async (action) => {
  let result = next(action);
  let actions = [
    GET_CRYPTOS
  ];
  if (includes(actions, action.type)) {
    await AsyncStorage.setItem("store", JSON.stringify(store.getState()));
  }

  return result;
};

export default persist;
