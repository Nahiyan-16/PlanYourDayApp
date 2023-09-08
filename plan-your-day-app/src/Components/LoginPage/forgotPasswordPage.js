import { useState } from "react";

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
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <p>Enter your email to reset your password</p>
        <form onSubmit={handleSubmit}>
        <div className="credInputContainer resetPassInputContainer">
            <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleEmailChange}
            required
            />
        </div>
        <div className="loginBtnContainer">
            <button type="submit">Reset Password</button>
        </div>
        </form>
        {message && <p className="success-message">{message}</p>}
      </div>
    );
  }

export default ForgotPasswordPage