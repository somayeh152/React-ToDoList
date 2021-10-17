import React from 'react';
import './sass/app.scss';
import List from './components/List/List';
import Add from './components/Add/Add';
import Search from './components/Search/Search';
import { TaskStateProvider } from './TaskStateContext';
import { SearchTermProvider } from './searchTermContext';

function App() {
  return (
    <TaskStateProvider>
      <div className="App">
        <h1>To Do List</h1>
        <Add />
        <SearchTermProvider>
          <Search />
          <List />
        </SearchTermProvider>
      </div>
    </TaskStateProvider>
  );
}

export default App;
