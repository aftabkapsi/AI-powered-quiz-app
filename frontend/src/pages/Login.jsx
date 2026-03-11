import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginUser = () => {

    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const user = users.find(
      u => u.email === email && u.password === password
    );
  
    if(!user){
      alert("Invalid email or password");
      return;
    }
  
    localStorage.setItem("user_id", user.email);
  
    window.location.href="/dashboard";
  
  };

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          AI Quiz Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={loginUser}
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="text-indigo-600 ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  )

}