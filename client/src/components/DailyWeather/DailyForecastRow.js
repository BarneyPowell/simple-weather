import React from 'react';

import DateCell from './DateCell';
import HourlyForecastCell from './HourlyForecastCell';

export default (props) => {
    const { day } = props;
    return (
        <li >
        <DateCell date={day.day} />
        <ol className="daily-weather_hours">
            {day.hours.map((hourly, idx) => 
                <HourlyForecastCell key={`${hourly.time}`} 
                    temperature={hourly.temp} 
                    time={hourly.time}
                    weather={hourly.weather} />
            )}
        </ol>
    </li>
    );
}