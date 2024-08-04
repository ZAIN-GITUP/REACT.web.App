import React, { useState } from "react";
import signinimage from '../assets/sign.png';
import { useNavigate,Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { storeUser } from "../lib/features/userSlice";

const Signupform = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    if (!username) {
      newErrors.username = 'Username is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordPattern.test(password)) {
      newErrors.password = 'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }

    if (!isChecked) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    return newErrors;
  };

  const handleValidation = () => {
    const newErrors = validate();
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      const user = {
        email: email,
        username: username,
        password: password,
      };
      dispatch(storeUser(user));
      console.log('Form submitted:', user);
      alert('Sign up successful!');  // Show a success message
      navigate('/otpcode');  // Navigate to the OTP code page after successful sign-up
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 mb-16 max-w-sm">
        <img src={signinimage} alt="Sample image" />
      </div>
      <form className="md:w-1/3 max-w-xs" onSubmit={handleSubmit}>
        <div>
          <h2 className="text-gray-950 w-full font-bold h-4 " style={{ fontFamily: 'Manrope', fontSize: '22px', fontWeight: 800, lineHeight: '49.18px', textAlign: 'left' }}>Welcome </h2>
          <p className="text-gray-900 w-full mb-4 mt-6" style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '18px', lineHeight: '25.52px' }}>Welcome! Please enter your details.</p>
        </div>
        <div className="mb-1">
          <input
            className={`text-sm w-full px-4 py-2 border-b border-solid ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
        </div>
        <div className="mb-1">
          <input
            className={`text-sm w-full px-4 py-2 border-b border-solid ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="mb-1 relative">
          <input
            className={`text-sm w-full px-4 py-2 border-b border-solid ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute opacity-45 inset-y-0 right-0 flex items-center pr-3"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <div className="mb-1 relative">
          <input
            className={`text-sm w-full px-4 py-2 border-b border-solid ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute opacity-45 inset-y-0 right-0 flex items-center pr-3"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div>
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input
              className="mr-1"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span>I agree to the terms & conditions</span>
          </label>
        </div>
        {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-black hover:bg-gray-700 w-full h-10 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Sign up
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-center">
          Already have an account?{" "}
          <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/login">
            Login
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Signupform;
