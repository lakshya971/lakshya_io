import React, { useState } from 'react'
import { motion } from "motion/react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    project: 'development'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      {/* Hero Section */}
      <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textStructure mt-52 px-20'>
          {["Let's", "Connect"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className='w-fit flex items-center'>
                  {index === 1 && (
                    <motion.div 
                      initial={{width: 0}} 
                      animate={{width: "8vw"}} 
                      transition={{ease: "easeInOut", duration: 1}} 
                      className='mr-[0.8vw] w-[8vw] h-[5.7vw] relative top-[1.8vw] rounded-md bg-[#cdea68]'>
                      <div className='w-full h-full rounded-md bg-gradient-to-br from-[#cdea68] to-[#004d43] flex items-center justify-center'>
                        <span className='text-2xl font-bold text-zinc-900'>💬</span>
                      </div>
                    </motion.div>
                  )}
                  <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[6vw] tracking-tighter leading-[.78] font-bold'>{item}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className='border-t-[1px] border-zinc-500 mt-22 flex justify-between px-5 py-3 items-center'>
          <p className='font-light text-md tracking-tight leading-none'>Ready to bring your ideas to life?</p>
          <p className='font-light text-md tracking-tight leading-none'>Let's discuss your next project</p>
          <div className="start flex gap-5 items-center justify-between px-3 py-1 border-zinc-200">
            <div className='font-light border-1 rounded-full px-5 py-2 uppercase text-md'>Start Project</div>
            <span className='w-10 h-10 flex items-center justify-center border-1 rounded-full'>🚀</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full py-20 px-20 bg-[#cdea68] text-black rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter mb-10'>
          Tell me about your project
        </h1>
        <p className='text-xl tracking-tight leading-relaxed max-w-3xl mb-16'>
          Whether you need a complete web application, a stunning landing page, or just want to discuss an idea, 
          I'm here to help turn your vision into reality.
        </p>

        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <div>
              <label className='block text-lg font-semibold mb-3'>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-6 py-4 bg-white rounded-full border-2 border-transparent focus:border-zinc-900 outline-none text-black placeholder-zinc-500'
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className='block text-lg font-semibold mb-3'>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-6 py-4 bg-white rounded-full border-2 border-transparent focus:border-zinc-900 outline-none text-black placeholder-zinc-500'
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className='block text-lg font-semibold mb-3'>Company/Organization</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className='w-full px-6 py-4 bg-white rounded-full border-2 border-transparent focus:border-zinc-900 outline-none text-black placeholder-zinc-500'
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className='block text-lg font-semibold mb-3'>Project Type</label>
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                className='w-full px-6 py-4 bg-white rounded-full border-2 border-transparent focus:border-zinc-900 outline-none text-black'
              >
                <option value="development">Web Development</option>
                <option value="design">UI/UX Design</option>
                <option value="mobile">Mobile App</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className='block text-lg font-semibold mb-3'>Project Details *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="12"
              className='w-full px-6 py-4 bg-white rounded-3xl border-2 border-transparent focus:border-zinc-900 outline-none text-black placeholder-zinc-500 resize-none'
              placeholder="Tell me about your project goals, timeline, budget, and any specific requirements..."
            />
          </div>

          <div className='col-span-2 flex justify-center mt-8'>
            <button
              type="submit"
              className='flex uppercase gap-5 items-center px-12 py-4 bg-zinc-900 text-white rounded-full text-lg font-semibold hover:bg-[#004d43] transition-colors'
            >
              Send Message
              <div className='w-3 h-3 bg-[#cdea68] rounded-full'></div>
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20 px-20 bg-zinc-900'>
        <div className='border-b-[1px] border-zinc-700 pb-20'>
          <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
            Get In Touch
          </h1>
        </div>
        
        <div className='mt-20 grid grid-cols-3 gap-20'>
          <div>
            <h2 className='text-3xl font-bold mb-10 text-[#cdea68]'>Direct Contact</h2>
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-semibold mb-2'>Email</h3>
                <a href="mailto:hello@lakshyaio.dev" className='text-zinc-300 hover:text-[#cdea68] transition-colors text-lg'>
                  hello@lakshyaio.dev
                </a>
              </div>
              
              <div>
                <h3 className='text-xl font-semibold mb-2'>Phone</h3>
                <a href="tel:+1234567890" className='text-zinc-300 hover:text-[#cdea68] transition-colors text-lg'>
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div>
                <h3 className='text-xl font-semibold mb-2'>Location</h3>
                <p className='text-zinc-300 text-lg'>
                  San Francisco, CA<br />
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className='text-3xl font-bold mb-10 text-[#cdea68]'>Social Media</h2>
            <div className='space-y-4'>
              {[
                { name: "LinkedIn", url: "https://linkedin.com/in/lakshyaio", icon: "💼" },
                { name: "GitHub", url: "https://github.com/lakshyaio", icon: "🐙" },
                { name: "Twitter", url: "https://twitter.com/lakshyaio", icon: "🐦" },
                { name: "Instagram", url: "https://instagram.com/lakshyaio", icon: "📸" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex items-center gap-4 text-zinc-300 hover:text-[#cdea68] transition-colors text-lg group'
                >
                  <span className='text-2xl group-hover:scale-110 transition-transform'>{social.icon}</span>
                  {social.name}
                  <span className='opacity-0 group-hover:opacity-100 transition-opacity'>→</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className='text-3xl font-bold mb-10 text-[#cdea68]'>Availability</h2>
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-semibold mb-2'>Response Time</h3>
                <p className='text-zinc-300 text-lg'>
                  Usually within 24 hours
                </p>
              </div>
              
              <div>
                <h3 className='text-xl font-semibold mb-2'>Time Zone</h3>
                <p className='text-zinc-300 text-lg'>
                  PST (UTC-8)
                </p>
              </div>
              
              <div>
                <h3 className='text-xl font-semibold mb-2'>Current Status</h3>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <p className='text-zinc-300 text-lg'>Available for new projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div data-scroll data-scroll-section data-scroll-speed=".05" className='w-full py-20 px-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='text-[5vw] uppercase font-semibold tracking-tighter leading-none mb-16 text-center'>
          Common Questions
        </h1>
        
        <div className='max-w-4xl mx-auto space-y-8'>
          {[
            {
              question: "What's your typical project timeline?",
              answer: "Timeline varies by project complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. I'll provide a detailed timeline during our initial consultation."
            },
            {
              question: "Do you work with international clients?",
              answer: "Absolutely! I work with clients worldwide and am comfortable working across different time zones. Most communication happens via email, Slack, or scheduled video calls."
            },
            {
              question: "What technologies do you specialize in?",
              answer: "I specialize in React, Node.js, Python, and modern web technologies. I'm also experienced with cloud platforms like AWS and deployment tools like Docker."
            },
            {
              question: "Do you provide ongoing support?",
              answer: "Yes, I offer maintenance packages and ongoing support for all projects. This includes bug fixes, updates, and feature enhancements as your business grows."
            }
          ].map((faq, index) => (
            <div key={index} className='border-b border-zinc-600 pb-6'>
              <h3 className='text-xl font-semibold mb-4 text-[#cdea68]'>
                {faq.question}
              </h3>
              <p className='text-zinc-300 leading-relaxed'>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className='text-center mt-16'>
          <p className='text-xl mb-8'>
            Still have questions? Let's talk!
          </p>
          <button className='px-8 py-4 bg-[#cdea68] text-black rounded-full font-semibold hover:bg-white transition-colors'>
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div data-scroll data-scroll-section data-scroll-speed="-.05" className='w-full py-20 px-20 bg-zinc-900'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-[4vw] font-["Neue_Montreal"] tracking-tight mb-8'>
            Ready to start your project?
          </h1>
          <p className='text-xl text-zinc-300 mb-12 leading-relaxed'>
            Let's transform your ideas into exceptional digital experiences. 
            Every great project starts with a conversation.
          </p>
          
          <div className='flex gap-6 justify-center'>
            <button className='flex uppercase gap-5 items-center px-8 py-4 bg-[#cdea68] text-black rounded-full text-lg font-semibold hover:bg-white transition-colors'>
              Start Your Project
              <div className='w-3 h-3 bg-zinc-900 rounded-full'></div>
            </button>
            
            <button className='flex uppercase gap-5 items-center px-8 py-4 bg-transparent border-2 border-zinc-600 text-white rounded-full text-lg font-semibold hover:border-[#cdea68] hover:text-[#cdea68] transition-colors'>
              View Portfolio
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage