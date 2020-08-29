import { API_START, API_END, API_ERROR } from "./types";

export const apiStart = () => {
  return {
    type: API_START,
  };
};

export const apiEnd = () => {
  return {
    type: API_END,
  };
};

export const apiError = (data, type = API_ERROR) => {
  return {
    type,
    payload: { data },
  };
};
