import React from 'react';
import { Link } from 'react-router-dom';
const Welcome = () => {
   return (
      <div>
         <div className="welcome">Welcome</div>
         <Link to="/login">Login</Link>
      </div>
   );
};

export default Welcome;
