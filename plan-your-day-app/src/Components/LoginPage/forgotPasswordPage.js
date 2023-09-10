import { useState } from "react";
import SideHeader from "../Header/sideHeader";

function ForgotPasswordPage(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send a request to your backend to initiate the password reset process
      // Typically, an email with a reset link would be sent to the provided email address.
      // For this example, we'll just display a success message.
      setMessage(`Password reset request for ${email} has been sent.`);
    };
  
    return (
      <div className="h-screen text-center flex justify-start">
        <SideHeader />
        <div className="text-center flex items-center h-[50vh] flex-col justify-center w-[30%] h-screen shadow-[inset_0_0_15px_5px_rgba(0,0,0,0.5)]">
            <h2 className="mb-10 text-5xl">Forgot Password</h2>
            <p className="text-base">Enter your email to reset your password</p>
            <form onSubmit={handleSubmit}>
            <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 
                border-b border-solid border-ice max-w-[200px]">
                <input
                className="textshadow bg-transparent text-aliceblue p-2.5 border-none text-opacity-8 text-sm text-center"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleEmailChange}
                autoFocus
                required
                />
            </div>
            <div>
                <button type="submit" className='text-aliceblue text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] bg-charcoal'>Reset Password</button>
            </div>
            </form>
            {message && <p>{message}</p>}
        </div>
      </div>
    );
  }

export default ForgotPasswordPage