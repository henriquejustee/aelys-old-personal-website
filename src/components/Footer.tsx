


export default function Footer() {
  return (
    <footer className="flex flex-col bg-neutral-900 text-center items-center text-white ">
      <div className="container p-6 text-white">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">About this website</h5>
            <p className="mb-4">
            The website has the purpose of bringing together my work, my study profile, my plans, my contact networks among other things, I have mixed a lot of technologies here and I intend to continue doing my best to improve and fill out the website :3
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">Other info</h5>
            <p className="mb-4">
            This site is hosted by Vercel, you can get the source code on my github, just don't judge my dirty code or my technical limitations, I still have the excuse of being a junior dev.
            </p>
          </div>
        
        </div>
      </div>
    </footer>
  );
}


