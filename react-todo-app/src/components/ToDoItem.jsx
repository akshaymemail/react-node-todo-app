import React, { useState, useEffect }from "react";
import Checkbox from '@material-ui/core/Checkbox'

function ToDoItem() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('/items').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(response => setItems(response))
  })
  return (
    <div>
        {items.reverse().map(item => {
          return (
            <form className="item" action="/delete" method="post">
              <p key={item._id}> {item.item} </p>
              <Checkbox indeterminate type="submit" value={item._id} name='item_id' />
            </form>
          )
        })}
    </div>
  );
}

export default ToDoItem;