//import './loginPage.css'

import {useState, useEffect} from 'react'

import LoginSection from './loginSection';
import SideHeader from '../Header/sideHeader'
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
    <div className="h-screen text-center flex justify-start">
      <SideHeader />
      <main className="w-[30%]">
        <div className="flex justify-center">
          <LoginSection />
        </div>
      </main>

      
    </div>
  );
}

export default Login;