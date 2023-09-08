//import './signUpPage.css'
import { Link } from "react-router-dom";
import '../Utils/util.css'

function SignUpSection(){
    return(
        <div className="w-[30%] flex justify-center items-center flex-col text-center bg-transparent text-aliceblue text-xl">
            <h1 className="m-0 text-shadow-md">New Here?</h1>
            <p className="mb-[30px] text-shadow-md">Create Your Daily Task Companion!</p>
            <Link to={'/signup'} className='text-charcoal text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] bg-aliceblue'>Sign Up</Link>
        </div>
        )
}

export default SignUpSection