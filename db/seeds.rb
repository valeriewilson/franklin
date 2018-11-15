Task.create(
  title: 'Build initial UI', 
  description: 'Build out calendar view + task pane for desktop with static calendar displaying today and the next 6 days', 
  priority: 1, 
  start_time: '2018-12-18 09:00:00',
  duration: 300
)

Task.create(
  title: 'Add infinite horizontal scroll', 
  description: 'Allow the user to scroll right indefinitely without impact to task pane on the left-hand side.', 
  priority: 3, 
  duration: 300,
  due_date: '2019-01-01T12:00:00.000Z'
)

Task.create(
  title: 'Allow user to update task content', 
  priority: 2, 
  duration: 150,
  due_date: '2018-12-15T00:00:00.000Z'
)

Task.create(
  title: 'Allow user to add tasks', 
  priority: 2, 
  duration: 120
)

Task.create(
  title: 'Allow user to add events', 
  priority: 2, 
  duration: 90
)

Task.create(
  title: 'Allow user to delete tasks', 
  description: 'Allow the user to delete a task in the left-hand pane and in the calendar view (mocks TBD).', 
  priority: 2, 
  duration: 45,
  due_date: '2018-12-20T00:00:00.000Z'
)

Task.create(
  title: 'Allow user to delete events', 
  description: 'Allow the user to delete an event in the calendar view (mocks TBD).', 
  priority: 2, 
  duration: 45
)

Task.create(
  title: 'Allow user to add images to tasks and events', 
  description: 'Allow the user to add images to tasks and events.', 
  priority: 2, 
  duration: 300
)

Event.create(
  title: 'Skip-level with Dave', 
  description: 'Let\'s check in on a monthly cadence',
  start_time: '2018-12-17 14:30:00',
  end_time: '2018-12-17 15:30:00'
)

Event.create(
  title: 'Get coffee with Eli', 
  description: 'Putting this in the calendar to make sure it happens!',
  location: 'Special Xtra, Minna Street, San Francisco, CA',
  start_time: '2018-12-04 08:00:00',
  end_time: '2018-12-04 09:00:00'
)

Event.create(
  title: 'Brainstorm for backlog prioritization meeting',
  start_time: '2018-12-11 15:00:00',
  end_time: '2018-12-11 17:30:00'
)
