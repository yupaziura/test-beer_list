import { useParams } from 'react-router-dom';
import { useBeerStore } from '../../hooks/useBeerStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BeerRecipe from '../../components/BeerRecipe/BeerRecipe';

import './BeerPage.scss';

const BeerPage = () => {

    const {id} = useParams();
    const { getSingleItem, singleItem } = useBeerStore();

  useEffect(() => {
    getSingleItem(id)
        
  }, [id]);  

  console.log(singleItem)

    return (
        <div className='beer-page'>
            <Link style={{textDecoration:'underline'}} to='/'>Back to list</Link>
            {singleItem === undefined?
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