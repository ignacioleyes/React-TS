// Types
import { TodoType } from "../types/types";

interface Props {
  toDoData: Array<TodoType>;
  deleteToDo: (id: string) => void;
}

export const ToDo = ({ toDoData, deleteToDo }: Props) => {
  if (toDoData.length === 0) {
    return <h2>There is nothing to show!</h2>
  }
  return (

    <ul>
      {toDoData.map((oneToDo) => {
        return (
          <li key={oneToDo.id}>
            <h2>{oneToDo.text}</h2>
            <p>{oneToDo.date}</p>
            <button onClick={() => deleteToDo(oneToDo.id)}>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
};
