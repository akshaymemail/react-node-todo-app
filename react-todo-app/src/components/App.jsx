import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea />
      <ToDoItem />
    </div>
  );
}

export default App;
