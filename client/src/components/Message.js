import React, { useState } from 'react';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import './Message.css';
import axios from 'axios';
import { useHistory } from 'react-router';
// import useFetch from '../Hooks/useFetch';
const Message = () => {
   const history = useHistory();
   const [composeTo, setComposeTo] = useState('');
   const [header, setHeader] = useState('');
   const [composeBody, setComposeBody] = useState('');
   const [error, setError] = useState('');
   // const url = `${process.env.REACT_APP_SERVER}/user/message/sent`;
   // const [outbox, oerr] = useFetch(url);
   // console.log({ outbox });
   // console.log({ oerr });
   // const urli = `${process.env.REACT_APP_SERVER}/user/message/incoming`;
   // const [inbox, ierr] = useFetch(urli);
   // console.log({ inbox });
   // console.log({ ierr });
   const handleSubmit = e => {
      const data = {
         recipient: composeTo,
         header,
         message: composeBody,
         headers: {
            jwt: localStorage.getItem('jwt'),
         },
      };
      e.preventDefault();
      axios
         .post(`${process.env.REACT_APP_SERVER}/user/message`, data)
         .then(res => {
            console.log({ res });
         })
         .catch(err => {
            if (err.response.status === 400) {
               setError(err.response.data.message);
            } else {
               history.push('/');
            }
         });
   };
   return (
      <div className="app-parent">
         <div className="welcome-body">
            <div className="navbar-parent">
               <Navbar />
            </div>
            <div className="my-schedule body-parent">
               <div className="app-top-navbar">
                  <TopNavbar />
               </div>
               <div className="message-page-body">
                  <div className="msg-col-1">
                     <div className="selected">
                        <div className="message-sub-heading">
                           Selected Message
                        </div>
                     </div>
                     <div className="compose-container">
                        <div className="message-sub-heading">Compose</div>
                        <form onSubmit={handleSubmit}>
                           <div className="compose-form">
                              <div className="compose-form-body">
                                 <div className="to-input-container">
                                    <div className="to-input">
                                       {error}
                                       <label>To</label>
                                       <input
                                          type="text"
                                          placeholder="Send To"
                                          required
                                          value={composeTo}
                                          onChange={e =>
                                             setComposeTo(e.target.value)
                                          }
                                          autoComplete="off"
                                       ></input>
                                    </div>
                                    <div className="header-input">
                                       <label>Header</label>
                                       <input
                                          type="text"
                                          placeholder="Title"
                                          required
                                          value={header}
                                          onChange={e =>
                                             setHeader(e.target.value)
                                          }
                                          autoComplete="off"
                                       ></input>
                                    </div>
                                 </div>
                                 <div className="compose-container2">
                                    <div className="label">
                                       <label>Compose</label>
                                    </div>
                                    <textarea
                                       placeholder="Write Message"
                                       value={composeBody}
                                       onChange={e =>
                                          setComposeBody(e.target.value)
                                       }
                                       autoComplete="off"
                                       rows="3.5"
                                       cols="50"
                                    ></textarea>
                                 </div>
                              </div>
                              <div className="button">
                                 <button>Send</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="msg-col-2">
                     <div className="inbox-container">
                        <div className="message-sub-heading">Inbox</div>
                        <div className="inbox-body">from database</div>
                     </div>
                     <div className="outbox-container">
                        <div className="message-sub-heading">Outbox</div>
                        <div className="outbox-body">from database</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Message;
