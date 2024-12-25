import React from 'react'
import BookList from '../components/BookList'

function FreeResources() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    return (
        <div className="w-screen h-screen overflow-y-scroll">
            <section className="relative h-screen w-screen bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col">
                <nav className=" flex justify-around items-center gap-2 p-4 bg-opacity-75  text-white">
                    <img src="https://growthmindsacademy.com/wp-content/uploads/2024/09/GMA2.png" className='h-24' alt="" />
                    <p className='bg-black p-4 bg-opacity-35 rounded-xl'>Email to Enquire more absolute Our Resources</p>
                </nav>
                <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-6xl md:text-8xl font-extrabold leading-tight">Free Ebooks to <br /> Change your life</h1>
                    <p className="text-white text-lg md:text-xl mt-4">Start your journey with our curated collection of ebooks.</p>
                    <button  onClick={() => scrollToSection("section-2")} className="absolute bottom-10 w-2/3 mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400">Click here to Get Started</button>
                </div>
            </section>
            <section id="section-2" className=" w-screen bg-green-500 flex items-center justify-center">
                <BookList />
            </section>
            <section className="h-screen w-screen bg-red-500 flex items-center justify-center">
            </section>
        </div>
    )
}

export default FreeResources