import { useState } from "react"

function Counter (){

    const [count , setCount] = useState (0)
    const increment = () => {
        setCount (count +1)
    }
    const decrease = () =>{
        setCount (count-1)
    }
    const reset = () => {
        setCount(0)
    }
    
    return (
        <div>
            <p> Count : {count} </p>
            <button onClick={increment} > Increase Count </button>
            <button onClick={decrease} > Decrease Count </button>
            <button onClick={reset} > Reset Count </button>
        </div>
    )
    
}
export default Counter