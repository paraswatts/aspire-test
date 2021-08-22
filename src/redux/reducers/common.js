import { REHYDRATE } from 'redux-persist';
import {
  START_LOADING,
  STOP_LOADING,
  UPDATE_AUTH_TOKEN,
  UPDATE_INTERNET_STATUS,
  RESET,
  SHOW_KNOW_MORE,
  UPDATE_USER_LIST,
  UPDATE_CURRENT_USER,
  UPDATE_NOTIFICATION_LIST
} from '../actions';

const initialState = {
  loading: false,
  authToken: null,
  netConnected: true,
  showKnowMore: false,
  userList: [],
  notificationList: [],
  /**
   * TODO:
   * 1.) Save Current user on app open or save when user sign in ( Default User )
   * 2.) Currently we are not getting user data on sign in
   * 3.) Save self as Current user on REHYDRATE
   */
  currentUser: 0
};

const CommonReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_INTERNET_STATUS:
      return {
        ...state,
        netConnected: action.payload
      }
    case REHYDRATE:
      return {
        ...initialState,
        ...((action.payload || {}).common || {}),
        loading: false,
        netConnected: true,
        currentUser: 0
      };
    case RESET:
      return {
        ...initialState,
        netConnected: state.netConnected,
        authToken: null
      }
    default:
      return {
        ...state,
      };
  }
};

export default CommonReducer;
