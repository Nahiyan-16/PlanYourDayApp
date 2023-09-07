import './loginPage.css'

import {useState, useEffect} from 'react'

import LoginSection from './loginSection';
import SignUpSection from '../SignUpPage/signUpSection'
import FormattedDate from '../Utils/FormattedDate';
import Home from '../MainPage/home';

function Login() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const storedUser = localStorage.getItem('signedIn');

    if(storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [])

  return (
    <div className="loginMainContainer">
      <header className='headerContainer'>
        <h1>Plan Your Day!</h1>
        <FormattedDate/>
      </header>
    <main>
      {user ? (<Home />) :
      <div className="loginPageMainContainer">
        <LoginSection />
        <SignUpSection />
      </div>}
    </main>
      
    </div>
  );
}

export default Login;