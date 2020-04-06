import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_REPO_REQUEST,
  GET_USER_REPO_SUCCESS
} from "../actions";

const initialState = {
  users: [],
  currentUser: {},
  isLoading: false,
};

const getAllData = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        isLoading: false,
      };
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        currentUser: action.data,
        isLoading: false,
      };
    case GET_USER_REPO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER_REPO_SUCCESS:
      const newCurr = Object.assign(state.currentUser, { repos: action.data });
      return {
        ...state,
        currentUser: newCurr,
        isLoading: false
      };
    default:
      return state;
  }
};

export default getAllData;
