import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HourlyForecastCell from './HourlyForecastCell';
import DateCell from './DateCell';

import './index.css';

import generateTestWeather from '../../lib/generateTestWeather';




class DailyWeather extends Component
{

    constructor(props) {
        super(props);


    }

    render() {

        const classNames = [
            this.props.className
        ];

        classNames.push('daily-weather');

        const forecast = this.props.forecast || [];
        

        return (
            <div className={classNames.join(' ')}>
                <ol className="daily-weather_days">
                    {forecast.map((day, idx) => 
                        <li key={`day.date`}>
                            <DateCell date={day.date} />
                            <ol className="daily-weather_hours">
                                {day.hours.map((hourly, idx) => 
                                    <HourlyForecastCell key={`${day.date.toString()}_${idx}`} temperature={hourly.temp} time={hourly.time} />
                                )}
                            </ol>
                        </li>
                    )}
                </ol>
            </div>
        );
    }
}

DailyWeather.propTypes = {
    location: PropTypes.object,
    forecast: PropTypes.array
}

export default DailyWeather;