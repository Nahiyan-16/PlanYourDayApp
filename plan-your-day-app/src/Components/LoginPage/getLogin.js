import { useState } from 'react';
import './loginPage.css'

function getLogin(){
    return(
        <h1>asdasd</h1>)
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
  
    // const handleLogin = () => {   
    //     if (username === 'user' && password === 'password') {
    //     localStorage.setItem('user', JSON.stringify({ username }));
    //     window.location.reload();
    //     } else {
    //     setErrorMessage('Invalid username or password.');
    // }
    // };
    // return(
    //     <div className="loginContainer">
    //         <h2>Login</h2>
    //         <div className='usernameContainer'>
    //             <label>Username:</label>
    //             <input
    //                 type="text"
    //                 value={username}
    //                 onChange={(e) => setUsername(e.target.value)}
    //             />
    //         </div>
    //         <div className="passwordContainer">
    //             <label>Password:</label>
    //             <input
    //                 type="password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //             />
    //         </div>
    //         <div className="loginBtnContainer">
    //             <button onClick={handleLogin}>Login</button>
    //         </div>
    //         {errorMessage && <p className="error-message">{errorMessage}</p>}
    //     </div>
    // )
}

export default getLogin;