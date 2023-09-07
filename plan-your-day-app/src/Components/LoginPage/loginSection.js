import { useState } from 'react';
import { Link } from "react-router-dom";
import './loginPage.css'

function LoginSection(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (email === 'user@user.com' && password === 'password') {
            localStorage.setItem('signedIn', true);
            window.location.reload();
            return (<Link to="/home"></Link>)
        } else {
            setErrorMessage('Invalid email or password.');
        }
    };

    return(
        <div className="loginContainer">
            <h1>Login</h1>
            <div className='credInputContainer'>
                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    placeholder='📧 Type your email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="credInputContainer">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    placeholder='🔒 Type your password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="forgotPassBtn">Forgot Password?</button>
            <div className="loginBtnContainer">
                <button onClick={handleLogin}>Login</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        )
}

export default LoginSection;