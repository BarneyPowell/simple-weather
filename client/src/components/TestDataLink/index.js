import React from 'react';
import './index.css';

export default (props) => {
    return (
        <div className="test-data-link">
            or <button onClick={props.onClick}>use test data from csv</button>
        </div>
    )
}