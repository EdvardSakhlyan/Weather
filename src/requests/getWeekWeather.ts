import axios from "axios";
import {apiKay} from "./index";

const getWeather = async (country: string, days: number) => {

    const {data} = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKay}&q=${country}&days=${days}`)
    // setState(data)
    return data
}

export default getWeather