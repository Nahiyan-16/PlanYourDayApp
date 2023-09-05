import './App.css';
import {useEffect, useState} from "react"

import Login from './Components/LoginPage/loginPage';
import FormattedDate from './Components/Utils/FormattedDate'

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const storedUser = localStorage.getItem('user');

    if(storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [])

  return (
    <div className="App">
        <header className='headerContainer'>
          <h1>Plan Your Day</h1>
          <FormattedDate/>
        </header>
        <main>
          {user ? (<h1>a</h1>) : (<Login/>)}
        </main>
    </div>
  );
}

export default App;
