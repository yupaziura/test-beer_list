import { Paper, Divider } from '@mui/material';

import './BeerCard.scss';

const BeerCard = ({item, selected}) => {
    return (
        <>
            <Paper className={`beer-card`} elevation={selected? 12 : 1}>
                <div className="beer-card_img">
                    <img src={item.image_url} alt="beer-card_img" />
                </div>

                <div className="beer-card_text">
                    <div className="beer-card_name">
                        <h3>{item.name}</h3>
                    </div>
                    <Divider/>
                    <div className="beer-card_contrib small-text">
                       <i> {item.contributed_by}</i>
                    </div>
                    <div className="beer-card_first small-text">
                        <i>First brewed: {item.first_brewed}</i>
                    </div>
                    {/* <Divider/> */}
                    <div className="beer-card_desct mall-text">
                        <div style={{marginBottom: '10px'}}><b>Description:</b></div>
                        {item.description}
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default BeerCard;