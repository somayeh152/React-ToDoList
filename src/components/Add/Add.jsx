import React from "react";
import './add.scss';

function Add({ taskState , titleInput , deadlineInput , setTaskState , setTitleInput , setdDadlineInput }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = (taskState.length) ? taskState[taskState.length - 1].id + 1 : 0;
    setTaskState([...taskState, {id: id , title:titleInput , deadline:deadlineInput}]);
    setTitleInput('');
    setdDadlineInput('');
  }
    return(
        <div className="addTask">
        <span>Add a task:</span>
        
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Enter title" value={titleInput} onChange={e => setTitleInput(e.target.value)} required />
          <input type="text" name="deadline" placeholder="Enter deadline" value={deadlineInput} onChange={e => setdDadlineInput(e.target.value)} required />
          <button type="submit" className='button add' >Add</button>
        </form>
      </div>
    )
}

export default Add;