import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { useHistory } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import useFetch from './Hooks/useFetch';

function App() {
   const history = useHistory();
   const url = `${process.env.REACT_APP_SERVER}/user/project`;
   const [project, error] = useFetch(url);
   console.log(error);
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
                     <div className="welcomeCard">
                        <h2> Welcome to Skaber.Space</h2> Manage and track all
                        your activies as a creator, your one stop solution to
                        everything!
                     </div>
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
                        <div className="project-card-body">
                           {project &&
                              project.map(search => {
                                 return (
                                    <div
                                       className="ongoing-body"
                                       key={search.id}
                                    >
                                       <div className="fetched-project-name">
                                          {search.name}
                                       </div>
                                       <div className="fetched-due-date">
                                          {search.deadline.slice(0, 10)}
                                       </div>
                                    </div>
                                 );
                              })}
                        </div>
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
                        Tasks, Events & Reminders
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
