const About = () => {
  return (
    <section
      id="about-section"
      style={{ height: 220 }}
      className=" flex flex-col md:flex-row items-center  px-6 md:px-20  relative overflow-hidden "
    >
      <div className="w-full md:w-1/2 text-center md:text-left ">
        <h2 className="text-4xl text-black md:text-6xl font-bold mt-3">
          Sobre nós
        </h2>
        <p id="about-desc" className="text-lg md:text-xl text-gray-500">
          Vendemos óculos com tecnologia de ponta, oferecendo conforto, estilo e
          proteção UV completa. Inspirados na perfeição do design moderno.
        </p>
      </div>
    </section>
  );
};

export default About;
