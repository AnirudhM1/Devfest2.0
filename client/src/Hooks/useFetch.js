import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
   console.log('req recieved:', url);
   const [data, setData] = useState(false);
   const [err, setErr] = useState(true);
   useEffect(() => {
      console.log('after use effect');
      axios
         .get(url, { headers: { jwt: localStorage.getItem('jwt') } })
         .then(res => {
            setData(res.data);
            setErr(false);
         })
         .catch(err => {
            console.error(err);
            setData(null);
            setErr(true);
         });
      console.log({ data, err });
      return [data, err];
   }, [url]);
};

export default useFetch;
