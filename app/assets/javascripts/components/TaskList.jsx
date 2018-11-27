class TaskList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/tasks.json')
      .then((response) => { return response.json(); })
      .then((data) => { this.setState({ tasks: data }); });
  }

  render() {
    const tasks = this.state.tasks.map((task) => {
      return <UnscheduledTask task={ task } />;
    });

    return (
      <div>
        <h1>Tasks</h1>
        { tasks }
      </div>
    );
  }
}
