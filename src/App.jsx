import React from 'react';
import Navbar from './sections/Navbar.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <div className="min-h-screen bg-black-100">

        {/* Hero Section */}
        <section id="home" className="c-space py-20">
          <div className="text-center">
            <h1 className="hero_tag text-white">
              Hi, I'm <span className="text-gray_gradient">Your Name</span>
              <span className="waving-hand">👋</span>
            </h1>
            <p className="text-white-600 text-lg mt-6 font-generalsans">
              I'm a passionate developer creating amazing digital experiences
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="c-space py-20">
          <div className="grid-container">
            <h2 className="head-text">About Me</h2>
            <p className="grid-subtext">
              Welcome to my portfolio! I'm a developer passionate about creating 
              innovative solutions and beautiful user experiences.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="c-space py-20">
          <h2 className="head-text text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="grid-container">
              <h3 className="grid-headtext">Project 1</h3>
              <p className="grid-subtext">Description of your first project</p>
            </div>
            <div className="grid-container">
              <h3 className="grid-headtext">Project 2</h3>
              <p className="grid-subtext">Description of your second project</p>
            </div>
            <div className="grid-container">
              <h3 className="grid-headtext">Project 3</h3>
              <p className="grid-subtext">Description of your third project</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="c-space py-20">
          <div className="contact-container mx-auto">
            <h2 className="head-text text-center mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="field-label">Name</label>
                <input 
                  type="text" 
                  className="field-input" 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="field-label">Email</label>
                <input 
                  type="email" 
                  className="field-input" 
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="field-label">Message</label>
                <textarea 
                  className="field-input min-h-32" 
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="field-btn w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="c-space py-10 border-t border-black-300">
          <div className="text-center">
            <p className="text-white-500 font-generalsans">
              © 2024 Your Name. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default App;