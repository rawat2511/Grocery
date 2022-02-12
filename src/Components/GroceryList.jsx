import React from 'react';
import { v4 as uuid } from 'uuid';
 

export const GroceryList = ({list, deleteItem}) => {
  return (
    <div>
        {
            list.map((item, id) => 
            <div key={uuid()} style={{margin : "24px auto", width: "320px", display: "flex", justifyContent: "space-between"}}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{id+1}. {item}</span>
                <button style={{justifyItems: "flex-end"}} onClick={() => deleteItem(id)}>Delete</button>
            </div>
            )
        }
    </div>
  )
}
