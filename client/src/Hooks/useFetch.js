import { useState, useEffect } from 'react';

const useFetch = url => {
   const [data, setData] = useState(false);
   const [err, setErr] = useState(true);
   useEffect(() => {
      axios
         .get(url, { headers: { jwt: localStorage.getItem('jwt') } })
         .then(res => {
            setData(res.data);
            setErr(false);
         })
         .catch(err => {
            setData(null);
            setErr(true);
         });
      return [data, err];
   }, [url]);
};

export default useFetch;
