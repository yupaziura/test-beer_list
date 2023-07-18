import './Ingredient.scss';

const Ingredient = ({item}) => {
    return (
        <div className='ingredient'>
            <div className="ingredient_amount">{`${item.amount.value} ${item.amount.unit}`}</div>
            <hr className='ingredient_divider'/>
            <div className="ingredient_name">{item.name}</div>
        </div>
    )
}

export default Ingredient;