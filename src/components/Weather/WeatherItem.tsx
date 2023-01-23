import React from 'react';
import getWeekdayName, {reformatDate} from "../../tools/getWeekdayName";

interface WeatherItemProps {
    date: string,
    day: {
        avgtemp_c: number,
        condition: {
            icon: string,
            text: string
        }
    }
}

const WeatherItem : React.FC<WeatherItemProps> = ({date,day}) => {

    let reformedDate = reformatDate(date)

    return (
        <div key={date} className="day-box">
            <div className="date-celsius">
                <h2 className="date">{getWeekdayName(reformedDate)}</h2>
                <h3 className="date">{date}</h3>
                <h3 className="celsius">{day.avgtemp_c}°C</h3>
            </div>
            <div className="icon-text">
                <img src={day.condition.icon} alt="weather-info"/>
                <h2>{day.condition.text}</h2>
            </div>
        </div>
    );
};

export default WeatherItem;