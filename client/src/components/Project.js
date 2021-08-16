import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import TopNavbar from './TopNavbar';
import './Project.css';
import useFetch from '../Hooks/useFetch';
import axios from 'axios';
import { useHistory } from 'react-router';
const Project = () => {
   const history = useHistory();
   const [cProjectId, setCProjectId] = useState('');
   const [PName, setPName] = useState('');
   const [CName, setCName] = useState('');
   const [date, setDate] = useState('');
   const [desc, setDesc] = useState('');
   const [budget, setBudget] = useState('');
   const [projectTask, setProjectTask] = useState([]);
   const [cProjectName, setCProjectName] = useState('');
   const [cProjectDesc, setCProjectDesc] = useState('');
   const [cProjectBudget, setCProjectBudget] = useState('');
   const [cProjectPayment, setCProjectPayment] = useState(null);
   const [cProjectDate, setCProjectDate] = useState('');
   const [showTask, setShowTask] = useState([]);
   const url = `${process.env.REACT_APP_SERVER}/user/project`;
   const [data, error] = useFetch(url);
   console.log(error);
   function handleClick(search) {
      setCProjectName(search.name);
      setCProjectDesc(search.description);
      setCProjectPayment(search.paymentStatus);
      setCProjectBudget(search.budget);
      setCProjectDate(search.deadline.slice(0, 10));
      setCProjectId(search._id);
      axios
         .get(
            `${process.env.REACT_APP_SERVER}/user/project/${search._id}/task`,
            { headers: { jwt: localStorage.getItem('jwt') } },
         )
         .then(res => {
            setShowTask(res.data);
         })
         .catch(err => {
            console.log(err);
            history.push('/');
         });
   }
   const handleSubmit = e => {
      const data = {
         name: PName,
         client: CName,
         deadline: date,
         description: desc,
         budget,
         headers: {
            jwt: localStorage.getItem('jwt'),
         },
      };
      e.preventDefault();
      axios
         .post(`${process.env.REACT_APP_SERVER}/user/project`, data)
         .then(res => {
            console.log(res.data);
         })
         .catch(err => {
            console.log(err);
            history.push('/');
         });
   };
   const handleTaskSubmit = () => {
      const dataTask = {
         name: projectTask,
         headers: {
            jwt: localStorage.getItem('jwt'),
         },
      };
      console.log(
         `${process.env.REACT_APP_SERVER}/user/project/${cProjectId}/task`,
      );
      axios
         .post(
            `${process.env.REACT_APP_SERVER}/user/project/${cProjectId}/task`,
            dataTask,
         )
         .then(res => {
            console.log(res.data);
         })
         .catch(err => {
            console.log(err);
            history.push('/');
         });
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
                        <div className="sub-heading">{cProjectName}</div>
                        <div className="current-body-div">
                           <div className="fetched-desc">{cProjectDesc}</div>
                           <div className="other-details">
                              <div className="project-tasks-parent">
                                 Project Tasks
                                 <div className="list-of-tasks">
                                    {showTask.map(search => {
                                       return (
                                          <div key={search.id}>
                                             {search.name}
                                          </div>
                                       );
                                    })}
                                 </div>
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
                              <div className="due-date">{cProjectDate}</div>
                              <div className="due-budget">{cProjectBudget}</div>
                              <div className="due-status">
                                 {cProjectPayment ? 'completed' : 'pending'}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="ongoing">
                        <div className="sub-heading">Ongoing Projects</div>
                        {data &&
                           data.map(search => {
                              return (
                                 <div
                                    className="ongoing-body"
                                    key={search._id}
                                    onClick={() => handleClick(search)}
                                 >
                                    <div className="fetched-project-name">
                                       {search.name}
                                    </div>
                                    <div className="fetched-due-date">
                                       {search.deadline.slice(0, 10)}
                                    </div>
                                 </div>
                              );
                           })}
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
      // }
   );
};

export default Project;
