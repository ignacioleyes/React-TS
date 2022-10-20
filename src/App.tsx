// Components
import { ToDo } from "./components/ToDo";
import { Form } from "./components/Form";

// Hooks
import { useToDoHook } from "./hooks/useToDoHook";

// Styles
import "./App.css";

function App() {
  const [toDos, dispatch] = useToDoHook();

  const createToDoHandler = (newToDoText: string): void => {
    dispatch({
      type: "add",
      payload: {
        text: newToDoText,
      },
    });
  };

  const deleteToDoHandler = (id: string): void => {
    dispatch({
      type: "delete",
      payload: { id },
    });
  };

  return (
    <div className="App">
      <h1>To Do List - TS</h1>
      <Form createToDo={createToDoHandler} />
      <ToDo toDoData={toDos} deleteToDo={deleteToDoHandler}/>
    </div>
  );
}

export default App;
