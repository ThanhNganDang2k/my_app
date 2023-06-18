import {
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SEND_EMAIL_FAIL,
  USER_SEND_EMAIL_REQUEST,
  USER_SEND_EMAIL_SUCCESS,
} from "../Constants/UserContants";
import axios from "axios";
import userApi from "../../api/userApi";

// LOGIN
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const {data} =  await userApi.login({ username, password })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// LOGOUT
export const logout = () => async (dispatch) => {
  await userApi.logout();
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  // dispatch({ type: USER_DETAILS_RESET });
  // dispatch({ type: ORDER_LIST_MY_RESET });
};

// REGISTER
export const register = (username, password, email) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } =  await userApi.register({ username, password, email })
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    // dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error_reg) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
      error_reg.response && error_reg.response.data.message
        ? error_reg.response.data.message
        : error_reg.message,
    });
  }
};


// // SEND EMAIL
export const sendEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_SEND_EMAIL_REQUEST });
    const {data} =  await userApi.sendemail({ email })
    
    dispatch({ type: USER_SEND_EMAIL_SUCCESS, payload: data });
    localStorage.setItem("userEmail", JSON.stringify(data));
    dispatch({ type: USER_FORGOT_PASSWORD_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: USER_SEND_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// // FORGOT PASSWORD
export const forgotPassword = (email, newPass) => async (dispatch) => {
  try {
    dispatch({ type: USER_FORGOT_PASSWORD_REQUEST });
    const {data} =  await userApi.forgotpassword({email, newPass })
    
    dispatch({ type: USER_FORGOT_PASSWORD_SUCCESS, payload: data });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


