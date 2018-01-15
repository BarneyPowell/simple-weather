import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DailyWeather extends Component
{
    render() {
        return (
            <div className="daily-weather">

            </div>
        );
    }
}

DailyWeather.propTypes = {
    location: PropTypes.object,
    weatherByDay: PropTypes.array
}

export default DailyWeather;