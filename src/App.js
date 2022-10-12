import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';

const task = {
  id: 0,
  title: "Nova tarefa",
  state: "pendente"
};

let idAcc = 0;
const generatedId = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generatedId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask]
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente " onAddTask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
