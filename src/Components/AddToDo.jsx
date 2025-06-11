import { useContext, useRef } from "react";
import AddItems from "./AddItems";
import style from "./AddToDo.module.css";
import { MdAddTask } from "react-icons/md";
import { todoContext } from "../store/todoItemsContext";
function Add() {
  let taskName = useRef();
  let taskDate = useRef();
  let { onAdd } = useContext(todoContext);
  const handleClick = () => {
    if (taskName != "" && taskDate != "") {
      onAdd(taskName.current.value, taskDate.current.value);
      taskName.current.value = "";
      taskDate.current.value = "";
    }
  };
  return (
    <>
      <div className="row mt-2">
        <div className="col-3 ms-auto">
          <input
            type="text"
            className="task rounded w-100"
            placeholder="Enter To-Do here"
            ref={taskName}
          />
        </div>
        <div className="col-2">
          <input
            type="date"
            name=""
            id=""
            className="date rounded w-100"
            placeholder="yyyy-mm-dd"
            ref={taskDate}
          />
        </div>
        <div className={"col-2 me-auto " + style.add}>
          <button className="btn btn-success" onClick={handleClick}>
            <MdAddTask />
          </button>
        </div>
      </div>
      <AddItems></AddItems>
    </>
  );
}
export default Add;
