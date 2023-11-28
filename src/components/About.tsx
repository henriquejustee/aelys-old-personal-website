import { FaCat } from "react-icons/fa";


export default function AboutMe() {
  return (
    <div className="flex justify-center font-ubuntu animate-fade-in bg-gray-100 py-8 bg-cover bg-[url('../mountain_sunset.jpg')]" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-full">
            <img className="opacity-80 md:ml-auto sm:hover:opacity-100 sm:hover:transition ease-in-out delay-150 sm:hover:-translate-y-1 sm:hover:scale-110 duration-300 " src="pfp2.png" height={300} width={500} alt="aelys_char" />
          </div>
          <div className="mr-auto flex bg-gradient-to-r from-slate-800 to-transparent p-10  rounded opacity-90">
            <div className="">
              <h1 className="text-white text-3xl uppercase"><FaCat />Aelys</h1>
              <p className="text-white font-semibold mb-5">Backend Developer</p>
              <p className="text-white">I'm a programming and information technology student with two years of experience
in frontend and backend projects. At the age of 16, I turned programming into both a
hobby and a regular part of my routine, discovering my preference for backend
development as it allows me to better filter and focus my efforts.
I'm constantly seeking challenges to expand my technical knowledge, exploring new
languages and frameworks. I'm committed, organized, and enjoy working in teams,
contributing to solutions in programming related projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}