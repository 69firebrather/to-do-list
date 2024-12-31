import { useState } from "react"

function UpdateArrayObjects(){

   const [car , setCar] = useState([]);
   const[carYear, setCarYear] = useState(new Date().getFullYear());
   const[carMake, setCarMake] = useState("")
   const[carModel, setCarModel] = useState("")

   function handleCarAdd(){

    const newCar = {year: carYear, make: carMake, model: carModel}
    setCar(c=>[...c,newCar])
    setCarYear("")
    setCarMake("")
    setCarModel("")
    
   }

   function handleCarRemove(){
    const removeCar = parseInt(document.getElementById("removeCar").value);
    const remove = removeCar-1 
    document.getElementById("removeCar").value= ""
    setCar((c)=>c.filter((_,i) => i!==remove))
   }

   function handleYearChange(event){
    setCarYear(event.target.value)
   }

   function handleMakeChange(event){
    setCarMake(event.target.value)
   }

   function handleModelChange(event){
    setCarModel(event.target.value)
   }

   return(
    <div>
        <h2>List of car objects:</h2>
        <ul>
            {car.map((car,index)=> <li key={index}>
               {car.year} {car.make} {car.model} 
            </li>)}
        </ul>

            <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter Car Year" /> <br />

            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make" /> <br />

            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model" /> <br />

            <button onClick={handleCarAdd} >Add Car</button> <br />

            <input type="number" id="removeCar"/>
            <button onClick={handleCarRemove} > Remove Car</button>
            
    </div>
   )
   
}
export default UpdateArrayObjects