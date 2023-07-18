import { Paper, Divider } from '@mui/material';
import Ingredient from '../Ingredient/Ingredient';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';

import './BeerRecipe.scss';

const BeerRecipe = ({item}) => {
    return (
        <div >
            <Paper sx={{p:2}} variant="outlined" className='recipe'>
                <h1>{item.name}</h1>

                <div className="recipe_volume">
                    <p>{`Volume: ${item?.volume?.value} ${item?.volume.unit}`}</p>
                </div>

                <Divider/>

                <div className="recipe_wrapper">
                    <div className="recipe_ingredients">
                        
                        <h4>Ingredients:</h4>

                        <div className="malt recipe_list">
                            <h5>Malt:</h5>
                            {item?.ingredients.malt.map((item, i)=><div key={i}><Ingredient item={item}/></div>)}
                        </div>
                        <div className="hops recipe_list">
                            <h5>Hops:</h5>
                            {item?.ingredients.hops.map((item, i)=><div key={i}><Ingredient item={item}/></div>)}
                        </div>
                    </div>

                    <div className="recipe_img">
                        <img src={item?.image_url} alt="" />
                    </div>
                </div>

                <Divider/>

                <div className="beer_details">
                    <p>{`Fermentation: ${item.method.fermentation.temp.value} degree ${item.method.fermentation.temp.unit}`}</p>
                    {item.method.mash_temp.map((item, i)=> <p key={i}>{`Mash: ${item.temp.value} degree ${item.temp.unit}`}</p>)}
                </div>

                <Divider/>

                <div className="recipe_pair">
                    Good with:
                    {item?.food_pairing.map((item, i)=> <div className='pair' key={i}>{item}</div>)}
                </div>

                <Divider/>

                <div className="recipe_tips">
                    <h4><TipsAndUpdatesRoundedIcon/> Tips</h4>
                {item.brewers_tips}
                </div>
            </Paper>
        </div>
    )
}

export default BeerRecipe;