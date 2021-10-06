import React from "react";
import './add.css';

function Add(props) {
    return(
        <div className="addTask">
        <span>Add a task:</span>
        <form onSubmit={props.submit}>
          <input type="text" name="title" placeholder="Enter title" value={props.titleValue} onChange={props.textChange} required />
          <input type="text" name="deadline" placeholder="Enter deadline" value={props.deadlineValue} onChange={props.deadlineChange} required />
          <button type="submit" className='button add'>Add</button>
        </form>
      </div>
    )
}

export default Add;