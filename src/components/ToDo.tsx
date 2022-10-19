interface TodoType {
  id: number,
  text: string,
  date: string,
  isDone: boolean
}

interface Props {
  toDoData: Array<TodoType>;
}


export const ToDo = ({toDoData}: Props)  => {
  return (
    <ul>
    {toDoData.map((oneToDo) => {
      return (
        <li key={oneToDo.id}>
          <h2>{oneToDo.text}</h2>
          <p>{oneToDo.date}</p>
        </li>
      )
    } )}
  </ul>
  )
}
