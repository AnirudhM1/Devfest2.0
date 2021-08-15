import React from 'react';
import { Link } from 'react-router-dom';
const Welcome = () => {
   return (
      <div>
         <h1>Welcome to company</h1>
         <Link to="/login">Login</Link>
      </div>
   );
};

export default Welcome;
