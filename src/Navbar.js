import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
 
  return (
    <>
    <h1 className="todo-heading">Task Tracker</h1>
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        
        <li>
          <Link to="/newtask">New Task</Link>
        </li>
      </ul>
      
    </nav>
      
    </>
    
  );
};

export default Navbar;
