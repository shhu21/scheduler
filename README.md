# Work Day Scheduler Starter Code

__*Live URL:*__ https://shhu21.github.io/scheduler/

# Table of Contents
- [Objective](#objective)
- [Assumptions](#assumptions)
- [Global Variables](#global-variables)
  * [times](#times)
  * [currentHour](#currenthour)
  * [save](#save)
- [Functions](#functions)
  * [setHour](#sethour)
  * [createElements](#createelements)
- [Mock Up](#mock-up)
- [Website Preview](#website-preview)

# Objective
Following the given mock-up, create a work day scheduler.

# Assumptions
Some styles in the CSS classes from the starter code do not match the mockup (ex: the `color` given to the `past`, `present`, and `future` clases is set to white, but the mockup shows the text as black.), therefore, any given styles were left as is and only additional styles were added to match the mockup. (ex: `padding` was added to the `hour` class to match the slight offset seen in the mockup) </br>
**Note:** The added CSS styles are denoted by a precursing `added code` comment.

# Global Variables

## times
__Data Type:__ Array[String]. </br>
__Purpose:__ Contains the hour time strings. </br>

## currentHour
__Data Type:__ String. </br>
__Purpose:__ Current hour string. </br>

## save
__Data Type:__ Function. </br>
__Parameters:__ None. </br>
__Return Type:__ None. </br>
__Purpose:__ Save the new input to local storage. </br>
__Functionality:__ Gets the new text value from the textarea and the corresponding hour and stores them in local storage as (hour, text).

# Functions

## setHour
__Parameters:__ None. </br>
__Return Type:__ String. </br>
__Purpose:__ Get the current hour. </br>
__Functionality:__ Uses moment.js to get the current time, then parses it to match the format of the hour strings (ex: "9AM") and stores it in `currentHour`.  Then, it returns `currentHour`. </br>

## createElements
__Parameters:__ None. </br>
__Return Type:__ None. </br>
__Purpose:__ Create the HTML for the schedule. </br>
__Functionality:__ Calls `setHour()` to set the current hour.  Then, it loops through `times` to create each row in the schedule.  The `past` class is assigned to the description textarea until `times[i]` matches `currentHour` (`ifPresent` = `false`), then it marks that time as `present` and sets `ifPresent` to `true`.  Then, the rest of the times are marked as `future`. </br>

# Mock Up
![](./assets/images/mock-up.gif)

# Website Preview
![](./assets/images/screenshot.png)
