import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withWeatherApi } from '../providers/WeatherApiProvider';
import DailyWeather from '../components/DailyWeather';
import LocationInput from '../components/LocationInput';
import TestDataLink from '../components/TestDataLink';


class DailyWeatherContainer extends Component {

    constructor(props) {
        super(props);
        
        
        this.handleLocationAction = this.handleLocationAction.bind(this);
        this.handleUseTestData = this.handleUseTestData.bind(this);
    }

    componentDidMount() {
        //this.props.fetchForecast();
    }

    handleLocationAction(value) {
        if(value && value.length > 0) {
            this.props.fetchForecast(value);
        }
    }

    handleUseTestData(e) {
        e.preventDefault();
        this.props.fetchForecast(null, {
            shouldUseTestData: true
        });
    }

    render() {
        const forecast = this.props.getForecast();
        return (
            <div>
                <LocationInput 
                    label="Enter a city, and press enter"
                    onAction={this.handleLocationAction} />
                <TestDataLink onClick={this.handleUseTestData} />
                <DailyWeather className={this.props.className} {...forecast} />
            </div>
        );
    }
}

DailyWeatherContainer.propTypes = {
    className: PropTypes.string
}

export default withWeatherApi(DailyWeatherContainer);