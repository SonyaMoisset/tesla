import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCounter.css';

const propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
}

const TeslaCounter = (props) => (
    <div className="tesla-counter">
      <p className="tesla-counter__title">{props.initValues.title}</p>
      <div className="tesla-counter__container cf">
        <div className="tesla-counter__item">
          <p className="tesla-counter__number">
            {props.currentValue}
          <span>{props.initValues.unit}</span>
          </p>  
          <div className="tesla-counter__controls">
            <button 
              onClick={(event) => props.increment(event, props.initValues.title)} 
              disabled={props.currentValue >= props.initValues.max} 
            >
            </button>
            <button 
              onClick={(event) => props.decrement(event, props.initValues.title)} 
              disabled={props.currentValue <= props.initValues.min} 
            >
            </button>
          </div>
        </div>
      </div>
    </div>  
);

TeslaCounter.propTypes = propTypes;

export default TeslaCounter;