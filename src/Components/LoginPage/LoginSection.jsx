import { useState } from "react";
import { Link } from "react-router-dom";
import "../Utils/util.css";
import { loginService, getScheduleService } from "../../Services/apiService";

function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const username = await loginService(email, password);
      if (username) {
        const userInfo = { email: email, isLoggedOn: true, username: username };
        localStorage.setItem("User Information", JSON.stringify(userInfo));
        const schedule = await getScheduleService(email);
        sessionStorage.setItem("formData", JSON.stringify(schedule.schedule));
        window.location.href = "/home";
      } else {
        setErrorMessage(`Error has occured!`);
      }
    } catch (error) {
      setErrorMessage(`Invalid credentials!`);
      setTimeout(() => setErrorMessage(""), 2500);
    }
  };

  return (
    <div
      className="text-center flex items-center h-[50vh] flex-col justify-center w-[30%] h-screen
        shadow-[inset_0_0_15px_5px_rgba(0,0,0,0.5)] xs:w-[100%] sm:w-[50%] md:w-[50%]"
    >
      <div className="mb-10 text-5xl custom-screen-1:text-3xl custom-screen-1:m-0">
        Login
      </div>
      <form method="POST" onSubmit={handleLogin}>
        <div className="text-left flex flex-col align-center mt-2.5 mb-1.5  border-b border-solid border-ice">
          <label className="mb-1.5 text-2xl self-start custom-screen-1:text-xl">
            Email
          </label>
          <input
            className="placeholder bg-transparent p-2.5 border-none text-opacity-8"
            type="email"
            value={email}
            placeholder="📧 Type your email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 border-b border-solid border-ice">
          <label className="mb-1.5 text-2xl self-start custom-screen-1:text-xl">
            Password
          </label>
          <input
            className="placeholder bg-transparent p-2.5 border-none text-opacity-8"
            type="password"
            value={password}
            placeholder="🔒 Type your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link
          to="/forgot-password"
          className="border-none bg-transparent text-charcoal text-opacity-8 text-xs mr-[-98px] no-underline"
        >
          Forgot Password?
        </Link>
        <div>
          <button className="text-aliceblue text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] bg-charcoal">
            Login
          </button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      <div className="flex justify-center items-center flex-col text-center bg-transparent text-charcoal text-xl p-2">
        <h1 className="my-6 text-4xl custom-screen-1:text-3xl custom-screen-1:m-0">
          New Here?
        </h1>
        <Link
          to={"/signup"}
          className="text-aliceblue text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] bg-charcoal"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginSection;
