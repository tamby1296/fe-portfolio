const HomeScreen = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-full">
      <div className="fixed inset-0 lg:left-1/4">
        <img
          src="/img/pp.jpg"
          alt="Tamby Razafindralambo"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-kAppGrey/80" />
      </div>
      <div className="relative flex flex-col gap-2 text-center">
        <p className="text-3xl">Hello I'm</p>
        <h1 className="text-7xl truncate whitespace-normal">
          Tamby Razafindralambo
        </h1>
        <p className="text-3xl text-kAppYellow">I'm a Front-End Web Engineer</p>
      </div>
    </div>
  );
};

export default HomeScreen;
