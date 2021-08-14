import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Hooks/AuthProvider';

function useQuery() {
   return new URLSearchParams(useLocation().search);
}

const Callback = () => {
   let query = useQuery();
   const setAuth = useAuth();
   const history = useHistory();
   useEffect(() => {
      axios
         .get(`${process.env.REACT_APP_SERVER}/auth/google/`, {
            headers: {
               code: query.get('code'),
            },
         })
         .then(res => {
            const { oauth } = res.data;
            localStorage.setItem('jwt', oauth);
            setAuth(true);
            history.push('/app');
         })
         .catch(() => {
            history.push('/');
         });
   }, []);
   return (
      <div>
         <h1>Processing</h1>
      </div>
   );
};

export default Callback;
