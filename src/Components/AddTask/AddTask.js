import React from "react";
import db from '../../firebase'
import { useState, useEffect} from "react";
import FormF from "../FormF/FormF";
import { useStateValue } from "../StateProvider";
function AddTask() {
  const [{ alltask }, dispatch] = useStateValue();
   const [taskss, setTasks] = useState([]);
   const [status, setStatus] = useState("To Do");
  useEffect(()=>{
    db.collection('tasks').onSnapshot(snapshot=>(setTasks(snapshot.docs.map((doc)=>(
       { id:doc.id,data:doc.data()
    })))
    ))},[]) 

  return (
    <div className="innerclass container">
      <br />
      <br />
      <div className="jumbotron">
        <h2>Task Lists</h2>
        <div  className="List-items" id="tasklist" >
          {taskss.map(
            (task) => (
              <li key={task.id} className="list-group-item">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Task Name: {task.data.TaskName}</p>
                    <p className="card-title">Task Description: {task.data.TaskDescription}</p>
                    <p className="card-title">Assigned To:{task.data.AssignedTo}</p>
                    <p className="card-title">Due Date: {task.data.DueDate}</p>
                    <p className="card-title" >
                      Task Status: {(task.data.TaskStatus=="")||(task.data.TaskStatus=="To Do")?status:task.data.TaskStatus}  
                    </p>
                    <p onClick={ event=>db.collection('tasks').doc(task.id).set({
                      TaskName:task.data.TaskName,
                      TaskDescription:task.data.TaskDescription,
                      AssignedTo:task.data.AssignedTo,
                      DueDate:task.data.DueDate,
                      TaskStatus:"Done",
                       })}
                      className="btn-primary done-button"
                    >
                      {(task.data.TaskStatus=="")||(task.data.TaskStatus=="To Do")? "Mark As Done" : "Done"}                   
                                  </p>
                    <p onClick={event => db.collection('tasks').doc(task.id).delete()}          
                      
                     className="btn-danger" >
                      Delete
                    </p>
                  </div>
                </div>
              </li>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default AddTask;
