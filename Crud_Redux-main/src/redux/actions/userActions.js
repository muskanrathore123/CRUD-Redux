import axios from "axios";

const BASE_URL = "https://apnaorganicstore.in/crud_api/";

// Action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const ADD_USER_REQUEST = "ADD_USER_REQUEST";
const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
const ADD_USER_FAILURE = "ADD_USER_FAILURE";

const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

// Fetch users
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}users.php`);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    console.log(error.message);
  }
};

// Fetch user by ID
export const fetchUserById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}user.php?id=${id}`);
    dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
  }
};

// Add user
export const addUser = (userData) => async (dispatch) => {
  dispatch({ type: ADD_USER_REQUEST });
  try {
    await axios.post(`${BASE_URL}add_update.php`, userData);
    dispatch({ type: ADD_USER_SUCCESS });
    dispatch(fetchUsers());
  } catch (error) {
    dispatch({ type: ADD_USER_FAILURE, payload: error.message });
    console.log(error.message);
  }
};

// Update user
export const updateUser = (id, userData) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  try {
    await axios.put(`${BASE_URL}add_update.php`, { id, ...userData });
    dispatch({ type: UPDATE_USER_SUCCESS });
    dispatch(fetchUsers());
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
  }
};

// Delete user
export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });
  try {
    await axios.delete(`${BASE_URL}delete.php?id=${id}`);
    dispatch({ type: DELETE_USER_SUCCESS });
    dispatch(fetchUsers());
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
  }
};
