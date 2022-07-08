import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import Task from "./Components/Task";

//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="todoApp">
      <AddTask />
      <ListTask />
      <Task/>
      </div>
    </div>
  );
}

export default App;