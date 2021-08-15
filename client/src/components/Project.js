import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import TopNavbar from './TopNavbar';
import './Project.css';
// import axios from 'axios';
// import { useHistory } from 'react-router';
const Project = () => {
   // const history = useHistory();
   const [PName, setPName] = useState('');
   const [CName, setCName] = useState('');
   const [date, setDate] = useState('');
   const [desc, setDesc] = useState('');
   const [budget, setBudget] = useState('');
   const [projectTask, setProjectTask] = useState([]);
   // const [data, error] = useFetch(`${process.env.REACT_APP_SE})
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
   const handleTaskSubmit = e => {
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
            <div className="my-projects body-parent">
               <div className="app-top-navbar">
                  <TopNavbar />
               </div>
               <div className="project-body">
                  <div className="current-and-ongoing">
                     <div className="current">
                        <div className="sub-heading">Project XYZ</div>
                        <div className="current-body-div">
                           <div className="fetched-desc">fetched desc</div>
                           <div className="other-details">
                              <div className="project-tasks-parent">
                                 project tasks
                                 <div className="project-task-form">
                                    <div className="project-task-input">
                                       <input
                                          type="text"
                                          placeholder="Project Task"
                                          value={projectTask}
                                          onChange={e =>
                                             setProjectTask(e.target.value)
                                          }
                                          autoComplete="off"
                                       ></input>
                                    </div>
                                    <div className="button">
                                       <button onClick={handleTaskSubmit}>
                                          +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className="due-date">date</div>
                           </div>
                        </div>
                     </div>
                     <div className="ongoing">
                        <div className="sub-heading">Ongoing Projects</div>
                        <div className="ongoing-body">
                           <div className="fetched-project-name">
                              project xyz
                           </div>
                           <div className="fetched-due-date">12-12-12</div>
                        </div>
                     </div>
                  </div>
                  <div className="input-project">
                     <div className="addNewProject">Add A New Project</div>

                     <form onSubmit={handleSubmit}>
                        <div className="form">
                           <div className="name-date-desc-parent">
                              <div className="name-date">
                                 <div className="name">
                                    <div className="label">
                                       <label>Project Name</label>
                                    </div>
                                    <input
                                       type="text"
                                       placeholder="Project Name"
                                       required
                                       value={PName}
                                       onChange={e => setPName(e.target.value)}
                                       autoComplete="off"
                                    ></input>
                                 </div>
                                 <div className="date">
                                    <div className="label">
                                       <label>Deadline Date</label>
                                    </div>
                                    <input
                                       type="date"
                                       placeholder="Deadline date"
                                       required
                                       value={date}
                                       onChange={e => setDate(e.target.value)}
                                       autoComplete="off"
                                    ></input>
                                 </div>
                              </div>
                              <div className="desc">
                                 <div className="label">
                                    <label>Project Description</label>
                                 </div>
                                 <textarea
                                    placeholder="Description"
                                    value={desc}
                                    onChange={e => setDesc(e.target.value)}
                                    autoComplete="off"
                                    rows="3.5"
                                    cols="50"
                                 ></textarea>
                              </div>
                              <div className="client-and-budget">
                                 <div className="client">
                                    <div className="label">
                                       <label>Client Name</label>
                                    </div>
                                    <input
                                       type="text"
                                       placeholder="Client Name"
                                       required
                                       value={CName}
                                       onChange={e => setCName(e.target.value)}
                                       autoComplete="off"
                                    ></input>
                                 </div>
                                 <div className="budget">
                                    <div className="label">
                                       <label>Budget</label>
                                    </div>
                                    <input
                                       type="text"
                                       placeholder="Budget"
                                       required
                                       value={budget}
                                       onChange={e => setBudget(e.target.value)}
                                       autoComplete="off"
                                    ></input>
                                 </div>
                              </div>
                              <div className="button">
                                 <button className="submit-button">
                                    Submit
                                 </button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;
