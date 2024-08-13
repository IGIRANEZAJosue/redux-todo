import { useState } from "react";
import Todo from "./components/Todo";

export default function App() {
   const [input, setInput] = useState("");
   const [todos, setTodos] = useState([]);

   // Get data from the input
   const handleInput = (e) => {
      setInput(e.target.value);
   };

   // Add todo to the list
   const addTodo = (e) => {
      e.preventDefault();
      setTodos((previousTodos) => [
         ...previousTodos,
         { title: input, isCompleted: false, id: Math.random() * 100 },
      ]);

      setInput("");
   };

   // Delete todo from the list
   const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const completeTodo = (id) => {
      setTodos((prevTodos) =>
         prevTodos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
         )
      );
   };

   return (
      <div className="flex flex-col justify-center items-center font-poppins">
         <h1 className="font-bold text-[6rem] text-gray-300">todos</h1>

         <form onSubmit={addTodo} className="flex flex-col items-center w-full">
            <div className="flex items-center gap-4 border-2 border-gray-300 shadow-lg p-2 rounded-full w-1/2 outline-[#636cff]">
               <input
                  type="text"
                  value={input}
                  onChange={handleInput}
                  placeholder="Add todo..."
                  className="p-2 w-full outline-none"
               />
               <button
                  type="submit"
                  className="flex justify-center items-center bg-green-500 rounded-full size-10"
               >
                  <i className="fa-plus fa-solid"></i>
               </button>
            </div>
         </form>
         <div className="flex flex-col items-center w-full">
            {todos.map((todo) => (
               <Todo
                  key={todo.id}
                  todo={todo}
                  delete={() => deleteTodo(todo.id)}
                  completeTodo={() => completeTodo(todo.id)}
               />
            ))}
         </div>
      </div>
   );
}
