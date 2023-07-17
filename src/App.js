import { useEffect, useState } from 'react';
import { useBeerStore } from './hooks/useBeerStore';

import './App.scss';

function App() {

 const {data, initFetchData, addSelectedItems, selectedItems} = useBeerStore();

 useEffect(()=> {
  initFetchData('https://api.punkapi.com/v2/beers?page=1')
 }, [])

 const handleContextMenu = (event, id) => {
  event.preventDefault();
  addSelectedItems(id)
};

useEffect(() => {
  console.log(selectedItems);
  
}, [selectedItems]);


  return (
    <div className="App">
      {selectedItems.length === 0?
        null:
        <button>delete</button>
      }
        {data.map((item, i)=>{
          const selectedClass = selectedItems.includes(item.id)? 'selected' : null
          return (
            <div className={selectedClass} key={item.id} onContextMenu={(e)=>handleContextMenu(e,item.id)} >

            {item.name}
            </div>

          )
        })}

<div>{selectedItems && selectedItems.length > 0 ? selectedItems.join(', ') : 'No selected items'}</div>

    </div>
  );
}

export default App;
