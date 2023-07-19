import { useEffect } from 'react';
import { useBeerStore } from '../../hooks/useBeerStore';
import { Link } from 'react-router-dom';

import BeerCard from '../../components/BeerCard/BeerCard';
import { Paper, Button, ButtonGroup } from '@mui/material';

import './ListPage.scss';

function ListPage() {

 const {data, initFetchData, addSelectedItems, selectedItems, deleteSelectedItem, fetchCurrentPage, fetchNextPage, deselectAll, page} = useBeerStore();

 useEffect(()=> {
  initFetchData()
 }, [])

 const handleContextMenu = (event, id) => {
  event.preventDefault();
  addSelectedItems(id)
};

const deleteNLoad = () => {
  const selectedI = Math.max(...data.map(i => i.id)) + selectedItems.length
  console.log(test)

  if (selectedI>page*25 || selectedItems.length >= 15){
    fetchNextPage()
  }
  else {
    fetchCurrentPage();
  }
  deleteSelectedItem();
}


  return (
    <div className="list-page">
      <h1 className='header_main'>List of beer recepies</h1>

      <Paper sx={{p: 2}} variant="outlined">
        <p>Click Right Mouse Button to select recipe</p>
        <p>Click Left Mouse Button to open recipe</p>

        <p><b>Selected items:</b></p>
        <div>{selectedItems && selectedItems.length > 0 ? data.filter(item => selectedItems.includes(item.id))?.map(item=>item.name)?.join(', ') : 'No selected items'}</div>
      </Paper>

      <Paper sx={{p: 2}} variant="outlined">
        <div className='actions'>
          <p><b>Avaliable actions:</b></p>
          {selectedItems.length === 0?
            <span>{` No actions avaliable`}</span>:
            <ButtonGroup>
              <Button onClick={deleteNLoad}>delete</Button>
              <Button onClick={deselectAll}>deselect</Button>
            </ButtonGroup>
          }
        </div>
      </Paper>

      <div className="list-page_list">
        {data.map((item, i)=>{
            const selected = selectedItems.includes(item.id)? true : false
            return (
              <Link to={`/${item.id}`} className={`list_link`} key={item.id} onContextMenu={(e)=>handleContextMenu(e,item.id)} >
                <BeerCard item={item} selected={selected}/>
              </Link>
            )
          })}
      </div>
    </div>
  );
}

export default ListPage;
