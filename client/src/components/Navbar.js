import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
   const history = useHistory();
   return (
      <div className="main-parent">
         <div className="logo">
            <img
               src="https://storage.googleapis.com/restro/SkaberLogo.png"
               alt="logo"
               height="60px"
               width="40px"
               align="center"
            />
         </div>
         <div className="navbar-export">
            <div
               className="links"
               onClick={() => {
                  history.push('/app');
               }}
            >
               <i className="fas fa-home fa-2x"></i>
               Insights
            </div>
            <div
               className="links"
               onClick={() => {
                  history.push('/project');
               }}
            >
               <i className="fas fa-chart-pie fa-2x"></i>Projects
            </div>
            <div
               className="links"
               onClick={() => {
                  history.push('/expense');
               }}
            >
               <i className="fas fa-money-check-alt fa-2x"></i>Expenses
            </div>
            <div
               className="links"
               onClick={() => {
                  history.push('/schedule');
               }}
            >
               <i className="fas fa-tasks fa-2x"></i> Tasks
            </div>
            <div
               className="links"
               onClick={() => {
                  history.push('/message');
               }}
            >
               <i className="fas fa-envelope fa-2x"></i>Messages
            </div>
         </div>
         <div className="log-out">
            <i className="fas fa-power-off"></i>Logout
         </div>
      </div>
   );
};

export default Navbar;
