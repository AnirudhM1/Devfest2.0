import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { useHistory } from 'react-router-dom';

function App() {
   const history = useHistory();
   return (
      <div className="app-parent">
         <div className="welcome-body">
            <div className="navbar-parent">
               <Navbar />
            </div>
            <div className="body-parent">
               <div className="heading">Insights</div>
               <div className="project-body">
                  <div>Welcome</div>
                  <div
                     onClick={() => {
                        history.push('/project');
                     }}
                  >
                     Project
                  </div>
                  <div
                     onClick={() => {
                        history.push('/schedule');
                     }}
                  >
                     Schedule
                  </div>
                  <div
                     onClick={() => {
                        history.push('/expense');
                     }}
                  >
                     Expense
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
