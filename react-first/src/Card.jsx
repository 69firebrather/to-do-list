import profile from './assets/sukuna.jpeg'

function Card(){

    return(

        <div className = "Card">
        <img className='card-image' src={profile} sizes="30px"  alt="MyProfile Picture"/>
        <h2 className='card-title'>Hello</h2>
        <p className='card-text'>Hello, I am Sakriya.</p>


        </div>

    );

}

export default Card