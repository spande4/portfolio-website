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
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Hi, I'm <span className="text-purple-700">Sakshi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-8 animate-fade-in-up">
              Software Engineering Student
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in-up">
              Passionate about creating innovative solutions through code. 
              Currently pursuing software engineering with a focus on full-stack development 
              and modern web technologies.
            </p>
          </div>

          {/* Right side - Tech Stack */}
          <div className="animate-fade-in-up">
            <div className="space-y-6">
              {/* Languages */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-purple-700 mb-4">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.languages.map((lang, index) => (
                    <span 
                      key={lang}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-purple-700 mb-4">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.frameworks.map((framework, index) => (
                    <span 
                      key={framework}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold text-purple-700 mb-4">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((tool, index) => (
                    <span 
                      key={tool}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
