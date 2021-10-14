import React , {useState , useEffect} from 'react';
import './sass/app.scss';
import List from './components/List/List';
import Add from './components/Add/Add';
import Search from './components/Search/Search';

function App() {

  const [taskState , setTaskState] = useState(
    [
      {id: 1 , title: 'task1 ' , deadline: ' 2 days'},
      {id: 2 , title: 'task2 ' , deadline: ' 5 days'},
      {id: 3 , title: 'task3 ' , deadline: ' 1 days'},
    ]
  );

  const [titleInput , setTitleInput] = useState();
  const [deadlineInput , setdDadlineInput] = useState();

  
 const [searchTerm, setSearchTerm] = useState("");
  
  let result = taskState.filter(task =>{
    return Object.keys(task).some(key =>
      task[key].toString().toLowerCase().includes(searchTerm))
  })


  return (
    <div className="App">
      <h1>To Do List</h1>
      <Add
        titleInput={titleInput}
        deadlineInput={deadlineInput}
        taskState={taskState}
        setTaskState={setTaskState}
        setTitleInput={setTitleInput}
        setdDadlineInput={setdDadlineInput}
      />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {
          result.map(task => {
          return(
            <List 
              key={task.id}
              title={task.title}
              deadline={task.deadline}
              id={task.id}
              taskState={taskState}
              setTaskState={setTaskState}
            />
          )
        })
      }
    </div>
  );
}

export default App;
