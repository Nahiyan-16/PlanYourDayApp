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
        <div className="text-center flex items-center h-[50vh] flex-col justify-center w-[100%] h-screen shadow-[inset_0_0_15px_5px_rgba(0,0,0,0.5)]">
            <div className="mb-10 text-5xl">Login</div>
            <form className="bg-aliceblue p-10 rounded-xl text-charcoal">
                <div className='text-left flex flex-col align-center mt-2.5 mb-1.5  border-b border-solid border-ice'>
                    <label className="mb-1.5 text-2xl self-start">Email</label>
                    <input
                        className="placeholder bg-transparent p-2.5 border-none text-opacity-8"
                        type="email"
                        value={email}
                        placeholder='📧 Type your email'
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 border-b border-solid border-ice">
                    <label className="mb-1.5 text-2xl self-start">Password</label>
                    <input
                        className="placeholder bg-transparent p-2.5 border-none text-opacity-8"
                        type="password"
                        value={password}
                        placeholder='🔒 Type your password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link to="/forgot-password" className="border-none bg-transparent text-charcoal text-opacity-8 text-xs mr-[-98px] mb-10 no-underline">Forgot Password?
                </Link>
                <div>
                    <button onClick={handleLogin} className='text-aliceblue text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] bg-charcoal'>Login</button>
                </div>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
            <div className="flex justify-center items-center flex-col text-center bg-transparent text-charcoal text-xl p-2">
                <h1 className="mt-2 text-4xl">New Here?</h1>
                <Link to={'/signup'} className='text-aliceblue text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] bg-charcoal'>Sign Up</Link>
            </div>
        </div>
        )
}

export default LoginSection;