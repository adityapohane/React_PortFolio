const About = () => {
  return (
      <div name="about" className="w-full h-screen  bg-black text-gray-300">
          <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-600">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I am Aditya, nice to meet You. Please take a look around. </p>
            </div>
            <div className="">
              <p>I am passionate about building innovative and efficient software solutions
                that drive technological advancements and empower businesses to
                thrive in the digital age. As a software developer, I possess a deep-seated
                enthusiasm for crafting code that not only meets the functional requirements
                of a project but also enhances user experiences and fosters long-term success.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About