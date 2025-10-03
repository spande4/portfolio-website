import flower from "../assets/pinkFlower.jpg"; // replace with your actual flower image

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const techStack = {
    languages: ['JavaScript', 'Python', 'Java', 'C', 'C++', 'TypeScript', 'HTML', 'CSS', 'SQL', 'Racket'],
    frameworks: ['React', 'Redux', 'Django', 'NodeJS', 'AngularJS', 'Kivy'],
    tools: ['Git', 'Docker', 'Figma', 'Blender', 'VMware', 'Eclipse', 'VS Code']
  }

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 px-8 py-16 bg-black">
      
      {/* Left: Image */}
      <div className="flex-1">
        <img src={flower} alt="Flower" className="rounded-lg shadow-lg" />
      </div>

      {/* Right: Text */}
      <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-6xl font-serif">SAKSHI <br /> PANDE</h1>
        <p className="text-rose-300 text-xl mt-2">Software Engineering ~ Mathematics</p>
        <p className="mt-6 text-lg leading-relaxed text-gray-200">
          Passionate about creating innovative solutions through code.
          Currently pursuing software engineering with a focus on full-stack
          development and modern web technologies.
        </p>
      </div>
    </section>
  );
}

export default Home
