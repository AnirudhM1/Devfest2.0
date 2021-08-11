// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Sawo from 'sawo';
import axios from 'axios';
import { sign } from 'jsonwebtoken';

function App() {
   function successLogin(payload) {
      const { identifier, verification_token } = payload;
      const jwt = sign(
         { identifier, verification_token },
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
         .then(res => console.log(res))
         .catch(err => console.log(err));
   }
   useEffect(() => {
      const config = {
         containerID: 'sawo-container',
         identifierType: 'email',
         apiKey: '616d6ce2-a135-49ea-a068-7a4b99c59ddc',
         onSuccess: successLogin,
      };
      let sawo = new Sawo(config);
      sawo.showForm();
   }, []);
   return (
      <div className="App">
         <div
            id="sawo-container"
            style={{ height: '300px', width: '300px' }}
         ></div>
      </div>
   );
}

export default App;
