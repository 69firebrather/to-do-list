import { useEffect, useState } from "react"

function Useeffect(){

    const [count , setCount] = useState(0);

    function addCount(){
        setCount((c)=> c+1 )
    }

    function subCount(){
        setCount((c)=> c-1 )
    }

    useEffect (()=> {
        document.title = `Count: ${count}`
    } );
    
    return(
        <div>
            <h2>Count: {count} </h2>
            <button onClick={addCount} >Add Count</button> <br /> <br />

            <button onClick={subCount} >Subtract Count</button>
        </div>
    );
    
}
export default Useeffect