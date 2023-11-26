import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


export default function Home() {
    return (
        <div className="animate-fade-in flex flex-col items-center pt-20 relative justify-start bg-cover bg-[url('../mountain_sunset.jpg')]" style={{ minHeight: 'calc(100vh - 64px)'}}>
            <div className="backdrop-blur-xl drop-shadow-md p-7 rounded-t-lg shadow-lg max-w-2xl">
                <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-full border-solid border-2 border-purple-500 w-32 h-32 mx-auto m-3" src="pfp.png" alt="Profile picture" />
                <h1 className="text-white text-4xl font-bold mb-4 text-center">Welcome to my website :3</h1>
                <p className="text-white">This website was made with <span className="font-extrabold"><a href="https://www.typescriptlang.org/">Typescript</a></span>, <span><a className="font-extrabold" href='https://react.dev/'>React</a></span> and <span><a className="font-extrabold" href='https://tailwindcss.com/'>TailwindCSS</a></span>, Here you can check my socials, stack, projects, curriculum and etc!</p>
            </div>
    
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/LysImbecile" target="_blank" rel="noreferrer"><FaGithub className="text-white text-2xl" /></a>
                <a href="https://www.twitter.com/yourusername" target="_blank" rel="noreferrer"><FaTwitter className="text-white text-2xl" /></a>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer"><FaInstagram className="text-white text-2xl" /></a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin className="text-white text-2xl" /></a>
            </div>
        </div>
    );
}