
function Button(){

    // const handleClick = ()=> console.log("ouch!!");
//     let count = 0;
//     const handleClick2 = (name)=> {
//     if (count<3) {
//         count++;
//         console.log(`${name} you clicked me ${count} times `) 
//     }
//     else {
//         console.log(`${name} stop clicking me!!`);
//     }
// }

//     const styles = {
//             backgroundColor: "bisque",
//             color: "black",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             border: "bl",
//             cursor: "pointer",
//     }

//     return(

//         <button onClick ={()=>{handleClick2("brooo ")}} style={styles}>Click Me!!</button>
        
//     );

const handleClick = (e) => e.target.textContent = "Ouchh!!";
const handleDClick = (e) => e.target.textContent = "Bipin Mie nega";
const handleLeave = (e) => e.target.textContent = "Click Me!!";

return (
    <button onClick={(e)=> handleClick(e)} onDoubleClick={(e) => handleDClick(e)} onMouseLeave={(e) => handleLeave(e)} >Click me!!</button>
    
)

}
export default Button