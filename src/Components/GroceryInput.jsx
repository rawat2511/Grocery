import React, {useState} from 'react'

const GroceryInput = ({addItem}) => {
  const [item, setItem] = useState("");

  const addThisItem = () => {
      addItem(item);
      setItem("");
  }
  
  return (
    <div>
      <h1>Grocery List</h1>
      <input value={item} onChange={(e) => setItem(e.currentTarget.value)} type="text" placeholder='Enter Item' />
      <button onClick={() => addThisItem()}>Add Item</button>
    </div>
  )
}

export default GroceryInput
