import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

const tempConverters = {
    'celsius': (tempInK) => tempInK - 273.15
}

const HourlyForecastCell = (props) => {

        const { temperature, weather } = props;
        const time = Moment(props.time);

        const format = props.is24h
            ? "HH:mm"
            : "ha";

        const temperatureUnit = props.temperatureUnit || 'celsius';
            

        let displayTemperature = Math.round(tempConverters[temperatureUnit](temperature));

        return (
            <li className="hourly-forecast">
                <span className="-hour">{time.format(format)}</span>
                <span className="-temperature"><span>{displayTemperature}&deg;</span></span>
                <span className="-weather"><span>{weather}</span></span>
            </li>
        )
};

HourlyForecastCell.propTypes = {
    temperature: PropTypes.number,
    hour: PropTypes.number,
    is24h: PropTypes.bool,
    temperatureUnit: PropTypes.string,
    weather: PropTypes.string
}


export default HourlyForecastCell;