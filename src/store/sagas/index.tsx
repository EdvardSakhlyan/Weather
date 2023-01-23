import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {IAction} from "../actions";
import getWeather from "../../requests/getWeekWeather";

function* fetchUser(action: IAction) : any {
    try {
        // @ts-ignore
        const weather = yield call(() => getWeather(action.payload.country , action.payload.days));
        console.log(weather)
        yield put({type: "USER_FETCH_SUCCEEDED", payload: weather});
    } catch (e) {
        // @ts-ignore
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;