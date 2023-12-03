import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaDiscord, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [showDiv, setShowDiv] = useState(false);

  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_t0clse1', 'template_rp5cbok', form.current, 'JLs4RrXEyrEoigmxp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  }

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
    <div className="animate-fade-in pl-5 flex justify-start items-center bg-cover bg-fixed bg-[url('../mountain_sunset.jpg')]" style={{ minHeight: 'calc(100vh - 64px)' }}>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full rounded px-8 mt-5 mb-8">
      <form ref={form} onSubmit={sendEmail} className="bg-gradient-to-r from-slate-800 to-transparent w-full max-w-lg rounded px-8 mt-5 pb-8 mb-4">
        <h1 className='text-center text-white font-bold text-2xl p-5 uppercase text-opacity-75'>Send me an email</h1>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Destinatary Email
          </label>
          <input className="shadow opacity-75 bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="user_email" type="email" value="aelyspurecode@gmail.com" disabled />
        </div>
        <label className="block text-white text-sm font-bold mb-2">
            Your name
          </label>
          <input className="shadow opacity-75 bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="user_name" type="text" />
        <div className="mb-6">

        <label className="block text-white text-sm font-bold mb-2 pt-2">
            Message topic
          </label>
          <input className="shadow opacity-75 bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message_topic" name="message_topic" type="text" />
        <div className="mb-6"></div>

          <label className="block text-white text-sm font-bold mb-2">
            Your message
          </label>
          
          <textarea className="shadow opacity-75 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" id="message" name='message' required />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send">
            Send
          </button>
          {showDiv && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert"> 
            <strong className="font-bold">Message sent!</strong> </div>}
        </div>

        
        { /*Contact info div*/ }

      </form>
      <div className='mr-10 mb-5 mt-5 w-auto h-60 bg-gradient-to-r from-transparent to-slate-800 rounded-md'>
        <h1 className='text-center text-white text-2xl pt-5 font-bold uppercase text-opacity-75'>How to contact me</h1>
        <div>
        <p className='text-white mt-5 mr-10 ml-10'>If you want to get in touch with me, feel free to check my email below, I also have my number or Discord if you prefer.
I tend to respond quickly.</p>
        </div>
        <div className="flex justify-center items-center mt-5">
                    <a onClick={() => {navigator.clipboard.writeText("lowgradeprogramming")}} target="_blank" rel="noopener noreferrer" className="cursor-pointer transition ease-in-out delay-150 hover:scale-150 hover:text-indigo-500 duration-300 text-white text-4xl mx-2 ">
                      <FaDiscord />
                    </a>
                    <a onClick={() => {navigator.clipboard.writeText("+55 19 98977-0025")}} target="_blank" rel="noopener noreferrer" className="cursor-pointer transition ease-in-out delay-150 hover:scale-150 hover:text-green-500 duration-300 text-white text-4xl mx-2">
                      <FaWhatsapp />
                    </a>
                    <a onClick={() => {navigator.clipboard.writeText("aelysch@proton.me")}} target="_blank" rel="noopener noreferrer" className="cursor-pointer transition ease-in-out delay-150 hover:scale-150 hover:text-white duration-300 text-white text-4xl mx-2">
                      <MdEmail />
                    </a>
                    <a onClick={() => {navigator.clipboard.writeText("+55 19 98977-0025")}} target="_blank" rel="noopener noreferrer" className="cursor-pointer transition ease-in-out delay-150 hover:scale-150 hover:text-indigo-500 duration-300 text-white text-4xl mx-2">
                      <FaTelegram />
                    </a>
                    
                  </div>
                  <p className='text-center pt-4 text-white text-sm text-opacity-70'>Click to copy</p>
      </div>
    </div>
    <div>
      </div>
    </div>
    </>
   
  );
}