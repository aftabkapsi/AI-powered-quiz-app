import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

export default function Dashboard(){

  const courses = [

    {
      id:1,
      title:"Python Programming",
      description:"Learn Python fundamentals and programming concepts."
    },

    {
      id:2,
      title:"Cyber Security",
      description:"Understand network security and cyber threats."
    },

    {
      id:3,
      title:"Artificial Intelligence",
      description:"Explore machine learning and AI fundamentals."
    },

    {
      id:4,
      title:"Data Structures",
      description:"Learn algorithms, arrays, stacks and queues."
    }

  ];

  const startQuiz = (courseId)=>{

    localStorage.setItem("course_id",courseId);

    window.location.href="/quiz";

  };

  return(

    <div className="min-h-screen bg-gray-100">

      <Navbar/>

      <div className="max-w-7xl mx-auto p-10">

        <h2 className="text-3xl text-center text-indigo-600  font-bold mb-8">
          Available Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

          {courses.map(course=>(
            <CourseCard
              key={course.id}
              course={course}
              startQuiz={startQuiz}
            />
          ))}

        </div>

      </div>

    </div>

  );

}