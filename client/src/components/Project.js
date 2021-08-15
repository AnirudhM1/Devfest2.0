import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
const Project = () => {
   const [PName, setPName] = useState('');
   const [CName, setCName] = useState('');
   const [date, setDate] = useState('');
   const [desc, setDesc] = useState('');
   // const [project, setProject] = useState(null);
   const handleSubmit = e => {
      const data = { PName, CName, date, desc };
      e.preventDefault();
      fetch('/user', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
      })
         .then(response => response.json())
         .then(data => {
            setProject(data);
         });
   };
   return (
      <div className="app-parent">
         <div className="navbar-parent">
            <Navbar />
         </div>
         <div className="my-projects">
            <div className="heading">My projects</div>
            <div className="project-body">
               <div className="ongoing">
                  <div className="sub-heading">Ongoing projects</div>
                  {/* would have to map data from backend */}
                  <div className="input-project">
                     <form onSubmit={handleSubmit}>
                        <input
                           type="text"
                           placeholder="Project Name"
                           required
                           value={PName}
                           onChange={e => setPName(e.target.value)}
                           autoComplete="off"
                        ></input>
                        <input
                           type="text"
                           placeholder="Description"
                           value={desc}
                           onChange={e => setDesc(e.target.desc)}
                           autoComplete="off"
                        ></input>
                        <input
                           type="date"
                           placeholder="Deadline date"
                           required
                           value={date}
                           onChange={e => setDate(e.target.date)}
                           autoComplete="off"
                        ></input>
                        <input
                           type="text"
                           placeholder="Client Name"
                           required
                           value={CName}
                           onChange={e => setCName(e.target.value)}
                           autoComplete="off"
                        ></input>
                     </form>
                  </div>
               </div>
               <div className="pending">
                  <div className="subheading">Peding approvals</div>
                  <div className="pending-body">map or input</div>
                  <div className="subheading">Delivered</div>
                  <div className="pending-body">map or input</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;
