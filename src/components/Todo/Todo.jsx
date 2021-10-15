import React from "react";
import '././sass/todo.scss';

function Todo({title , deadline , id , taskState, setTaskState}) {
    
    const handleRemove = (index) => {
        setTaskState(taskState.filter(item => item.id !== index ));
    }

    return(
        <li>
            <div className="taskRow">
                <div className="taskInfo">
                    <h4 className="title">{title}</h4>
                    <span className="deadline">Deadline: {deadline}</span>
                </div>
                <button onClick={() => handleRemove(id)} className="button remove">Remove</button> 
            </div>
        </li>
    )
}

export default Todo;