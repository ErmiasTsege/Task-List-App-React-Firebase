import React from "react";
import { useState } from "react";
import FormF from "../FormF/FormF";
import { useStateValue } from "../StateProvider";
function AddTask({ ondone, style, ondelet, addTasks }) {
  const[{basket},dispatch]=useStateValue();
  const addToTask2=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        addTasks,
      },
    });
};




  return (
    <div className="innerclass container">
      <br />
      <br />
      <div className="jumbotron">
        <h2>Task Lists</h2>
        <div  onClick={addToTask2}  className="List-items" id="tasklist" >
          {addTasks.map(
            ({ id, name, description, assingedTo, duedate, status }) => (
              <li key={id} className="list-group-item">
                <div className="card">
                  <div className="card-body">
                  
                    <p className="card-title">Task Name: {name}</p>
                    <p className="card-title">Task Description: {description}</p>
                    <p className="card-title">Assigned To:{assingedTo}</p>
                    <p className="card-title">Due Date: {duedate}</p>
                    <p className="card-title" >
                      Task Status: {status}  
                    </p>
                    <p onClick={() => ondone(id)}
                      className="btn-primary done-button"
                    >
                      {status == "ToDo" ? "Mark As Done" : "Done"}
                    </p>
                    <p className="btn-danger" onClick={() => ondelet(id)}>
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
