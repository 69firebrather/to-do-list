import React, {useState} from 'react'
function Mycomponent (){

    const [name, setName] = useState("Guest");
    const [age , setAge] =  useState(18);
    const updateName = ()=> { 
        setName("Sakriya") 
    }
    const incrementAge = ()=> {
        setAge (age+1);
    }
    const decreaseAge = ()=> {
        setAge (age-1);
    }
    

    return (
        <div>
            <p> Name: {name} </p>
            <button onClick={updateName} > SetName </button>

            <p> Age: {age} </p>
            <button onClick={incrementAge} > Increase age </button>
            <button onClick={decreaseAge} > Decrease Age </button>
        </div>
    )
}
export default Mycomponent