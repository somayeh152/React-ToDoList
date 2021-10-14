import React from "react";
import './sass/list.scss';

function List({title , deadline , id , taskState, setTaskState}) {

    const handleRemove = (index) => {
        setTaskState(taskState.filter(item => item.id !== index ));
    }

    return(
        <div className="list">
            <ul>
                <li>
                    <div className="taskRow">
                        <div className="taskInfo">
                            <h4 className="title">{title}</h4>
                            <span className="deadline">Deadline: {deadline}</span>
                        </div>
                        <button onClick={() => handleRemove(id)} className="button remove">Remove</button> 
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default List;