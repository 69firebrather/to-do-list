
function Profile (){

    const imageurl = './src/assets/sukuna.jpeg'
    const handleClick = (e) => e.target.style.visibility = "hidden"
    const handleLeave = (e) => e.target.style.visibility = "visible"

    return(
    <img src={imageurl} onMouseLeave={(e) => handleLeave(e)} onClick={(e) => handleClick(e)} ></img>
    );

}
export default Profile 