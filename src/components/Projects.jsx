const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Project 1</h3>
            <p className="text-gray-600 mb-4">Project description will go here...</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex gap-3">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                View Project
              </button>
              <button className="border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                GitHub
              </button>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Project 2</h3>
            <p className="text-gray-600 mb-4">Project description will go here...</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Python</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Django</span>
            </div>
            <div className="flex gap-3">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                View Project
              </button>
              <button className="border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                GitHub
              </button>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Project 3</h3>
            <p className="text-gray-600 mb-4">Project description will go here...</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Java</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Spring</span>
            </div>
            <div className="flex gap-3">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                View Project
              </button>
              <button className="border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
