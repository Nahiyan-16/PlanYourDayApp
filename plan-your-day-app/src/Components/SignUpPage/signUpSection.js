import './signUpPage.css'
import { Link } from "react-router-dom";

function SignUpSection(){
    return(
        <div className="signUpContainer">
            <h1>New Here?</h1>
            <p>Create Your Daily Task Companion!</p>
            <Link to={'/signup'} className='signUpBtn'>Sign Up</Link>
        </div>
        )
}

export default SignUpSection