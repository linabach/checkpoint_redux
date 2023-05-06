import './App.css';
import AddTask from './Components/AddTask/AddTask';
import TaskList from './Components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
    {/* AddTask component to add new tasks */}
    <AddTask/>
    {/* render the taskList component */}
    <TaskList/>
     
    </div>
  );
}

export default App;
