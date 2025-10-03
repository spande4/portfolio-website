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
<nav className="bg-brand rounded-full px-6 py-3 font-josefin w-1/2 max-w-xl 
                mt-6 ml-6">
  <ul className="flex justify-center space-x-8 text-white">
    <li><a href="#home" className="hover:underline">Home</a></li>
    <li><a href="#software" className="hover:underline">Software Engineering</a></li>
    <li><a href="#photography" className="hover:underline">Photography</a></li>
  </ul>
</nav>


    
  );
}
  



export default Navigation