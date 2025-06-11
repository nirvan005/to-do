import AppName from "./Components/AppName";
import Add from "./Components/AddToDo";
import "./App.css";
import EmptyToDo from "./Components/EmptyToDo";
import ContextProvider from "./store/todoItemsContext";
function App() {
  return (
    <>
      <div className="container">
        <AppName />
        <ContextProvider>
          <Add></Add>
          <EmptyToDo></EmptyToDo>
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
