import { useParams } from 'react-router-dom';
import { useBeerStore } from '../../hooks/useBeerStore';

import './BeerPage.scss';
import { useEffect } from 'react';

const BeerPage = () => {
    const {id} = useParams();
    const {getSingleItem, singleItem} = useBeerStore();

    useEffect(()=> {
        getSingleItem(id);
    }, [])
    return (
        <>
            BeerPage
            {singleItem.name}
        </>
    )
}

export default BeerPage;