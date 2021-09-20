import React from "react";

function Calendar(){
  const calendarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={{calendarStyle}}>
      <iframe src="https://calendar.google.com/calendar/embed?src=code.school.qa%40gmail.com&ctz=America%2FLos_Angeles"
                  title="code-school-calendar"
                  style={{border: 0, textAlign: 'center'}}
                  width="80%"
                  height="600"
                  frameborder="0"
                  scrolling="no">
      </iframe>
    </div>
  );
}

export default Calendar;
