import React from "react";
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {
  return (
    <div className="border-l-orange-500">
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button>+1</button>
    </div>
  );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

CounterApp.defaultProps = {
    value: 1234567890
}