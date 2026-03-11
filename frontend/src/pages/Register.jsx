import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const registerUser = () => {

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const existing = users.find(u => u.email === email);
  
    if(existing){
      alert("User already exists");
      return;
    }
  
    const newUser = {
      name,
      email,
      password
    };
  
    users.push(newUser);
  
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Registration Successful");
  
    window.location.href="/";
  
  };

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[420px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 rounded-lg mb-6"
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        <button
          onClick={registerUser}
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
        >
          Register
        </button>

        <p className="text-center mt-4 text-gray-600">

          Already have an account?

          <Link
            to="/"
            className="text-indigo-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  )

}