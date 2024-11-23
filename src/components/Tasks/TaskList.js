import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./TaskList.css";
import Navbar from "../../Navbar";
import { ThreeDots } from 'react-loader-spinner'

const statusConstants = {
  initial:"INITIAL",
  success:"SUCCESS",
  failure:"FAIlure",
  inProgress:"in-progress"
}

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [apiStatus,setApiStatus] = useState(statusConstants.initial)

  useEffect(() => {
    
      setApiStatus(statusConstants.inProgress)
      const taskList = localStorage.getItem("taskList")
    console.log(taskList)
        setTasks(taskList);
        setApiStatus(statusConstants.success)
      
  }, []);

  const apiView = ()=>{
    switch(apiStatus){
      case statusConstants.success:
        return successView()
      case statusConstants.inProgress:
        return loadingView()
      default:
        return null
    }
  }


  const loadingView = ()=>{
    return (
      <div className="loading-container">
        <ThreeDots
      className ="dots"
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />
      </div>
      
 
    )
  }

  const handleDelete = async (id) => {
    const taskList = localStorage.getItem("taskList")
    console.log(taskList)
    
      setTasks(taskList.filter((task) => task.id !== id)); 
      alert("Task deleted successfully!");
  }

  const successView = ()=>{
    return (
      <>
       <Navbar />
      <div>
        <h1 className="task-heading">Task List</h1>
        <ul>
          {tasks.map((task) => (
            <li className="list-item" key={task.id}>
              <h1 className="title">{task.title}</h1>
              <p className="description">{task.description}</p>
              <p className="status">Status: {task.status}</p>
              <Link to={`/updatetask/${task.id}`}>Update</Link>
              <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      </>
     
    );
  }

  return (
    apiView()
  );
};

export default TaskList;
