import "./App.css";
import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTod = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), ...todo },
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.Map((checkTodo) => (checkTodo.id === id ? todo : prevTodos))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((checkTodo) => checkTodo.id !== id)
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((checkTodo) =>
        checkTodo === id
          ? { ...checkTodo, isCompleted: !checkTodo.isCompleted }
          : prevTodos
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTod, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
