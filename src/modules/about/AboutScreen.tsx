const AboutScreen = () => {
  return (
    <div className="py-20 px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl">ABOUT ME</h1>
        <p className="text-xl font-light">
          I'm a passionate and detail-oriented Front-End Engineer based in Beau Bassin, Mauritius. With a strong background in web development and a degree in Software Engineering from the University of Mauritius (First Class with Honours), I thrive on building seamless, user-centric web experiences.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mb-14">
        <img src="https://placehold.co/403x467" alt="my-img" className="mx-12 rounded-xl flex-grow flex-shrink" />
        <div className="flex flex-col justify-center items-start w-full lg:w-4/6 pt-10 lg:pt-0 flex-shrink">
          <h2 className="text-2xl text-kAppYellow uppercase mb-5">Fanasina Tamby Tia Razafindralambo</h2>
          <h3 className="text-xl uppercase mb-4">Front-End Web Engineer</h3>
          <p className="text-lg font-light mb-10">
            My motto is “encourage, empower & elevate.” I believe in the power of feedback, collaboration, and continuous learning to grow as a developer and as a teammate. Whether it's refining UI interactions, optimizing performance, or mentoring peers, I bring a dedicated and team-focused mindset to everything I do.
            <br className="mb-4"/>
            Let's build something meaningful together!
          </p>
          <button type="button" className="text-xl text-kAppBlack bg-kAppYellow px-4 py-2 rounded-lg">Download Resume</button>
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl text-kAppYellow">My Stack</h3>
        <div className="flex flex-wrap gap-10 pt-5 [&>img]:max-w-[70px]">
          <img src="./img/html.png" alt="html-img" />
          <img src="./img/css.png" alt="css-img" />
          <img src="./img/javaScript.png" alt="js-img" />
          <img src="./img/typescript.png" alt="ts-img" />
          <img src="./img/reactJS.png" alt="reactJs-img" />
          <img src="./img/next.png" alt="next-img" />
          <img src="./img/tailwind.png" alt="tailwind-img" />
        </div>
      </div>
    </div>
  )
}

export default AboutScreen