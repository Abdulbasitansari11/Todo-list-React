import React, { useEffect, useState } from "react";

const AddTodo = ({addTodo}) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [rem, setRem] = useState("");
  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc || !rem){
      alert("Title or Description can not be blank")
    }
    addTodo(title, desc, rem);
    setDesc("");
    setTitle("")
    setRem("")
  }
// console.log(title,"title");
  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
          />
        
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rem" className="form-label">
            Remarks
          </label>
          <input
            type="text"
            value={rem}
            onChange={(e)=>{setRem(e.target.value)}}
            className="form-control"
            id="rem"
          />
        </div>
       
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
