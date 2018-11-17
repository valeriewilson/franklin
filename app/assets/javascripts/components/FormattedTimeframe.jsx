import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class FormattedTimeframe extends React.Component {
  
  render() {
    if (!duration) {
      return null;
    } 

    if (duration > 60) {
      const hours   = (duration / 60).toFixed(0),
            minutes = duration % 60;

      if (minutes > 0) {
        return `${ hours } hours, ${ minutes } minutes`;
      }

      return `${ hours } hours`;
    }
      
    if (duration == 60) {
      return '1 hour';
    } 

    return `${ duration } minutes`;
  }
}

FormattedTimeframe.propTypes = {
  duration: Prop.Type.number.isRequired
};
