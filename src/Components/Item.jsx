import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { todoContext } from "../store/todoItemsContext";
function Item({ task }) {
  let { onDelete } = useContext(todoContext);
  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <>
      <div className="row mt-2">
        <div className="col-3 ms-auto">{task.name}</div>
        <div className="col-2">{task.date}</div>
        <div className="col-2 me-auto">
          <button className="btn btn-danger" onClick={handleDelete}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </>
  );
}
export default Item;
