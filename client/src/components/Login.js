import React from 'react';
import Sawo from './Sawo';
const Login = () => {
   return (
      <div>
         <h2>Login with savo</h2>
         {/* <a href="" role="button">
            Sawo
   </a> */}
         <Sawo />
         <h2>Login with google</h2>
         <a
            href={`https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email&response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CLIENT}%2Fgoogle%2Fcallback`}
            role="button"
         >
            Google
         </a>
      </div>
   );
};

export default Login;
