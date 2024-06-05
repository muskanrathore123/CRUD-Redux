const initialState = {
  users: [],
  user: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
    case "FETCH_USER_REQUEST":
    case "ADD_USER_REQUEST":
    case "UPDATE_USER_REQUEST":
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "ADD_USER_SUCCESS":
    case "UPDATE_USER_SUCCESS":
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_USERS_FAILURE":
    case "FETCH_USER_FAILURE":
    case "ADD_USER_FAILURE":
    case "UPDATE_USER_FAILURE":
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
