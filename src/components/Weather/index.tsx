import React, {useEffect, useState} from 'react';
import "./style.scss"
import {Forecastday} from "../../requests/responseTypes";
import WeatherItem from "./WeatherItem";
import {changeCount, fetchRequest} from "../../store/actions";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {IRequestReducerState} from "../../store/reducer/requestReducer";
import {IWeatherState} from "../../store/reducer/weatherReducer";
import Header from "../Header";

const Weather: React.FC = () => {

    const [count, setCount] = useState<number>(7);

    const {country, loadCount} = useAppSelector<IWeatherState>(state => state.weatherReducer);
    const {forecastDay} = useAppSelector<IRequestReducerState>(state => state.requestReducer);

    const dispatch = useAppDispatch()

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        dispatch(changeCount(count))
    }

    const handleCountChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCount(Number(event.currentTarget.value))
    }

    useEffect(() => {
        dispatch(fetchRequest({country, days: loadCount}))
    }, [country, loadCount, dispatch])

    return (
        <div className="weather">
            <Header/>
            <hr/>
            <div className="sub-header">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="count">Select day count</label>
                    <input type="number" name="count" max={24} min={1} value={count} onChange={handleCountChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="week-box">
                {forecastDay && forecastDay.map(({date, day}: Forecastday) => <WeatherItem date={date} day={day} key={date}/>)}
            </div>
        </div>
    );
};

export default Weather;