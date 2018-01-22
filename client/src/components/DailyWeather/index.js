import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                        <li key={`day.date.toString()`}>
                            <span className="daily-weather_day">{day.date.toString()}</span>
                            <ol className="daily-weather_hours">
                                {day.hours.map((hourly, idx) => 
                                    <li key={`${day.date.toString()}_${idx}`}>{hourly.temp}</li>
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