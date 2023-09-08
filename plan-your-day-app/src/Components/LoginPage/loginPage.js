//import './loginPage.css'

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
    <div className="h-screen text-center flex flex-col justify-start pt-[50px]">
      <header className='text-aliceblue text-3xl mb-10 text-shadow-md'>
        <h1 className='mb-5 text-[4rem]'>Plan Your Day!</h1>
        <FormattedDate/>
      </header>
    <main>
      {user ? (<Home />) :
      <div className="flex justify-center">
        <LoginSection />
        <SignUpSection />
      </div>}
    </main>
      
    </div>
  );
}

export default Login;