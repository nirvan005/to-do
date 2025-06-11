import { createContext, useReducer } from "react";
export const todoContext = createContext({
  tasks: [],
  onAdd: () => {},
  onDelete: () => {},
});
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
  let [tasks, dispatchTasks] = useReducer(reducerFunction, [
    {
      name: "Buy Milk",
      date: "2024-10-10",
    },
    {
      name: "Go to College",
      date: "2024-10-14",
    },
    {
      name: "Eat",
      date: "2024-10-10",
    },
  ]);
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

//useState Method
/*let [tasks,setTasks]=useState([
    {
    name: "Buy Milk",
    date: "2024-10-10",
    },
    {
      name: "Go to College",
      date: "2024-10-14",
    },
    {
      name: "Eat",
      date: "2024-10-10",
    }
    ]);
    const onDelete=(task)=>{
          let newTasks=tasks.filter((item)=>item.name!==task.name);
          setTasks(newTasks);
    };
    const onAdd=(name,date)=>{
      let item={
        name:name,
        date:date,
      };
      setTasks((newTask)=>{
        let newTasks=[...newTask,item];
        return newTasks;
      });
    };*/
