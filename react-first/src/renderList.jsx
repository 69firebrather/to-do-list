import PropTypes, { number } from 'prop-types';

function List (props){

    const items = props.items;
    const category = props.category;

    

    // fruits.sort((a,b)=> a.name.localeCompare(b.name) ); // Ascending name
    // fruits.sort((a,b)=> b.name.localeCompare(a.name) ); // Descending Name
    // fruits.sort((a,b)=> a.calories-b.calories ); // Ascending Calories
    // fruits.sort((a,b)=> a.calories-b.calories ); // Descending Calories

    const listFruits = items.map(item =><li key = {item.id} >{item.name} : &nbsp; {item.calories}</li> )

    // const lowCalFruits = fruits.filter(fruit => fruit.calories <50 ); 

    // const highCalFruits = fruits.filter(fruit => fruit.calories >=50 ); 

    // const lowCal = lowCalFruits.map(lowCalFruit =><li  key = {lowCalFruit.id} > 
    // {lowCalFruit.name} : &nbsp; 
    // {lowCalFruit.calories}</li> )

// const highCal = highCalFruits.map(highCalFruit =><li  key = {highCalFruit.id} > 
    // {highCalFruit.name} : &nbsp; 
    // {highCalFruit.calories}</li> )

    return (
        <>
        <h3>{category}</h3>
        <ol>{listFruits}</ol>
        {/* <ol>Low Calorie Fruits : <br />{lowCal}</ol> */}
        {/* <ol>High Calorie Fruits : <br />{highCal}</ol> */}
        </>
    );

}

List.defaultProps={
    category: "Category",
    items: [],
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
        name:PropTypes.string,
        calories:PropTypes.number,
    }))
}

export default List