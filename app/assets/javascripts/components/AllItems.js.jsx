class AllItems extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      tasks: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/events.json')
      .then((response) => { return response.json(); })
      .then((data) => { this.setState({ events: data }); });

    fetch('/api/v1/tasks.json')
      .then((response) => { return response.json(); })
      .then((data) => { this.setState({ tasks: data }); });
  }

  formatDuration(duration) {
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

  render() {
    const tasks = this.state.tasks.map((task) => {
      const duration = this.formatDuration(task.duration);

      return (
        <div key={ task.id }>
          <h3>{ task.title }</h3>
          { task.description ? <p>Description: { task.description }</p> : null }
          { task.due_date ? <p>Due: { task.due_date }</p> : null }
          { task.priority ? <p>Priority: { task.priority }</p> : null }
          { task.duration ? <p>Duration: { task.duration }</p> : null }
        </div>
      )
    })

    return(
      <div>
        <h1>All Tasks & Events</h1>
        { tasks }
      </div>
    )
  }
}