const AboutScreen = () => {
  return (
    <div className="py-20 px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl">ABOUT ME</h1>
        <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur at iste? Natus quas quam aperiam consectetur nihil laudantium ut ad suscipit veritatis vero aliquam maxime odit, recusandae accusantium rerum.</p>
      </div>
      <div className="flex flex-col lg:flex-row mb-14">
        <img src="https://placehold.co/403x467" alt="my-img" className="mx-12 rounded-xl flex-grow" />
        <div className="flex flex-col justify-center items-start w-full lg:w-4/6 pt-10 lg:pt-0">
          <h2 className="text-2xl text-kAppYellow uppercase mb-5">Tamby Razafindralambo</h2>
          <h3 className="text-xl uppercase mb-4">Web Developer</h3>
          <p className="text-lg font-light mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, purus nec consequat consectetur, nibh tellus lacinia sapien, et laoreet ipsum dui vitae sapien. Sed ultrices augue id suscipit sollicitudin. Aenean in laoreet nisi. Curabitur sollicitudin dapibus semper.
            <br className="mb-4"/>
            Donec mauris velit, consequat sit amet ligula sed, pretium tempor sem. Morbi vitae neque quam. Nulla fringilla libero a tempus vulputate. Maecenas vehicula dignissim elementum. Suspendisse vel posuere diam, hendrerit dictum tellus.
          </p>
          <button type="button" className="text-xl text-kAppBlack bg-kAppYellow px-4 py-2 rounded-lg">Download Resume</button>
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl text-kAppYellow">My Stack</h3>
        <div className="flex flex-wrap gap-10 pt-5">
          <img src="./img/html.png" alt="" />
          <img src="./img/css.png" alt="" />
          <img src="./img/javaScript.png" alt="" />
          <img src="./img/reactJS.png" alt="" />
          <img src="./img/tailwind.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutScreen