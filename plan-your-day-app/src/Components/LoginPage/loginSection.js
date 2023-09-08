import { useState } from 'react';
import { Link } from "react-router-dom";
import '../Utils/util.css'

function LoginSection(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (email === 'user@user.com' && password === 'pass') {
            localStorage.setItem('signedIn', true);
            window.location.reload();
            return (<Link to="/home"></Link>)
        } else {
            setErrorMessage('Invalid email or password.');
        }
    };

    return(
        <div className="text-center flex flex-col items-center bg-transparent w-2/6 text-aliceblue text-shadow-md h-[50vh]">
            <div className='text-left flex flex-col align-center mt-2.5 mb-1.5 
            border-b border-solid border-ice'>
                <label className="mb-1.5 text-2xl self-start">Email</label>
                <input
                    className="textshadow bg-transparent text-aliceblue p-2.5 border-none text-opacity-8"
                    type="email"
                    value={email}
                    placeholder='📧 Type your email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 
            border-b border-solid border-ice">
                <label className="mb-1.5 text-2xl self-start">Password</label>
                <input
                    className="textshadow bg-transparent text-aliceblue p-2.5 border-none text-opacity-8"
                    type="password"
                    value={password}
                    placeholder='🔒 Type your password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Link to="/forgot-password" className="border-none bg-transparent text-aliceblue text-shadow-md text-opacity-8 text-xs mr-[-98px] mb-10 no-underline">Forgot Password?
            </Link>
            <div>
                <button onClick={handleLogin} className='text-charcoal text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] bg-aliceblue'>Login</button>
            </div>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
        )
}

export default LoginSection;