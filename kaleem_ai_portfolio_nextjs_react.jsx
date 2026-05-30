export default function Portfolio() {
  const projects = [
    {
      title: 'AI Voice Assistant',
      desc: 'Voice-enabled AI assistant built using modern AI technologies and deployed online.',
    },
    {
      title: 'AI Image Generator',
      desc: 'Generate creative AI-powered images using advanced image generation models.',
    },
    {
      title: 'Urdu AI Chatbot',
      desc: 'An intelligent Urdu chatbot for translation and AI conversations.',
    },
    {
      title: 'RAG Research Assistant',
      desc: 'AI-powered research assistant using Retrieval-Augmented Generation.',
    },
  ];

  const skills = [
    'Python',
    'C++',
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Machine Learning',
    'Artificial Intelligence',
    'GitHub',
    'Hugging Face',
    'Gradio',
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Kaleem Portfolio
          </h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>

        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Kaleem Shahid Khan
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            MSc Mathematics Student
          </p>

          <p className="text-lg text-gray-400 mb-8">
            AI Developer | Machine Learning Enthusiast | Web Developer
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

          <p className="text-gray-300 text-lg leading-8 text-center max-w-4xl mx-auto">
            I am Kaleem Shahid Khan, an MSc Mathematics student passionate about Artificial Intelligence,
            Machine Learning, and modern web development. I enjoy building AI-powered applications,
            interactive websites, and innovative digital experiences using modern technologies.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-14">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 hover:border-blue-500 transition duration-300"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-purple-500 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-300 leading-7 mb-6">{project.desc}</p>

              <div className="flex gap-4">
                <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition">
                  Live Demo
                </button>

                <button className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-14">Certifications</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {['WordPress', 'Professional Branding', 'Microsoft Office'].map((cert, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold">{cert}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-4">
                <span className="font-bold">Phone:</span> 0309-9811545
              </p>

              <p className="text-lg mb-4">
                <span className="font-bold">Email:</span> kk49860901@gmail.com
              </p>

              <p className="text-lg mb-4">
                <span className="font-bold">LinkedIn:</span>
              </p>

              <a
                href="https://www.linkedin.com/in/kaleem-shahid-khan-7751113a9"
                target="_blank"
                className="text-blue-400 break-all"
              >
                linkedin.com/in/kaleem-shahid-khan-7751113a9
              </a>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none"
              ></textarea>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        <p>© 2026 Kaleem Shahid Khan. All Rights Reserved.</p>
        <p className="mt-2">Designed & Developed by Kaleem Shahid Khan</p>
      </footer>
    </div>
  );
}
