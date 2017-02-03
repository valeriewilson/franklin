# Franklin

## Statement of Purpose

Most of the things I take care of everyday are split between calendars and task lists.  Every week, I plan out the coming week, figuring out how to get from point A to B based on my schedule and when I can tackle the items on my to-do list given my plans.  In 2017, I resolve to spend less of my time planning and more time doing what I enjoy and/or need to get done.

Benjamin Franklin has many wise sayings that have inspired this project:
* By failing to prepare, you are preparing to fail. 
* Lost time is never found again. 
* How few there are who have courage enough to own their faults, or resolution enough to mend them.

## Concept

The user should be able to:
* Work with tasks and events in one place
* Correlate events with tasks, places, and people
* Determine if they can add the event to a calendar based on how much work is already scheduled and transportation time
* Determine the best way to get from one event to another based on start & end locations, weather, any transit-friendly tasks, etc.
* Cluster tasks by parent task
* Generate alerts: when to leave based on real-time information, which bus to take, if weather will impact transportation
* Have a daily check-in: how the user would prefer to travel based on the available options, what to bring, what to attend (for optional events)
* Set repeatable tasks and events that can be modified en masse or individually
* Move tasks around the calendar
* Assign expected completion time, due dates, ability to complete on public transit, and alerts to tasks

## Possible Implementations

### Commuting

1. Create a calendar that displays all events in all my calendars.
2. For each event on my calendar that has a street address, determine how long it would take to get from home to that address by foot, bike, public transportation, and car.  Once I have identified how I intend to get to the event (through the UI or text message response), add a new event to this calendar with information on how to get there and about how long it should take.
3. If there are multiple items on my calendar, determine how long it would take to get from one event to another (by all means), or to get from the 1st event home and from home to the 2nd event.
4. The day of an event, ping the user about when to leave, and if there are weather conditions that might affect the commute.

![Calendar mockup](static/image.jpg?raw=true "Calendar mockup")

### Tasks

1. For highest-priority tasks on Trello and/or those with due dates assigned to them, allow the user to assign them to a timeslot before or after an event (or between events) on the calendar.
2. Allow the user to specify dependencies between tasks and events, such as packing that needs to be done before a flight, or follow-up emails following a meeting.
3. Allow the user to make tasks recurring.
4. Allow the user to create/update tasks with approximate time to finish the task.
5. Allow the user to create events and tasks associated with them at the same time.

## Technologies

Among the considerations here:
* Whether this would be an all-in-one app, an app that integrates with Google calendar & Trello, or would work within the constraints of Google Maps
* Web vs. mobile app

Possible integrations:
* Trello API
* Google Calendar API

I would also like to tackle new technologies with this project, such as front-end frameworks.
