export default function CourseCard({course,startQuiz}){

    return(
  
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
  
        <h3 className="text-xl font-semibold mb-2">
          {course.title}
        </h3>
  
        <p className="text-gray-500 mb-6">
          {course.description}
        </p>
  
        <button
          onClick={()=>startQuiz(course.id)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Start Quiz
        </button>
  
      </div>
  
    );
  
  }