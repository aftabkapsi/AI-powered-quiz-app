import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

export default function QuizPage() {

const [quiz,setQuiz] = useState([]);
const [current,setCurrent] = useState(0);
const [answers,setAnswers] = useState([]);
const [time,setTime] = useState(120);
const [difficulty,setDifficulty] = useState("easy");

const courseMap = {
1:"Python Programming",
2:"Cyber Security",
3:"Artificial Intelligence",
4:"Data Structures"
};

const courseId = localStorage.getItem("course_id");
const courseName = courseMap[courseId];

useEffect(()=>{

API.post("/generate-quiz",{
course:courseName,
difficulty:difficulty
})
.then(res=>{
setQuiz(res.data.quiz);
});

},[]);


useEffect(()=>{

const timer = setInterval(()=>{

setTime(prev=>{

if(prev === 0){
submitQuiz();
return 0;
}

return prev-1;

});

},1000);

return ()=>clearInterval(timer);

},[]);


const selectAnswer = (value)=>{

const updated=[...answers];
updated[current]=value;

setAnswers(updated);

};


const nextQuestion = ()=>{
if(current < quiz.length-1)
setCurrent(current+1);
};


const prevQuestion = ()=>{
if(current>0)
setCurrent(current-1);
};


const submitQuiz = async ()=>{

const correctAnswers = quiz.map(q=>q.answer);

const res = await API.post("/submit-quiz",{

course:courseName,
answers:answers,
correct_answers:correctAnswers

});

localStorage.setItem("lastResult",JSON.stringify(res.data));

window.location.href="/result";

};


if(quiz.length === 0)
    return(
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    
    <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px] text-center">
    
    <div className="flex justify-center mb-6">
    
    <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    
    </div>
    
    <h2 className="text-xl font-semibold text-gray-800 mb-2">
    Generating AI Quiz
    </h2>
    
    <p className="text-gray-500 text-sm">
    Our AI is preparing your personalized questions...
    </p>
    
    <div className="mt-6 space-y-3">
    
    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
    
    </div>
    
    </div>
    
    </div>
    
    );

const question = quiz[current];

return(

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="max-w-3xl mx-auto p-8">

<h2 className="text-2xl font-bold mb-2">
{courseName} Quiz
</h2>

<div className="flex justify-between items-center mb-4">

<p className="text-sm text-gray-500">
AI Generated Quiz
</p>

<p className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded">
Difficulty: {difficulty}
</p>

</div>

<p className="text-red-500 font-semibold mb-4">
Time Remaining: {time}s
</p>

<div className="bg-white p-8 rounded-xl shadow">

<h3 className="text-lg font-semibold mb-6">
Question {current+1}: {question.question}
</h3>

{question.options.map((opt,index)=>(

<label
key={index}
className={
answers[current] === opt
? "block mb-3 bg-indigo-100 p-2 rounded cursor-pointer"
: "block mb-3 cursor-pointer"
}
>

<input
type="radio"
name="answer"
className="mr-2"
checked={answers[current] === opt}
onChange={()=>selectAnswer(opt)}
/>

{opt}

</label>

))}

</div>

<div className="flex justify-between mt-6">

<button
onClick={prevQuestion}
className="bg-gray-300 px-4 py-2 rounded"
>
Previous
</button>

{current === quiz.length-1 ? (

<button
onClick={submitQuiz}
className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
>
Submit
</button>

) : (

<button
onClick={nextQuestion}
className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
>
Next
</button>

)}

</div>

</div>

</div>

);

}