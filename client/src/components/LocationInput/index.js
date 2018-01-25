import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const KeyCodes = {
    ENTER: 13
}

class LocationInput extends Component
{

    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleKeyPress(e) {
        if(e.which === KeyCodes.ENTER
            && this.props.onAction
            && typeof this.props.onAction === 'function') 
            {
                this.props.onAction(e.target.value);
            }
    }

    handleChange(e) {
        if(this.props.onChange && typeof this.props.onChange === 'function') {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        return (
            <div className="location-input">
                <label>{this.props.label}</label>
                <input type="text" 
                    onKeyPress={this.handleKeyPress} 
                    onChange={this.handleChange}
                    placeholder="City name" />
            </div>
        );
    }
}

LocationInput.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    onAction: PropTypes.func
}

export default LocationInput;