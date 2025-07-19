import { createContext, useEffect, useReducer } from "react";
export const todoContext = createContext({
  tasks: [],
  onAdd: () => {},
  onDelete: () => {},
});
function getInitialTasks() {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [];
}
function ContextProvider({ children }) {
  const reducerFunction = (initialState, action) => {
    let newTasks = initialState;
    if (action.type == "ADD") {
      newTasks = [...initialState, action.payload];
    } else if (action.type == "DELETE") {
      newTasks = initialState.filter(
        (item) => item.name !== action.payload.name
      );
    }
    return newTasks;
  };
  let [tasks, dispatchTasks] = useReducer(reducerFunction, getInitialTasks());
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const onDelete = (task) => {
    let newAction = {
      type: "DELETE",
      payload: {
        name: task.name,
        date: task.date,
      },
    };
    dispatchTasks(newAction);
  };
  const onAdd = (name, date) => {
    let newAction = {
      type: "ADD",
      payload: {
        name: name,
        date: date,
      },
    };
    dispatchTasks(newAction);
  };

  return (
    <>
      <todoContext.Provider
        value={{
          tasks,
          onAdd,
          onDelete,
        }}
      >
        {children}
      </todoContext.Provider>
    </>
  );
}
export default ContextProvider;
