import { useState } from 'react'
import './App.css'

// Components
import { ToDo } from "./components/ToDo";

interface TodoType {
  id: number,
  text: string,
  date: string,
  isDone: boolean
}

function App() {
  const [toDoData, setTodoData] = useState<Array<TodoType>>([
    {
      id: 1,
      text: "Learn more JS",
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    {
      id: 2,
      text: "Also learn TS",
      date: new Date().toLocaleDateString(),
      isDone: false,
    }
  ]);


  return (
    <div className="App">
      <h1>To Do List - TS</h1>
      <ToDo toDoData={toDoData}/>
    </div>
  )
}

export default App
