import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { PieChart, Pie, Cell } from "recharts"

export default function ResultPage(){

const [result,setResult] = useState(null)

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("lastResult"))

setResult(data)

},[])

if(!result) return null

const percentage = Math.round((result.score/result.total)*100)

const chartData = [
{ name:"Score", value:percentage },
{ name:"Remaining", value:100-percentage }
]

const COLORS = ["#6366f1","#e5e7eb"]

return(

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="flex justify-center items-center h-[80vh]">

<div className="bg-white p-10 rounded-xl shadow text-center">

<h2 className="text-2xl font-bold mb-4">
Quiz Result
</h2>

<p className="text-gray-500 mb-6">
{result.course}
</p>

<PieChart width={200} height={200}>

<Pie
data={chartData}
dataKey="value"
innerRadius={50}
outerRadius={80}
>

{chartData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]}/>
))}

</Pie>

</PieChart>

<div className="text-xl font-bold mt-4 text-indigo-600">
{percentage}%
</div>

<p className="text-gray-600 mt-2">
Score: {result.score}/{result.total}
</p>

<button
onClick={()=>window.location.href="/dashboard"}
className="bg-indigo-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-indigo-700"
>
Back to Dashboard
</button>

</div>

</div>

</div>

)

}