import { useState } from "react";

function Onchange(){

    const [name, setName] = useState ("")
    const [payment, setPayment]= useState("")
    const [ship,setShip]=useState("")


    function handleChange (event ){
        setName(event.target.value);
    }

    function handlePayChange(event){
        setPayment(event.target.value);
    }
    
    function handleShip(event){
        setShip(event.target.value);
    }
    
    return(
        <div>
            <input value = {name} onChange = {handleChange} />
            <p> Name: {name} </p>

            <select value = {payment} onChange={handlePayChange} > 
                <option value = "" > Select an option </    option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</ option>
                <option value="Paypal">Paypal</option>
                <option value="Giftcard">Giftcard</ option>
            </select>
            <p>Payment method: {payment} </p>
            <label> 
                <input type="radio" value="Pickup"
                checked={ship === "Pickup"} onChange={handleShip} /> Pickup</label>
                <br />
            <label >
            <input type="radio" value="Delivery"
                checked={ship === "Delivery"} onChange={handleShip} />Delivery</label>
                <p> Shipping Mode: {ship} </p>
            
        </div>
    )
    
}
export default Onchange