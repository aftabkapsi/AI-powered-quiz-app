import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

export default function Leaderboard(){

const [leaders,setLeaders] = useState([]);

useEffect(()=>{

API.get("/progress")
.then(res=>{

const sorted = res.data
.map(p => ({
course:p.course,
score: Math.round((p.score/p.total)*100)
}))
.sort((a,b)=>b.score-a.score);

setLeaders(sorted);

});

},[]);

return(

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="max-w-5xl mx-auto p-10">

<h2 className="text-2xl font-bold mb-8">
Leaderboard
</h2>

{leaders.length === 0 ? (

<p className="text-gray-500">
No quiz results yet.
</p>

) : (

<div className="bg-white rounded-xl shadow">

{leaders.map((item,index)=>(

<div
key={index}
className="flex justify-between p-4 border-b hover:bg-gray-50"
>

<div className="font-semibold">
#{index+1} {item.course}
</div>

<div className="text-indigo-600 font-bold">
{item.score}%
</div>

</div>

))}

</div>

)}

</div>

</div>

);

}