import { SET_MESSAGES } from "./actions";

const initialState = {
  messages: {},
  status: "idle",
  error: null,
};

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES: {
      return {
        ...state,
        messages: payload,
      };
    }
    default:
      return state;
  }
};
