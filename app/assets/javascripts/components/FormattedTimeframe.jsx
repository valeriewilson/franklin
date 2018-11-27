class FormattedTimeframe extends React.Component {
  
  render() {
    const duration = this.props.duration;

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
