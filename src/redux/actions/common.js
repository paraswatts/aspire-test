export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const RESET = 'RESET';
export const UPDATE_INTERNET_STATUS = 'UPDATE_INTERNET_STATUS'

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const updateInternetStatus = (payload) => {
    return {
        type: UPDATE_INTERNET_STATUS,
        payload
    }
}