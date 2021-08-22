export const GET_USER_DATA = "GET_USER_DATA";
export const SET_WEEKLY_LIMIT = 'SET_WEEKLY_LIMIT';
export const getUserData = payload => {
    return {
        type: GET_USER_DATA,
        payload
    }
}

export const setWeeklyLimit = payload => {
    return {
        type: SET_WEEKLY_LIMIT,
        payload
    }
}
