import propTypes from 'prop-types'

function Students (props){

    return (

        <div className="Students">
            {/* <h3>Some Gays in the town:</h3> */}
            {/* <h3>Gender : {props.gender} </h3> */}
            <p>Name : {props.name} </p>
            <p>Gay meter : { props.isOkay ? "100" : "0" } </p>


        </div>

    );


}

Students.propTypes = {
    name: propTypes.string,
    isGay: propTypes.bool,
}

Students.defaultProps = {
    name : "Guest",
    isGay : false,


}

export default Students