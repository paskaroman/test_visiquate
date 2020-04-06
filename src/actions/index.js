//Action Types

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_REPO_REQUEST = "GET_USER_REPO_REQUEST";
export const GET_USER_REPO_SUCCESS = "GET_USER_REPO_SUCCESS";

//actions creators

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST
  };
};

export const getUsersSuccess = data => {
  return {
    type: GET_USERS_SUCCESS,
    data
  };
};

export const getUserInfoRequest = user => {
  return {
    type: GET_USER_INFO_REQUEST,
    user
  }
}

export const getUserInfoSuccess = data => {
  return {
    type: GET_USER_INFO_SUCCESS,
    data
  }
}

export const getUserRepoRequest = user => {
  return {
    type: GET_USER_REPO_REQUEST,
    user
  }
}

export const getUserRepoSuccess = data => {
  return {
    type: GET_USER_REPO_SUCCESS,
    data
  }
}