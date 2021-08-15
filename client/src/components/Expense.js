import React, { useState } from 'react';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import './Expense.css';
// import axios from 'axios';
// import { useHistory } from 'react-router';
const Expense = () => {
   // const history = useHistory();
   // const [data, error] = useFetch(`${process.env.REACT_APP_SERVER}/user/expense`)
   const [amount, setAmount] = useState('');
   const [amountFor, setAmountFor] = useState('');
   const [amountDate, setAmountDate] = useState('');
   const [Tamount, setTAmount] = useState('');
   const [amountTo, setAmountTo] = useState('');
   const [Tdesc, setTDesc] = useState('');
   const [tChoice, setTChoice] = useState('');
   // const [toFrom, setToFrom] = useState('');
   console.log(tChoice);
   // const dueData = { amount, amountFor, amountDate };
   // const tData = { Tamount, amountTo, Tdesc, tChoice };
   const handleSubmit = e => {
      // const data = { PName, CName, date, desc, budget };
      e.preventDefault();
      // axios
      //    .post(`${process.env.REACT_APP_SERVER}/user/project`, {
      //       headers: {
      //          jwt: localStorage.getItem('jwt'),
      //       },
      //       body: data,
      //    })
      //    .then(res => {
      //       console.log(res);
      //    })
      //    .catch(err => {
      //       console.log(err);
      //       history.push('/');
      //    });
   };
   const handleTransaction = e => {
      // const data = { PName, CName, date, desc, budget };
      e.preventDefault();
      // axios
      //    .post(`${process.env.REACT_APP_SERVER}/user/project`, {
      //       headers: {
      //          jwt: localStorage.getItem('jwt'),
      //       },
      //       body: data,
      //    })
      //    .then(res => {
      //       console.log(res);
      //    })
      //    .catch(err => {
      //       console.log(err);
      //       history.push('/');
      //    });
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
               <div className="expense-body">
                  <div className="summary-and-add">
                     <div className="summary-container">
                        <div className="expense-sub-heading">
                           Finance Summary
                        </div>
                        <div className="finance-summary-body">
                           from database
                        </div>
                     </div>
                     <div className="write">
                        <div className="add-transaction-container">
                           <div className="expense-sub-heading">
                              Add Transaction To Balance Sheet
                           </div>
                           <div className="transaction-input">
                              <form onSubmit={handleTransaction}>
                                 <div className="radio-buttons">
                                    <input
                                       type="radio"
                                       name="type"
                                       value="debit"
                                       onClick={() => {
                                          setTChoice('debit');
                                       }}
                                    ></input>
                                      <label>Debit</label> {' '}
                                    <input
                                       type="radio"
                                       name="type"
                                       value="credit"
                                       onClick={() => {
                                          setTChoice('credit');
                                       }}
                                    ></input>
                                      <label>Credit</label>
                                 </div>
                                 <div className="transaction-input">
                                    <label>Amount</label>
                                    <input
                                       type="text"
                                       placeholder="Amount"
                                       required
                                       value={Tamount}
                                       onChange={e =>
                                          setTAmount(e.target.value)
                                       }
                                       autoComplete="off"
                                    ></input>
                                 </div>
                                 <div className="transaction-input">
                                    <label>To-From</label>
                                    <input
                                       type="text"
                                       placeholder="Amount to-from"
                                       required
                                       value={amountTo}
                                       onChange={e =>
                                          setAmountTo(e.target.value)
                                       }
                                       autoComplete="off"
                                    ></input>
                                 </div>
                                 <div className="transaction-input">
                                    <label>Transaction Description</label>
                                    <input
                                       type="text"
                                       placeholder="Description"
                                       required
                                       value={Tdesc}
                                       onChange={e => setTDesc(e.target.value)}
                                       autoComplete="off"
                                    ></input>
                                 </div>
                                 <div className="button">
                                    <button>Submit</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="upcomingTran-container">
                           <div className="expense-sub-heading">
                              Upcoming dues
                           </div>
                           <div className="upcoming-dues">from database</div>
                           <div className="upcoming-input">
                              <form onSubmit={handleSubmit}>
                                 <div className="upcoming-due-input">
                                    <label>Amount</label>
                                    <input
                                       type="text"
                                       placeholder="Amount"
                                       required
                                       value={amount}
                                       onChange={e => setAmount(e.target.value)}
                                       autoComplete="off"
                                    ></input>
                                 </div>
                                 <div className="upcoming-due-input">
                                    <label>For</label>
                                    <input
                                       type="text"
                                       placeholder="Amount For"
                                       required
                                       value={amountFor}
                                       onChange={e =>
                                          setAmountFor(e.target.value)
                                       }
                                       autoComplete="off"
                                    ></input>
                                 </div>
                                 <div className="upcoming-due-input">
                                    <label>Due Date</label>
                                    <input
                                       type="text"
                                       placeholder="Due Date"
                                       required
                                       value={amountDate}
                                       onChange={e =>
                                          setAmountDate(e.target.value)
                                       }
                                       autoComplete="off"
                                    ></input>
                                 </div>
                                 <div className="button">
                                    <button>Submit</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="recent-container">
                     <div className="expense-sub-heading">
                        Recent Transactions
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Expense;
