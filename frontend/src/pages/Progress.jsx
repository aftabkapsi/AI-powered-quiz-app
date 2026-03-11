import { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import { BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid } from "recharts";

export default function Progress(){

const [progress,setProgress] = useState([]);

useEffect(()=>{

API.get("/progress")
.then(res=>{

const formatted = res.data.map(p=>({
course:p.course,
score: Math.round((p.score/p.total)*100)
}));

setProgress(formatted);

});

},[]);

return(

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="max-w-6xl mx-auto p-10">

<h2 className="text-2xl font-bold mb-8">
Learning Progress Dashboard
</h2>

{progress.length === 0 ? (

<p className="text-gray-500">
No quizzes completed yet.
</p>

) : (

<BarChart width={700} height={350} data={progress}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="course"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="score" fill="#6366f1"/>

</BarChart>

)}

<div className="mt-10 bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold mb-2">
Personalized Learning Path
</h3>

<p className="text-gray-600">
Based on your previous quiz performance, the system automatically adjusts
future quiz difficulty levels to improve your understanding of the subject.
</p>

</div>

</div>

</div>

);

}