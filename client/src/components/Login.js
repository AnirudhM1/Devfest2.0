import React from 'react';
import Sawo from './Sawo';
import './Login.css';
const Login = () => {
   return (
      <div className="app-parent">
         <div className="welcome-body login-body">
            <div className="sawo">
               <h2>Login with sawo</h2>
               <Sawo />
            </div>
            <div className="google">
               <h2>Login with google</h2>
               <a
                  href={`https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email&response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CLIENT}%2Fgoogle%2Fcallback`}
                  role="button"
                  className="google-anchor"
               >
                  <i className="fab fa-google fa-3x"></i>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Login;
