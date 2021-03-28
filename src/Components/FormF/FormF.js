import React,{Component} from "react";
import { useState, useEffect } from "react";
import db from '../../firebase'
import { useStateValue } from "../StateProvider";

function FormF() 
{
const [{alltask }, dispatch] = useStateValue();
const [name, setName] = useState("");
const [description, setdescription] = useState("");
const [assingedTo, setassingedTo] = useState("");
const [duedate, setduedate] = useState("");
const [status, setstatus] = useState("To Do");
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
      db.collection('tasks').add({
        TaskName:name,
        TaskDescription:description,
        AssignedTo:assingedTo,
        DueDate:duedate,
        TaskStatus:status,
      })
   
        dispatch({
          type:'ADD_TO_Task',
          item: {
            TaskName:name,
            TaskDescription:description,
            AssignedTo:assingedTo,
            DueDate:duedate,
            TaskStatus:status,  
          },
        });

       setName("");
      setdescription("");
      setduedate("");
      setstatus("");
      setassingedTo("");
    }
  };
  return (
    <div className="innerclass container">
      <div className="container-fluid">
        <div className="title">
          <h1>Task List</h1>
        </div>
      </div>
      <br />
      <br />    
      <br />
      <br />
      <form id="myform">
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationCustom01">
              <strong>Task Name </strong>
            </label>
            <p
              style={{ display: "none" }}
              className="alert alert-danger"
              id="NameMes"
            >
              Task name field is required
            </p>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationCustom02">
              <strong>Task Description</strong>
            </label>
            <p
              style={{ display: "none" }}
              className="alert alert-danger"
              id="DesMes"
            >
              Task description is required
            </p>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationCustom03">
              <strong>Assigned To</strong>{" "}
            </label>
            <p
              style={{ display: "none" }}
              className="alert alert-danger"
              id="AssMes"
            >
              Task assigned to is required
            </p>
            <input
              type="text"
              className="form-control"
              id="validationCustom03"
              value={assingedTo}
              onChange={(e) => setassingedTo(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label for="validationCustom04">
              {" "}
              <strong>Due Date</strong>{" "}
            </label>
            <p
              style={{ display: "none" }}
              className="alert alert-danger"
              id="DueDateMes"
            >
              The due date is required
            </p>
            <input
              type="date"
              className="form-control"
              id="newTaskDueDate"
              value={duedate}
              onChange={(e) => setduedate(e.target.value)}
            />
          </div>
        </div>
        <button
         onClick={onSubmit}
          className="btn btn-success btn-block"
          id="btnId"
          type="submit"
                 >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default FormF;
