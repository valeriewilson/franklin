# Franklin

## Statement of Purpose

Most of the things I take care of everyday are split between calendars and task lists.  Every week, I plan out the coming week, figuring out how to get from point A to B based on my schedule and when I can tackle the items on my to-do list given my plans.  I would like to spend less of my time planning and more time doing what I enjoy and/or need to get done.

> By failing to prepare, you are preparing to fail. - Benjamin Franklin

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
* Drag & drop events and tasks on the calendar
* Assign expected completion time, due dates, ability to complete on public transit, and alerts to tasks

## Data

### Integrations
* Trello API
* Google Calendar API
* Google Maps Directions API
* Weather Underground API

## Technology
* Google Sign-In to gain access to calendars (https://developers.google.com/identity/sign-in/web/sign-in)
* DB: MySQL or PostgreSQL (http://flask-mysqldb.readthedocs.io/en/latest/)
* FullCalendar (open source JS calendar)
* Front-end framework, like Angular or React?
