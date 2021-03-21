import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

function FormF({
  show,
  name,
  desc,
  assi,
  dued,
  stat,
  sname,
  sdesc,
  sassi,
  sdued,
  sstat,
  onSubmit,
}) 
{
const[{basket},dispatch]=useStateValue();

console.log('ermi',basket)


const addToTask=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
      name:name,
      desc:desc,
      assi:assi,
      dued:dued,
      stat:stat,    
      },
    });
};
  return (
    <div className="innerclass container">
      <div className="container-fluid">
        <div className="title">
          <h1   onClick={addToTask}>Task List</h1>
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
              <strong>Task Name</strong>
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
              onChange={(e) => sname(e.target.value)}
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
              value={desc}
              onChange={(e) => sdesc(e.target.value)}
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
              value={assi}
              onChange={(e) => sassi(e.target.value)}
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
              value={dued}
              onChange={(e) => sdued(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={onSubmit}
          className="btn btn-success btn-block"
          id="btnId"
          type="submit"
          onKeyDown={addToTask}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default FormF;
