import React from 'react';

export default (props) => {
    return (
        <div className="daily-weather_header">
            <span className="-intro">5-day forecast for</span>
            <span className="-location">{`${props.location.name}, ${props.location.country}`}</span>
        </div>
    );
}