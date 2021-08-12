import React, { useEffect } from 'react';
import Sw from 'sawo';
import axios from 'axios';
import { sign } from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Hooks/AuthProvider';
export default function Sawo() {
   const setAuth = useAuth();
   const history = useHistory();
   async function successLogin(payload) {
      const { identifier, verification_token } = payload;
      const jwt = await sign(
         { email: identifier, verification_token },
         process.env.REACT_APP_JWT,
      );
      localStorage.setItem('jwt', jwt);
      axios
         .post(`${process.env.REACT_APP_SERVER}/auth/login`, {
            email: identifier,
            headers: {
               jwt,
            },
         })
         .then(() => {
            setAuth(true);
            history.push('/app');
         })
         .catch(err => console.log(err));
   }
   useEffect(() => {
      const config = {
         containerID: 'sawo-container',
         identifierType: 'email',
         apiKey: process.env.REACT_APP_SAWO,
         onSuccess: successLogin,
      };
      let sawo = new Sw(config);
      sawo.showForm();
   }, []);
   return (
      <div>
         <div
            id="sawo-container"
            style={{ height: '300px', width: '300px' }}
         ></div>
      </div>
   );
}
