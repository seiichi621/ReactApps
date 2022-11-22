import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompletTodos, setIncompletTodos] = useState([]);

  const [completeTodos, setCompletTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompletTodos, todoText];
    setIncompletTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompletTodos];
    newTodos.splice(index, 1);
    setIncompletTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompletTodos = [...incompletTodos];
    newIncompletTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompletTodos[index]];
    setIncompletTodos(newIncompletTodos);
    setCompletTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompletTodos = [...incompletTodos, completeTodos[index]];
    setCompletTodos(newCompleteTodos);
    setIncompletTodos(newIncompletTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodos
        todos={incompletTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
