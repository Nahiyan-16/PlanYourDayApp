import { useState } from 'react';
import './signUpPage.css'

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
        <div className="signUpPageMainContainer">
            <div className="registrationContainer">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="credInputContainer">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='Type your email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="credInputContainer">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="credInputContainer">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder='Re-Enter your password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button className="signUpRegisterBtn" type="submit">Register</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default SignUpPage