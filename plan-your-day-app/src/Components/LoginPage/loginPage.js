import LoginSection from './loginSection';
import SideHeader from '../Header/sideHeader'

function Login() {
  return (
    <div className="h-screen text-center flex xs:flex-col justify-start">
      <SideHeader />
      <LoginSection />
    </div>
  );
}

export default Login;