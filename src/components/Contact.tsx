import emailjs from 'emailjs-com';
import React, { useRef } from 'react';


export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_t0clse1', 'template_rp5cbok', form.current, 'JLs4RrXEyrEoigmxp')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

  return (
    <div className="animate-fade-in flex justify-center items-center bg-cover bg-fixed bg-[url('../mountain_sunset.jpg')]" style={{ minHeight: 'calc(100vh - 64px)' }}>
     <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg backdrop-blur-md drop-shadow-md rounded px-8 mt-5 pb-8 mb-4">
        <h1 className='text-center text-white font-bold text-2xl p-5'>Send me an email</h1>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Destinatary Email
          </label>
          <input className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="user_email" type="email" value="aelyspurecode@gmail.com" disabled />
        </div>
        <label className="block text-white text-sm font-bold mb-2">
            Your name
          </label>
          <input className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="user_name" type="text" />
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            Your message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48" id="message" name='message' required />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}