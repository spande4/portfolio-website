const Contact = () => {
  const contactInfo = [
    {
      type: 'Email',
      value: 'spande4@huskers.unl.edu',
      link: 'mailto:spande4@huskers.unl.edu',
      icon: '📧'
    },
    {
      type: 'LinkedIn',
      value: 'sakshi-pande-student',
      link: 'https://www.linkedin.com/in/sakshi-pande-student/',
      icon: '💼'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div 
              key={contact.type}
              className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  {contact.type}
                </h3>
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-700 transition-colors duration-200 break-all"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact
