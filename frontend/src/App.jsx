import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import Progress from "./pages/Progress";
import Leaderboard from "./pages/Leaderboard"

export default function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/result" element={<ResultPage/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>

      </Routes>

    </BrowserRouter>

  )

}