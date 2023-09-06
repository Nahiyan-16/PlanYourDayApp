import './loginPage.css'

import LoginSection from './loginSection';
import SignUpSection from '../SignUpPage/signUpSection'

function Login() {

  return (
    <div className="loginPageMainContainer">
      <LoginSection />
      <SignUpSection />
    </div>
  );
}

export default Login;