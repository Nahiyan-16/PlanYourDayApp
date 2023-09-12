import { useState } from 'react';
import SideHeader from '../Header/sideHeader';

function SignUpPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();
        if(confirmPassword === password){
            try {
              // Send registration data to the server
              const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
              });
        
              if (response.ok) {
                // Registration successful
                // Redirect to a success page or login page
                window.location.href='/home'
              } else {
                const data = await response.json();
                setErrorMessage(data.error);
              }
            } catch (error) {
              console.error('Sign Up error:', error);
              // Handle other errors, e.g., network issues
            } 
        }
        else {
            setErrorMessage('Passwords do not match')
        }
      };

    return (
        <div className="h-screen text-center flex justify-start xs:flex-col">
            <SideHeader />
            <div className="flex flex-col justify-center align-center bg-transparent text-charcoal w-[30%] h-screen
             shadow-[inset_0_0_15px_5px_rgba(0,0,0,0.5)] custom-screen-3:w-[100%] custom-screen-2:w-[50%]">
                <h2 className='mb-10 text-5xl custom-screen-1:text-3xl'>Registration</h2>
                <form onSubmit={handleRegistration} className="self-center">
                    <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 border-b border-solid border-ice">
                        <label className="mb-1.5 text-[1.25rem] self-start">Email</label>
                        <input
                            className="bg-transparent p-2.5 border-none text-opacity-8 text-[.80rem]"
                            type="email"
                            name="email"
                            placeholder='Type your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                            required
                        />
                    </div>
                    <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 border-b border-solid border-ice">
                        <label className="mb-1.5 text-[1.25rem] self-start">Password</label>
                        <input
                            className="bg-transparent p-2.5 border-none text-opacity-8 text-[.80rem]"
                            type="password"
                            name="password"
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="text-left flex flex-col align-center mt-2.5 mb-10 border-b border-solid border-ice">
                        <label className="mb-1.5 text-[1.25rem] self-start">Confirm Password</label>
                        <input                        
                            className="bg-transparent p-2.5 border-none text-opacity-8 text-[.80rem]"
                            type="password"
                            name="confirmPassword"
                            placeholder='Re-Enter your password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button className="text-aliceblue text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] 
                        m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] 
                        bg-charcoal" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage