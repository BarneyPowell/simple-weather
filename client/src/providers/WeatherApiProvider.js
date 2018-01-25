import React, { Component } from 'react';
import propTypes from 'prop-types';
import { fetchForecast } from '../api/WeatherApi';

export const weatherApiContextTypes = {
  getForecast: propTypes.func,
  fetchForecast: propTypes.func,
  setUseTestData: propTypes.func
};

export class WeatherApiProvider extends Component {
    state = {
        isFetching: false,
        shouldUseTestData: false,
        forecasts: []
    };

    static childContextTypes = weatherApiContextTypes;

    fetchForecast(location, options) {
        if(this.state.isFetching) return;

        this.setState({
            isFetching: true
        });

        if(typeof options === 'undefined') {
            options = {};
        }

        fetchForecast(location, {
            shouldUseTestData: options.shouldUseTestData || this.state.shouldUseTestData
        })
            .then(data => {
                this.setState({
                    isFetching: false,
                    ...data
                });
            });


    }

    getChildContext() {
        return {
            getForecast: () => this.state,
            fetchForecast: (location, options) => this.fetchForecast(location, options),
            setUseTestData: (shouldUseTestData) => this.setState({ shouldUseTestData })
        };
    }

    render() {
        return <div>{this.props.children}</div>;
    }  
};


export function withWeatherApi(WrappedComponent) {
  const Wrapper = (props, { getForecast, fetchForecast, setUseTestData }) => (
    <WrappedComponent
      getForecast={ getForecast }
      fetchForecast={ fetchForecast }
      setUseTestData={ setUseTestData }
      { ...props }
    />
  );

  Wrapper.contextTypes = weatherApiContextTypes;

  return Wrapper;
}

