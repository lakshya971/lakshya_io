import React, { useState } from 'react'
import { motion, useAnimation } from "motion/react"

const ProjectsPage = () => {
  const [cards] = useState([useAnimation(), useAnimation(), useAnimation(), useAnimation()]);

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      description: "A complete e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      year: "2024",
      status: "Live"
    },
    {
      title: "Task Management App",
      category: "Mobile App",
      tech: ["React Native", "Firebase", "Redux"],
      description: "Cross-platform mobile app for team collaboration with real-time updates and offline synchronization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      year: "2024",
      status: "Live"
    },
    {
      title: "AI Content Generator",
      category: "AI/ML",
      tech: ["Python", "OpenAI", "FastAPI", "React"],
      description: "AI-powered content generation tool that helps marketers create engaging copy and social media posts.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      year: "2023",
      status: "Live"
    },
    {
      title: "Portfolio Website",
      category: "Frontend",
      tech: ["React", "Framer Motion", "Tailwind"],
      description: "A modern, responsive portfolio website with smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      year: "2023",
      status: "Live"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      {/* Hero Section */}
      <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textStructure mt-52 px-20'>
          {["My", "Projects"].map((item, index) => {
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
                        <span className='text-2xl font-bold text-zinc-900'>💻</span>
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
          <p className='font-light text-md tracking-tight leading-none'>Building digital solutions that make a difference</p>
          <p className='font-light text-md tracking-tight leading-none'>From concept to deployment</p>
          <div className="start flex gap-5 items-center justify-between px-3 py-1 border-zinc-200">
            <div className='font-light border-1 rounded-full px-5 py-2 uppercase text-md'>View Work</div>
            <span className='w-10 h-10 flex items-center justify-center border-1 rounded-full'>🚀</span>
          </div>
        </div>
      </div>

      {/* Projects Overview */}
      <div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full py-20 px-20 bg-[#cdea68] text-black rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter mb-10'>
          Crafting Digital Experiences
        </h1>
        <p className='text-xl tracking-tight leading-relaxed max-w-4xl'>
          Each project represents a unique challenge and learning opportunity. 
          From full-stack web applications to mobile apps and AI integrations, 
          I focus on creating solutions that are both functional and delightful to use.
        </p>

        <div className='grid grid-cols-4 gap-8 mt-16'>
          <div className='text-center'>
            <h3 className='text-3xl font-bold'>15+</h3>
            <p className='text-lg'>Projects Completed</p>
          </div>
          <div className='text-center'>
            <h3 className='text-3xl font-bold'>8+</h3>
            <p className='text-lg'>Technologies Mastered</p>
          </div>
          <div className='text-center'>
            <h3 className='text-3xl font-bold'>100%</h3>
            <p className='text-lg'>Client Satisfaction</p>
          </div>
          <div className='text-center'>
            <h3 className='text-3xl font-bold'>24/7</h3>
            <p className='text-lg'>Support & Maintenance</p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-20 bg-zinc-900">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
          <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
            Featured Work
          </h1>
        </div>
        <div className="px-20">
          <div className="cards w-full grid grid-cols-2 gap-10 mt-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                onHoverStart={() => handleHover(index)}
                onHoverEnd={() => handleHoverEnd(index)}
                className="cardcontainer w-full relative h-[70vh] rounded-xl overflow-hidden"
              >
                <h1 className="absolute flex overflow-hidden text-[#cdea68] z-[9] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none text-5xl tracking-tight font-bold">
                  {project.title.split(" ")[0].toUpperCase().split("").map((item, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ y: "100%" }}
                      animate={cards[index]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: letterIndex * 0.01,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                
                <div className="card w-full h-full relative group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                  />
                  
                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#cdea68] text-black rounded-full text-sm font-semibold">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                          {project.status}
                        </span>
                        <span className="text-zinc-300 text-sm">{project.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-zinc-800 text-white rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="px-4 py-2 bg-[#cdea68] text-black rounded-full text-sm font-semibold hover:bg-white transition-colors">
                          View Live
                        </button>
                        <button className="px-4 py-2 border border-zinc-600 rounded-full text-sm hover:bg-zinc-800 transition-colors">
                          View Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div data-scroll data-scroll-section data-scroll-speed=".05" className='w-full py-20 px-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='mb-16'>
          <h1 className='text-[5vw] uppercase font-semibold tracking-tighter leading-none mb-10'>
            Tech Stack
          </h1>
          <p className='text-xl leading-relaxed max-w-3xl'>
            I work with modern technologies to build scalable, performant applications. 
            Here are the tools and frameworks I use to bring ideas to life.
          </p>
        </div>
        
        <div className='grid grid-cols-4 gap-8'>
          {[
            { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
            { category: "Backend", techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
            { category: "Mobile", techs: ["React Native", "Flutter", "iOS", "Android"] },
            { category: "DevOps", techs: ["Docker", "AWS", "GitHub Actions", "Vercel"] }
          ].map((stack, index) => (
            <div key={index} className='p-6 bg-zinc-800 rounded-xl'>
              <h3 className='text-2xl font-bold mb-4 text-[#cdea68]'>{stack.category}</h3>
              <div className='space-y-2'>
                {stack.techs.map((tech, techIndex) => (
                  <div key={techIndex} className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-[#cdea68] rounded-full'></div>
                    <span className='text-zinc-300'>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div data-scroll data-scroll-section data-scroll-speed="-.05" className='w-full py-20 px-20 bg-zinc-900'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-[4vw] uppercase font-semibold tracking-tighter leading-none mb-10'>
            Let's Build Something Amazing
          </h1>
          <p className='text-xl mb-12 leading-relaxed text-zinc-300'>
            Have a project in mind? Let's discuss how we can bring your vision to life 
            with cutting-edge technology and exceptional user experience.
          </p>
          
          <div className='flex gap-6 justify-center'>
            <button className='px-8 py-4 bg-[#cdea68] text-black rounded-full text-lg font-semibold hover:bg-white transition-colors'>
              Start a Project
            </button>
            <button className='px-8 py-4 border border-zinc-600 rounded-full text-lg hover:bg-zinc-800 transition-colors'>
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage