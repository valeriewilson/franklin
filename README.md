# Franklin

## Statement of Purpose

Most of the things I take care of everyday are split between calendars and task lists.  Every week, I plan out the coming week, figuring out how to get from point A to B based on my schedule and when I can tackle the items on my to-do list given my plans.  In 2017, I resolve to spend less of my time planning and more time doing what I enjoy and/or need to get done.

Benjamin Franklin has many wise sayings that have inspired this project:
* By failing to prepare, you are preparing to fail. 
* Lost time is never found again. 
* How few there are who have courage enough to own their faults, or resolution enough to mend them.

## Concept

A web application that tracks events, tasks, and transportation to / between events.

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

## Data

Integrations:
* Trello API
* Google Calendar API
* Google Maps Directions API