import React from "react";

function InputArea() {
  return (
    <form action = '/add' method = "POST"  className="form">
      <input  name = 'item' type="text"  required/>
      <button type = 'submit'>
        <span>Add</span>
      </button>
    </form>
  );
}

export default InputArea;
