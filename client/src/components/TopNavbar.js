import React, { useEffect } from 'react';
import './TopNavbar.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const TopNavbar = () => {
   const location = useLocation();
   const path = location.pathname;
   const [title, setTitle] = useState('');
   useEffect(() => {
      // const { name } = atob(localStorage.getItem('jwt').split['.'][1]);
      if (path === '/app') {
         setTitle('Insights');
      } else if (path === '/project') {
         setTitle('My Projects');
      } else if (path === '/schedule') {
         setTitle('My Schedule');
      } else if (path === '/expense') {
         setTitle('My Expenses');
      } else if (path === '/message') {
         setTitle('Messages and Offers');
      } else {
         setTitle('error');
      }
   }, []);
   return (
      <div className="top-navbar-parent">
         <div className="company-name">Skaber.Space</div>
         <div className="title-class">{title}</div>
         <div className="profile">
            <div className="profile-pic"></div>
            <div className="profile-name">
               <i className="fas fa-user-circle"></i> User Name{' '}
            </div>
         </div>
      </div>
   );
};

export default TopNavbar;
