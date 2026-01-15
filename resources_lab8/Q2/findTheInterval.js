function DayCount(currentDateString, eventDateString) {
    // Set the unit values in milliseconds.
    let msecPerMinute = 1000 * 60;
    let msecPerHour = msecPerMinute * 60;
    let msecPerDay = msecPerHour * 24;
  
    // Set a date and get the milliseconds
    let currentDate = new Date(currentDateString); // startDate.setMonth(8);startDate.setDate(8);startDate.setHours(0, 0, 0, 0);
    let eventDate = new Date(eventDateString);
    let currentDateMsec = currentDate.getTime();
    let eventDateMsec = eventDate.getTime();
  
    // Get the difference in milliseconds.
    let interval = eventDateMsec - currentDateMsec;
  
    // many days from the interval to determine the remainder.
    let days = Math.floor(interval / msecPerDay);
    let reminder = interval - (days * msecPerDay);
  
    //Output: xx days
    //the positive number refers to day left
    //the negative number refers day since
    return days;
  }
  
  let currentDay = Date(); 
  // Initial test included in starter code (handles the first row specifically)
  let days = DayCount(currentDay, '8/7/2025');
  document.getElementById("interval1").innerHTML = days;

  let events = [];
  events.push(days);

  /* ==========================================================================
   Student's code here
   ========================================================================== */


  const rows = document.querySelectorAll("#schedule tr");

  
  for (let i = 1; i < rows.length; i++) {
      
      let currentRow = rows[i];
      
 
      let cells = currentRow.getElementsByTagName("td");

      let dateText = cells[1].innerText;

 
      let calculatedDays = DayCount(currentDay, dateText);

      
      cells[2].innerHTML = calculatedDays;
  }
   
