import {IRequestPayload} from "../sagas";

export type WeatherPayload = string | number | IRequestPayload

export interface IResponsePayload {
    location: {
        country: string,
        region: string
    },
    forecast: {
        forecastday: object[]
    }
}

export interface IAction<Payload> {
    type: string,
    payload: Payload
}

type payloadCreatorType = (payload : WeatherPayload) => IAction<WeatherPayload>;

type actionCreatorType = (type : string) => payloadCreatorType;

const createAction : actionCreatorType = (type) => (payload) => ({type,payload});

export const changeCountry = createAction("CHANGE_COUNTRY");

export const changeCount = createAction("CHANGE_COUNT");

export const fetchRequest = createAction("FETCH_REQUESTED");
