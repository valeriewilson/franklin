# Initial tasks
Item.create(
  title: 'Build initial UI', 
  is_event: false, 
  description: 'Build out calendar view + task pane for desktop with static calendar displaying today and the next 6 days', 
  priority: 1, 
  category: 1, 
  duration_minutes: 400
)

Item.create(
  title: 'Add infinite horizontal scroll', 
  is_event: false, 
  description: 'Allow the user to scroll right indefinitely without impact to task pane on the left-hand side.', 
  priority: 3, 
  category: 1, 
  duration_minutes: 300
)

Item.create(
  title: 'Allow user to update task content', 
  is_event: false, 
  priority: 2, 
  category: 1, 
  duration_minutes: 400
)

Item.create(
  title: 'Allow user to add tasks', 
  is_event: false, 
  priority: 2, 
  category: 1, 
  duration_minutes: 400
)

Item.create(
  title: 'Allow user to add events', 
  is_event: false, 
  priority: 2, 
  category: 1, 
  duration_minutes: 400
)

Item.create(
  title: 'Allow user to delete tasks', 
  is_event: false, 
  description: 'Allow the user to delete a task in the left-hand pane and in the calendar view (mocks TBD).', 
  priority: 2, 
  category: 1, 
  duration_minutes: 400
)

Item.create(
  title: 'Allow user to delete events', 
  is_event: false, 
  description: 'Allow the user to delete an event in the calendar view (mocks TBD).', 
  priority: 2, 
  category: 1, 
  duration_minutes: 400
)

Item.create(
  title: 'Allow user to add images to tasks and events', 
  is_event: false, 
  description: 'Allow the user to add images to tasks and events.', 
  priority: 2, 
  category: 1, 
  duration_minutes: 400
)

# Initial events
Item.create(
  title: 'Meeting X', 
  is_event: true,
  location: 'San Francisco, CA',
  start_date: '2018-12-01 14:30:00',
  duration_minutes: 60
)

Item.create(
  title: 'Meeting Y', 
  is_event: true,
  location: 'San Jose, CA',
  start_date: '2018-12-01 09:00:00',
  duration_minutes: 60
)

Item.create(
  title: 'Meeting Z', 
  is_event: true,
  location: 'Oakland, CA',
  start_date: '2018-12-01 15:45:00',
  duration_minutes: 60
)
