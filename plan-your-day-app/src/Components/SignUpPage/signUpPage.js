import { useState } from 'react';

function SignUpPage(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here (to be implemented in the backend).
    // Send formData to the server for registration.
    };

    return (
        <div className="text-center flex flex-col items-center bg-transparent p-[20px] text-aliceblue text-shadow-md">
            <div className="p-[20px] bg-transparent text-aliceblue">
            <h2 className='text-[2rem]'>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 border-b border-solid border-ice">
                    <label className="mb-1.5 text-[1.25rem] self-start">Email</label>
                    <input
                        className="textshadow bg-transparent text-aliceblue p-2.5 border-none text-opacity-8 text-[.80rem]"
                        type="email"
                        name="email"
                        placeholder='Type your email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 border-b border-solid border-ice">
                    <label className="mb-1.5 text-[1.25rem] self-start">Password</label>
                    <input
                        className="textshadow bg-transparent text-aliceblue p-2.5 border-none text-opacity-8 text-[.80rem]"
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="text-left flex flex-col align-center mt-2.5 mb-1.5 border-b border-solid border-ice">
                    <label className="mb-1.5 text-[1.25rem] self-start">Confirm Password</label>
                    <input                        
                        className="textshadow bg-transparent text-aliceblue p-2.5 border-none text-opacity-8 text-[.80rem]"
                        type="password"
                        name="confirmPassword"
                        placeholder='Re-Enter your password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button className="text-charcoal text-xl shadow-[2px_2px_2px_black] transition-all duration-[250ms] m-2.5 px-5 py-2.5 rounded-[10px] border-[none] hover:cursor-pointer hover:shadow-[4px_4px_4px_black] bg-aliceblue" type="submit">Register</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default SignUpPage