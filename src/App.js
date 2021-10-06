import React , {useState , useEffect} from 'react';
import './sass/app.css';
import List from './components/List/List';
import Add from './components/Add/Add';

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

  const handleTextChange = (e) =>{
    setTitleInput(e.target.value);
  }

  const handleDeadlineChange = (e) =>{
    setdDadlineInput(e.target.value);
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = (taskState.length) ? taskState[taskState.length - 1].id + 1 : 0;
    setTaskState([...taskState, {id: id , title:titleInput , deadline:deadlineInput}]);
    setTitleInput('');
    setdDadlineInput('');
  }

  const handleRemove = (index) => {
    setTaskState(taskState.filter(item => item.id !== index ));
  }

  
 const [searchTerm, setSearchTerm] = useState("");
//  const [searchResults, setSearchResults] = useState([]);
 const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
  
  let result = taskState.filter(task =>{
    return Object.keys(task).some(key =>
      task[key].toString().toLowerCase().includes(searchTerm))
  })

  // useEffect(() => {
  //   let result = taskState.filter(task =>{
  //     return Object.keys(task).some(key =>
  //       task[key].toString().toLowerCase().includes(searchTerm))
  //   });
  //   setSearchResults(result);
  // }, [searchTerm]);


  return (
    <div className="App">
      <h1>To Do List</h1>
      <Add
        submit={e => handleSubmit(e)}
        textChange={handleTextChange}
        deadlineChange={handleDeadlineChange}
        titleValue={titleInput}
        deadlineValue={deadlineInput}
      />
      <div className='search'>
        <input type="text" placeholder="Search a task" value={searchTerm} onChange={handleSearch} />
      </div>
      {
          result.map(task => {
          return(
            <List 
              key={task.id}
              title={task.title}
              deadline={task.deadline}
              remove={() => handleRemove(task.id)}
            />
          )
        })
      }
    </div>
  );
}

export default App;
