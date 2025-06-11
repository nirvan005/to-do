import { useContext } from "react";
import { todoContext } from "../store/todoItemsContext";

function EmptyToDo() {
  let { tasks } = useContext(todoContext);
  return tasks.length == 0 ? (
    <div className="empty text-center fw-bolder p-2">
      No Tasks Pending..🥳🥳
    </div>
  ) : null;
}
export default EmptyToDo;
