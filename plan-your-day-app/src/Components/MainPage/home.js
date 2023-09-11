import Login from '../LoginPage/loginPage'
import HomePage from './homePage'

function Home(){
    const signedIn = localStorage.getItem('isLoggedOn') === 'false' ? false : true;

    return (
        <div>{
        signedIn ? (<HomePage />) :
                   (<Login />)
        }
    </div>)
}

export default Home