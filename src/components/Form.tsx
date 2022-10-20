import React, { useState } from "react";

interface Props {
  createToDo: (text: string) => void;

}

export const Form = ({ createToDo }: Props) => {
  const [toDoText, setToDoText] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (toDoText === "") return;
    createToDo(toDoText);
    e.currentTarget.reset();
    setToDoText("")
  };

  const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setToDoText(e.currentTarget.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="newToDoText" onChange={changeHandler} />
      <button type="submit" disabled={!toDoText}> Create ToDo</button>
    </form>
  );
};
