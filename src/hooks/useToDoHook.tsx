import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// Types
import { TodoType, TodoAction } from "../types/types";

const toDosReducer = (
    state: Array<TodoType>,
    action: TodoAction
  ): Array<TodoType> => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: uuidv4(),
            text: action.payload.text,
            date: new Date().toLocaleDateString(),
            isDone: false,
          },
        ];
      case "delete":
        return state.filter((oneToDo) => oneToDo.id !== action.payload.id);
      case "update":
        return state.map((oneToDo) => {
          if (oneToDo.id === action.payload.id) {
            return oneToDo.isDone
              ? { ...oneToDo, isDone: false }
              : { ...oneToDo, isDone: true };
          }
          return oneToDo;
        });
      default:
        return state;
    }
  };

  const INITIAL_STATE: Array<TodoType> = [
    {
      id: uuidv4(),
      text: "Learn more JS",
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    {
      id: uuidv4(),
      text: "Also learn TS",
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
  ];

  export const useToDoHook = () => useReducer(toDosReducer, INITIAL_STATE)