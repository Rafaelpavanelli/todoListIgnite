import { useContext } from "react";

import { TodoContext } from "../context/todoListContext";

export function useTodo(){
  const context = useContext(TodoContext);

  return context;
}