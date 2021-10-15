import React from "react";
import './sass/list.scss';
import Todo from "../Todo/Todo";

function List({taskState, setTaskState , searchTerm}) {

    let result = taskState.filter(task =>{
        return Object.keys(task).some(key =>
          task[key].toString().toLowerCase().includes(searchTerm))
      })

    return(
        <div className="list">
            <ul>
                {result.map(task => {
                    return(
                        <Todo 
                        key={task.id}
                        title={task.title}
                        deadline={task.deadline}
                        id={task.id}
                        taskState={taskState}
                        setTaskState={setTaskState} 
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default List;