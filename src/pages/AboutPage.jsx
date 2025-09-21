import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "motion/react"

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      {/* Hero Section */}
      <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textStructure mt-52 px-20'>
          {["About", "LakshyaIO"].map((item, index) => {
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
                        <span className='text-2xl font-bold text-zinc-900'>LI</span>
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
          <p className='font-light text-md tracking-tight leading-none'>Full Stack Developer & UI/UX Designer</p>
          <p className='font-light text-md tracking-tight leading-none'>Building digital experiences that matter</p>
          <div className="start flex gap-5 items-center justify-between px-3 py-1 border-zinc-200">
            <div className='font-light border-1 rounded-full px-5 py-2 uppercase text-md'>Get In Touch</div>
            <span className='w-10 h-10 flex items-center justify-center border-1 rounded-full'>→</span>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full py-20 px-20 bg-[#cdea68] text-black rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter'>
          I'm Lakshya, a passionate developer who crafts digital experiences that blend functionality with beautiful design.
        </h1>
        
        <div className='w-full border-t-2 mt-20 border-zinc-700 pt-10'>
          <div className='grid grid-cols-3 gap-10'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>My Journey</h3>
              <p className='text-lg tracking-tight leading-relaxed'>
                Started coding at 16, fell in love with creating things that people use. 
                From building my first website to developing complex applications, 
                every project teaches me something new
              </p>
            </div>
            
            <div>
              <h3 className='text-2xl font-bold mb-4'>What I Do</h3>
              <ul className='text-lg space-y-2'>
                <li>• FulL Stack Develot</li>
                <li>• UI/UX Design</li>
                <li>• Mobile App Devement</li>
                <li>• System Architecture</li>
              </ul>
            </div>
            
            <div>
              <h3 className='text-2xl font-bold mb-4'>Technologies</h3>
              <div className='flex flex-wrap gap-3'>
                {["React", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker", "AWS"].map((tech, index) => (
                  <span key={index} className='px-3 py-1 bg-zinc-900 text-white rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Coding Journey Timeline */}
      <EducationJourney />

      {/* Skills & Experience Section */}
      <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20 px-20 bg-zinc-900'>
        <div className='border-b-[1px] border-zinc-700 pb-20'>
          <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
            Skills & Experience
          </h1>
        </div>
        
        <div className='mt-20 grid grid-cols-2 gap-20'>
          <div>
            <h2 className='text-3xl font-bold mb-10'>Experience</h2>
            <div className='space-y-8'>
              <div className='border-l-2 border-[#cdea68] pl-6'>
                <h3 className='text-xl font-semibold text-[#cdea68]'>Senior Developer</h3>
                <p className='text-zinc-400'>TechCorp • 2023 - Present</p>
                <p className='mt-2 text-zinc-300'>Leading development of scalable web applications serving 100k+ users.</p>
              </div>
              
              <div className='border-l-2 border-[#cdea68] pl-6'>
                <h3 className='text-xl font-semibold text-[#cdea68]'>Full Stack Developer</h3>
                <p className='text-zinc-400'>StartupXYZ • 2021 - 2023</p>
                <p className='mt-2 text-zinc-300'>Built complete web solutions from concept to deployment.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className='text-3xl font-bold mb-10'>Education</h2>
            <div className='space-y-8'>
              <div className='border-l-2 border-[#cdea68] pl-6'>
                <h3 className='text-xl font-semibold text-[#cdea68]'>Computer Science</h3>
                <p className='text-zinc-400'>University Name • 2019 - 2023</p>
                <p className='mt-2 text-zinc-300'>Specialized in Software Engineering and AI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Section */}
      <div data-scroll data-scroll-section data-scroll-speed=".05" className='w-full py-20 px-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='flex gap-20'>
          <div className='w-1/2'>
            <h1 className='text-[5vw] uppercase font-semibold tracking-tighter leading-none mb-10'>
              Beyond Code
            </h1>
            <div className='text-xl space-y-6'>
              <p>When I'm not coding, you'll find me exploring new technologies, reading about design trends, or working on personal projects that challenge my skills.</p>
              <p>I believe in continuous learning and staying curious about everything - from the latest JavaScript frameworks to the psychology of user experience.</p>
            </div>
            
            <div className='mt-10'>
              <button className='flex uppercase gap-5 items-center px-8 py-4 bg-[#cdea68] text-black rounded-full text-lg font-semibold hover:bg-white transition-colors'>
                Download Resume
                <div className='w-3 h-3 bg-zinc-900 rounded-full'></div>
              </button>
            </div>
          </div>
          
          <div className='w-1/2 h-[60vh] rounded-xl overflow-hidden'>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face"
              className='w-full h-full object-cover' 
              alt="Lakshya"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Education Journey Timeline Component using your provided code
const EducationJourney = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <section
      ref={ref}
      className="mx-auto flex h-[350vh] w-full flex-col items-center overflow-hidden bg-zinc-900 px-4 text-white"
    >
      <div className="mt-42 relative flex w-fit flex-col items-center justify-center gap-5 text-center">
        <h1 className="font-['Neue_Montreal'] relative z-10 text-7xl font-medium tracking-[-0.08em] lg:text-9xl">
          My Educational <br /> & Coding <br />
          Journey
        </h1>
        <p className="font-['Neue_Montreal'] relative z-10 max-w-2xl text-xl font-medium text-zinc-400">
          Scroll down to see my journey from Class 10th to becoming a developer
        </p>

        <LinePath
          className="absolute -right-[40%] top-0 z-0"
          scrollYProgress={scrollYProgress}
        />
      </div>

      <div className="rounded-4xl font-['Neue_Montreal'] w-full translate-y-[200vh] bg-[#cdea68] pb-10 text-black">
        <h1 className="mt-10 text-center text-[15.5vw] font-bold leading-[0.9] tracking-tighter lg:text-[16.6vw]">
          LakshyaIO
        </h1>
        <div className="mt-80 flex w-full flex-col items-start gap-5 px-4 font-medium lg:mt-0 lg:flex-row lg:justify-between">
          <div className="flex w-full items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            <p className="w-fit text-sm">
              Class 10th <br />
              2018 - 92%
            </p>
            <p className="w-fit text-right text-sm lg:text-left">
              Secondary Education <br /> 
              First Computer Exposure
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            <p className="w-fit text-sm">
              Class 12th <br />
              2020 - 89% PCM
            </p>
            <p className="w-fit text-right text-sm lg:text-left">
              Higher Secondary <br />
              Science Stream
            </p>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-start gap-5 px-4 font-medium lg:flex-row lg:justify-between">
          <div className="flex w-full items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            <p className="w-fit text-sm">
              Graduation <br />
              2021-2024 CSE
            </p>
            <p className="w-fit text-right text-sm lg:text-left">
              Computer Science <br />
              Engineering
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-between gap-12 uppercase lg:w-fit lg:justify-center">
            <p className="w-fit text-sm">
              Coding Journey <br />
              2022 - Present
            </p>
            <p className="w-fit text-right text-sm lg:text-left">
              Full Stack <br />
              Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LinePath = ({
  className,
  scrollYProgress,
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <svg
      width="1278"
      height="2319"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#cdea68"
        strokeWidth="20"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
        }}
      />
    </svg>
  );
};

export default AboutPage