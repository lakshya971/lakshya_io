import React, { useState } from 'react'
import { motion, useAnimation } from "motion/react"
import ParallaxGallery from '../components/ParallaxGallery';

const Blogs = () => {
  const [cards] = useState([useAnimation(), useAnimation(), useAnimation()]);

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  const blogPosts = [
    {
      title: "Building Modern Web Applications",
      date: "March 15, 2024",
      excerpt: "Exploring the latest trends in web development and how to build scalable applications with React and Node.js.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      category: "Development",
      readTime: "5 min read"
    },
    {
      title: "UI/UX Design Principles",
      date: "March 10, 2024", 
      excerpt: "Understanding the core principles of user interface design and how to create intuitive user experiences.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      category: "Design",
      readTime: "7 min read"
    },
    {
      title: "The Future of AI in Development",
      date: "March 5, 2024",
      excerpt: "How artificial intelligence is transforming the way we write code and build applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "AI/ML",
      readTime: "8 min read"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      {/* Hero Section */}
      <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textStructure mt-52 px-20'>
          {["My", "Blog"].map((item, index) => {
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
                        <span className='text-2xl font-bold text-zinc-900'>✍️</span>
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
          <p className='font-light text-md tracking-tight leading-none'>Thoughts on development, design & technology</p>
          <p className='font-light text-md tracking-tight leading-none'>Sharing knowledge and experiences</p>
          <div className="start flex gap-5 items-center justify-between px-3 py-1 border-zinc-200">
            <div className='font-light border-1 rounded-full px-5 py-2 uppercase text-md'>Subscribe</div>
            <span className='w-10 h-10 flex items-center justify-center border-1 rounded-full'>📧</span>
          </div>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full py-20 px-20 bg-[#cdea68] text-black rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter mb-10'>
          Latest Articles & Insights
        </h1>
        <p className='text-xl tracking-tight leading-relaxed max-w-3xl'>
          I write about web development, design trends, and the ever-evolving tech landscape. 
          Each post is crafted to share practical insights and lessons learned from real-world projects.
        </p>
      </div>

      {/* Featured Blog Posts with Parallax */}
      <ParallaxGallery images={[
        ...blogPosts.map(post => post.image),
        // Add more images to fill the 12 slots needed for the parallax effect
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551033406-611cf9a28f75?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop"
      ]} />

      {/* Newsletter Section */}
      <div data-scroll data-scroll-section data-scroll-speed=".05" className='w-full py-20 px-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-[5vw] uppercase font-semibold tracking-tighter leading-none mb-10'>
            Stay Updated
          </h1>
          <p className='text-xl mb-12 leading-relaxed'>
            Get notified when I publish new articles. No spam, just quality content 
            about development, design, and technology trends.
          </p>
          
          <div className='flex gap-4 max-w-md mx-auto'>
            <input 
              type="email" 
              placeholder="Enter your email"
              className='flex-1 px-6 py-4 rounded-full bg-zinc-800 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:border-[#cdea68]'
            />
            <button className='px-8 py-4 bg-[#cdea68] text-black rounded-full font-semibold hover:bg-white transition-colors'>
              Subscribe
            </button>
          </div>
          
          <p className='text-zinc-400 text-sm mt-6'>
            Join 500+ developers who read my weekly insights
          </p>
        </div>
      </div>

      {/* Blog Categories */}
      <div data-scroll data-scroll-section data-scroll-speed="-.05" className='w-full py-20 px-20 bg-zinc-900'>
        <div className='border-b-[1px] border-zinc-700 pb-10 mb-10'>
          <h2 className='text-4xl font-["Neue_Montreal"] tracking-tight'>
            Browse by Category
          </h2>
        </div>
        
        <div className='grid grid-cols-4 gap-8'>
          {["Development", "Design", "AI/ML", "Career"].map((category, index) => (
            <div key={index} className='p-8 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors cursor-pointer group'>
              <h3 className='text-xl font-semibold mb-3 group-hover:text-[#cdea68] transition-colors'>
                {category}
              </h3>
              <p className='text-zinc-400 text-sm'>
                {index === 0 && "Web development tutorials and best practices"}
                {index === 1 && "UI/UX design principles and trends"}
                {index === 2 && "Machine learning and AI insights"}
                {index === 3 && "Career advice and industry insights"}
              </p>
              <div className='mt-4 text-[#cdea68] group-hover:translate-x-2 transition-transform'>
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs