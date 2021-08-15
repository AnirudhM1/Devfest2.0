import React from 'react';
import Navbar from './Navbar';
const Schedule = () => {
   return (
      <div className="app-parent">
         <div className="navbar-parent">
            <Navbar />
         </div>
         <div className="my-schedule">
            <div className="heading">My Schedule</div>
            <div className="schedule-body">
               <div className="priority">
                  <div className="sub-heading">Priority</div>
               </div>
               <div className="today-task">
                  <div className="sub-heading">Today Tasks</div>
               </div>
               <div className="upcoming">
                  <div className="sub-heading">Upcoming Tasks</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Schedule;
