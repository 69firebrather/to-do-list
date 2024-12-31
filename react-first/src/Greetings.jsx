import PropTypes from 'prop-types';
import propTypes from 'prop-types'

function Greetings(props){

    const welcome = <h2 className="welcome">Welcome {props.username} </h2>
    const login = <h2 className="login">Please log in to continue</h2>
    
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username} </h2>
    // }
    // else {
    //     return <h2>Please log in to continue</h2>
    // }

    return( 
        // props.isLoggedIn ? 
        // <h2 className="welcome">Welcome {props.username} </h2> : 
        // <h2 className="login">Please log in to continue</h2>

        props.isLoggedIn ?  welcome : login
    );



}
Greetings.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}

Greetings.defaultProps = {
    isLoggedIn : false,
    username : "Guest"
}

export default Greetings