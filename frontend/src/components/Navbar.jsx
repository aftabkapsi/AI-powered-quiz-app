import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("user_id");

    navigate("/");

  };

  return(

    <div className="bg-white shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1
          className="text-xl font-bold text-indigo-600 cursor-pointer"
          onClick={()=>navigate("/dashboard")}
        >
          AI Quiz Platform
        </h1>

        <div className="space-x-6">

          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-indigo-600"
          >
            Dashboard
          </Link>

          <Link
            to="/progress"
            className="text-gray-600 hover:text-indigo-600"
          >
            Progress
          </Link>

          <Link
            to="/leaderboard"
            className="text-gray-600 hover:text-indigo-600"
            >
            Leaderboard
          </Link>

          <button
            onClick={logout}
            className="text-red-500 hover:text-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

}