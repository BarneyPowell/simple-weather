import React, { Component } from  'react';
import Moment from 'moment';

class DateCell extends Component {
    render() {
        const date = Moment(this.props.date);
        

        return (
            <span className="daily-weather_day">
                <span className="-date">{date.format("DD MMM")}</span>
                <span className="-day"><span>{date.format("ddd")}</span></span>
            </span>
        );
    }
}

export default DateCell;