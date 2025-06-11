import { useContext } from "react";
import Item from "./Item";
import { todoContext } from "../store/todoItemsContext";
function AddItems() {
  let { tasks } = useContext(todoContext);
  return (
    <>
      {tasks.map((task) => (
        <Item task={task} key={task.name}></Item>
      ))}
    </>
  );
}
export default AddItems;
