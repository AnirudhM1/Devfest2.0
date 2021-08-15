import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
   return (
      <div className="navbar-export">
         <div className="logo">
            <img
               src="https://storage.googleapis.com/restro/A0.png"
               alt="logo"
               height="100px"
               width="100px"
            />
         </div>
         <div className="links">
            <Link to="/app">Home</Link>
         </div>
         <div className="links">
            <Link to="/project">Project</Link>
         </div>
         <div className="links">
            <Link to="/expense">Expenses</Link>
         </div>
         <div className="links">
            <Link to="/schedule">Tasks</Link>
         </div>
         <div className="links">
            <Link to="/message">Messages</Link>
         </div>
      </div>
   );
};

export default Navbar;
