import {
  GUARD_LOGIN_FAIL,
  GUARD_LOGIN_REQUEST,
  GUARD_LOGIN_SUCCESS,
  GUARD_LOGOUT,
  GUARD_REGISTER_FAIL,
  GUARD_REGISTER_REQUEST,
  GUARD_REGISTER_SUCCESS,

} from "../constants/guardConstants";

export const guardLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case GUARD_LOGIN_REQUEST:
      return { loading: true };
    case GUARD_LOGIN_SUCCESS:
      return { loading: false, guardInfo: action.payload };
    case GUARD_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case GUARD_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const guardRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case GUARD_REGISTER_REQUEST:
      return { loading: true };
    case GUARD_REGISTER_SUCCESS:
      return { loading: false, guardInfo: action.payload };
    case GUARD_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
