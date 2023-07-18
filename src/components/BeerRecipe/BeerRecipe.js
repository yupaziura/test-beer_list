import { Paper, Divider } from '@mui/material';
import Ingredient from '../Ingredient/Ingredient';

import './BeerRecipe.scss';

const BeerRecipe = ({item}) => {
    return (
        <div >
            <Paper sx={{p:2}} variant="outlined" className='recipe'>
                <div className="recipe_volume">
                    {`For ${item?.volume?.value} ${item?.volume.unit}`}
                </div>

                <Divider/>

                <div className="recipe_wrapper">
                    <div className="recipe_ingredients">
                        
                        <h4>Ingredients:</h4>
                        <div className="malt">
                            <h5>Malt:</h5>
                            {item?.ingredients.malt.map((item, i)=><div key={i}><Ingredient item={item}/></div>)}
                        </div>
                        <div className="hops">
                            <h5>Hops:</h5>
                            {item?.ingredients.hops.map((item, i)=><div key={i}><Ingredient item={item}/></div>)}
                        </div>
                    </div>

                    <div className="recipe_img">
                        <img src={item?.image_url} alt="" />
                    </div>
                </div>

                <Divider/>

                <div className="recipe_pair">
                    Good with:
                    {item?.food_pairing.map((item, i)=> <div className='pair' key={i}>{item}</div>)}
                </div>
            </Paper>
            recipe
        </div>
    )
}

export default BeerRecipe;