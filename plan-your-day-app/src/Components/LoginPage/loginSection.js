import { useState } from 'react';
import './loginPage.css'

function LoginSection(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {   
        if (username === 'user' && password === 'password') {
        localStorage.setItem('signedIn', true);
        window.location.reload();
        } else {
        setErrorMessage('Invalid username or password.');
    }
    };

    return(
        <div className="loginContainer">
            <h1>Login</h1>
            <div className='credInputContainer'>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    placeholder='😀 Type your username'
                    onChange={(e) => setUsername(e.target.value)}
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