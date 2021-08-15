import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { useHistory } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';

function App() {
   const history = useHistory();
   return (
      <div className="app-parent">
         <div className="welcome-body">
            <div className="navbar-parent">
               <Navbar />
            </div>
            <div className="body-parent">
               <div className="app-top-navbar">
                  <TopNavbar />
               </div>
               <div className="welcome-card-body">
                  <div className="welcome-and-message-parent">
                     <div className="welcomeCard">Welcome User to Skaber</div>
                     <div
                        className="messagesCard"
                        onClick={() => {
                           history.push('/message');
                        }}
                     >
                        <div className="main-sub-heading">Message</div>
                        <div className="message-card-body">database</div>
                     </div>
                  </div>
                  <div className="project-and-expense">
                     <div
                        onClick={() => {
                           history.push('/project');
                        }}
                        className="projectsCard"
                     >
                        <div className="main-sub-heading">Project</div>
                        <div className="project-card-body">database</div>
                     </div>
                     <div
                        onClick={() => {
                           history.push('/expense');
                        }}
                        className="expensesCard"
                     >
                        <div className="main-sub-heading">Expense</div>
                        <div className="expense-card-body">database</div>
                     </div>
                  </div>
                  <div
                     onClick={() => {
                        history.push('/schedule');
                     }}
                     className="reminder"
                  >
                     <div className="main-sub-heading">
                        Events and Reminders
                     </div>
                     <div className="event-card-body">database</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
