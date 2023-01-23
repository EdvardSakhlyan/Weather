interface IWeatherState {
    country: string,
    loadCount: number,
    region: string,
    forecastDay: number[]
}

interface IPayload {

}


const initialState : IWeatherState = {
    country: "Armenia",
    loadCount: 7,
    region: "Yerevan",
    forecastDay: []
}

const weatherReducer = (state = initialState , action: { type: string; payload: string | number; }) => {
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
        case "USER_FETCH_SUCCEEDED":
            console.log("USER_FETCH_SUCCEEDED")
            return {
                ...state,
                country: action.payload.location.country,
                region: action.payload.location.region
            }
        default:
            return state
    }
}

export default weatherReducer