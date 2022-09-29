import axios from "axios";
import {
  GUARD_LOGIN_FAIL,
  GUARD_LOGIN_REQUEST,
  GUARD_LOGIN_SUCCESS,
  GUARD_LOGOUT,
  GUARD_REGISTER_FAIL,
  GUARD_REGISTER_REQUEST,
  GUARD_REGISTER_SUCCESS,
} from "../constants/guardConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: GUARD_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8000/api/guards/login",
      { email, password },
      config
    );

    dispatch({ type: GUARD_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("guardInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GUARD_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("guardInfo");
  dispatch({ type: GUARD_LOGOUT });
}

export const register = (firstName, lastName, email, password) => async (dispatch) => {
  try {
    dispatch({ type: GUARD_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8000/api/guards",
      { firstName, lastName, email, password },
      config
    );

    dispatch({ type: GUARD_REGISTER_SUCCESS, payload: data });
    dispatch({ type: GUARD_LOGIN_SUCCESS, payload: data });


    localStorage.setItem("guardInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GUARD_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};