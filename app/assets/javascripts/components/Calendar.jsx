class Calendar extends React.Component {

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

  render() {
    const events = this.state.events.map((event) => {
            return (
              <ScheduledEventOrTask eventOrTask={ event } />
            )
          }),
          tasks = this.state.tasks.map((task) => {
            return (
              <ScheduledEventOrTask eventOrTask={ task } />
            )
          });

    return (
      <div>
        <h1>Scheduled Events & Tasks</h1>
        { events }
        { tasks }
      </div>
    );
  }
}