import React from 'react'
import { motion } from "motion/react";

function Marquee() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full h-[50vh] py-10 rounded-tl-4xl rounded-tr-4xl bg-[#004d43]'>
            <div className='text border-t-2 border-b-2 border-zinc-500 flex item-center justify-center gap-5 overflow-hidden whitespace-nowrap'>
                <motion.h1 initial = {{x:"0"}} animate = {{x: "-100%"}}transition = {{ease: "linear", repeat: Infinity, duration: 10}}className='text-[12vw] pt-9 mb-[3vw] leading-none tracking-tighter font-bold'>WE ARE OCHI.</motion.h1>
                <motion.h1 initial = {{x:"0"}} animate = {{x: "-100%"}}transition = {{ease: "linear", repeat: Infinity, duration: 10}}className='text-[12vw] pt-9 mb-[3vw] leading-none tracking-tighter font-bold'>WE ARE OCHI.</motion.h1>
                <motion.h1 initial = {{x:"0"}} animate = {{x: "-100%"}}transition = {{ease: "linear", repeat: Infinity, duration: 10}}className='text-[12vw] pt-9 mb-[3vw] leading-none tracking-tighter font-bold'>WE ARE OCHI.</motion.h1>
            </div>
        </div>
    )
}

export default Marquee;