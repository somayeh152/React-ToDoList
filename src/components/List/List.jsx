import React from "react";
import './sass/list.css';

function List(props) {
    return(
        <div className="list">
            <ul>
                <li>
                    <div className="taskRow">
                        <div className="taskInfo">
                            <h4 className="title">{props.title}</h4>
                            <span className="deadline">Deadline: {props.deadline}</span>
                        </div>
                        <button onClick={props.remove} className="button remove">Remove</button> 
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default List;