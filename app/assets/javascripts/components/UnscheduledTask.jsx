import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FormattedDuration from 'app/assets/javascripts/components/FormattedDuration';

class UnscheduledTask extends React.Component {

  render() {
    return (
      <div key={ task.id }>
        <h3>{ task.title }</h3>
        { task.description ? <p>Description: { task.description }</p> : null }
        { task.due_date ? <p>Due: { task.due_date }</p> : null }
        { task.priority ? <p>Priority: { task.priority }</p> : null }
        <FormatDuration duration={ task.duration }/>
      </div>
    )
  }
}

UnscheduledTask.propTypes = {
  task: Prop.Type.object.isRequired
};