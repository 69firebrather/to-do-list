import { useState } from "react"

function UpdateArray(){
    const [food, setFood] = useState(["Apple"])

    function handleAdd(){
        const newFood = document.getElementById("addFood").value;
        document.getElementById("addFood").value = "";
        setFood(f=>[...f, newFood]);
    }
    function handleRemove(){
        const removeFood = document.getElementById("removeFood").value;
        document.getElementById("removeFood").value ="";
        setFood((f)=> f.filter((_,i)=>i!==parseInt(removeFood)));
    }

    return(
        <div>
            <h2>List of food:</h2>
            <ul>
                {food.map((food , index) => <li key={index}> {food}
                </li>)}
            </ul>
            <input type="text" placeholder="Enter to add" id="addFood" />
            <button onClick={handleAdd} >Add Food</button> <br />

            <input type="number" placeholder="Enter index to remove" id="removeFood" />
            <button onClick={handleRemove} >Remove Food</button>
        </div>
    )

}
export default UpdateArray