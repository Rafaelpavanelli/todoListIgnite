import React, { createContext, ReactNode, useState } from "react";
export type PropsContext = {
  addTodo: (todo: string) => void;
  toggleStatus: (todoId: number) => void;
  todoList: Todo[];
  removeTodo: (todoId: number) => void;
};
export const TodoContext = createContext({} as PropsContext);

type Todo = {
  id: number;
  Todo: string;
  status: boolean;
};

type TodoListContextProviderProps = {
  children: ReactNode;
};

export function TodoListContextProvider({
  children,
}: TodoListContextProviderProps) {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function addTodo(todo: string) {
    const Todo: Todo = {
      id: todoList.length + 1,
      Todo: todo,
      status: false,
    };
    setTodoList((prevTodos) => [...prevTodos, Todo]);
  }

  function toggleStatus(todoId: number) {
    setTodoList((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, status: !todo.status } : todo
      );

      const falseTodos = updatedTodos.filter((todo) => !todo.status);
      const trueTodos = updatedTodos.filter((todo) => todo.status);
      const reorderedTodos = [...falseTodos, ...trueTodos];

      return reorderedTodos;
    });
  }

  function removeTodo(todoId: number) {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <TodoContext.Provider
      value={{ todoList, addTodo, toggleStatus, removeTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
