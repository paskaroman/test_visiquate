import { put, takeLatest, call } from 'redux-saga/effects';
import { getUsersSuccess, getUserInfoSuccess, getUserRepoSuccess } from '../actions';
import Api from '../api/api.service.js';

const api = new Api();


function* fetchUsers(action) {
    try {
        const data = yield call(api.getUsers);
        yield put(getUsersSuccess(data));
    } catch (e) {
        console.error(e.message);
    }
}

function* fetchUserInfo(action) {
    try {
        const data = yield call(api.getUserInfo, action.user);
        yield put(getUserInfoSuccess(data));
    } catch (e) {
        console.error(e.message);
    }
}

function* fetchUserRepos(action) {
    try {
        const data = yield call(api.getUserRepo, action.user);
        yield put(getUserRepoSuccess(data));
    } catch (e) {
        console.error(e.message);
    }
}

function* saga() {
  yield takeLatest("GET_USERS_REQUEST", fetchUsers);
  yield takeLatest("GET_USER_INFO_REQUEST", fetchUserInfo);
  yield takeLatest("GET_USER_REPO_REQUEST", fetchUserRepos);
}

export default saga;
