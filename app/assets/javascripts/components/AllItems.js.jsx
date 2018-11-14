class AllItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/items.json')
      .then((response) => { return response.json(); })
      .then((data) => { this.setState({ items: data }); });
  }

  formatDuration(duration) {
    if (!duration) {
      return null;
    } else if (duration > 60) {
      const hours = (duration / 60).toFixed(0),
            minutes = duration % 60;

      if (minutes > 0) {
        return `${ hours } hours, ${ minutes } minutes`;
      }

      return `${ hours } hours`;
    } else if (duration == 60) {
      return '1 hour';
    } else {
      return `${ duration } minutes`;
    }
  }

  render() {
    const items = this.state.items.map((item) => {
      const duration = this.formatDuration(item.duration_minutes);

      return (
        <div key={ item.id }>
          <h3>{ item.title }</h3>
          { item.description ? <p>Description: { item.description }</p> : null }
          { item.location ? <p>Location: { item.location }</p> : null }
          { item.due_date ? <p>Due: { item.due_date }</p> : null }
          { item.priority ? <p>Priority: { item.priority }</p> : null }
          { item.category ? <p>Category: { item.category }</p> : null }
          { item.start_date ? <p>Start time: { item.start_date }</p> : null }
          { item.duration ? <p>Duration: { item.duration }</p> : null }
        </div>
      )
    })

    return(
      <div>
        <h1>All Tasks & Events</h1>
        { items }
      </div>
    )
  }
}