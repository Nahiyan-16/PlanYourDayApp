import LoginSection from "./LoginSection";
import SideHeader from "../Header/SideHeader";

function LoginPage() {
  return (
    <div className="h-screen text-center flex xs:flex-col justify-start">
      <SideHeader />
      <LoginSection />
    </div>
  );
}

export default LoginPage;
