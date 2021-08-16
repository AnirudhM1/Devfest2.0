import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
const Welcome = () => {
   return (
      <div className="app-parent">
         <div className="welcome-body">
            <div className="welcome-parent-body">
               <div className="flexing">
                  <img
                     src="https://storage.googleapis.com/restro/SkaberLogo.png"
                     alt="logo"
                     height="120px"
                     width="80px"
                     align="center"
                  />
               </div>
               <div className="welcome flexing">Welcome to </div>

               <div className="com-name flexing">Skaber.Space</div>
               <div className="welcome flexing">
                  Manage and track all your activies as a creator, your one stop
                  solution to everything!
               </div>
               <div className="log-link flexing">
                  <Link to="/login">Login or Sign Up here</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Welcome;
