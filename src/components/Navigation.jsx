import { useState } from 'react'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent hover:from-purple-500 hover:to-purple-700 transition-all duration-300 hover:scale-105 cursor-pointer">
            Sakshi Pande
          </div>
          <div className="flex space-x-8">
            {['home', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item
                    ? 'text-purple-700 bg-purple-50/50 border border-purple-200/50'
                    : 'text-gray-600 hover:text-purple-700 hover:bg-purple-100/70 hover:scale-105'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
