import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ScheduledEventOrTask extends React.Component {
  render() {
    const eventOrTask = this.props;

    return (
      <div>
        <div key={ eventOrTask.id }>
          <h3>{ eventOrTask.title }</h3>
          { eventOrTask.description ? <p>Description: { eventOrTask.description }</p> : null }
          { eventOrTask.due_date ? <p>Due: { eventOrTask.due_date }</p> : null }
          { eventOrTask.priority ? <p>Priority: { eventOrTask.priority }</p> : null }
          <FormatDuration duration={ eventOrTask.duration }/>
        </div>
      </div>
    );
  }
}

ScheduledEventOrTask.propTypes = {
  eventOrTask: Prop.Type.object.isRequired
};