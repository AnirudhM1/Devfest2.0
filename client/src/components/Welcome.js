import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
const Welcome = () => {
   return (
      <div className="app-parent">
         <div className="welcome-body">
            <div className="welcome">Welcome</div>
            <Link to="/login">Login</Link>
         </div>
      </div>
   );
};

export default Welcome;
