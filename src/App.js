import React, { Component } from "react";
import logo from "./logo.svg";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { useState, useEffect } from "react";
// import Tasks from './Components/Tasks/Tasks'
import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import FormF from "./Components/FormF/FormF";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import { useStateValue } from "./Components/StateProvider";
import {Link} from 'react-router-dom'
const App = () => {

  const[{basket},dispatch]=useStateValue();
  
  const [showAddTask, setShowAddTask] = useState(true);
  const [style, setstyle] = useState("none");
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [assingedTo, setassingedTo] = useState("");
  const [duedate, setduedate] = useState("");
  const [status, setstatus] = useState("ToDo");
  const [reminder, setreminder] = useState(false);
  const [taskss, setTasks] = useState([]);



  useEffect(() => {
    const getTask = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTask();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:7000/taskss");
    const data = await res.json();
    console.log(data);
    return data;
 
  };
  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:7000/taskss/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const onSubmit = (e) => {
    e.preventDefault(); //prevent default behaviour of the form

    if (
      name === "" ||
      description === "" ||
      duedate === "" ||
      assingedTo === ""
    ) {
      alert("please add task!");
    } else {
      addTask2({ name, description, assingedTo, duedate, status: "ToDo" });

      setName("");
      setdescription("");
      setduedate("");
      setstatus("");
      setassingedTo("");
    }
  };

   //delet task
  const deletTask = async (id) => {
    await fetch(`http://localhost:7000/taskss/${id}`, {
      method: "DELETE",
    });
    setTasks(taskss.filter((task) => task.id !== id));
  };
  const doneTask = async (id) => {
    const taskDone = await fetchTask(id);
    const updateTask = { ...taskDone, status: "Done" };

    const res = await fetch(`http://localhost:7000/taskss/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateTask),
    });
    const data = await res.json();
    setTasks(taskss.map((task) => (task.id === data.id ? updateTask : task)));
    // setTasks(taskss.map((task) => task.id===id? {...taskss,updateTask}:task))
  };

  //add task
  const addTask2 = async (task) => {
    const res = await fetch("http://localhost:7000/taskss", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
    setTasks([...taskss, data]);
    // const id=Math.floor(Math.random()*10000)+1
    // const newTask={id,...task}
    //  setTasks([...taskss,newTask])
    //  console.log(taskss);
  };
  //toggle reminder
  const toggelReminder = (id) => {
    setTasks(
      taskss.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
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
                : { backgroundColor: "green" }
            }
          >
            {" "}
            {showAddTask ? "Close" : `Add New Task  ${basket.length}`}{" "}
          </button>
        </div>
      </div>
      {showAddTask && (
        <FormF
          name={name}
          desc={description}
          assi={assingedTo}
          dued={duedate}
          stat={status}
          sname={setName}
          sdesc={setdescription}
          sassi={setassingedTo}
          sdued={setduedate}
          sstat={setstatus}
          onSubmit={onSubmit}
        />
      )}


      <AddTask
        addTasks={taskss}
        ondone={doneTask}
        ondelet={deletTask}
        onadd={addTask2}
        style={style}
      />

        </>
      )} />     

   <Route path='/about' component={About}/>
   <Footer />
    </div>
    </Router>
  );
};

export default App;
