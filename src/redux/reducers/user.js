import { REHYDRATE } from 'redux-persist';
import { GET_USER_DATA, SET_WEEKLY_LIMIT } from '../actions';

const initialState = {
  userData: null,
  weeklyLimit: false,
  weeklyLimitAmount: 0
};

const UserReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        userData: true,
      };
    case SET_WEEKLY_LIMIT:
      return {
        ...state,
        weeklyLimit: action.payload.weeklyLimit,
        weeklyLimitAmount: action.payload.weeklyLimitAmount
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
