import { useParams } from 'react-router-dom';
import { useBeerStore } from '../../hooks/useBeerStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BeerRecipe from '../../components/BeerRecipe/BeerRecipe';

import './BeerPage.scss';

const BeerPage = () => {

    const {id} = useParams();
    const {singleItem} = useBeerStore(); 

  console.log(singleItem)

    return (
      <div className='beer-page'>
          <Link className='beer-page_link' to='/'>← Back to list</Link>
          {singleItem === undefined || singleItem === null?
          <p>Error</p>
          :
          <>
              <BeerRecipe item={singleItem}/>
          </>
          }
          
      </div>
    )
}

export default BeerPage;