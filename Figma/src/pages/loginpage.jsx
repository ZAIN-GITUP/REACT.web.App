import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginimage from '../assets/login.png';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
const  navigate= useNavigate()
  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[com]{3}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!email) {
      newErrors.email = 'Email is required .';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email format .';
    }

    if (!password) {
      newErrors.password = 'Password is required .';
    } else if (!passwordPattern.test(password)) {
      newErrors.password = 'Password must be valid &  at least 6 letter. ';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      navigate('/figma')
      // Form is valid, proceed with submission logic (e.g., API call)
      console.log('Form submitted:', { email, password });
    } else {
      setErrors(newErrors);

    }

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-xs">
        <img src={loginimage} alt="Sample image" />
      </div>
      <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>
        <div>
          <h2 className="text-gray-950 w-full font-bold h-6 " style={{ fontFamily: 'Manrope', fontSize: '32px', fontWeight: 800, lineHeight: '49.18px', textAlign: 'left' }}>Welcome back</h2>
          <p className="text-gray-900 w-full mb-8 mt-6" style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '18px', lineHeight: '25.52px' }}>Welcome back! Please enter your details.</p>
        </div>
        <div className="mb-4 ">
          <input
            className={`text-sm  w-full px-4 py-2 border-b border-solid ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4 relative">
          <input
            className={`text-sm w-full px-4 py-2 border-b border-solid ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          
          />
          <button
            type="button"
            className="absolute opacity-45 inset-y-0 right-0 flex items-center p-3"
            onClick={togglePasswordVisibility}
          >
            {showPassword ?  <FaEyeSlash />:<FaEye />}
          </button>
          {errors.password && <p className="text-red-500 text-xs mt-2 absolute -bottom-5 left-0">{errors.password}</p>}
          </div>
          <div className="mt-8 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <Link
            className="text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-4"
            to ="/forgotpassword"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-black hover:bg-gray-900 w-full h-10 px-4 py-2 text-white rounded text-xs tracking-wider uppercase"
            type="submit"
          >
            Log in
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-center">
          Don't have an account?{" "}
          <Link className="text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-4" to="/signin">
            SIGN UP
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Loginform;
