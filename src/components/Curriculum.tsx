export default function Curriculum() {
  return (
    <div className="animate-fade-in pl-5 flex justify-center items-start pt-10 bg-cover bg-fixed bg-[url('../mountain_sunset.jpg')]" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="bg-gradient-to-b opacity-80 from-slate-800 to-transparent shadow-lg rounded-lg p-8 max-w-3xl m-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">My curriculum</h1>
        <h2 className="pl-5 text-2xl font-bold mb-4 text-white">Experience</h2>
    
         <div className="mb-4">
    <h3 className="text-xl font-bold text-white">Knowledge of Javascript and Typescript languages</h3>
    <p className="text-white">I often work with various frameworks within Node, including Express, Fastify, Prisma
ORM and Vite, which provide me with a good degree of familiarity with the
languages and their respective characteristics.</p>

  </div>
         <div className="mb-4">
    <h3 className="text-xl font-bold text-white">Familiarity with Linux operating systems</h3>
    <p className="text-white">I use Linux daily as my primary operating system, which provides me with a high level
of learning. I have knowledge in Bash scripting for development purposes</p>
  </div> 

  <div className="mb-4">
    <h3 className="text-xl font-bold text-white">Basic Front-End experience</h3>
    <p className="text-white">I often use frontend-focused frameworks (Tailwind CSS and React), which provide
me with more flexibility during programming. As a result, I can create responsive and
well-styled websites.</p>
  </div> 

  <div className="mb-4">
    <h3 className="text-xl font-bold text-white">Other skills I have</h3>
    <p className="text-white">Intermediate English (B1 level), Proficiency with Docker, virtual machines, version
control (GIT), building Restful APIs, and occasional Python development for specific
occasions.</p>
 </div> 
    <h2 className="pl-5 text-2xl font-bold mb-4 mt-5 text-white">Education</h2>
    <div className="mb-4">
    <h3 className="text-xl font-bold text-white">Technical course of software development at SENAC-SP</h3>
    <p className="text-white">At this course, i get the cientific concepts of programming and software development in general. It propose me a knowledge to start building my own projects </p>
 </div> 
  </div>
</div>
  );
}