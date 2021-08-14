import { verify } from 'jsonwebtoken';
import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sawo from '../components/Sawo';
import Callback from '../components/Callback';
import { Route, useHistory } from 'react-router-dom';
const AuthContext = createContext();
const StateContext = createContext();

export function useAuth() {
   return useContext(StateContext);
}

export default function AuthProvider({ children }) {
   const [auth, setAuth] = useState(false);
   const history = useHistory();
   const jwt = localStorage.getItem('jwt');
   useEffect(() => {
      verify(jwt, process.env.REACT_APP_JWT, (err, decodedToken) => {
         if (err !== null) {
            setAuth(false);
            history.push('/');
         }
         if (decodedToken) setAuth(true);
      });
   }, [auth]);
   return (
      <AuthContext.Provider value={auth}>
         <StateContext.Provider value={setAuth}>
            <Route exact path="/">
               <Sawo />
            </Route>
            <Route path="/google/callback">
               <Callback />
            </Route>
            {auth && children}
         </StateContext.Provider>
      </AuthContext.Provider>
   );
}

AuthProvider.propTypes = {
   children: PropTypes.node.isRequired,
};
