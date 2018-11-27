class UnscheduledTask extends React.Component {

  render() {
    const task = this.props.task;

    return (
      <div key={ task.id }>
        <h3>{ task.title }</h3>
        { task.description ? <p>Description: { task.description }</p> : null }
        { task.due_date ? <p>Due: { task.due_date }</p> : null }
        { task.priority ? <p>Priority: { task.priority }</p> : null }
        { task.duration ? <p>Duration: { task.duration }</p> : null }
      </div>
    )
  }
}

UnscheduledTask.propTypes = {
  task: Prop.Type.object
};
