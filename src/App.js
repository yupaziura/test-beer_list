import { useEffect, useState } from 'react';
import { useBeerStore } from './hooks/useBeerStore';

import './App.scss';

function App() {

 const {data, initFetchData, addSelectedItems, selectedItems, deleteSelectedItem, fetchCurrentPage, fetchBothPage, fetchNextPage, deselectAll} = useBeerStore();

 useEffect(()=> {
  initFetchData()
 }, [])

 const handleContextMenu = (event, id) => {
  event.preventDefault();
  addSelectedItems(id)
};

const deleteNLoad = () => {
  const test = Math.max(...data.map(i => i.id)) + selectedItems.length
  console.log(test)
  if (selectedItems.length >= 15){
    fetchNextPage();
  }
  else if (test>25){
    fetchBothPage()
  }
  else {
    fetchCurrentPage();
  }
  deleteSelectedItem();
}


  return (
    <div className="App">
      {selectedItems.length === 0?
        null:
        <>
          <button onClick={deleteNLoad}>delete</button>
          <button onClick={deselectAll}>deselect</button>
        </>
      }
        {data.map((item, i)=>{
          const selectedClass = selectedItems.includes(item.id)? 'selected' : null
          return (
            <div className={selectedClass} key={item.id} onContextMenu={(e)=>handleContextMenu(e,item.id)} >
              {item.id}
            {item.name}
            </div>

          )
        })}

<div>{selectedItems && selectedItems.length > 0 ? selectedItems.join(', ') : 'No selected items'}</div>

    </div>
  );
}

export default App;
