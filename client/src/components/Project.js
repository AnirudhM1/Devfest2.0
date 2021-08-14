import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
const Project = () => {
   const [PName, setPName] = useState('');
   const [CName, setCName] = useState('');
   const [date, setDate] = useState('');
   const [desc, setDesc] = useState('');
   const handleSubmit = e => {
      e.preventDefault();
   };
   return (
      <div className="app-parent">
         <div className="navbar-parent">
            <Navbar />
         </div>
         <div className="my-projects">
            <div className="output-project">
               <div className="sub-heading">My project</div>
               {/* would have to map data from backend */}
            </div>
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
      </div>
   );
};

export default Project;
