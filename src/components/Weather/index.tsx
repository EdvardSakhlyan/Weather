import React, {useEffect, useState} from 'react';
import "./style.scss"
import {WeatherResponse} from "../../requests/responseTypes";
import WeatherItem from "./WeatherItem";
import {changeCount, IAction} from "../../store/actions";
import getWeather from "../../requests/getWeekWeather";
import {useAppDispatch , useAppSelector} from "../../hooks";


const Weather : React.FC = () => {

    const [{location , forecast} , setWeather] = useState<WeatherResponse>({
        location: {
            country: ""
        },
        forecast: {
            forecastday: []
        }
    })

    const [count , setCount] = useState<number>(7);

    const {country,loadCount,forecastDay} = useAppSelector(state => state.weatherReducer);

    const dispatch = useAppDispatch()

    const handleSubmit :  React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        dispatch(changeCount(count))
    }

    const handleCountChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCount(Number(event.currentTarget.value))
    }

    useEffect(() => {
        // @ts-ignore
        dispatch({type: "USER_FETCH_REQUESTED" , payload: {country , days: loadCount}})
        // getWeather(country, setWeather, loadCount)
    },[country, loadCount])

    return (
        <div className="weather">

            <hr/>
            <div className="sub-header">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="count">Select day count</label>
                    <input type="number" name="count" max={24} min={1} onChange={handleCountChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="week-box">
                {forecast.forecastday.map(({date , day}) => <WeatherItem date={date} day={day} key={date}/>)}
            </div>
        </div>
    );
};

export default Weather;