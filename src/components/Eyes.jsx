import React, { useEffect, useRef, useState } from 'react'

function Eyes() {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Get the center of the screen (where eyes are positioned)
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate the distance and angle from center to mouse
            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            // Maximum distance the pupil can move (constrained within iris)
            const maxDistance = 30; // Adjust this value to control pupil movement range
            
            // Normalize the movement and apply constraint
            const constrainedDistance = Math.min(distance * 0.1, maxDistance);
            const angle = Math.atan2(deltaY, deltaX);
            
            const pupilX = Math.cos(angle) * constrainedDistance;
            const pupilY = Math.sin(angle) * constrainedDistance;
            
            setEyePosition({ x: pupilX, y: pupilY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        
        // Cleanup event listener
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.8" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full'>
                        <div 
                         style={{
                                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                                }}
                        className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center'>
                            <div 
                                className='w-8 h-8 bg-zinc-100 rounded-full transition-transform duration-100 ease-out'
                                style={{
                                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full'>
                        <div 
                         style={{
                                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                                }}
                        className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center'>
                            <div 
                                className='w-8 h-8 bg-zinc-100 rounded-full transition-transform duration-100 ease-out'
                                style={{
                                    transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes;