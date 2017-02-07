# Franklin

## Statement of Purpose

Most of the things I take care of everyday are split between calendars and task lists.  Every week, I plan out the coming week, figuring out how to get from point A to B based on my schedule and when I can tackle the items on my to-do list given my plans.  In 2017, I resolve to spend less of my time planning and more time doing what I enjoy and/or need to get done.

Benjamin Franklin had said:
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

### Integrations
* Trello API
* Google Calendar API
* Google Maps Directions API
* Weather Underground API

### Data Model

#### User
* user_id (integer, required, primary key)
* username (string, required)
* password (string, required, salted & hashed)
* bicycle (boolean, default True)
* public_transit (boolean, default True)
* drive (boolean, default True)
* rideshare_carpool (boolean, default True)
* rideshare_single (boolean, default True)
* walk (boolean, default True)
* ferry (boolean, default True)
* preferred_type (string, one of above transportation options
* (Trello account access info, TBD)

### Calendars
* id (integer, required, primary key)
* user_id (integer, required, foreign key to users.user_id)
* calendar_id (integer, required)

#### Task
* trello_id (integer, required, primary key)
* user_id (integer, required, foreign key to users.user_id)
* parent_id (integer, not required)
* duration (float, default 1.0 -- i.e. 1 hour)
* priority (integer, not required)
* all_info (boolean, default False)
* repeat (boolean, default False)
* repeat_num (integer, not required)
* repeat_until (datetime, not required)
* repeat_frequency (integer for day of week, not required)
* completed (boolean, default False)

#### Event
* id (integer, required, primary key)
* event_id (integer, required)
* user_id (integer, required, foreign key to users.user_id)
* arrive_before (integer, default 10 -- i.e. arrive 10 minutes early)
* optional (boolean, default False)
* all_info (boolean, default False)

#### Transportation
* event_id_from (integer, not required, unless event_id_to is Null)
* event_id_to (integer, not required, unless event_id_from is Null)
* user_id (integer, required, foreign key to users.user_id)
* type (string, default user.preferred_type)
* datetime_start (datetime, not required -- calculated)
* datetime_end (datetime, not required -- calculated)
* active (boolean, default True)
* all_info (boolean, default False)

#### Event-Tasks
* id (integer, required, primary key)
* user_id (integer, required, foreign key to users.user_id)
* event_id (integer, required)
* task_id (integer, required)

## Technology
* Google Sign-In to gain access to calendars (https://developers.google.com/identity/sign-in/web/sign-in)
* DB: MySQL
* FullCalendar (open source JS calendar)
