import React, { useState } from "react";
import axios from "axios";
import "./TaskForm.css";
import Navbar from "../../Navbar";
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [DueDate,setDueDate] = useState("");


  const onChangeDueDate = (event)=>{
    setDueDate(event.target.value)
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
 
      
      const taskList = {
        "title":title,
        "description":description,
        "DueDate":DueDate,
        "status":status
      }
      localStorage.setItem("taskList",taskList)
      

   
        alert("Task created successfully!");
        // Clear form fields after success
        setTitle("");
        setDescription("");
        setStatus("pending");
      
   
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className="form-container">
      <h1 className="heading">Create Task</h1>
      <input
        className="inputEl"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="input-Area"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input className="date-input" onChange={onChangeDueDate} type="date" />
     
      <select className="select-input" value={status} onChange={(e) => setStatus(e.target.value)}>
      
        <option value="Pending">Pending</option>
        <option value="In progress">In Progress</option>
        <option value="Done">Done</option>
        <option value="Completed">Completed</option>
      </select>
      <button className="add-todo-button" type="submit">Create Task</button>
    </form>
    </>
    
  );
};

export default TaskForm;
