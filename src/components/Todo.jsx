import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo";

/* eslint-disable react/prop-types */
const Todo = (props) => {
   const dispatch = useDispatch();

   return (
      <div className="flex items-center gap-8 p-4 border-b border-b-gray-400 w-2/3">
         <input
            type="checkbox"
            onClick={() => dispatch(addTodo())}
            checked={props.todo.isCompleted}
         />
         <p
            className={`font-karla text-2xl ${
               props.todo.isCompleted ? "line-through text-gray-300" : ""
            }`}
         >
            {props.todo.title}
         </p>
         <button
            onClick={props.delete}
            className="flex justify-center items-center bg-gray-100 ml-auto rounded-lg text-red-400 size-12"
         >
            <i className="fa-trash-can fa-solid"></i>
         </button>
      </div>
   );
};

export default Todo;
