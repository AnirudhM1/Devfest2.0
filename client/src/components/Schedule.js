import React, { useState } from 'react';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import './Schedule.css';
import axios from 'axios';
import { useHistory } from 'react-router';
const Schedule = () => {
   const history = useHistory();
   const handleSubmit = e => {
      const data = {
         name: task,
         deadline: dueDate,
         priority,
         headers: {
            jwt: localStorage.getItem('jwt'),
         },
      };
      e.preventDefault();
      axios
         .post(`${process.env.REACT_APP_SERVER}/user/task`, data)
         .then(res => {
            console.log('post task:', res.data);
         })
         .catch(err => {
            console.log(err);
            history.push('/');
         });
   };
   const [task, setTask] = useState('');
   const [dueDate, setDueDate] = useState('');
   const [priority, setPriority] = useState('');
   return (
      <div className="app-parent">
         <div className="welcome-body">
            <div className="navbar-parent">
               <Navbar />
            </div>
            <div className="my-schedule body-parent">
               <div className="app-top-navbar">
                  <TopNavbar />
               </div>
               <div className="schedule-body">
                  <div className="priority">
                     <div className="sub-heading">Priority</div>
                     <div className="overdue-box">
                        <div className="schedule-heading">Overdue</div>
                        <div className="overdue body">from database</div>
                     </div>
                     <div className="important-box">
                        <div className="schedule-heading">Important</div>
                        <div className="important-body">from database</div>
                     </div>
                     <div className="urgent-box">
                        <div className="schedule-heading">Urgent</div>
                        <div className="urgent-body">from database</div>
                     </div>
                  </div>
                  <div className="not-priority">
                     <div className="today-and-up">
                        <div className="today-task">
                           <div className="sub-heading">Today Tasks</div>
                        </div>
                        <div className="upcoming">
                           <div className="sub-heading">Upcoming Tasks</div>
                        </div>
                     </div>
                     <form className="form-tag-height" onSubmit={handleSubmit}>
                        <div className="task-form">
                           <div className="task-form-body">
                              <div className="label">
                                 <label>Tasks</label>
                              </div>
                              <input
                                 type="text"
                                 placeholder="Task Name"
                                 required
                                 value={task}
                                 onChange={e => setTask(e.target.value)}
                                 autoComplete="off"
                              ></input>
                              <div className="label">
                                 <label>Due Date</label>
                              </div>
                              <input
                                 type="date"
                                 placeholder="Due date"
                                 required
                                 value={dueDate}
                                 onChange={e => setDueDate(e.target.value)}
                                 autoComplete="off"
                              ></input>
                              <div className="label">
                                 <label>Set Priority</label>
                              </div>
                              <input
                                 type="radio"
                                 name="priority"
                                 value="urgent"
                                 onClick={() => {
                                    setPriority('urgent');
                                 }}
                              ></input>
                              <label> Urgent</label>
                              <input
                                 type="radio"
                                 name="priority"
                                 value="important"
                                 onClick={() => {
                                    setPriority('important');
                                 }}
                              ></input>
                              <label> Important</label>
                              <div className="button">
                                 <button>+</button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Schedule;
