import React, { Component } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import {useStateValue} from './Components/StateProvider'
import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import FormF from "./Components/FormF/FormF";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import db from './firebase'
import {Link} from 'react-router-dom'
console.log(db)
// import db from './firebase'
const App = () => {
  const [{ alltask }, dispatch] = useStateValue();
  const [taskss, setTasks] = useState([]);    
  const [showAddTask, setShowAddTask] = useState(true);
  return (
    <Router> 
    <div>
    <Route path='/' exact render ={(props)=>(
<>
<div className="innerclass container">
        <div className="title"> 
        <button
            onClick={() => setShowAddTask(!showAddTask)}
            style={
              showAddTask
                ? { backgroundColor: "rgb(25, 177, 204)" }
                : { backgroundColor: "green",color:"white" }
            }
          >
            {" "}
            {showAddTask ? "Close" : `Add New Task  ${alltask.length}`}{" "}
              </button>
        </div>
      </div>  
      {showAddTask && (
       <FormF/> 
      )}
       <AddTask/> 
       </> )}/>
       <Route path='/about' component={About}/>
       <Footer />             
       </div> 
       </Router> 
  )  
};

export default App;
