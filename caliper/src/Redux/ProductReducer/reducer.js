import {
  GET_PRODUCE_ERROR,
  GET_PRODUCE_SUCCESS,
  GET_PRODUCE_LOADING,
} from "./actionTypes";

const initState = {
  produce: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCE_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_PRODUCE_SUCCESS: {
      return {
        ...state,
        produce: payload,
        isLoading: false,
        isError: false,
      };
    }

    case GET_PRODUCE_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
