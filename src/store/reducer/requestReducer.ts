import {IAction, IResponsePayload} from "../actions";
import {Forecastday} from "../../requests/responseTypes";
import {Reducer} from "react";

export interface IRequestReducerState {
    country: string,
    region: string,
    forecastDay: Forecastday[]
}

const initialState = {
    country: "Armenia",
    region: "Yerevan",
    forecastDay: []
}

const requestReducer : Reducer<IRequestReducerState,IAction<IResponsePayload>> = (state = initialState , action ) => {
    switch (action.type){
        case "FETCH_SUCCEEDED":
            return {
                ...state,
                country: action.payload.location.country,
                region: action.payload.location.region,
                forecastDay: action.payload.forecast.forecastday
            } as IRequestReducerState
        case "FETCH_REQUESTED":
            return state
        default:
            return state
    }
}

export default requestReducer