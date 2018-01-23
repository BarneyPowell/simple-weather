import React, { Component } from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

class HourlyForecastCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { temperature } = this.props;

        let displayTemperature = Math.round(temperature);

        const time = Moment(this.props.time);

        const format = this.props.is24h
            ? "HH:mm"
            : "ha";
            
        return (
            <li className="hourly-forecast">
                <span className="-hour">{time.format(format)}</span>
                <span className="-temperature"><span>{displayTemperature}&deg;</span></span>
               
            </li>
        )
    }
}

HourlyForecastCell.propTypes = {
    temperature: PropTypes.number,
    hour: PropTypes.number,
    is24h: PropTypes.bool
}


export default HourlyForecastCell;