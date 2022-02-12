import React, {useState} from 'react'
import GroceryInput from './GroceryInput';
import { GroceryList } from './GroceryList';

export const Grocery = () => {

  const [list, setList] = useState([]);

  console.log(list);

  const addItem = (item) => {
    setList( [...list, item] );
  }

  const deleteItem = (id) => {
      setList( list.filter((ele, index) => id !== index ) );
  }

  return (
    <div>
        <GroceryInput addItem={addItem} />
        <GroceryList list={list} deleteItem={deleteItem} />
    </div>
  )
}
