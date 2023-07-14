import { useEffect, useState } from 'react';
import { useBeerStore } from './hooks/useBeerStore';

import './App.css';

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
        {data.map((item, i)=>{
          return (
            <div key={item.id} onContextMenu={(e)=>handleContextMenu(e,item.id)} >

            {item.name}
            </div>

          )
        })}

<div>{selectedItems && selectedItems.length > 0 ? selectedItems.join(', ') : 'No selected items'}</div>

    </div>
  );
}

export default App;
