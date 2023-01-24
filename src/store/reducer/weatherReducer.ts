import {IAction, WeatherPayload} from "../actions";

export interface IWeatherState {
    country: string,
    loadCount: number,
}

const initialState : IWeatherState = {
    country: "Armenia",
    loadCount: 7,
}

const weatherReducer = (state = initialState , action: IAction<WeatherPayload>) => {
    switch (action.type) {
        case "CHANGE_COUNTRY":
            return {
                ...state ,
                country: action.payload
            }
        case "CHANGE_COUNT":
            return {
                ...state,
                loadCount: action.payload
            }
        default:
            return state
    }
}

export default weatherReducer