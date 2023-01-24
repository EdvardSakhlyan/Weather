import { call, put, takeEvery } from 'redux-saga/effects'
import {IAction} from "../actions";
import getWeather from "../../requests/getWeekWeather";
import {WeatherResponse} from "../../requests/responseTypes";

export interface IRequestPayload {
    country: string,
    days: number
}

function* fetchUser(action: IAction<IRequestPayload>) {
    try {
        const weather : WeatherResponse = yield call(() => getWeather(action.payload.country , action.payload.days));
        yield put({type: "FETCH_SUCCEEDED", payload: weather});
    } catch (e) {
        yield put({type: "FETCH_FAILED", error: e});
    }
}

function* mySaga() {
    yield takeEvery("FETCH_REQUESTED", fetchUser);
}

export default mySaga;