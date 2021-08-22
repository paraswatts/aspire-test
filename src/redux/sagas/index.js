import { all, fork } from 'redux-saga/effects';
import UserSaga from './user';

function* dataSaga() {
    yield all([
        fork(UserSaga)
    ]);
}

export default dataSaga;
