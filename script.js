// <!-- GIVEN I am using a daily planner to create a schedule

//  WHEN I open the planner THEN the current day is displayed at the top of the calendar
    
//      Ex: November 6th, 2020 (Use JQuery to display the text for the date)
    
    
//  WHEN I scroll down THEN I am presented with time blocks for standard business hours

//         9 a.m.
//         10 a.m.             (Use JQuery to display the text for the times)
//         11 a.m.
//         12 p.m. etc.....     6 p.m.

//  WHEN I view the time blocks for that day THEN each time block is color-coded to indicate whether it is in the past, present, or future
        
//       *Will be using CSS to edit the color of each time block

//  WHEN I click into a time block THEN I can enter an event

//      *On click, user should be able to enter information in that time block (input/text area)


//  WHEN I click the save button for that time block THEN the text for that event is saved in local storage

//      *On click of the save button, user should be able to save the information the entered in the time block field (input/text area)


//  WHEN I refresh the page THEN the saved events persist

//       *When user refreshes the page, all of the saved should remain stored in the time block field -->

var currentDay = "";
var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
