import React , {createContext , useState} from "react";

export const TaskStateContext = createContext();

export const TaskStateProvider = (prop) => {
    const [taskState , setTaskState] = useState(
        [
          {id: 1 , title: 'task1 ' , deadline: ' 2 days'},
          {id: 2 , title: 'task2 ' , deadline: ' 5 days'},
          {id: 3 , title: 'task3 ' , deadline: ' 1 days'},
        ]
    );

    return(
        <TaskStateContext.Provider value={[taskState , setTaskState]}>
            {prop.children}
        </TaskStateContext.Provider>
    )
}