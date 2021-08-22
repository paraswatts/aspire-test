import { all, put, takeLatest } from "redux-saga/effects";
import { getRequest, postRequest, updateAuthToken } from "../../shared/services/axios";
import {
    GET_USER_DATA,
    startLoading,
    stopLoading
} from "../actions";
import { API, TEXT_CONST, popToTop, NAVIGATION, push, STRINGS } from "../../shared";

function* getUserData({
    payload: {
        netConnected,
        success = () => { },
        fail = () => { },
    } = {},
}) {
    try {
        yield put(startLoading());
        if (netConnected) {
            const { status, data = {} } = yield getRequest({
                API: API.USERDATA
            });
            if (status == 200) {
                success(data);
            } else {
                fail(data?.msg);
            }
        } else {
            fail(STRINGS.INTERNET_ERROR)
        }
    } catch (error) {
        fail(JSON.stringify(error));
    } finally {
        yield put(stopLoading());
    }
}

export default function* root() {
    yield all([
        takeLatest(GET_USER_DATA, getUserData),
    ]);
}
