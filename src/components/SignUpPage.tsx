import { useState } from "react";

import { Link } from "react-router-dom";
import { authService } from "../services/authService";
import { login } from "../store/authSlice";



const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const response = await authService.signUp({ email, password });
    if (response.token) {
      console.log(response.token)
      login({ email, token: response.token });
    } else {
      alert('Invalid credentials. Please try again.');
    }
  } 
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3 bg-slate-500">
      <h2 className="text-xl font-medium text-gray-800">Sign Up</h2>
     
      <input
        className="  px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 "
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <h4>Or</h4>
          <Link to="/signin"><button>Log In</button></Link>
    </div>
  );
};

export default SignUpPage;
