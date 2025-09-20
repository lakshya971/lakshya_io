import { easeInOut, motion } from 'motion/react';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Landing() {
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textStructure mt-52 px-20'>
                {["we Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div key={index} className="masker">
                            <div className='w-fit flex items-center'>
                                {index === 1 && (
                                    <motion.div 
                                    initial={{width: 0}} 
                                    animate={{width: "8vw"}} 
                                    transition={{ease: easeInOut, duration: 1}} 
                                    className='mr-[0.8vw] w-[8vw] h-[5.7vw] relative top-[1.8vw] rounded-md bg-green-500'>
                                        <img className='h-full rounded-md' src="https://cdn.pixabay.com/photo/2019/07/30/18/26/surface-4373559_1280.jpg" alt="" />
                                    </motion.div>
                                )}
                                <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[6vw] tracking-tighter leading-[.78] font-bold'>{item}</h1>
                            </div>
                        </div>

                    );
                })}

            </div>
            <div className='border-t-[1px] border-zinc-500 mt-22 flex justify-between px-5 py-3 items-center'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='font-light text-md tracking-tight leading-none'>{item}</p>
                ))}
                <div className="start flex gap-5 items-center justify-between px-3 py-1 border-zinc-200">
                    <div className='font-light border-1 rounded-full px-5 py-2 uppercase text-md'>Start the project</div>
                    <span className='w-10 h-10 flex items-center justify-center border-1 rounded-full rotate-45'><FaArrowUp /></span>
                </div>
            </div>
        </div>
    );
}

export default Landing;