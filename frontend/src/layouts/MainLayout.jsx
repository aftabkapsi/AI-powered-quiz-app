import Navbar from "../components/Navbar";

export default function MainLayout({children}){

  return(

    <div className="min-h-screen bg-gray-100">

      <Navbar/>

      <div className="max-w-7xl mx-auto p-8">

        {children}

      </div>

    </div>

  )

}