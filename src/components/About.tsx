export default function AboutMe() {
  return (
    <div className="flex justify-center animate-fade-in bg-gray-100 py-8 bg-cover bg-[url('../ferris_wheel.jpg')]" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="h-full">
            <img className="w-full h-full object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          </div>
          <div className="flex bg-gray-100 p-10 w-full md:w-auto">
            <div className="">
              <h1 className="text-3xl uppercase">Aelys</h1>
              <p className="font-semibold mb-5">Backend Developer</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}