import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HourlyForecastCell from './HourlyForecastCell';
import DateCell from './DateCell';
import Header from './Header';
import DailyForecastRow from './DailyForecastRow';
import './index.css';


class DailyWeather extends Component
{


    renderEmpty(classNames) {
        classNames.push('-empty');
        return (
            <div className={classNames.join(' ')}>
                <span>No forecast found</span>
                {this.renderLoadingMessage()}
            </div>
        );
    }

    renderLoadingMessage() {
        if(!this.props.isFetching) return null;
        return (
            <div className="-loading">
                <span>Fetching forecast...</span>
            </div>
        );
    }

    render() {

        const classNames = [
            this.props.className
        ];

        classNames.push('daily-weather');

        const forecasts = this.props.forecasts || [];

        if(this.props.isFetching) classNames.push('-isFetching');

        if(forecasts.length === 0) {
            return this.renderEmpty(classNames);
        }
        
        return (
            <div className={classNames.join(' ')}>
                <Header location={this.props.location} />
                <ol className="daily-weather_days">
                    {forecasts.map((day, idx) => <DailyForecastRow key={`${day.day}`} day={day} />)}
                </ol>
                {this.renderLoadingMessage()}
            </div>
        );
    }
}

DailyWeather.propTypes = {
    location: PropTypes.object,
    forecasts: PropTypes.array,
    isFetching: PropTypes.bool
}

export default DailyWeather;